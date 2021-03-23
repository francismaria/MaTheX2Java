/* eslint-disable class-methods-use-this */
/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

// imports default visitor
const AmsmathVisitor = require('../../grammars/static/AmsmathGrammar/GrammarVisitor').GrammarVisitor;
// imports each body parser rules code generators
const MatrixCodeGenerator = require('./environments/MatrixCodeVisitor').MatrixCodeGenerator;
const EquationCodeGenerator = require('./environments/EquationCodeVisitor').EquationCodeGenerator;
const FunctionCodeGenerator = require('./environments/FunctionCodeVisitor').FunctionCodeGenerator;

/**
 * This class is a custom visitor for the Amsmath grammar (v2.1).
 */
class AmsmathGenerateCodeVisitor extends AmsmathVisitor {
  constructor(javaGenerator) {
    super();
    // Variables initialization
    this.javaGenerator = javaGenerator;
    this.environment = null;
    this.equationsNames = this.javaGenerator.getEquationsNames();
    this.equationsCounter = 0;
  }

  visitChat(ctx) {
    this.javaGenerator.initCode();
    this.visitChildren(ctx);
    this.javaGenerator.finishGeneration();
  }

  /**
   * -----------------------
   *          START
   * -----------------------
   */

  visitStart(ctx) {
    this.visitChildren(ctx);
  }

  visitBegin(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * -----------------------
   *          BODY
   * -----------------------
   */

  visitBody(ctx) {
    this.visitChildren(ctx);
  }

  // ------- EQUATION --------

  /**
   * Visits the equation.
   * @param {string} ctx environment tag node
   */
  visitEquation(ctx) {
    if (this.environment !== 'equation' && this.environment !== 'equation*') {
      this.res.write('Type of operation does not match with the environment tag.');
      return;
    }

    const equationCodeGen = new EquationCodeGenerator(ctx, this.equationsNames[this.equationsCounter], this.javaGenerator);

    if (this.equationsCounter !== this.equationsNames.length) {
      this.equationsCounter++;
    }
  }

  // ------- MATRIX --------

  /**
   * Visits the matrix.
   * @param {ANTLR4} ctx matrix node
   */
  visitMatrix(ctx) {
    if (this.environment !== 'matrix') {
      throw new Error('Type of operation does not match with the environment tag.');
    }
    // let matrixCodeGen = new MatrixCodeGenerator(ctx)
    // this.res.write(matrixCodeGen.getCode())
    throw Error('Matrices definition are not yet supported.');
  }

  // ------- MATH FUNCTION --------

  visitMath_function(ctx) {
    // let functionCodeGen = new FunctionCodeGenerator(ctx)

    throw Error('Functions declarations are not yet supported.');
  }

  /**
   * -----------------------
   *          END
   * -----------------------
   */

  visitEnd(ctx) {
    this.visitChildren(ctx);
    // -- Resets environment flag to check a new environment visit --
    this.resetEnvironmentFlag();
  }

  /**
   * -----------------------
   *     COMMON VISITS
   * -----------------------
   */

  /**
  * Checks if environment tags are valid:
  *
  *    "...equation ... equation..."   -   CORRECT
  *    "...equation ... equation*..."  -   ERROR
  *
  * Note: At its first visit it assigns the value of the \begin tag 
  * environment to this.environment in order to compare with the \end 
  * tag environment.
  */
  visitEnvironment(ctx) {
    if (this.environment == null) { // first visit (begin environment)
      this.environment = this.visitTerminal(ctx.getChild(0));
    } else { // second visit (end environment)
        if (this.environment != this.visitTerminal(ctx.getChild(0))) {
          this.res.write("Error in environment tags!");
        } 
    }
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  /**
   * -----------------------
   *     CUSTOM METHODS
   * -----------------------
   */

  /**
   * Resets the variable "environment".
   * This is necessary any time there is a visit to a
   * begin rule in order to keep trace of the environment
   * until it reaches the end rule and then compares them
   * and checks if tboth are equal.
   */
  resetEnvironmentFlag() {
    this.environment = null;
  }
}

exports.AmsmathGenerateCodeVisitor = AmsmathGenerateCodeVisitor;
