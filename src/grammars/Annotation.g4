grammar Annotation;

/* This grammar is responsible for getting the type of the variables of the input code. It ignores all code.
   Its main responsibility is to collect all annotations within the comments (variables type and equation name)*/

/* ---------------------------------------
 *              Parser Rules
 --------------------------------------- */

run: (method_specs start (variable_specs)? to_ignore '\\n'*)+ EOF;

method_specs : 
    (name_spec? return_spec?) | (return_spec? name_spec?);

name_spec:
    NEWLINE_TAG* COMMENT_TAG NAME_TAG COLON_TAG VARNAME NEWLINE_TAG+;

return_spec:
    NEWLINE_TAG* COMMENT_TAG RETURN_TAG COLON_TAG return_type NEWLINE_TAG+;

return_type:
    INT
    | DOUBLE
    | SHORT
    | LONG;

start :
    NEWLINE_TAG* BEGIN_TAG NEWLINE_TAG+;

variable_specs :
    new_line_declaration+;

new_line_declaration:
    COMMENT_TAG variables_type_declaration (COMMA_TAG variables_type_declaration)? NEWLINE_TAG+;

variables_type_declaration:
    BRACKET_LF variables BRACKET_RT COLON_TAG variables_type;

variables :
    VARNAME (COMMA_TAG VARNAME)?;

variables_type :
    (REAL | SHORT | INT | FLOAT | DOUBLE)(array)?;

array :
    array_dimension+;

array_dimension :
    BRACKET_LF INTEGER BRACKET_RT;

to_ignore :
    (. 
    | ARCCOS_TAG 
    | ARCSIN_TAG 
    | BRACKET_LF 
    | BRACKET_RT 
    | BREAKLINE 
    | COLON_TAG 
    | COMMA_TAG 
    | COMMENT_TAG 
    | COS_TAG 
    | COSH_TAG 
    | CURLY_LF 
    | CURLY_RT 
    | DOT_SYMBOL
    | DIVISION 
    | EQUAL 
    | EULER_NUMBER
    | EXP_TAG 
    | FRAC_TAG 
    | FACTORIAL_SYMBOL
    | GEQ_TAG 
    | GEQQ_TAG 
    | GEQSLANT_TAG 
    | GNEQ_TAG 
    | GNEQQ_TAG 
    | GREATER_EQUAL_SYMBOL
    | GREATER_SYMBOL 
    | GT_TAG 
    | HAT 
    | IIINT_TAG 
    | IINT_TAG 
    | INT_TAG 
    | JOIN 
    | LE_TAG 
    | LEQ_TAG 
    | LEQQ_TAG 
    | LEQSLANT_TAG 
    | LESS_EQUAL_SYMBOL 
    | LESSER_SYMBOL 
    | LN_TAG 
    | LNEQ_TAG 
    | LNEQQ_TAG 
    | LOG_TAG 
    | LT_TAG 
    | MINUS
    | MULTIPLICATION 
    | PARENTHESIS_LF 
    | PARENTHESIS_RT 
    | PLUS 
    | SIN_TAG 
    | SINH_TAG 
    | SQRT_TAG 
    | SUBSTACK_TAG 
    | SUMMATION_TAG 
    | TAN_TAG 
    | TANH_TAG 
    | UNDERSCORE )*?;

end :  
    END_TAG;

/* ---------------------------------------
 *              Lexer Rules
 --------------------------------------- */

// --- Variables Types ---

// -- REAL

REAL : REAL_TAGS;

fragment REAL_TAGS : 'real' | 'REAL';

// -- SHORT  

SHORT : SHORT_TAGS;

fragment SHORT_TAGS : 'short' | 'SHORT';

// -- INT 

INT : INT_TAGS;

fragment INT_TAGS : 'int' | 'INT';

// -- FLOAT 

FLOAT : FLOAT_TAGS;

fragment FLOAT_TAGS : 'float' | 'FLOAT';

// -- DOUBLE 

DOUBLE : DOUBLE_TAGS;

fragment DOUBLE_TAGS : 'double' | 'DOUBLE';

// -- LONG 

LONG : LONG_TAGS;

fragment LONG_TAGS : 'long' | 'LONG';

// -- NAME

NAME_TAG : NAME_TAGS;

fragment NAME_TAGS : 'name' | 'NAME';

// -- RETURN

RETURN_TAG : RETURN_TAGS;

fragment RETURN_TAGS : 'return' | 'RETURN';

VARNAME : [A-Za-z] [a-zA-Z0-9_]*;           // A variable name has to start with a letter. 

INTEGER : [0-9]+;

// -- Tags --

BEGIN_TAG : '\\begin';

END_TAG : '\\end';

NEWLINE_TAG : NEWLINE;

fragment NEWLINE : '\r' '\n' | '\n' | '\r';

COMMENT_TAG : '%';

EXP_TAG : '\\exp';

FRAC_TAG : '\\frac';

SQRT_TAG : '\\sqrt';

SUMMATION_TAG : '\\sum';

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

CURLY_LF : '{';

CURLY_RT : '}';

BRACKET_LF : '[';

BRACKET_RT : ']';

SINGLE_QUOTE_TAG : '\'';

COLON_TAG : ':';

COMMA_TAG : ',';

DOT_SYMBOL: '.';

LESSER_SYMBOL : '<';

LESS_EQUAL_SYMBOL : '<=';

GREATER_SYMBOL : '>';

GREATER_EQUAL_SYMBOL : '>=';

FACTORIAL_SYMBOL : '!';

JOIN : '&';

UNDERSCORE : '_';

BREAKLINE : '\\\\';

EULER_NUMBER : 'e';

PARENTHESIS_LF : '(';

PARENTHESIS_RT : ')';

HAT : '^';

EQUAL : '=';

PLUS : '+';

MINUS : '-';

MULTIPLICATION : MULTIPLICATION_TAGS;

fragment MULTIPLICATION_TAGS : '*' | '\\times';

DIVISION : '/';

// -- Skip --

ENVIRONMENT_IGNORE : CURLY_LF .*? CURLY_RT -> skip;

WS: [ \t]+ -> skip;

