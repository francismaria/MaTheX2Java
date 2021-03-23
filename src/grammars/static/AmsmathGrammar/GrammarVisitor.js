// Generated from Grammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

function GrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GrammarVisitor.prototype.constructor = GrammarVisitor;

// Visit a parse tree produced by GrammarParser#chat.
GrammarVisitor.prototype.visitChat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#start.
GrammarVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#begin.
GrammarVisitor.prototype.visitBegin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#body.
GrammarVisitor.prototype.visitBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#equation.
GrammarVisitor.prototype.visitEquation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#matrix.
GrammarVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#matrix_line.
GrammarVisitor.prototype.visitMatrix_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#math_function.
GrammarVisitor.prototype.visitMath_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#math_function_def.
GrammarVisitor.prototype.visitMath_function_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#math_function_args.
GrammarVisitor.prototype.visitMath_function_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#operator.
GrammarVisitor.prototype.visitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#lesser_operator.
GrammarVisitor.prototype.visitLesser_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#lesser_equal_operator.
GrammarVisitor.prototype.visitLesser_equal_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#greater_operator.
GrammarVisitor.prototype.visitGreater_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#greater_equal_operator.
GrammarVisitor.prototype.visitGreater_equal_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#composed_operations.
GrammarVisitor.prototype.visitComposed_operations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#operation_element.
GrammarVisitor.prototype.visitOperation_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#base_member.
GrammarVisitor.prototype.visitBase_member = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#power_member.
GrammarVisitor.prototype.visitPower_member = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#priority_element.
GrammarVisitor.prototype.visitPriority_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#member.
GrammarVisitor.prototype.visitMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#variable.
GrammarVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#variable_lower_index.
GrammarVisitor.prototype.visitVariable_lower_index = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#index_elements.
GrammarVisitor.prototype.visitIndex_elements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#index_element.
GrammarVisitor.prototype.visitIndex_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integer.
GrammarVisitor.prototype.visitInteger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integer_positive_zero.
GrammarVisitor.prototype.visitInteger_positive_zero = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integer_negative.
GrammarVisitor.prototype.visitInteger_negative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#double_type.
GrammarVisitor.prototype.visitDouble_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#double_positive_zero.
GrammarVisitor.prototype.visitDouble_positive_zero = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#double_negative.
GrammarVisitor.prototype.visitDouble_negative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#factorial.
GrammarVisitor.prototype.visitFactorial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#single_argument_factorial.
GrammarVisitor.prototype.visitSingle_argument_factorial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#complex_argument_factorial.
GrammarVisitor.prototype.visitComplex_argument_factorial = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#factorial_element.
GrammarVisitor.prototype.visitFactorial_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integral.
GrammarVisitor.prototype.visitIntegral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#single_integral.
GrammarVisitor.prototype.visitSingle_integral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#double_integral.
GrammarVisitor.prototype.visitDouble_integral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#triple_integral.
GrammarVisitor.prototype.visitTriple_integral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integral_def.
GrammarVisitor.prototype.visitIntegral_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integral_lower_limit.
GrammarVisitor.prototype.visitIntegral_lower_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integral_upper_limit.
GrammarVisitor.prototype.visitIntegral_upper_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#integral_body.
GrammarVisitor.prototype.visitIntegral_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#trigonometry.
GrammarVisitor.prototype.visitTrigonometry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#normal.
GrammarVisitor.prototype.visitNormal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#inverse.
GrammarVisitor.prototype.visitInverse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#hyperbolic.
GrammarVisitor.prototype.visitHyperbolic = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#sin.
GrammarVisitor.prototype.visitSin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#cos.
GrammarVisitor.prototype.visitCos = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tan.
GrammarVisitor.prototype.visitTan = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#arcsin.
GrammarVisitor.prototype.visitArcsin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#arccos.
GrammarVisitor.prototype.visitArccos = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#arctan.
GrammarVisitor.prototype.visitArctan = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#sinh.
GrammarVisitor.prototype.visitSinh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#cosh.
GrammarVisitor.prototype.visitCosh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#tanh.
GrammarVisitor.prototype.visitTanh = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#trigonometric_function_args.
GrammarVisitor.prototype.visitTrigonometric_function_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#trigonometric_function_power.
GrammarVisitor.prototype.visitTrigonometric_function_power = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation.
GrammarVisitor.prototype.visitSummation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_lower_bound.
GrammarVisitor.prototype.visitSummation_lower_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_lower_body.
GrammarVisitor.prototype.visitSummation_lower_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_lower_single_line.
GrammarVisitor.prototype.visitSummation_lower_single_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_lower_bound_operators.
GrammarVisitor.prototype.visitSummation_lower_bound_operators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_lower_multiple_line.
GrammarVisitor.prototype.visitSummation_lower_multiple_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_upper_bound.
GrammarVisitor.prototype.visitSummation_upper_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_upper_body.
GrammarVisitor.prototype.visitSummation_upper_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#summation_body.
GrammarVisitor.prototype.visitSummation_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#logarithm.
GrammarVisitor.prototype.visitLogarithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#log.
GrammarVisitor.prototype.visitLog = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#ln.
GrammarVisitor.prototype.visitLn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#logarithm_lower_bound.
GrammarVisitor.prototype.visitLogarithm_lower_bound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#logarithm_body.
GrammarVisitor.prototype.visitLogarithm_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#sqrt.
GrammarVisitor.prototype.visitSqrt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#sqrt_root.
GrammarVisitor.prototype.visitSqrt_root = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#sqrt_body.
GrammarVisitor.prototype.visitSqrt_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#exponential.
GrammarVisitor.prototype.visitExponential = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#fraction.
GrammarVisitor.prototype.visitFraction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#numerator.
GrammarVisitor.prototype.visitNumerator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#denominator.
GrammarVisitor.prototype.visitDenominator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#fraction_member.
GrammarVisitor.prototype.visitFraction_member = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#end.
GrammarVisitor.prototype.visitEnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GrammarParser#environment.
GrammarVisitor.prototype.visitEnvironment = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GrammarVisitor = GrammarVisitor;