/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable no-multi-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-template */
/* eslint-disable radix */

// grammars visitors
const AmsmathVisitor = require('grammars/static/AmsmathGrammar/GrammarVisitor').GrammarVisitor;
const AmsmathParser = require('grammars/static/AmsmathGrammar/GrammarParser').GrammarParser;
// symbols
const Symbol = require('structures/symbols/Symbol').Symbol;
const SummationSymbol = require('structures/symbols/SummationSymbol').SummationSymbol;
// name templates
const FACTORIAL_METHOD_TEMPLATE = 'factorial_MX2J';
const summationMethodTemplate = 'summation_MX2J_';
// exceptions (errors)
const CustomError = require('errors/CustomError').CustomError;
const ArrayDimensionsError = require('errors/ArrayDimensionsError').ArrayDimensionsError;
const ArrayIndexOutOfBoundsError = require('errors/ArrayIndexOutOfBoundsError').ArrayIndexOutOfBoundsError;

/**
 * Constants to access child nodes.
 * Represents the indexs of the child nodes.
 */
const FIRST_CHILD   = 0;
const SECOND_CHILD  = 1;
const THIRD_CHILD   = 2;
const FOURTH_CHILD  = 3;
const FIFTH_CHILD   = 4;
const SIXTH_CHILD   = 5;
const SEVENTH_CHILD = 6;

/**
 * Constants to represent which buffer to write.
 * Equation : writes to the equation method
 * Actual_summation : writes to the summation that is being processed
 * Parent_summation : writes to the parent summation (needed for the handling the arguments)
 */
const EQUATION_BUFFER = 0;
const ACTUAL_SUMMATION_BUFFER = 1;
const PARENT_SUMMATION_BUFER = 2;

/**
 * This class is the 'equation' latex environment code visitor for MaTheX2Java.
 */
class EquationCodeGenerator extends AmsmathVisitor {
  constructor(equationCtx, equationName, javaGenerator) {
    super();
    // -- Equation Trackers --
    this.equationCtx = equationCtx;
    this.equationName = equationName;
    this.equationBodyBuffer = '';

    // -- Factorial Tracker
    this.factorialInvocation = false;

    // -- Summation Trackers --
    this.summationBodyBuffer = '';
    // keeps track of the summation that is being analyzed at some point
    this.actualSummationName = '';
    this.childSummationName = '';
    this.parentSummationName = '';

    // keeps track of the buffer to write
    this.activeBuffer = EQUATION_BUFFER;

    this.javaGenerator = javaGenerator;
    this.symbolTable = this.javaGenerator.getSymbolTable();

    this.startGeneration(this.equationCtx);
  }

  /**
   * Starts to visit the child nodes of the equation
   * node. The left side of the equation is the local variable
   * of the future method, being this varible type the one that
   * is being returned.
   */
  startGeneration() {
    const leftSideElement = this.equationCtx.getChild(FIRST_CHILD);

    if (!this.isLeftSideValid(leftSideElement)) {
      throw Error('Left side of equation is not a variable.');
    }

    this.setLocalResultVariable(this.visitTerminal(this.equationCtx.VARNAME(0)));
    this.setAnnotationsArguments();

    this.visitChildren(this.equationCtx);

    this.javaGenerator.writeEquationMethod(this.equationName, this.equationBodyBuffer);
    this.writeSummationsMethods();

    if (this.factorialInvocation) {
      this.writeFactorialMethod();
    }
  }

  /**
   * Checks if the left side element of the equation is valid.
   * It is valid if it is a variable.
   * Otherwise, it is not valid.
   * @param {Antlr4Node} leftSideElement left side element of the equation
   */
  isLeftSideValid(leftSideElement) {
    return leftSideElement.symbol.type === AmsmathParser.VARNAME;
  }

  /**
   * Sets the local result variable that will be returned upon the method's operations.
   *
   * **Note**: the local result variable of the equation is always the unique local variable,
   * all the other variables are arguments to the method, thus one can check if a variable
   * of the right side of the equation is not the left-side variable by checking if a variable
   * is a local variable (the left-side variable).
   * @param {string} resultVariable name of the local result variable
   */
  setLocalResultVariable(resultVariable) {
    const returnType = this.symbolTable.lookupMethod(this.equationName).getReturnType();
    this.addVariableToSymbolTable(resultVariable, returnType, false);
  }

  /**
   * Sets the variables that were defined/specified in the annotations.
   *
   * **Note:** all annotations variables that were defined are arguments to the method
   * for every other variable in the program (that is not on the left side of the equation,
   * it is an argument of the equation).
   */
  setAnnotationsArguments() {
    const annotationArgs = this.symbolTable.lookupMethod(this.equationName).getNonDefinedVariables();

    for (let i = 0; i < annotationArgs.length; i++) {
      annotationArgs[i].setArgumentFlag(true);
    }
  }

  /**
   * Writes in the java file the summation methods that were invoked in the equation method.
   */
  writeSummationsMethods() {
    const summationsSymbolTables = this.symbolTable.getSummationsMethods();

    for (let i = 0; i < summationsSymbolTables.length; i++) {
      const summationSymbolTable = summationsSymbolTables[i];
      this.javaGenerator.writeSummationMethod(summationSymbolTable.getName(), summationSymbolTable.getBuffer());
    }
  }

  /**
   * Writes in the java file the factorial method which was invoked in at least one of the
   * equation methods.
   */
  writeFactorialMethod() {
    this.javaGenerator.writeFactorialMethod(FACTORIAL_METHOD_TEMPLATE);
  }

  /* ----------------------------------------------------
    *                      VISITOR
    * ---------------------------------------------------- */

  /**
   * Node which represents the composition
   * of operations.
   * @param {*} ctx composed_operations node
   */
  visitComposed_operations(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the element of an operation.
   * If one of the element's child node is a power member then it
   * "invokes" the Math.pow function from the standard Java Math library.
   * @param {*} ctx operation_element node
   */
  visitOperation_element(ctx) {
    if (ctx.power_member() != null) {
      this.addElementToBuffer('Math.pow(');
      this.visitChildren(ctx);
      this.addElementToBuffer(')');
    } else {
      this.visitChildren(ctx);
    }
  }

  /* --- Operations elements --- */

  /**
   * Node which represents the base member of an operation.
   * @param {*} ctx base_member node
   */
  visitBase_member(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the power member of an operation.
   * @param {*} ctx power_member node
   */
  visitPower_member(ctx) {
    this.addElementToBuffer(', '); // second argument of Math.pow(__ , __)
    this.visitChildren(ctx);
  }

  /**
   * Node which represents a member of an operation.
   * If its child node is a terminal node then it "gets" its name / value,
   * otherwise with visits its own children.
   * @param {*} ctx member node
   */
  visitMember(ctx) {
    if (ctx.variable() != null || ctx.fraction() != null || ctx.exponential() != null
        || ctx.sqrt() != null || ctx.math_function_def() != null
        || ctx.trigonometry() != null || ctx.logarithm() != null
        || ctx.summation() != null || ctx.factorial() != null
        || ctx.integer() != null || ctx.double_type()) {
      this.visitChildren(ctx);
    } else {
      this.addElementToBuffer(this.visitTerminal(ctx.getChild(FIRST_CHILD)));
    }
  }

  // INTEGER

  visitInteger(ctx) {
    this.visitChildren(ctx);
  }

  visitInteger_negative(ctx) {
    const numberOfChilds =  ctx.getChildCount();

    for (let i = 0; i < numberOfChilds; i++) {
      this.addElementToBuffer(this.visitTerminal(ctx.getChild(i)));
    }
  }

  visitInteger_positive_zero(ctx) {
    this.addElementToBuffer(this.visitTerminal(ctx.getChild(FIRST_CHILD)));
  }

  // DOUBLE

  visitDouble_type(ctx) {
    this.visitChildren(ctx);
  }

  visitDouble_negative(ctx) {
    const numberOfChilds =  ctx.getChildCount();

    for (let i = 0; i < numberOfChilds; i++) {
      this.addElementToBuffer(this.visitTerminal(ctx.getChild(i)));
    }
  }

  visitDouble_positive_zero(ctx) {
    this.addElementToBuffer(this.visitTerminal(ctx.DOUBLE(FIRST_CHILD)));
  }


  visitVariable(ctx) {
    const variableName = this.visitTerminal(ctx.VARNAME(FIRST_CHILD));
    // checks if variable has or not a valid name
    if (!this.validVariableName(variableName.toString())) {
      throw Error('Invalid variable name');
    }
    this.addVariableToBuffer(variableName, 'REAL', true);

    if (ctx.variable_lower_index() != null) {
      this.visitChildren(ctx);
    }
  }

  visitVariable_lower_index(ctx) {
    this.visitChildren(ctx);
  }

  visitIndex_elements(ctx) {
    const arrayVariableName = this.visitTerminal(ctx.parentCtx.parentCtx.VARNAME(FIRST_CHILD));
    const childCount = ctx.getChildCount();
    const indexesCount = Math.ceil(childCount / 2);

    if (!this.isArrayDimensionCorrect(arrayVariableName, indexesCount)) {
      throw new ArrayDimensionsError(this.equationName, arrayVariableName);
    }

    for (let i = 0, elem = 0, dimensionCounter = 0; i < indexesCount; i++, dimensionCounter++, elem += 2) {
      this.visitIndex_element(ctx.getChild(elem), dimensionCounter);
    }
  }

  visitIndex_element(ctx, dimension) {
    // Gets the variable name to check the index of the desired element is within the reserved space
    const arrayVariableName = this.visitTerminal(ctx.parentCtx.parentCtx.parentCtx.VARNAME(FIRST_CHILD));
    const index = ctx.getChild(FIRST_CHILD);

    // if the index is a variable (index variable) then it does not verifies if it goes out of bounds
    if (index.symbol.type !== AmsmathParser.VARNAME) {
      if (!this.isArrayIndexInReservedSpace(arrayVariableName, dimension, index)) {
        throw new ArrayIndexOutOfBoundsError(this.equationName, arrayVariableName);
      }
    }
    this.addElementToBuffer('[');
    this.addElementToBuffer(index);
    this.addElementToBuffer(']');
  }

  /* ------------------------------------------
   *                FACTORIAL
   * ------------------------------------------ */

  /**
   * Visit the factorial node.
   *
   * It checks if the variable factorialInvocation, which is responsible for "remembering" if the
   * factorial method was already checked to write, is set to true (meaning that the factorial
   * method was already invoked).
   *
   * If it was then there is no need to re-insert the factorial symbol table in the
   * global symbol table.
   *
   * Otherwise, it inserts the symbol table of the common factorial method and updates
   * the variable state to true.
   *
   * @param {*} ctx ANTLR4 context node
   */
  visitFactorial(ctx) {
    if (!this.factorialInvocation) {
      this.addFactorialMethodToSymbolTable();
      // sets the this variable to true for it to the factorial function be written in the Java code
      this.factorialInvocation = true;
    }

    // add method name to buffer -> dynamic way : gets it from the symbol table
    const factorialMethodName = this.symbolTable.lookupMethod(FACTORIAL_METHOD_TEMPLATE).getName();
    this.addElementToBuffer(factorialMethodName);

    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /**
   * First, checks if the argument its grand-child (INTEGER / VARNAME) is
   * or not a valid argument - if it is or not an integer.
   * If not, then it adds a cast to the buffer, in order to not generate
   * compiling errors in the resulting java code.
   *
   * @param {*} ctx single_argument_factorial node
   */
  visitSingle_argument_factorial(ctx) {
    const factorialElementCtx = ctx.getChild(FIRST_CHILD);
    const elementCtx = factorialElementCtx.getChild(FIRST_CHILD);

    if (!this.validateFactorialArgInteger(elementCtx)) {
      this.addFactorialArgIntegerCast();
    }

    this.visitChildren(ctx);
  }

  /**
   * First, checks if the any of its arguments (its grand-children (INTEGER / VARNAME))
   * are or not valid arguments - if they are or not integers.
   *
   * If not, then it adds a cast to the buffer, in order to not generate compiling
   * errors in the resulting java code.
   *
   * @param {*} ctx complex_argument_factorial node
   */
  visitComplex_argument_factorial(ctx) {
    const numChildren = ctx.getChildCount();
    let castNeeded = false;

    for (let i = 0; i < numChildren; i++) {
      const childCtx = ctx.getChild(i);
      if (childCtx.ruleIndex === AmsmathParser.RULE_factorial_element) {
        const elementCtx = childCtx.getChild(FIRST_CHILD);
        // if the factorial argument is not an integer then it is casted
        if (!this.validateFactorialArgInteger(elementCtx)) {
          this.addFactorialArgIntegerCast();
          castNeeded = true;
          break;
        }
      }
    }
    if (castNeeded) {
      this.addElementToBuffer('(');
      this.visitChildren(ctx);
      this.addElementToBuffer(')');
    } else {
      this.visitChildren(ctx);
    }
  }

  /**
   * This function validates the input of the factorial method (its argument).
   * If the argument is an integer then it returns true.
   * Otherwise, it returns false, indicating that the argument received is not
   * an integer.
   *
   * @param {*} elementCtx the element to check if it is or not an integer
   */
  validateFactorialArgInteger(elementCtx) {
    const elementID = this.visitTerminal(elementCtx);
    const elementSymbol = this.symbolTableLookupVariable(this.equationName, elementID);

    if (elementSymbol == null) {
      if (elementCtx.symbol.type === AmsmathParser.INTEGER) {
        const inputNum = parseInt(elementID);
        return Number.isInteger(inputNum);
      }
      return false;
    }
    return elementSymbol.getType() === 'INT';
  }

  visitFactorial_element(ctx) {
    const element = ctx.getChild(FIRST_CHILD);

    if (element.symbol.type === AmsmathParser.VARNAME) {
      // check for errors
      // throw
      this.addVariableToBuffer(this.visitTerminal(element), 'REAL', true);
    } else {
      // check for errors
      // throw
      this.addElementToBuffer(this.visitTerminal(element));
    }
  }

  addFactorialArgIntegerCast() {
    this.addElementToBuffer('(int)');
  }

  /* ------------------------------------------
   *                LOGARITHM
   * ------------------------------------------ */

  visitLogarithm(ctx) {
    this.visitChildren(ctx);
  }

  visitLog(ctx) {
    this.addElementToBuffer('Math.log10');
    this.visitChildren(ctx);
  }

  visitLn(ctx) {
    this.addElementToBuffer('Math.log');
    this.visitChildren(ctx);
  }

  visitLogarithm_lower_bound(ctx) {
    console.debug(ctx.toString());
    // ?
  }

  visitLogarithm_body(ctx) {
    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /* ------------------------------------------
     *               TRIGNOMETRY
     * ------------------------------------------ */

  /**
   * Trigonometry node. Contains all the correct declarations of the trigonometric functions.
   * @param {*} ctx
   */
  visitTrigonometry(ctx) {
    this.visitChildren(ctx);
  }

  /* ------------------------------------------
     *      NORMAL TRIGONOMETRIC FUNCTIONS
     * ------------------------------------------ */

  /**
   * Normal trigonometric functions.
   *
   * This node is the parent of the sin, cos and tan nodes.
   * @param {*} ctx normal function trigonometric context
   */
  visitNormal(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the sin function.
   * @param {*} ctx sin node
   */
  visitSin(ctx) {
    this.addElementToBuffer('Math.sin');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the cos function.
   * @param {*} ctx cos node
   */
  visitCos(ctx) {
    this.addElementToBuffer('Math.cos');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the tan function.
   * @param {*} ctx tan node
   */
  visitTan(ctx) {
    this.addElementToBuffer('Math.tan');
    this.visitChildren(ctx);
  }

  /* ------------------------------------------
     *      INVERSE TRIGONOMETRIC FUNCTIONS
     * ------------------------------------------ */

  /**
   * Inverse trigonometric functions.
   * This node is the parent of the arcsin, arccos and arctan nodes.
   * @param {*} ctx inverse function trigonometric context
   */
  visitInverse(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the arcsin function.
   * @param {*} ctx arcsin node
   */
  visitArcsin(ctx) {
    this.addElementToBuffer('Math.asin');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the arccos function.
   * @param {*} ctx arccos node
   */
  visitArccos(ctx) {
    this.addElementToBuffer('Math.acos');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the tan function.
   * @param {*} ctx arctan node
   */
  visitArctan(ctx) {
    this.addElementToBuffer('Math.atan');
    this.visitChildren(ctx);
  }

  /* ------------------------------------------
     *     HYPERBOLIC TRIGONOMETRIC FUNCTIONS
     * ------------------------------------------ */

  /**
   * Hyperbolic trigonometric functions.
   * This node is the parent of the sinh, cosh and tanh nodes.
   * @param {*} ctx hyperbolic function trigonometric context
   */
  visitHyperbolic(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the hyperbolic sin function.
   * @param {*} ctx sinh node
   */
  visitSinh(ctx) {
    this.addElementToBuffer('Math.sinh');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the hyperbolic tan function.
   * @param {*} ctx cosh node
   */
  visitCosh(ctx) {
    this.addElementToBuffer('Math.cosh');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the hyperbolic tan function.
   * @param {*} ctx tanh node
   */
  visitTanh(ctx) {
    this.addElementToBuffer('Math.tanh');
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the arguments of a trigonometric function.
   * @param {*} ctx trigonometric_function_args node
   */
  visitTrigonometric_function_args(ctx) {
    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /**
   * Node which represents a priority element and its operations within - a priority
   * element is an element surrounded by parenthesis.
   * @param {*} ctx priority_element node
   */
  visitPriority_element(ctx) {
    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /* --------------------------------
   *             OPERATOR
   * -------------------------------- */

  visitOperator(ctx) {
    const operator = ctx.getChild(FIRST_CHILD);
    this.addElementToBuffer(' ');

    if (operator.symbol.type === AmsmathParser.MULTIPLICATION) {
      this.addElementToBuffer('*');
    } else {
      this.addElementToBuffer(this.visitTerminal(operator));
    }
    this.addElementToBuffer(' ');
  }

  /* --------------------------------
    *              SQRT
    * -------------------------------- */

  visitSqrt(ctx) {
    if (ctx.sqrt_root() != null) {
      this.addElementToBuffer('Math.pow(');
      this.visitSqrt_body(ctx.getChild(FOURTH_CHILD));  // corresponds to sqrt_body node
      this.addElementToBuffer(', ');
      this.visitSqrt_root(ctx.getChild(SECOND_CHILD));  // corresponds to sqrt_root node
    } else {
      this.addElementToBuffer('Math.sqrt(');
      this.visitChildren(ctx);
    }
    this.addElementToBuffer(')');
  }

  /**
   * Adds the root element to the java code buffer.
   *
   * If the root is a variable and already exists in the symbol table, it will check if
   * its type is an integer.
   *
   * If not, then an automatic cast to an *int* is added. Otherwise, it is not necessary.
   *
   * @param {*} ctx sqrt_root node
   */
  visitSqrt_root(ctx) {
    const root = ctx.getChild(SECOND_CHILD);
    const rootValue = this.visitTerminal(root);

    this.addElementToBuffer('1/');

    if (root.symbol.type === AmsmathParser.VARNAME) {
      const symbolTableVariable = this.symbolTableLookupVariable(this.equationName, rootValue);
      // checks if symbol already is defined in the symbol table
      if (symbolTableVariable != null) {
        if (symbolTableVariable.getType() !== 'INT') {
          this.addElementToBuffer('( (int)' + rootValue + ' ) '); // automatic cast to integer
        } else {
          this.addVariableToBuffer(rootValue, 'INT', true);
        }
      } else {
        this.addVariableToBuffer(rootValue, 'INT', true);
      }
    } else if (root.symbol.type === AmsmathParser.INTEGER) {
      this.addElementToBuffer(rootValue);
    } else {
      throw Error('Roots can only be of type Integer.');
    }
  }

  visitSqrt_body(ctx) {
    this.visitChildren(ctx);
  }

  /* --------------------------------
     *      MATH FUNCTION DEFINITION
     * -------------------------------- */

  /**
    * No recursive functions invocation is allowed.
    *
    * @param {*} ctx math_def node visitor
    */
  visitMath_function_def(ctx) {
    const invokedMethodName = this.visitTerminal(ctx.VARNAME(0));

    // checks for recursive functions
    if (invokedMethodName === this.equationName) {
      throw Error('No recursive functions are allowed.');
    }

    const invokedMethodSymbolTable = this.symbolTable.lookupMethod(invokedMethodName);

    // checks if the function exists
    if (invokedMethodSymbolTable == null) {
      throw Error('NonExtistingMethod() -> if the method was defined after this method declaration, then it needs to be moved before so that it can be correctly invoked');
    }

    this.addElementToBuffer(invokedMethodName);
    this.addElementToBuffer(this.visitTerminal(ctx.PARENTHESIS_LF(0)));

    const invokedMethodArgsBuffer = this.getMethodInvokedArgs(ctx.math_function_args(0), invokedMethodSymbolTable);

    if (invokedMethodArgsBuffer == null) {
      throw Error('Non matching arguments');
    }

    this.addElementToBuffer(invokedMethodArgsBuffer);
    this.addElementToBuffer(this.visitTerminal(ctx.PARENTHESIS_RT(0)));
  }

  getMethodInvokedArgs(mathFuncArgsCtx, invokedMethodSymbolTable) {
    // throw Error('Method invocation is a feature not yet supported.')

    const buffer = '';
    const numChild = mathFuncArgsCtx.getChildCount();
    const numArgsChildren = Math.ceil(numChild / 2);  // removes the commas
    const invokedMethodDefinedArgs = invokedMethodSymbolTable.getArguments();
    const invokedMethodArgsCount = invokedMethodDefinedArgs.length;

    if (!this.checkNumberOfInvokedMethodArgs(numArgsChildren, invokedMethodArgsCount)) {
      throw Error('In "' + this.equationName + '" the invocation of the equation method "' + invokedMethodSymbolTable.getName() + '" -> Non-matching arguments : expected ' + invokedMethodDefinedArgs.length + ', but received ' + numArgsChildren + '.');
    }

    for (let j = 0, i = 0; j < numArgsChildren; j++, i += 2) {
      const argTerminal = mathFuncArgsCtx.getChild(i);
      const invokedArgType = invokedMethodDefinedArgs[j].getType();
      switch (argTerminal.symbol.type) {
        // VARIABLE
        case AmsmathParser.VARNAME:
          let argName = this.visitTerminal(argTerminal);
          const variableSymbolTable = this.symbolTableLookupVariable(this.equationName, argName);

          // checks if the variable already exists in the current equation method symbol table
          if (variableSymbolTable != null) {    // if already exists then it checks if the type match
            const variableType = variableSymbolTable.getType();
            if (variableType !== invokedArgType) {
              throw Error('In "' + this.equationName + '" the invocation of the equation method "' + invokedMethodSymbolTable.getName() + '" the argument ' + i.toString() + ' does not match.\nExpected ' + invokedArgType + ' but received ' + variableType + '.');
            }
            this.addElementToBuffer(this.visitTerminal(argTerminal));
          } else {                                                            // else add a new variable with the type of the invoked method current argument
            this.addVariableToBuffer(argName, invokedArgType, true);
          }
          break;
          // INTEGER
        case AmsmathParser.INTEGER:
          if (invokedArgType !== 'SHORT' && invokedArgType !== 'INT' && invokedArgType !== 'LONG') {
            throw Error('In "' + this.equationName + '" the invocation of the equation method "' + invokedMethodSymbolTable.getName() + '" the argument ' + (j+1).toString() + ' does not match.');
          }
          this.addElementToBuffer(this.visitTerminal(argTerminal));
          break;
          // FLOAT
          /* case AmsmathParser.FLOAT:
                    if(invokedArgType != 'FLOAT'){
                        throw Error('In "' + this.equationName + '" the invocation of the equation method "' + invokedMethodSymbolTable.getName() + '" the argument ' + (j+1).toString() + ' does not match.')
                    }
                    this.addElementToBuffer(this.visitTerminal(argTerminal))
                    break */
          // DOUBLE
        case AmsmathParser.DOUBLE:
          if (invokedArgType !== 'DOUBLE') {
            throw Error('In "' + this.equationName + '" the invocation of the equation method "' + invokedMethodSymbolTable.getName() + '" the argument ' + (j+1).toString() + ' does not match.');
          }
          this.addElementToBuffer(this.visitTerminal(argTerminal));
          break;
        default:
          break;
      }

      if (j !== (invokedMethodArgsCount-1)) {
        this.addElementToBuffer(', ');
      }
    }

    return buffer;
  }

  /**
   * Checks if the number of arguments that are used in the invocation
   * is correct (is equal to the number of arguments of the invoked method).
   *
   * @param {integer} invokedArgsLength number of arguments used in the invocation
   * @param {integer} methodArgsLength number of arguments of the invoked method
   */
  checkNumberOfInvokedMethodArgs(invokedArgsLength, methodArgsLength) {
    return invokedArgsLength === methodArgsLength;
  }

  /* --------------------------------
   *        MATH FUNCTION ARGS
   * -------------------------------- */

  visitMath_function_args(ctx) {
    this.visitChildren(ctx);
  }

  /* --------------------------------
    *           EXPONENTIAL
    * -------------------------------- */

  /**
    * Node which represents an exponetial operation.
    * @param {*} ctx exponential node
    */
  visitExponential(ctx) {
    this.addElementToBuffer('Math.exp(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /* --------------------------------
   *            FRACTION
   * -------------------------------- */


  visitFraction(ctx) {
    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  visitNumerator(ctx) {
    this.visitChildren(ctx);
    this.addElementToBuffer('/');
  }

  visitDenominator(ctx) {
    this.visitChildren(ctx);
  }

  visitFraction_member(ctx) {
    this.addElementToBuffer('(');
    this.visitChildren(ctx);
    this.addElementToBuffer(')');
  }

  /* --------------------------------
     *            SUMMATION
     * -------------------------------- */

  /**
     * Node which represents a summation operation. It will visit every child of it.
     *
     * **Note:** A summation will invoke a method which contains the summation operation
     * within a loop (for).
     * This way, a new method must be inserted in the symbol table - the method of the summation.
     *
     * @param {*} ctx summation context
     */
  visitSummation(ctx) {
    // means that it is the first summation (not a child summation, therefore has a null parent summation)
    if (this.activeBuffer === EQUATION_BUFFER) {
      this.actualSummationName = this.symbolTable.insertSummationMethod(null);
    
      this.addElementToBuffer(this.actualSummationName);
      this.addElementToBuffer('(');
    
      // adds local variable "sum" to return the result of the summation --> check is it is already declared in annotation!!!
      this.checkSummationVariableInSymbolTable(this.actualSummationName, 'sum', 'REAL', false, false, false);
            
      this.visitChildren(ctx);

      // restores active buffer
      this.activeBuffer = EQUATION_BUFFER;
            
      this.addInvokingArgsToBuffer(this.actualSummationName);
      this.addElementToBuffer(')');
    
      this.addMethodReturnType(this.actualSummationName);
    } else {       
      // NEEDS A LOT OF CLEAN UP!!!
      this.childSummationName = this.symbolTable.insertSummationMethod(this.actualSummationName);
      const symbol = this.symbolTable.lookupMethod(this.childSummationName);
      symbol.addParent(this.actualSummationName);

      this.parentSummationName = this.actualSummationName;
            
      this.addElementToBuffer(this.childSummationName);
      this.addElementToBuffer('(');
      this.actualSummationName = this.childSummationName;

      const aux = this.actualSummationName;
    
      // adds local variable "sum" to return the result of the summation
      this.checkSummationVariableInSymbolTable(this.actualSummationName, 'sum', 'REAL', false, false, false);

      this.activeBuffer = PARENT_SUMMATION_BUFER;

      this.visitChildren(ctx);
            
      this.actualSummationName = symbol.getParentName();

      this.addInvokingArgsToBuffer(aux);

      this.addElementToBuffer(')');
    
      this.addMethodReturnType(this.actualSummationName);

      const parent = this.symbolTable.lookupMethod(symbol.getParentName());
              
      if (parent.isChild()) {
        this.actualSummationName = symbol.getParentName();
      } else {
        this.activeBuffer = EQUATION_BUFFER;
      }
    }
  }

  /**
   * Node which encapsulates all the lower part of the 
   * summation including its formatting.
   * @param {context} ctx lower bound of the summation context
   */
  visitSummation_lower_bound(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the body of the lower part of the summation.
   * @param {context} ctx body of the lower bound of the summation context
   */
  visitSummation_lower_body(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Node which represents the lower part of the summation containing only one line.
   * @param {context} ctx single line of the lower bound of the summation context
   */
  visitSummation_lower_single_line(ctx) {
    const childCount = ctx.getChildCount();

    for (let i = 0; i < childCount; i++) {
      const childCtx = ctx.getChild(i);

      // checks if the elements are variables or integers
      if (i % 2 === 0) {                        
        switch (childCtx.symbol.type) {
          case AmsmathParser.VARNAME:
            this.checkSummationVariableInSymbolTable(this.actualSummationName, this.visitTerminal(childCtx), 'INT', false, true, false);
            break;
          case AmsmathParser.INTEGER:
            this.addElementToBuffer(this.visitTerminal(childCtx));           
            // adds lower bound argument
            this.addSummationLowerBoundArg();
            break;
          default: 
            break;
        }
      } else {
        this.visitChildren(ctx);
      }
    }
  }

  visitSummation_lower_multiple_line(ctx) {
    console.debug(ctx.toString());
    //
  }

  visitSummation_lower_bound_operators(ctx) {
    console.debug(ctx.toString());
    //
  }

  visitSummation_upper_bound(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Starts the visit to the upper part of the summation.
   * 
   * If it is a variable, then it checks it in the symbol table (and possibly adds it to the table).
   * 
   * Else, it adds the terminal to the summation buffer.
   * @param {context} ctx 
   */
  visitSummation_upper_body(ctx) {
    const childCtx = ctx.getChild(FIRST_CHILD);

    switch (childCtx.symbol.type) {
      case AmsmathParser.VARNAME:
        this.checkSummationVariableInSymbolTable(this.actualSummationName, this.visitTerminal(childCtx), 'INT', true, false, true);
        break;
      case AmsmathParser.INTEGER:
        this.addElementToBuffer(', ' + this.visitTerminal(childCtx));
        // adds upperBound argument 
        this.addSummationUpperBoundArg(false);
        break;
      case AmsmathParser.INFINITY_TAG:
        this.addSummationUpperBoundArg(true);
        break;
      default: 
        break;
    }
  }

  /**
   * Starts the visit to the summation body.
   * Changes the active buffer to the summation buffer in order to save its definition.
   * 
   * @param {*} ctx summation_body context
   */
  visitSummation_body(ctx) {
    // changes active buffer to the summation buffer
    this.activeBuffer = ACTUAL_SUMMATION_BUFFER;
    // indexes variables to be accessed in child summations
    this.addParentSummationVariables();
    this.visitChildren(ctx);
  }

  /**
   * Adds to the actual summation symbol table, the indexes variables saved in the parent buffer.
   * This way the actual summation can access the parents index variable from within as it is
   * passed as an argument.
   */
  addParentSummationVariables() {
    const parentSummationMethodName = this.symbolTable.lookupMethod(this.actualSummationName).getParentName();
    if (parentSummationMethodName == null) return; 
    // gets the summation parent indexes to add them to the child 
    const parentIndexesVariables = this.symbolTable.lookupMethod(parentSummationMethodName).getIndexesVariables();

    for (let i = 0; i < parentIndexesVariables.length; i++) {
      this.checkSummationVariableInSymbolTable(this.actualSummationName, parentIndexesVariables[i].toString(), 'INT', true, true, false);
    }
  }

  /* --- Terminal --- */

  visitTerminal(ctx) {
    return ctx.getText().toString();
  }

  /* -------------------------------------------------------------------
     *                        INPUT VALIDATION
     * ------------------------------------------------------------------- */

  /**
     * Checks if a variable name is valid. It can not be a java reserved word.
     * @param {string} variableName 
     */
  validVariableName(variableName) {
    // Java reserved words
    const RESERVED_WORDS = [
      'int', 'float', 'double', 'short', 'long', 'public', 'private', 'protected', 'static', 
      'class', 'throw', 'byte', 'char', 'typeof', 'finally', 'continue', 'catch', 'try', 'exports',
      'extends', 'final', 'for', 'if', 'else', 'instanceof', 'imports', 'implements', 'interface',
      'module', 'native', 'new', 'package', 'requires', 'returns', 'assert', 'super', 'switch', 
      'synchronized', 'this', 'throw', 'throws', 'transient', 'void', 'volatile', 'while', 'strictfp',
      'enum', 'do', 'default', 'case', 'boolean', 'abstract',
    ];
    if (RESERVED_WORDS.indexOf(variableName) === -1) {
      return true;
    }
    return false;
  }
    

  /* -------------------------------------------------------------------
     *                     SYMBOL TABLE OPERATIONS
     * ------------------------------------------------------------------- */

  symbolTableLookupVariable(methodName, variableName) {
    return this.symbolTable.lookupMethod(methodName).lookupVariable(variableName);
  }

  /**
   * Adds a return type to the symbol table of a method.
   * @param {string} methodName name of the method
   */
  addMethodReturnType(methodName) {
    this.symbolTable.lookupMethod(methodName).addReturnType('REAL');
  }

  /**
   * Checks if the variable that is being analyzed already exists in the symbol
   * table of the equation that is being currently generated.
   * 
   * @param {string} variableName name of the variable to add to the symbol table
   * @param {string} variableName type of the variable to add to the symbol table
   * @param {boolean} isArg flag which tells if the variable is or not an argument to the method
   */
  checkEquationVariableInSymbolTable(variableName, variableType, isArg) {
    const methodSymbolTable = this.symbolTable.lookupMethod(this.equationName);

    if (methodSymbolTable.lookupVariable(variableName) == null) {
      methodSymbolTable.insertVariable(new Symbol(variableName, variableType, isArg));
    } else if (methodSymbolTable.lookupVariable(variableName).isLocalResultVariable()) {
      throw new CustomError('VARIABLE IS THE LEFT SIDE VARIABLE');
    }
  }

  /**
   * Checks if the variable that is being analyzed already exists in the symbol table of 
   * the correspondent summation method.
   * 
   * If it does not exists: the variable is first checked if it is an argument to the summation method.
   * 
   * If so, it is then checked if it is already defined in the actual summation symbol table and in its parents
   * symbol table too (to let variables to get passed from method to method).
   * 
   * Then the variable is inserted in the summation method symbol table.
   * 
   * @param {string} summationMethodName name of the method that is being analyzed
   * @param {string} variableName name of the variable that is being analyzed
   * @param {string} variableType type of the variable that is being analyzed
   * @param {bool} isArg flag which tells if the variable is or not an argument to the summation method
   * @param {bool} isIndexVar flag which tells if the variable is the index variable in the summation
   * @param {bool} isUpperBound flag which tells if the variable is the upper bound of the summation
   */
  checkSummationVariableInSymbolTable(summationMethodName, variableName, variableType, isArg, isIndexVar, isUpperBound) {
    const methodSymbolTable = this.symbolTable.lookupMethod(summationMethodName);

    if (methodSymbolTable.lookupVariable(variableName) == null) {
      if (isArg) {                                                          // if it is an argument, then it must be to the equation and to the parents summations
        // this.insertArgumentInSummationSymbolTable()
        // if the variable was defined in the annotations, then it already exists in the equation symbol table as an argument to the equation itself
        const annotationVariable = this.symbolTable.lookupMethod(this.equationName).lookupVariable(variableName);
        if (annotationVariable != null) {
          const newSymbol = new SummationSymbol(annotationVariable.getName(), annotationVariable.getType(), true, false);
          newSymbol.setArrayDimensions(annotationVariable.getArrayDimensions());
          methodSymbolTable.insertVariable(newSymbol);
                 
          // an annotation variable is pushed as an argument to the equation when it is first declared in the annotation visitor.
          // this way, when in child summation, if it is the first child summation, there is no need to re-add it to the equation as an
          // argument. Thus, the _checkSummationVariableInSymbolTable is not called.
          if (methodSymbolTable.isChild() === true) {
            const parentSummation = this.symbolTable.lookupMethod(methodSymbolTable.getParentName());
            this.checkSummationVariableInSymbolTable(parentSummation.getName(), variableName, variableType, true, false, false);       // recursive call (adds the variable to the parents summations arguments)
          }
          return;   
        }
                
        if (methodSymbolTable.isChild() === true) {
          const parentSummation = this.symbolTable.lookupMethod(methodSymbolTable.getParentName());
          this.checkSummationVariableInSymbolTable(parentSummation.getName(), variableName, variableType, true, false, false);       // recursive call (adds the variable to the parents summations arguments)
        } else {
          this.checkEquationVariableInSymbolTable(variableName, variableType, true);         // adds to the main equation method arguments
        }
      }
      this.insertSummationVariableInSymbolTable(summationMethodName, variableName, variableType, isArg, isIndexVar, isUpperBound);
    }
  }

  /**
   * Inserts a new variable into the summation symbol table.
   * 
   * @param {string} summationMethodName method of the summation method
   * @param {string} variableName name of the variable
   * @param {string} variableType type of the variable
   * @param {boolean} isArg boolean value that states if the variable is or not an argument to the summation method
   * @param {boolean} isIndexVar boolean value that states if the variable is an index variable of the summation
   * @param {boolean} isUpperBound boolean value that states if the variable is an upper bound for the summation
   */
  insertSummationVariableInSymbolTable(summationMethodName, variableName, variableType, isArg, isIndexVar, isUpperBound) {
    const methodSymbolTable = this.symbolTable.lookupMethod(summationMethodName);

    if (isUpperBound && isIndexVar === undefined) {
      methodSymbolTable.insertUpperBound(new SummationSymbol(variableName, variableType, isArg, false));
    } else if (isUpperBound && isIndexVar !== undefined) {
      methodSymbolTable.insertUpperBound(new SummationSymbol(variableName, variableType, isArg, isIndexVar));
    } else if (!isUpperBound && isIndexVar === undefined) {
      methodSymbolTable.insertVariable(new SummationSymbol(variableName, variableType, isArg, false));
    } else if (!isUpperBound && isIndexVar === true) {
      methodSymbolTable.addIndexVariable(new SummationSymbol(variableName, variableType, isArg, isIndexVar));
    } else if (!isUpperBound && isIndexVar === false) {
      methodSymbolTable.insertVariable(new SummationSymbol(variableName, variableType, isArg, isIndexVar));
    }
  }

  /**
   * Adds to the symbol table the upper bound argument.
   * 
   * **NOTE:** IT IS ONLY CALLED WHEN THE ARGUMENT IS AN INTEGER OR INFINITY(TERMINAL NODE), 
   * otherwise it is an argument to the equation itself.
   * 
   * @param {boolean} isInfinity value to check whether the upper bound of the summation is
   * or not infinity. 
   */
  addSummationUpperBoundArg(isInfinity) {
    const summationSymbolTable = this.symbolTable.lookupMethod(this.actualSummationName);

    if (isInfinity) {
      const infinityVar = new SummationSymbol('INFINITY', 'FINAL INT', false, false);
      infinityVar.setAsInfinity();
      summationSymbolTable.insertUpperBound(infinityVar);
    } else {
      summationSymbolTable.insertUpperBound(new SummationSymbol('upperBound', 'INT', true, false));
    }  
  }

  /**
   * Adds to the symbol table the lower bound argument.
   * As this argument will always be an INT and represents the lower bound of the summation, 
   * it shall be passed in the equation as an integer, it shouldn't be an argument to the equation.
   * This way it just inserts the variable in the symbol table. 
   * 
   * **NOTE:** IT IS ONLY CALLED WHEN THE ARGUMENT IS AN INTEGER (TERMINAL NODE), 
   * otherwise it is an argument to the equation itself.
   */
  addSummationLowerBoundArg() {
    const summationSymbolTable = this.symbolTable.lookupMethod(this.actualSummationName);
    summationSymbolTable.insertVariable(new SummationSymbol('lowerBound', 'INT', true, false));
  }

  /**
   * Checks if the variable that is interpreted as an array is, in fact, declared as one
   * and if the number of dimensions are correct.
   * 
   * @param {string} variableName name of the array variable
   * @param {integer} indexesCount number of dimensions requested
   */
  isArrayDimensionCorrect(variableName, indexesCount) {
    const methodSymbolTable = this.symbolTable.lookupMethod(this.equationName);
    const variable = methodSymbolTable.lookupVariable(variableName);

    // Perhaps it should check if the variable exists in the symbol table!!
    // if (variable == null) throw NOT
    if (!variable.isArray()) {
      return false;
    }
    return variable.getNumberOfDimensions() === indexesCount;
  }

  /**
   * Checks if the index of the element to be accessed in the array is within 
   * the array reserved space.
   * 
   * @param {string} variableName name of the array variable 
   * @param {integer} dimension number of the dimension (0, ... , N)
   * @param {integer} index index of the element to be accessed
   */
  isArrayIndexInReservedSpace(variableName, dimension, index) {
    const methodSymbolTable = this.symbolTable.lookupMethod(this.equationName);
    const variable = methodSymbolTable.lookupVariable(variableName);
         
    return parseInt(index) < variable.getDimensionReservedSpace(dimension); 
  }

  /**
   * Adds a factorial method to the symbol table, if it not yet exists.
   * 
   * First, checks if already factorial method is already defined, by checking if 
   * there is a method symbol table with the name.
   * 
   * If true, then it doesn't adds another factorial method : the body of the factorial 
   * method is always the same in every calculation, thus, for every generated class, 
   * there is only one factorial method implementation, no matter how much times the 
   * factorial function is invoked.
   * 
   * Otherwise, it adds a new method symbol table to the global symbol table, with the 
   * template name of the factorial method.
   */
  addFactorialMethodToSymbolTable() {
    if (this.symbolTable.lookupMethod(FACTORIAL_METHOD_TEMPLATE) != null) {
      return;
    }
    // adds method to symbol table
    this.symbolTable.insertFactorialMethod();
    // retrieves method from the symbol table
    const factorialSymbolTable = this.symbolTable.lookupMethod(FACTORIAL_METHOD_TEMPLATE);
    const resultVariableName = 'n';

    factorialSymbolTable.addReturnType('INT');
    factorialSymbolTable.insertVariable(new Symbol(resultVariableName, 'INT', true));
  }

  /**
   * Adds a variable to the correspondent symbol table (if needed) and then
   * adds it to the active buffer.
   * 
   * **Note:** Active Buffer:
   * 
   *  0 : equation buffer
   *  1 : summation buffer
   * 
   * @param {string} variableName name of the variable that is being added
   * @param {string} variableType type of the variable that is being added
   * @param {bool} isArg flag which tells if the variable is or not an argument the method
   */
  addVariableToBuffer(variableName, variableType, isArg) {
    this.addVariableToSymbolTable(variableName, variableType, isArg);
    this.addElementToBuffer(variableName);  
  }

  /**
   * Adds a variable to the correspondent symbolTable, according to the active buffer.
   * 
   * @param {string} variableName name of the variable that is being added
   * @param {string} variableType type of the variable that is being added
   * @param {bool} isArg flag which tells if the variable is or not an argument the method
   */
  addVariableToSymbolTable(variableName, variableType, isArg) {
    switch (this.activeBuffer) {
      case 0:
        this.checkEquationVariableInSymbolTable(variableName, variableType, isArg);
        break;
      case 1:
        this.checkSummationVariableInSymbolTable(this.actualSummationName, variableName, variableType, isArg, false, false);
        break;
      default:
        break;
    }
  }

  /**
   * Adds to the current buffer the arguments necessary for the summation method invocation.
   * 
   * If the active buffer is the equation buffer and the variable has a different type 
   * than the default one then it is writen a cast to integer, as if this is the case 
   * it can only be an upper bound of a summation that is being written.
   * 
   * Otherwise, if the is other that an upper bound it will already have its correct type discriminated.
   * 
   * @param {*} summationMethodName name of the summation method to get its arguments
   */
  addInvokingArgsToBuffer(summationMethodName) {
    const summationSymbolTable = this.symbolTable.lookupMethod(summationMethodName);
    const args = summationSymbolTable.getArguments();
        
    for (let i = 0; i < args.length; i++) {
      const argName = args[i].getName();
            
      if (argName === 'lowerBound' || argName === 'upperBound') {
        continue;
      }

      this.addElementToBuffer(', ');

      if (this.activeBuffer === EQUATION_BUFFER && args[i].getType() !== 'REAL' && !args[i].isArray()) {
        this.addElementToBuffer('(' + args[i].getType().toLowerCase() + ')');  // cast
      }
      this.addElementToBuffer(argName);
    }
  }

  /**
   * Adds an element to the active buffer.
   * 
   * **Note:** Active Buffer:
   * 
   *  0 : equation buffer
   *  1 : summation buffer
   * 
   * @param {*} element string which represents an element to be written into the buffer
   */
  addElementToBuffer(element) {
    switch (this.activeBuffer) {
      case EQUATION_BUFFER:
        this.equationBodyBuffer += element;
        break;
      case ACTUAL_SUMMATION_BUFFER:
        this.symbolTable.lookupMethod(this.actualSummationName).addToBuffer(element);
        break;
      case PARENT_SUMMATION_BUFER:
        this.symbolTable.lookupMethod(this.parentSummationName).addToBuffer(element);
        break;
      default:
        break;
    }
  }
}

exports.EquationCodeGenerator = EquationCodeGenerator;
