// Generated from Grammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#chat.
GrammarListener.prototype.enterChat = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#chat.
GrammarListener.prototype.exitChat = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#start.
GrammarListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#start.
GrammarListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#begin.
GrammarListener.prototype.enterBegin = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#begin.
GrammarListener.prototype.exitBegin = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#body.
GrammarListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#body.
GrammarListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#equation.
GrammarListener.prototype.enterEquation = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#equation.
GrammarListener.prototype.exitEquation = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#matrix.
GrammarListener.prototype.enterMatrix = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#matrix.
GrammarListener.prototype.exitMatrix = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#matrix_line.
GrammarListener.prototype.enterMatrix_line = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#matrix_line.
GrammarListener.prototype.exitMatrix_line = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#math_function.
GrammarListener.prototype.enterMath_function = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#math_function.
GrammarListener.prototype.exitMath_function = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#math_function_def.
GrammarListener.prototype.enterMath_function_def = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#math_function_def.
GrammarListener.prototype.exitMath_function_def = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#math_function_args.
GrammarListener.prototype.enterMath_function_args = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#math_function_args.
GrammarListener.prototype.exitMath_function_args = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#operator.
GrammarListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#operator.
GrammarListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#lesser_operator.
GrammarListener.prototype.enterLesser_operator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#lesser_operator.
GrammarListener.prototype.exitLesser_operator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#lesser_equal_operator.
GrammarListener.prototype.enterLesser_equal_operator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#lesser_equal_operator.
GrammarListener.prototype.exitLesser_equal_operator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#greater_operator.
GrammarListener.prototype.enterGreater_operator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#greater_operator.
GrammarListener.prototype.exitGreater_operator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#greater_equal_operator.
GrammarListener.prototype.enterGreater_equal_operator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#greater_equal_operator.
GrammarListener.prototype.exitGreater_equal_operator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#composed_operations.
GrammarListener.prototype.enterComposed_operations = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#composed_operations.
GrammarListener.prototype.exitComposed_operations = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#operation_element.
GrammarListener.prototype.enterOperation_element = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#operation_element.
GrammarListener.prototype.exitOperation_element = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#base_member.
GrammarListener.prototype.enterBase_member = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#base_member.
GrammarListener.prototype.exitBase_member = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#power_member.
GrammarListener.prototype.enterPower_member = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#power_member.
GrammarListener.prototype.exitPower_member = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#priority_element.
GrammarListener.prototype.enterPriority_element = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#priority_element.
GrammarListener.prototype.exitPriority_element = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#member.
GrammarListener.prototype.enterMember = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#member.
GrammarListener.prototype.exitMember = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#variable.
GrammarListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#variable.
GrammarListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#variable_lower_index.
GrammarListener.prototype.enterVariable_lower_index = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#variable_lower_index.
GrammarListener.prototype.exitVariable_lower_index = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#index_elements.
GrammarListener.prototype.enterIndex_elements = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#index_elements.
GrammarListener.prototype.exitIndex_elements = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#index_element.
GrammarListener.prototype.enterIndex_element = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#index_element.
GrammarListener.prototype.exitIndex_element = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integer.
GrammarListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integer.
GrammarListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integer_positive_zero.
GrammarListener.prototype.enterInteger_positive_zero = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integer_positive_zero.
GrammarListener.prototype.exitInteger_positive_zero = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integer_negative.
GrammarListener.prototype.enterInteger_negative = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integer_negative.
GrammarListener.prototype.exitInteger_negative = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#double_type.
GrammarListener.prototype.enterDouble_type = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#double_type.
GrammarListener.prototype.exitDouble_type = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#double_positive_zero.
GrammarListener.prototype.enterDouble_positive_zero = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#double_positive_zero.
GrammarListener.prototype.exitDouble_positive_zero = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#double_negative.
GrammarListener.prototype.enterDouble_negative = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#double_negative.
GrammarListener.prototype.exitDouble_negative = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#factorial.
GrammarListener.prototype.enterFactorial = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#factorial.
GrammarListener.prototype.exitFactorial = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#single_argument_factorial.
GrammarListener.prototype.enterSingle_argument_factorial = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#single_argument_factorial.
GrammarListener.prototype.exitSingle_argument_factorial = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#complex_argument_factorial.
GrammarListener.prototype.enterComplex_argument_factorial = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#complex_argument_factorial.
GrammarListener.prototype.exitComplex_argument_factorial = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#factorial_element.
GrammarListener.prototype.enterFactorial_element = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#factorial_element.
GrammarListener.prototype.exitFactorial_element = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integral.
GrammarListener.prototype.enterIntegral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integral.
GrammarListener.prototype.exitIntegral = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#single_integral.
GrammarListener.prototype.enterSingle_integral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#single_integral.
GrammarListener.prototype.exitSingle_integral = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#double_integral.
GrammarListener.prototype.enterDouble_integral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#double_integral.
GrammarListener.prototype.exitDouble_integral = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#triple_integral.
GrammarListener.prototype.enterTriple_integral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#triple_integral.
GrammarListener.prototype.exitTriple_integral = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integral_def.
GrammarListener.prototype.enterIntegral_def = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integral_def.
GrammarListener.prototype.exitIntegral_def = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integral_lower_limit.
GrammarListener.prototype.enterIntegral_lower_limit = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integral_lower_limit.
GrammarListener.prototype.exitIntegral_lower_limit = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integral_upper_limit.
GrammarListener.prototype.enterIntegral_upper_limit = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integral_upper_limit.
GrammarListener.prototype.exitIntegral_upper_limit = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#integral_body.
GrammarListener.prototype.enterIntegral_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#integral_body.
GrammarListener.prototype.exitIntegral_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#trigonometry.
GrammarListener.prototype.enterTrigonometry = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#trigonometry.
GrammarListener.prototype.exitTrigonometry = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#normal.
GrammarListener.prototype.enterNormal = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#normal.
GrammarListener.prototype.exitNormal = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#inverse.
GrammarListener.prototype.enterInverse = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#inverse.
GrammarListener.prototype.exitInverse = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#hyperbolic.
GrammarListener.prototype.enterHyperbolic = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#hyperbolic.
GrammarListener.prototype.exitHyperbolic = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#sin.
GrammarListener.prototype.enterSin = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#sin.
GrammarListener.prototype.exitSin = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#cos.
GrammarListener.prototype.enterCos = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#cos.
GrammarListener.prototype.exitCos = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tan.
GrammarListener.prototype.enterTan = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tan.
GrammarListener.prototype.exitTan = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#arcsin.
GrammarListener.prototype.enterArcsin = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#arcsin.
GrammarListener.prototype.exitArcsin = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#arccos.
GrammarListener.prototype.enterArccos = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#arccos.
GrammarListener.prototype.exitArccos = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#arctan.
GrammarListener.prototype.enterArctan = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#arctan.
GrammarListener.prototype.exitArctan = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#sinh.
GrammarListener.prototype.enterSinh = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#sinh.
GrammarListener.prototype.exitSinh = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#cosh.
GrammarListener.prototype.enterCosh = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#cosh.
GrammarListener.prototype.exitCosh = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#tanh.
GrammarListener.prototype.enterTanh = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#tanh.
GrammarListener.prototype.exitTanh = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#trigonometric_function_args.
GrammarListener.prototype.enterTrigonometric_function_args = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#trigonometric_function_args.
GrammarListener.prototype.exitTrigonometric_function_args = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#trigonometric_function_power.
GrammarListener.prototype.enterTrigonometric_function_power = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#trigonometric_function_power.
GrammarListener.prototype.exitTrigonometric_function_power = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation.
GrammarListener.prototype.enterSummation = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation.
GrammarListener.prototype.exitSummation = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_lower_bound.
GrammarListener.prototype.enterSummation_lower_bound = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_lower_bound.
GrammarListener.prototype.exitSummation_lower_bound = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_lower_body.
GrammarListener.prototype.enterSummation_lower_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_lower_body.
GrammarListener.prototype.exitSummation_lower_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_lower_single_line.
GrammarListener.prototype.enterSummation_lower_single_line = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_lower_single_line.
GrammarListener.prototype.exitSummation_lower_single_line = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_lower_bound_operators.
GrammarListener.prototype.enterSummation_lower_bound_operators = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_lower_bound_operators.
GrammarListener.prototype.exitSummation_lower_bound_operators = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_lower_multiple_line.
GrammarListener.prototype.enterSummation_lower_multiple_line = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_lower_multiple_line.
GrammarListener.prototype.exitSummation_lower_multiple_line = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_upper_bound.
GrammarListener.prototype.enterSummation_upper_bound = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_upper_bound.
GrammarListener.prototype.exitSummation_upper_bound = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_upper_body.
GrammarListener.prototype.enterSummation_upper_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_upper_body.
GrammarListener.prototype.exitSummation_upper_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#summation_body.
GrammarListener.prototype.enterSummation_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#summation_body.
GrammarListener.prototype.exitSummation_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#logarithm.
GrammarListener.prototype.enterLogarithm = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#logarithm.
GrammarListener.prototype.exitLogarithm = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#log.
GrammarListener.prototype.enterLog = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#log.
GrammarListener.prototype.exitLog = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#ln.
GrammarListener.prototype.enterLn = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#ln.
GrammarListener.prototype.exitLn = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#logarithm_lower_bound.
GrammarListener.prototype.enterLogarithm_lower_bound = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#logarithm_lower_bound.
GrammarListener.prototype.exitLogarithm_lower_bound = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#logarithm_body.
GrammarListener.prototype.enterLogarithm_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#logarithm_body.
GrammarListener.prototype.exitLogarithm_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#sqrt.
GrammarListener.prototype.enterSqrt = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#sqrt.
GrammarListener.prototype.exitSqrt = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#sqrt_root.
GrammarListener.prototype.enterSqrt_root = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#sqrt_root.
GrammarListener.prototype.exitSqrt_root = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#sqrt_body.
GrammarListener.prototype.enterSqrt_body = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#sqrt_body.
GrammarListener.prototype.exitSqrt_body = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#exponential.
GrammarListener.prototype.enterExponential = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#exponential.
GrammarListener.prototype.exitExponential = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fraction.
GrammarListener.prototype.enterFraction = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fraction.
GrammarListener.prototype.exitFraction = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#numerator.
GrammarListener.prototype.enterNumerator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#numerator.
GrammarListener.prototype.exitNumerator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#denominator.
GrammarListener.prototype.enterDenominator = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#denominator.
GrammarListener.prototype.exitDenominator = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#fraction_member.
GrammarListener.prototype.enterFraction_member = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#fraction_member.
GrammarListener.prototype.exitFraction_member = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#end.
GrammarListener.prototype.enterEnd = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#end.
GrammarListener.prototype.exitEnd = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#environment.
GrammarListener.prototype.enterEnvironment = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#environment.
GrammarListener.prototype.exitEnvironment = function(ctx) {
};



exports.GrammarListener = GrammarListener;