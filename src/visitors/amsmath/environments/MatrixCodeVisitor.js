/**
 * © Francisco Maria, 2019
 */
const AmsmathVisitor = require('../../../grammars/static/AmsmathGrammar/GrammarVisitor').GrammarVisitor;

// ESLint disabled rules
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */

class MatrixCodeGenerator extends AmsmathVisitor {
  constructor(matrixCtx) {
    super();
    this.matrixCtx = matrixCtx;
    this.numCols = null;
    this.startGeneration();
  }

  /**
   * Starts to visit the child nodes.
   */
  startGeneration() {
    this.setMatrixNumCols(this.matrixCtx.getChild(0));
    this.visitChildren(this.matrixCtx);
  }

  visitMatrix_line(ctx) {
    if (!this.checkLineNumCols(ctx)) {
      throw new Error('Error! The number of columns of the matrix does not match.');
      // throw EXCEPTION()
    }
    this.visitChildren(ctx);
  }

  visitMember(ctx) {
    if (ctx.fraction() != null || ctx.sqrt() != null || ctx.exponential() != null) {
      this.visitChildren(ctx);
    } else {
      console.debug(this.visitTerminal(ctx.getChild(0)));
    }
  }

  /* --- Square Root --- */

  visitSqrt(ctx) {
    if (ctx.sqrt_root() != null) {
      console.debug('has sqrt root');
    }
    this.visitChildren(ctx);
  }

  visitSqrt_root(ctx) {
    console.debug(this.visitTerminal(ctx.getChild(1))); // VARNAME or TERMINAL??
  }

  visitSqrt_body(ctx) {
    this.visitChildren(ctx);
  }

  /* --- Exponential --- */

  visitExponential(ctx) {
    console.debug(this.visitTerminal(ctx.getChild(0)));
    this.visitChildren(ctx);
  }

  /* --- Fraction --- */

  visitFraction(ctx) {
    console.debug(this.visitTerminal(ctx.FRAC(0)));
    this.visitChildren(ctx);
  }

  visitNumerator(ctx) {
    this.visitChildren(ctx);
  }

  visitDenominator(ctx) {
    this.visitChildren(ctx);
  }

  visitFraction_member(ctx) {
    this.visitChildren(ctx);
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  /**
   * This function sets the number of columns a certain matrix has.
   * It serves as an auxiliary property to check whether the lines in the
   * matrix have or not the same number of elements.
   *
   * @param {ctx} firstLineCtx
   */
  setMatrixNumCols(firstLineCtx) {
    this.numCols = Math.ceil(firstLineCtx.getChildCount() / 2);
    console.debug(this.numCols);
  }

  /**
   * Checks if the current line it's visiting has a valid number
   * of columns.
   * @param {ctx} lineCtx
   */
  checkLineNumCols(lineCtx) {
    const lineNumCols = Math.ceil(lineCtx.getChildCount() / 2);
    return lineNumCols === this.numCols;
  }
}

exports.MatrixCodeGenerator = MatrixCodeGenerator;
