grammar Grammar;

/* This is the amsmath v2.1(LateX math package) grammar for the parser of MaTheX2Java. */

/* ---------------------------------------
 *              Parser Rules
 --------------------------------------- */

chat 
    : (start body end NEWLINE_TAG*)+ EOF ;

// start 

start 
    : NEWLINE_TAG* begin;

begin:
    BEGIN CURLY_LF environment CURLY_RT NEWLINE_TAG+;   

// body

body 
    : (equation 
    | matrix 
    | math_function) NEWLINE_TAG+;

// -- equation --

equation 
    : VARNAME EQUAL composed_operations;

// -- matrix --

matrix 
    : matrix_line (BREAKLINE matrix_line)* ;

matrix_line 
    : member (JOIN member)*;

// -- math function --

math_function 
    :  math_function_def EQUAL composed_operations;

math_function_def 
    : VARNAME PARENTHESIS_LF math_function_args PARENTHESIS_RT;

math_function_args 
    //: member (COMMA member)*;     // this will be implemented to another release(allow every thing to become a paramenter of an invoking arg!)
    : (INTEGER | VARNAME | DOUBLE) (COMMA (INTEGER | VARNAME | DOUBLE))*;       // this is just a temporary solution

// -- operator -- 

operator 
    : PLUS 
    | MINUS 
    | MULTIPLICATION 
    | DIVISION;

lesser_operator 
    : LESSER_SYMBOL | LT_TAG | LNEQ_TAG | LNEQQ_TAG;

lesser_equal_operator 
    : LESSER_SYMBOL | LE_TAG | LEQ_TAG | LEQQ_TAG | LEQSLANT_TAG; 

greater_operator 
    : GREATER_SYMBOL | GT_TAG | GNEQ_TAG | GNEQQ_TAG;

greater_equal_operator 
    : GREATER_EQUAL_SYMBOL | GEQ_TAG | GEQQ_TAG | GEQSLANT_TAG;

// -- operations --

composed_operations
    : operation_element (operator operation_element)*;

operation_element 
    : base_member (HAT power_member)?;

base_member
    : member 
    | priority_element;

power_member
    : CURLY_LF composed_operations CURLY_RT;

priority_element 
    : PARENTHESIS_LF composed_operations PARENTHESIS_RT; 

member 
    : 
    | integer
    | double_type
    | variable
    | factorial
    | math_function_def 
    | fraction  
    | exponential 
    | sqrt 
    | trigonometry 
    | summation 
    | logarithm 
    | integral;

// -- variable --

variable: VARNAME (variable_lower_index)?;

variable_lower_index: UNDERSCORE CURLY_LF index_elements CURLY_RT;

index_elements : index_element (COMMA index_element)*;

index_element : INTEGER | VARNAME;

// -- integer --

integer : integer_positive_zero | integer_negative;

integer_positive_zero : INTEGER;

integer_negative : PARENTHESIS_LF MINUS INTEGER PARENTHESIS_RT;

// -- double --

double_type : double_positive_zero | double_negative;

double_positive_zero : DOUBLE;

double_negative :  PARENTHESIS_LF MINUS DOUBLE PARENTHESIS_RT;

// -- factorial --

factorial: (single_argument_factorial | complex_argument_factorial) FACTORIAL_SYMBOL;

single_argument_factorial: factorial_element;

complex_argument_factorial: PARENTHESIS_LF factorial_element (operator factorial_element)+ PARENTHESIS_RT;

factorial_element : INTEGER | VARNAME;

// -- integral --

integral
    : single_integral
    | double_integral
    | triple_integral;

single_integral
    : INT_TAG integral_def;

double_integral
    : IINT_TAG integral_def;

triple_integral
    : IIINT_TAG integral_def;

integral_def
    : integral_lower_limit integral_upper_limit integral_body;

integral_lower_limit
    : UNDERSCORE CURLY_LF composed_operations CURLY_RT;

integral_upper_limit
    : HAT CURLY_LF composed_operations CURLY_RT;

integral_body
    : CURLY_LF composed_operations CURLY_RT;

// -- trigonometry --

trigonometry 
    : normal 
    | inverse 
    | hyperbolic;

normal 
    : sin 
    | cos 
    | tan;

inverse 
    : arcsin 
    | arccos 
    | arctan;

hyperbolic 
    : sinh 
    | cosh 
    | tanh;

sin 
    : SIN_TAG trigonometric_function_args;

cos 
    : COS_TAG trigonometric_function_args;

tan 
    : TAN_TAG trigonometric_function_args;

arcsin 
    : ARCSIN_TAG trigonometric_function_args;

arccos 
    : ARCCOS_TAG trigonometric_function_args;

arctan 
    : ARCTAN_TAG trigonometric_function_args;

sinh 
    : SINH_TAG trigonometric_function_args;

cosh 
    : COSH_TAG trigonometric_function_args;

tanh 
    : TANH_TAG trigonometric_function_args;

trigonometric_function_args 
    : (trigonometric_function_power)? CURLY_LF composed_operations CURLY_RT;

trigonometric_function_power 
    : HAT (VARNAME | INTEGER);

// -- summation --

summation 
    : SUMMATION_TAG summation_lower_bound summation_upper_bound summation_body;

summation_lower_bound 
    : UNDERSCORE CURLY_LF summation_lower_body CURLY_RT;

summation_lower_body 
    : summation_lower_single_line | summation_lower_multiple_line;

summation_lower_single_line 
    : (VARNAME | INTEGER) (summation_lower_bound_operators (VARNAME | INTEGER))*;

summation_lower_bound_operators 
    : EQUAL | lesser_operator | lesser_equal_operator | greater_operator | greater_equal_operator;

summation_lower_multiple_line 
    : SUBSTACK_TAG CURLY_LF summation_lower_single_line (BREAKLINE summation_lower_single_line)+ CURLY_RT;

summation_upper_bound 
    : HAT CURLY_LF summation_upper_body CURLY_RT;

summation_upper_body 
    : (INTEGER | VARNAME | INFINITY_TAG);

summation_body 
    : CURLY_LF composed_operations CURLY_RT;

// -- logarithm --

logarithm 
    : log 
    | ln;

log 
    : LOG_TAG (logarithm_lower_bound)? logarithm_body;

ln 
    : LN_TAG (logarithm_lower_bound)? logarithm_body;

logarithm_lower_bound 
    : UNDERSCORE CURLY_LF (VARNAME | INTEGER) CURLY_RT;

logarithm_body 
    : CURLY_LF composed_operations CURLY_RT;

// -- square root --

sqrt 
    : SQRT_TAG (sqrt_root)? CURLY_LF sqrt_body CURLY_RT;

sqrt_root 
    : BRACKET_LF (VARNAME | INTEGER) BRACKET_RT;

sqrt_body 
    : composed_operations;

// -- exponential --

exponential 
    : (EULER_NUMBER HAT | EXP_TAG) CURLY_LF composed_operations CURLY_RT;

// -- fraction --

fraction 
    : FRAC_TAG numerator denominator;

numerator
    : fraction_member;

denominator
    : fraction_member;

fraction_member
    : CURLY_LF composed_operations CURLY_RT;

//  end

end 
    : END CURLY_LF environment CURLY_RT ;

environment 
    : EQUATION 
    | EQUATION_STAR 
    | MATRIX ;

/* ---------------------------------------
 *              Lexer Rules
 --------------------------------------- */

// --- TAGS ---

EXP_TAG : '\\exp';

FRAC_TAG : '\\frac';

SQRT_TAG : '\\sqrt';

SUMMATION_TAG : '\\sum';

INFINITY_TAG : '\\infty';

SUBSTACK_TAG : '\\substack';

SIN_TAG : '\\sin';

COS_TAG : '\\cos';

TAN_TAG : '\\tan';

ARCSIN_TAG : '\\arcsin';

ARCCOS_TAG : '\\arccos';

ARCTAN_TAG : '\\arctan';

SINH_TAG : '\\sinh';

COSH_TAG : '\\cosh';

TANH_TAG : '\\tanh';

LOG_TAG : '\\log';

LN_TAG : '\\ln';

INT_TAG : '\\int';

IINT_TAG : '\\iint';

IIINT_TAG : '\\iiint';

LT_TAG : '\\lt';

LNEQ_TAG : '\\lneq';

LNEQQ_TAG : '\\lneqq';

LE_TAG : '\\le';

LEQ_TAG : '\\leq';

LEQQ_TAG : '\\leqq';

LEQSLANT_TAG : '\\leqslant';

GT_TAG : '\\gt';

GNEQ_TAG : '\\gneq';

GNEQQ_TAG : '\\gneqq';

GEQ_TAG : '\\geq';

GEQQ_TAG : '\\geqq';

GEQSLANT_TAG : '\\geqslant';

BEGIN : '\\begin';

END : '\\end';

// --- Environments ---

EQUATION : 'equation';

EQUATION_STAR : 'equation*';

MATRIX : 'matrix';

// --- Special Symbols --- //

LESSER_SYMBOL : '<';

LESS_EQUAL_SYMBOL : '<=';

GREATER_SYMBOL : '>';

GREATER_EQUAL_SYMBOL : '>=';

FACTORIAL_SYMBOL : '!';

JOIN : '&';

CURLY_LF : '{';

CURLY_RT : '}';

UNDERSCORE : '_';

BREAKLINE : '\\\\';

EULER_NUMBER : 'e';

BRACKET_LF : '[';

BRACKET_RT : ']';

PARENTHESIS_LF : '(';

PARENTHESIS_RT : ')';

HAT : '^';

COMMA : ',';

VARNAME : [A-Za-z] ([a-zA-Z0-9_]* [a-zA-Z0-9])?;       // A variable name has to start with a letter. It can't start or end with an underscore. 

EQUAL : '=';

INTEGER : [0-9]+;

DOUBLE : [0-9]+ '.' [0-9]+;

PLUS : '+';

MINUS : '-';

MULTIPLICATION : MULTIPLICATION_TAGS;

fragment MULTIPLICATION_TAGS : '*' | '\\times';

DIVISION : '/';

NEWLINE_TAG : NEWLINE;

fragment NEWLINE : '\r' '\n' | '\n' | '\r';

// Skip Rules

COMMENT: '%' .*? (('\r')? '\n')+ -> skip;

WS: [ \t]+ -> skip;

