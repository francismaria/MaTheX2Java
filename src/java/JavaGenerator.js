/* eslint-disable class-methods-use-this */
/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */

// sets 'infinity' as 10
const INFINITY_VALUE = 10;
const EMPTY_BUFFER = '';

/**
 * This class writes the Java code.
 */
class JavaGenerator {
  constructor(fileName, symbolTable) {
    this.buffer = EMPTY_BUFFER;
    this.fileName = fileName;
    this.symbolTable = symbolTable;
    this.factorialMethodGenerated = false;
    this.tabs = 0;
  }

  /**
   * Writes the header of the file (imports) and the name
   * of the Java class.
   */
  initCode() {
    this.writeImports();
    this.writeClass();
    this.writeBeginBracket();
    this.writeNewLine();
  }

  /**
   * Writes the imports needed to the generated Java file.
   *
   * **Note:** the needed imports are:
   *
   * - **Math**, to do the math operations (sqrt, etc)
   *
   * - **Arrays**, to do array operations
   */
  writeImports() {
    this.writeMathImport();
    this.writeArraysImport();
    this.writeNewLine();
  }

  /**
   * Writes the Math import.
   */
  writeMathImport() {
    this.buffer += 'import java.lang.Math;';
    this.writeNewLine();
  }

  /**
   * Writes the Arrays import.
   */
  writeArraysImport() {
    this.buffer += 'import java.util.Arrays;';
    this.writeNewLine();
  }

  /**
   * Writes the name of the class.
   */
  writeClass() {
    this.buffer += 'public class ' + this.fileName + ' ';
    this.addIdentation();
  }


  // -- Symbols --

  writeBeginBracket() {
    this.buffer += '{';
  }

  writeEndBracket() {
    this.buffer += '}';
  }

  writeParenthesisLF() {
    this.buffer += '(';
  }

  writeParenthesisRT() {
    this.buffer += ')';
  }

  writeComma() {
    this.buffer += ',';
  }

  writeSemicolon() {
    this.buffer += ';';
  }

  // -- Formatting Functions --

  writeSpace() {
    this.buffer += ' ';
  }

  writeNewLine() {
    this.buffer += '\n';
  }

  /**
   * Increments the identation.
   */
  addIdentation() {
    this.tabs++;
  }

  /**
   * Decrements the identation.
   */
  removeIdentation() {
    this.tabs--;
  }

  /**
   * Writes as many tabs as neccessary according to the
   * number of tabs (identation) that is being tracked.
   */
  writeTabs() {
    for (let i = 0; i < this.tabs; i++) {
      this.writeTab();
    }
  }

  writeTab() {
    this.buffer += '\t';
  }

  writeString(name) {
    this.buffer += name;
  }

  /**
   * Returns all the methods (equations) name.
   */
  getEquationsNames() {
    const methodsNames = [];
    const allMethods = this.symbolTable.getAllMethods();

    for (let i = 0; i < allMethods.length; i++) {
      methodsNames.push(allMethods[i].getName());
    }
    return methodsNames;
  }

  /**
   * Returns the global symbol table.
   */
  getSymbolTable() {
    return this.symbolTable;
  }

  /**
   * Writes a variable type (int, double float, etc).
   * @param {string} type the type of the variable
   */
  writeType(type) {
    this.buffer += type;
  }

  /**
   * Writes the variable type according to the type.
   * @param {string} type the type of the variable
   */
  writeVariableType(type) {
    switch (type) {
      case 'REAL':
        this.writeType('double');
        break;
      case 'SHORT':
        this.writeType('short');
        break;
      case 'INT':
        this.writeType('int');
        break;
      case 'FLOAT':
        this.writeType('float');
        break;
      case 'DOUBLE':
        this.writeType('double');
        break;
      case 'LONG':
        this.writeType('long');
        break;
      case 'FINAL INT':
        this.writeType('final int');
        break;
      default:
        this.writeType('double');
        break;
    }
  }

  /**
   * Writes the corresponding argument of a certain method (equation).
   * @param {Symbol} arg the argument symbol
   */
  writeEquationMethodArgType(arg) {
    this.writeVariableType(arg.getType());

    if (arg.isArray()) {
      const numDimensions = arg.getNumberOfDimensions();
      for (let i = 0; i < numDimensions; i++) {
        this.writeString('[]');
      }
    }
    this.writeSpace();
  }

  /**
   * Loops through all the arguments of the method (equation) and writes them.
   * @param {string} equationName the name of the method (equation)
   */
  writeEquationMethodArgs(equationName) {
    this.writeParenthesisLF();

    const methodArgs = this.symbolTable.lookupMethod(equationName).getArguments();
    const argsCount = methodArgs.length;

    for (let i = 0, argsProcessed = 0; i < methodArgs.length; i++) {
      this.writeEquationMethodArgType(methodArgs[i]);
      this.writeString(methodArgs[i].getName()); // writes the variable name

      // keeps track of the arguments that were already processed so that
      // when it reaches the last one, it doesn't write the comma after it
      argsProcessed++;

      // while it is not the last argument
      if (argsProcessed < argsCount) {
        this.writeComma();
        this.writeSpace();
      }
    }
    this.writeParenthesisRT();
  }

  /**
   * Writes the return type of the method (equation)
   * @param {string} equationName the method (equation) name
   */
  writeEquationMethodReturnType(equationName) {
    this.writeVariableType(this.symbolTable.lookupMethod(equationName).getReturnType());
  }

  /**
   * Writes the declaration of the Java method (equation).
   *
   * **Example:** public static int ... ( args ) {
   *
   * @param {string} equationName the method (equation) name
   */
  writeEquationMethodDeclaration(equationName) {
    this.writeNewLine();
    this.writeTabs();

    this.buffer += 'public static ';

    this.writeEquationMethodReturnType(equationName);
    this.writeSpace();
    this.writeString(equationName);
    this.writeEquationMethodArgs(equationName);

    this.writeBeginBracket();
  }

  /**
   * Writes the declaration of the local variables of the method.
   * @param {string} equationName the method (equation) name
   */
  writeEquationMethodLocals(equationName) {
    // array which holds the symbols corresponding to the local variables of the method
    const methodLocals = this.symbolTable.lookupMethod(equationName).getLocals();

    for (let i = 0; i < methodLocals.length; i++) {
      this.writeVariableType(methodLocals[i].getType());
      this.writeSpace();
      this.writeString(methodLocals[i].getName());
      this.writeSemicolon(';'); // to be changed!
      this.writeNewLine();
      this.writeTabs();
    }
  }

  /**
   * Writes the local result variable and the its value (the java code
   * corresponding to the equation).
   * @param {string} equationName the method (equation) name
   * @param {string} buffer method buffer (code)
   */
  writeEquationMethodDefinition(equationName, buffer_local) {
    const methodSymbolTable = this.symbolTable.lookupMethod(equationName);
    const methodLocals = this.symbolTable.lookupMethod(equationName).getLocals();

    // write local result name
    this.writeString(methodLocals[0].getName());
    this.writeString(' = ');

    // cast to return type
    this.writeParenthesisLF();
    this.writeVariableType(methodSymbolTable.getReturnType());
    this.writeParenthesisRT();

    this.writeSpace();

    this.writeParenthesisLF();
    this.buffer += buffer_local;
    this.writeParenthesisRT();

    this.writeSemicolon();
    this.writeNewLine();
    this.writeTabs();
  }

  /**
   * Writes the return statement of the method.
   * @param {string} equationName the method (equation) name
   */
  writeEquationMethodReturn(equationName) {
    const returnVariable = this.symbolTable.lookupMethod(equationName).getLocals()[0].getName();
    this.writeString('return ' + returnVariable);
    this.writeSemicolon();
  }

  /**
   * Writes the method.
   * @param {string} equationName the method (equation) name
   * @param {string} equationBodyBuffer buffer which corresponds to the equation body
   */
  writeEquationMethod(equationName, equationBodyBuffer) {
    // Method Declaration
    this.writeEquationMethodDeclaration(equationName);

    this.addIdentation();

    // Local Variables Declaration
    this.writeNewLine();
    this.writeTabs();
    this.writeEquationMethodLocals(equationName);

    // Equation Declaration
    this.writeNewLine();
    this.writeTabs();
    this.writeEquationMethodDefinition(equationName, equationBodyBuffer);

    // Method Return Declaration
    this.writeNewLine();
    this.writeTabs();
    this.writeEquationMethodReturn(equationName);

    this.removeIdentation();

    // End Bracket
    this.writeNewLine();
    this.writeTabs();
    this.writeEndBracket();

    this.writeNewLine();
    this.resetEquationBuffer();
  }

  /**
   * Resets the equation buffer.
   */
  resetEquationBuffer() {
    this.equationStr = '';
  }

  /** ----------------------------------------
   *       SUMMATIONS METHODS GENERATION
   *  ---------------------------------------- */

  /**
   * Writes the declaration of the method which corresponds to the inputted summation.
   * @param {SummationSymbolTable} summationSymbolTable the symbol table of the summation
   */
  writeSummationMethodDeclaration(summationSymbolTable) {
    this.writeString('public static ');
    // method return type
    this.writeEquationMethodReturnType(summationSymbolTable.getName());
    // method name
    this.writeString(' ' + summationSymbolTable.getName());
    // method args
    this.writeEquationMethodArgs(summationSymbolTable.getName());
    this.writeBeginBracket();
  }

  /**
   * Returns the index variable of the summation (i, j, k, etc.).
   * @param {SummationSymbolTable} summationSymbolTable the symbol table of the summation
   */
  getSummationMethodIndexVariable(summationSymbolTable) {
    const methodLocals = summationSymbolTable.getLocals();

    for (let i = 0; i < methodLocals.length; i++) {
      if (methodLocals[i].isIndexVariable()) {
        return methodLocals[i];
      }
    }
    return null;
  }

  /**
   * Writes the local variables of the summation method.
   * @param {SummationSymbolTable} summationSymbolTable the symbol table of the summation
   */
  writeSummationMethodLocals(summationSymbolTable) {
    // array of the local variables of the method
    const methodLocals = summationSymbolTable.getLocals();

    for (let i = 0; i < methodLocals.length; i++) {
      const methodLocalName = methodLocals[i].getName();
      // declaration of the local variables
      this.writeVariableType(methodLocals[i].getType());
      this.writeSpace();
      this.writeString(methodLocalName);
      this.writeSpace();
      this.writeString('=');
      this.writeSpace();

      if (methodLocalName === 'sum') {
        this.writeString('0');
      } else if (methodLocals[i].isIndexVariable()) {
        this.writeString('lowerBound');
      } else if (methodLocals[i].isInfinity()) {
        this.writeString(INFINITY_VALUE);
      } else {
        this.writeString('0');
      }

      this.writeSemicolon();
      this.writeNewLine();
      this.writeTabs();
    }
  }

  /**
   * Writes the body (which is the buffer) of the summation.
   * @param {SummationSymbolTable} summationSymbolTable the symbol table of the summation
   * @param {string} summationBodyBuffer the buffer for the summation body
   */
  writeSummationMethodBody(summationSymbolTable, summationBodyBuffer) {
    // write summation local variables
    this.writeSummationMethodLocals(summationSymbolTable);
    // summation index variable
    const indexVariable = this.getSummationMethodIndexVariable(summationSymbolTable);

    this.writeNewLine(); this.writeTabs();

    const upperBoundSymbol = summationSymbolTable.getUpperBound();
    // write summation loop
    this.writeString('for(; ' + indexVariable.getName() + ' < ' + upperBoundSymbol.getName() + '; ' + indexVariable.getName() + '++)');
    this.writeBeginBracket();

    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    // write summation body
    this.writeString('sum += ' + summationBodyBuffer);
    this.writeSemicolon();

    this.removeIdentation();
    this.writeNewLine(); this.writeTabs();

    this.writeEndBracket();

    this.writeNewLine(); this.writeTabs();
    this.writeNewLine(); this.writeTabs();
    // write summation return statement
    this.writeString('return sum;');

    this.removeIdentation();
    this.writeNewLine(); this.writeTabs();
    this.writeEndBracket();
  }

  /**
   * Writes the summation method.
   * @param {string} summationName the name of the summation method to write.
   * @param {string} summationBodyBuffer the buffer of the body of the summation
   */
  writeSummationMethod(summationName, summationBodyBuffer) {
    const methodSymbolTable = this.symbolTable.lookupMethod(summationName);

    this.writeNewLine(); this.writeTabs();
    // summation method declaration
    this.writeSummationMethodDeclaration(methodSymbolTable);

    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    // summation method body
    this.writeSummationMethodBody(methodSymbolTable, summationBodyBuffer);

    this.writeNewLine(); this.writeTabs();
  }


  /** ----------------------------------------
   *        FACTORIAL FUNCTION GENERATION
   *  ---------------------------------------- */

  /**
   * Writes the body of the factorial method (in a **recursive** way).
   * @param {string} factorialName name of the method
   */
  writeFactorialMethodBody(factorialName) {
    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    // if (n < 0)
    this.writeString('if(n < 0)');
    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    this.writeString('return 0;');

    this.removeIdentation();
    this.writeNewLine(); this.writeTabs();
    // if (n == 0)
    this.writeString('else if(n == 0)');
    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    this.writeString('return 1;');

    this.removeIdentation();
    this.writeNewLine(); this.writeTabs();
    // recursive statement
    this.writeString('else');
    this.addIdentation();
    this.writeNewLine(); this.writeTabs();
    this.writeString('return (n * ' + factorialName + '(n-1));');

    this.removeIdentation(); this.removeIdentation();
    this.writeNewLine(); this.writeTabs();
    this.writeEndBracket();
  }

  /**
   * Writes the factorial method.
   * If the method was already written/generated then it is not
   * needed to rewrite it.
    * @param {string} factorialName the name of the factorial method
   */
  writeFactorialMethod(factorialName) {
    if (this.factorialMethodGenerated) return;

    this.writeEquationMethodDeclaration(factorialName);
    this.writeFactorialMethodBody(factorialName);

    this.writeNewLine(); this.writeTabs();
    this.factorialMethodGenerated = true;
  }

  /** ----------------------------------------
   *          MAIN FUNCTION GENERATION
   *  ---------------------------------------- */

  /**
   * Writes Java main method declaration.
   */
  writeMainDeclaration() {
    this.writeTabs();
    this.buffer += 'public static void main(String[] args)';
  }

  /**
   * Represents the mapping between the abstract variable type
   * and its default value to declare.
   *
   * **Example:**
   *
   *   REAL   ->   1.0 (double)
   *
   *   FLOAT  ->   1.0f (float)
   * @param {*} varType the type of the variable
   */
  getDefaultVariableValue(varType) {
    switch (varType) {
      case 'REAL':
        return '1.0';
      case 'SHORT':
        return '1';
      case 'INT':
        return '1';
      case 'FLOAT':
        return '1.0f';
      case 'DOUBLE':
        return '1.0';
      case 'LONG':
        return '1.0';
      default:
        return '1';
    }
  }

  /**
   * Represents the mapping between the abstract type of the
   * variable to the implemented.
   *
   * Example:
   *
   *   REAL   ->   double
   *
   *   FLOAT  ->   float
   *
   * @param {*} type the type of the variable
   */
  getVariableType(type) {
    switch (type) {
      case 'REAL':
        return 'double';
      case 'SHORT':
        return 'short';
      case 'INT':
        return 'int';
      case 'FLOAT':
        return 'float';
      case 'DOUBLE':
        return 'double';
      case 'LONG':
        return 'long';
      case 'FINAL INT':
        return 'final int';
      default:
        return 'double';
    }
  }

  /**
   * Returns a string with the declaration of the variable which is
   * used as a method argument that is not yet declared inside the main method.
   * @param {*} arg method argument
   */
  getScalarVariableDeclaration(arg) {
    const argType = arg.getType();
    return this.getVariableType(argType) + ' ' + arg.getName() + ' = ' + this.getDefaultVariableValue(argType) + ';';
  }

  /**
   * Returns a string with the declaration of the array which is used as
   * a method argument that is not yet declared inside the main method.
   * @param {*} arg method argument
   */
  getArrayVariableDeclaration(arg) {
    let buf = '';
    const arrayType = this.getVariableType(arg.getType());
    const numDimensions = arg.getNumberOfDimensions();

    // stores the variable name and its type in the buffer
    buf += arrayType + ' ' + arg.getName();
    // left side of the declaration
    for (let i = 0; i < numDimensions; i++) {
      buf += '[]';
    }

    // right side of the declaration
    buf += ' = new ' + arrayType;
    for (let i = 0; i < numDimensions; i++) {
      buf += '[' + arg.getDimensionReservedSpace(i) + ']';
    }
    return buf + ';';
  }

  /**
   * Initializes the array.
   * @param {*} variableName name of the array variable
   */
  writeArrayFill(variableName) {
    const initValue = '1';
    this.writeString('Arrays.fill(' + variableName + ', ' + initValue + '); // initializes all the array elements to 1');
  }

  /**
   * Checks if the arguments that are a part of the method that is being analyzed
   * have already been declared inside the main method.
   * If so : the argument does no need a declaration inside the main function as
   * it already has one.
   * If not: then the argument is declared, initializing it with a default value.
   * @param {Array} methodArgs the arguments of the method that is being analyzed
   * @param {Object} declaredVariables data structure which keeps every argument that
   * was already declared and initialized inside the main method
   */
  writeMethodArgsDefaultDeclaration(methodArgs, declaredVariables) {
    for (let i = 0; i < methodArgs.length; i++) {
      const arg = methodArgs[i];
      if (declaredVariables.indexOf(arg.getName()) === -1) {
        if (!arg.isArray()) {
          // writes scalar variable declaration
          this.writeString(this.getScalarVariableDeclaration(arg));
          this.writeNewLine(); this.writeTabs();
        } else {
          // writes array variable declaration
          this.writeString(this.getArrayVariableDeclaration(arg));
          this.writeNewLine(); this.writeTabs();
          // writes the array _fill to the default value
          this.writeArrayFill(arg.getName());
          this.writeNewLine(); this.writeTabs();
        }
        declaredVariables.push(arg.getName());
      }
    }
  }

  /**
   * Writes the arguments of the method that is being invoked.
   * @param {Array} methodArgs the arguments of the method that is being analyzed
   */
  writeMethodInvocationArgs(methodArgs) {
    const argsCount = methodArgs.length;

    for (let i = 0, argsProcessed = 0; i < argsCount; i++) {
      this.writeString(methodArgs[i].getName());
      // keeps track of the already written args so that the last argument doesn't
      // contain a comma after its name
      argsProcessed++;
      if (argsProcessed < argsCount) {
        this.writeComma();
      }
    }
  }

  /**
   * Writes comment with the method which is going to be invoked
   * in the next few lines.
   * @param {string} equationName name of the method (equation)
   */
  writeMethodComment(equationName) {
    this.writeNewLine(); this.writeTabs();
    this.writeString('// --- ' + equationName + ' ---');
    this.writeNewLine(); this.writeTabs();
    this.writeNewLine(); this.writeTabs();
  }

  /**
   * Writes the invocation of the method.
   * If needed it declares the arguments of the invoked method.
   * @param {string} equationName name of the method to invoke
   * @param {Array} declaredVariables data structure which keeps every argument that
   * was already declared and initialized inside the main method
   */
  writeMethodInvocation(equationName, declaredVariables) {
    const methodArgs = this.symbolTable.lookupMethod(equationName).getArguments();
    const methodArgsCount = methodArgs.length;

    // writes comment with the method (equation) name
    this.writeMethodComment(equationName);

    if (methodArgsCount === 0) {
      this.writeString(equationName + '()');
    } else {
      this.writeMethodArgsDefaultDeclaration(methodArgs, declaredVariables);
      this.writeNewLine(); this.writeTabs();
      this.writeString(equationName);
      this.writeParenthesisLF();
      this.writeMethodInvocationArgs(methodArgs);
      this.writeParenthesisRT();
    }
    this.writeSemicolon();
  }

  /**
   * It is responsible for dealing with the creation of the main method. It invokes every
   * environment (equation, matrix, etc.) methods with the respective variables type.
   *
   * **Example**:
   *
   *   equation_0 (args) = c , d
   *   equation_1 (args) = c , b
   *
   * Then the declaration will be just:
   *
   *    double c = 1.0;
   *    double d = 1.0;
   *
   *    -- equation_0 invocation (c, d) --
   *
   *    double b = 1.0;           //doesn't redeclares variable 'c'
   *
   *    -- equation_1 invocation (c, b) --
   */
  writeMainMethod() {
    // array which represents the variables that have already been declared and defined inside
    // the 'main' method, in order to if there are multiple equations with the same variables
    // as parameters they do not have to be redefined and cause a Java compilation error.
    const declaredVariables = [];

    this.writeNewLine();
    this.writeMainDeclaration();
    this.writeBeginBracket();

    this.addIdentation();

    const equationMethods = this.symbolTable.getEquationsMethods();

    for (let i = 0; i < equationMethods.length; i++) {
      this.writeNewLine();
      this.writeTabs();
      this.writeMethodInvocation(equationMethods[i].getName(), declaredVariables);
    }

    this.removeIdentation();

    this.writeNewLine();
    this.writeTabs();
    this.writeEndBracket();
    this.writeNewLine();
  }

  /**
   * Writes the main method (which is the final one to be written) and
   * the end bracket.
   */
  finishGeneration() {
    this.writeMainMethod();
    this.writeEndBracket();
  }

  getTranslation() {
    return this.buffer;
  }
}

exports.JavaGenerator = JavaGenerator;
