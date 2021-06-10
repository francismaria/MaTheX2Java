/**
 * © Francisco Maria, 2019
 */
const AmsmathVisitor = require('grammars/static/AmsmathGrammar/GrammarVisitor').GrammarVisitor;

// ESLint disabled rules
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */

/**
 * This class is the 'function' latex environment code visitor for MaTheX2Java.
 */
class FunctionCodeGenerator extends AmsmathVisitor {
  constructor(functionCtx) {
    super();
    this.functionCtx = functionCtx;
    this.startGeneration(this.functionCtx);
  }

  /**
   * Starts to visit the child nodes of the function.
   */
  startGeneration() {
    this.visitChildren(this.functionCtx);
  }

  /* --- Math Function Definition --- */

  visitMath_function_def(ctx) {
    this.visitChildren(ctx);
  }
  /* --- Math Function Args --- */

  visitMath_function_args(ctx) {
    this.visitChildren(ctx);
  }

  /* --- Composed Operations --- */

  visitComposed_operations(ctx) {
    this.visitChildren(ctx);
  }

  visitOperation_element(ctx) {
    this.visitChildren(ctx);
  }

  /* --- Operations --- */

  visitMember(ctx) {
    if (ctx.fraction() != null) {
      this.visitChildren(ctx);
    } else {
      console.debug(this.visitTerminal(ctx.getChild(0)));
    }
  }

  visitPriority_element(ctx) {
    console.debug(this.visitTerminal(ctx.PARENTHESIS_LF(0)));
    this.visitChildren(ctx);
    console.debug(this.visitTerminal(ctx.PARENTHESIS_RT(0)));
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

  visitExponential() {
    console.debug('EXPONENTIAL');
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

  /* --- Terminal --- */

  visitTerminal(ctx) {
    return ctx.getText();
  }
}

exports.FunctionCodeGenerator = FunctionCodeGenerator;
