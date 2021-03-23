// Generated from /Users/francisco/Documents/FEUP/Projetos/COMP/Math2Code/generation/grammars/Grammar.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EXP_TAG=1, FRAC_TAG=2, SQRT_TAG=3, SUMMATION_TAG=4, INFINITY_TAG=5, SUBSTACK_TAG=6, 
		SIN_TAG=7, COS_TAG=8, TAN_TAG=9, ARCSIN_TAG=10, ARCCOS_TAG=11, ARCTAN_TAG=12, 
		SINH_TAG=13, COSH_TAG=14, TANH_TAG=15, LOG_TAG=16, LN_TAG=17, INT_TAG=18, 
		IINT_TAG=19, IIINT_TAG=20, LT_TAG=21, LNEQ_TAG=22, LNEQQ_TAG=23, LE_TAG=24, 
		LEQ_TAG=25, LEQQ_TAG=26, LEQSLANT_TAG=27, GT_TAG=28, GNEQ_TAG=29, GNEQQ_TAG=30, 
		GEQ_TAG=31, GEQQ_TAG=32, GEQSLANT_TAG=33, BEGIN=34, END=35, EQUATION=36, 
		EQUATION_STAR=37, MATRIX=38, LESSER_SYMBOL=39, LESS_EQUAL_SYMBOL=40, GREATER_SYMBOL=41, 
		GREATER_EQUAL_SYMBOL=42, FACTORIAL_SYMBOL=43, JOIN=44, CURLY_LF=45, CURLY_RT=46, 
		UNDERSCORE=47, BREAKLINE=48, EULER_NUMBER=49, BRACKET_LF=50, BRACKET_RT=51, 
		PARENTHESIS_LF=52, PARENTHESIS_RT=53, HAT=54, COMMA=55, VARNAME=56, EQUAL=57, 
		INTEGER=58, DOUBLE=59, PLUS=60, MINUS=61, MULTIPLICATION=62, DIVISION=63, 
		NEWLINE_TAG=64, COMMENT=65, WS=66;
	public static final int
		RULE_chat = 0, RULE_start = 1, RULE_begin = 2, RULE_body = 3, RULE_equation = 4, 
		RULE_matrix = 5, RULE_matrix_line = 6, RULE_math_function = 7, RULE_math_function_def = 8, 
		RULE_math_function_args = 9, RULE_operator = 10, RULE_lesser_operator = 11, 
		RULE_lesser_equal_operator = 12, RULE_greater_operator = 13, RULE_greater_equal_operator = 14, 
		RULE_composed_operations = 15, RULE_operation_element = 16, RULE_base_member = 17, 
		RULE_power_member = 18, RULE_priority_element = 19, RULE_member = 20, 
		RULE_variable = 21, RULE_variable_lower_index = 22, RULE_index_elements = 23, 
		RULE_index_element = 24, RULE_integer = 25, RULE_integer_positive_zero = 26, 
		RULE_integer_negative = 27, RULE_double_type = 28, RULE_double_positive_zero = 29, 
		RULE_double_negative = 30, RULE_factorial = 31, RULE_single_argument_factorial = 32, 
		RULE_complex_argument_factorial = 33, RULE_factorial_element = 34, RULE_integral = 35, 
		RULE_single_integral = 36, RULE_double_integral = 37, RULE_triple_integral = 38, 
		RULE_integral_def = 39, RULE_integral_lower_limit = 40, RULE_integral_upper_limit = 41, 
		RULE_integral_body = 42, RULE_trigonometry = 43, RULE_normal = 44, RULE_inverse = 45, 
		RULE_hyperbolic = 46, RULE_sin = 47, RULE_cos = 48, RULE_tan = 49, RULE_arcsin = 50, 
		RULE_arccos = 51, RULE_arctan = 52, RULE_sinh = 53, RULE_cosh = 54, RULE_tanh = 55, 
		RULE_trigonometric_function_args = 56, RULE_trigonometric_function_power = 57, 
		RULE_summation = 58, RULE_summation_lower_bound = 59, RULE_summation_lower_body = 60, 
		RULE_summation_lower_single_line = 61, RULE_summation_lower_bound_operators = 62, 
		RULE_summation_lower_multiple_line = 63, RULE_summation_upper_bound = 64, 
		RULE_summation_upper_body = 65, RULE_summation_body = 66, RULE_logarithm = 67, 
		RULE_log = 68, RULE_ln = 69, RULE_logarithm_lower_bound = 70, RULE_logarithm_body = 71, 
		RULE_sqrt = 72, RULE_sqrt_root = 73, RULE_sqrt_body = 74, RULE_exponential = 75, 
		RULE_fraction = 76, RULE_numerator = 77, RULE_denominator = 78, RULE_fraction_member = 79, 
		RULE_end = 80, RULE_environment = 81;
	public static final String[] ruleNames = {
		"chat", "start", "begin", "body", "equation", "matrix", "matrix_line", 
		"math_function", "math_function_def", "math_function_args", "operator", 
		"lesser_operator", "lesser_equal_operator", "greater_operator", "greater_equal_operator", 
		"composed_operations", "operation_element", "base_member", "power_member", 
		"priority_element", "member", "variable", "variable_lower_index", "index_elements", 
		"index_element", "integer", "integer_positive_zero", "integer_negative", 
		"double_type", "double_positive_zero", "double_negative", "factorial", 
		"single_argument_factorial", "complex_argument_factorial", "factorial_element", 
		"integral", "single_integral", "double_integral", "triple_integral", "integral_def", 
		"integral_lower_limit", "integral_upper_limit", "integral_body", "trigonometry", 
		"normal", "inverse", "hyperbolic", "sin", "cos", "tan", "arcsin", "arccos", 
		"arctan", "sinh", "cosh", "tanh", "trigonometric_function_args", "trigonometric_function_power", 
		"summation", "summation_lower_bound", "summation_lower_body", "summation_lower_single_line", 
		"summation_lower_bound_operators", "summation_lower_multiple_line", "summation_upper_bound", 
		"summation_upper_body", "summation_body", "logarithm", "log", "ln", "logarithm_lower_bound", 
		"logarithm_body", "sqrt", "sqrt_root", "sqrt_body", "exponential", "fraction", 
		"numerator", "denominator", "fraction_member", "end", "environment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'\\exp'", "'\\frac'", "'\\sqrt'", "'\\sum'", "'\\infty'", "'\\substack'", 
		"'\\sin'", "'\\cos'", "'\\tan'", "'\\arcsin'", "'\\arccos'", "'\\arctan'", 
		"'\\sinh'", "'\\cosh'", "'\\tanh'", "'\\log'", "'\\ln'", "'\\int'", "'\\iint'", 
		"'\\iiint'", "'\\lt'", "'\\lneq'", "'\\lneqq'", "'\\le'", "'\\leq'", "'\\leqq'", 
		"'\\leqslant'", "'\\gt'", "'\\gneq'", "'\\gneqq'", "'\\geq'", "'\\geqq'", 
		"'\\geqslant'", "'\\begin'", "'\\end'", "'equation'", "'equation*'", "'matrix'", 
		"'<'", "'<='", "'>'", "'>='", "'!'", "'&'", "'{'", "'}'", "'_'", "'\\\\'", 
		"'e'", "'['", "']'", "'('", "')'", "'^'", "','", null, "'='", null, null, 
		"'+'", "'-'", null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", "INFINITY_TAG", 
		"SUBSTACK_TAG", "SIN_TAG", "COS_TAG", "TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", 
		"ARCTAN_TAG", "SINH_TAG", "COSH_TAG", "TANH_TAG", "LOG_TAG", "LN_TAG", 
		"INT_TAG", "IINT_TAG", "IIINT_TAG", "LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", 
		"LE_TAG", "LEQ_TAG", "LEQQ_TAG", "LEQSLANT_TAG", "GT_TAG", "GNEQ_TAG", 
		"GNEQQ_TAG", "GEQ_TAG", "GEQQ_TAG", "GEQSLANT_TAG", "BEGIN", "END", "EQUATION", 
		"EQUATION_STAR", "MATRIX", "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", "GREATER_SYMBOL", 
		"GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", "JOIN", "CURLY_LF", "CURLY_RT", 
		"UNDERSCORE", "BREAKLINE", "EULER_NUMBER", "BRACKET_LF", "BRACKET_RT", 
		"PARENTHESIS_LF", "PARENTHESIS_RT", "HAT", "COMMA", "VARNAME", "EQUAL", 
		"INTEGER", "DOUBLE", "PLUS", "MINUS", "MULTIPLICATION", "DIVISION", "NEWLINE_TAG", 
		"COMMENT", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ChatContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(GrammarParser.EOF, 0); }
		public List<StartContext> start() {
			return getRuleContexts(StartContext.class);
		}
		public StartContext start(int i) {
			return getRuleContext(StartContext.class,i);
		}
		public List<BodyContext> body() {
			return getRuleContexts(BodyContext.class);
		}
		public BodyContext body(int i) {
			return getRuleContext(BodyContext.class,i);
		}
		public List<EndContext> end() {
			return getRuleContexts(EndContext.class);
		}
		public EndContext end(int i) {
			return getRuleContext(EndContext.class,i);
		}
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(GrammarParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(GrammarParser.NEWLINE_TAG, i);
		}
		public ChatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chat; }
	}

	public final ChatContext chat() throws RecognitionException {
		ChatContext _localctx = new ChatContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_chat);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(173); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(164);
				start();
				setState(165);
				body();
				setState(166);
				end();
				setState(170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(167);
						match(NEWLINE_TAG);
						}
						} 
					}
					setState(172);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				}
				}
				}
				setState(175); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==BEGIN || _la==NEWLINE_TAG );
			setState(177);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StartContext extends ParserRuleContext {
		public BeginContext begin() {
			return getRuleContext(BeginContext.class,0);
		}
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(GrammarParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(GrammarParser.NEWLINE_TAG, i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE_TAG) {
				{
				{
				setState(179);
				match(NEWLINE_TAG);
				}
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(185);
			begin();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BeginContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(GrammarParser.BEGIN, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public EnvironmentContext environment() {
			return getRuleContext(EnvironmentContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(GrammarParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(GrammarParser.NEWLINE_TAG, i);
		}
		public BeginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_begin; }
	}

	public final BeginContext begin() throws RecognitionException {
		BeginContext _localctx = new BeginContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_begin);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(BEGIN);
			setState(188);
			match(CURLY_LF);
			setState(189);
			environment();
			setState(190);
			match(CURLY_RT);
			setState(192); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(191);
					match(NEWLINE_TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(194); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BodyContext extends ParserRuleContext {
		public EquationContext equation() {
			return getRuleContext(EquationContext.class,0);
		}
		public MatrixContext matrix() {
			return getRuleContext(MatrixContext.class,0);
		}
		public Math_functionContext math_function() {
			return getRuleContext(Math_functionContext.class,0);
		}
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(GrammarParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(GrammarParser.NEWLINE_TAG, i);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(196);
				equation();
				}
				break;
			case 2:
				{
				setState(197);
				matrix();
				}
				break;
			case 3:
				{
				setState(198);
				math_function();
				}
				break;
			}
			setState(202); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(201);
				match(NEWLINE_TAG);
				}
				}
				setState(204); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NEWLINE_TAG );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EquationContext extends ParserRuleContext {
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode EQUAL() { return getToken(GrammarParser.EQUAL, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public EquationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equation; }
	}

	public final EquationContext equation() throws RecognitionException {
		EquationContext _localctx = new EquationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_equation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(VARNAME);
			setState(207);
			match(EQUAL);
			setState(208);
			composed_operations();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MatrixContext extends ParserRuleContext {
		public List<Matrix_lineContext> matrix_line() {
			return getRuleContexts(Matrix_lineContext.class);
		}
		public Matrix_lineContext matrix_line(int i) {
			return getRuleContext(Matrix_lineContext.class,i);
		}
		public List<TerminalNode> BREAKLINE() { return getTokens(GrammarParser.BREAKLINE); }
		public TerminalNode BREAKLINE(int i) {
			return getToken(GrammarParser.BREAKLINE, i);
		}
		public MatrixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matrix; }
	}

	public final MatrixContext matrix() throws RecognitionException {
		MatrixContext _localctx = new MatrixContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_matrix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			matrix_line();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BREAKLINE) {
				{
				{
				setState(211);
				match(BREAKLINE);
				setState(212);
				matrix_line();
				}
				}
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Matrix_lineContext extends ParserRuleContext {
		public List<MemberContext> member() {
			return getRuleContexts(MemberContext.class);
		}
		public MemberContext member(int i) {
			return getRuleContext(MemberContext.class,i);
		}
		public List<TerminalNode> JOIN() { return getTokens(GrammarParser.JOIN); }
		public TerminalNode JOIN(int i) {
			return getToken(GrammarParser.JOIN, i);
		}
		public Matrix_lineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matrix_line; }
	}

	public final Matrix_lineContext matrix_line() throws RecognitionException {
		Matrix_lineContext _localctx = new Matrix_lineContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_matrix_line);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			member();
			setState(223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==JOIN) {
				{
				{
				setState(219);
				match(JOIN);
				setState(220);
				member();
				}
				}
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_functionContext extends ParserRuleContext {
		public Math_function_defContext math_function_def() {
			return getRuleContext(Math_function_defContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(GrammarParser.EQUAL, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public Math_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_function; }
	}

	public final Math_functionContext math_function() throws RecognitionException {
		Math_functionContext _localctx = new Math_functionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_math_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			math_function_def();
			setState(227);
			match(EQUAL);
			setState(228);
			composed_operations();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_function_defContext extends ParserRuleContext {
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode PARENTHESIS_LF() { return getToken(GrammarParser.PARENTHESIS_LF, 0); }
		public Math_function_argsContext math_function_args() {
			return getRuleContext(Math_function_argsContext.class,0);
		}
		public TerminalNode PARENTHESIS_RT() { return getToken(GrammarParser.PARENTHESIS_RT, 0); }
		public Math_function_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_function_def; }
	}

	public final Math_function_defContext math_function_def() throws RecognitionException {
		Math_function_defContext _localctx = new Math_function_defContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_math_function_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			match(VARNAME);
			setState(231);
			match(PARENTHESIS_LF);
			setState(232);
			math_function_args();
			setState(233);
			match(PARENTHESIS_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Math_function_argsContext extends ParserRuleContext {
		public List<TerminalNode> INTEGER() { return getTokens(GrammarParser.INTEGER); }
		public TerminalNode INTEGER(int i) {
			return getToken(GrammarParser.INTEGER, i);
		}
		public List<TerminalNode> VARNAME() { return getTokens(GrammarParser.VARNAME); }
		public TerminalNode VARNAME(int i) {
			return getToken(GrammarParser.VARNAME, i);
		}
		public List<TerminalNode> DOUBLE() { return getTokens(GrammarParser.DOUBLE); }
		public TerminalNode DOUBLE(int i) {
			return getToken(GrammarParser.DOUBLE, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public Math_function_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math_function_args; }
	}

	public final Math_function_argsContext math_function_args() throws RecognitionException {
		Math_function_argsContext _localctx = new Math_function_argsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_math_function_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARNAME) | (1L << INTEGER) | (1L << DOUBLE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(236);
				match(COMMA);
				setState(237);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << VARNAME) | (1L << INTEGER) | (1L << DOUBLE))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(242);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(GrammarParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(GrammarParser.MINUS, 0); }
		public TerminalNode MULTIPLICATION() { return getToken(GrammarParser.MULTIPLICATION, 0); }
		public TerminalNode DIVISION() { return getToken(GrammarParser.DIVISION, 0); }
		public OperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator; }
	}

	public final OperatorContext operator() throws RecognitionException {
		OperatorContext _localctx = new OperatorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << MINUS) | (1L << MULTIPLICATION) | (1L << DIVISION))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Lesser_operatorContext extends ParserRuleContext {
		public TerminalNode LESSER_SYMBOL() { return getToken(GrammarParser.LESSER_SYMBOL, 0); }
		public TerminalNode LT_TAG() { return getToken(GrammarParser.LT_TAG, 0); }
		public TerminalNode LNEQ_TAG() { return getToken(GrammarParser.LNEQ_TAG, 0); }
		public TerminalNode LNEQQ_TAG() { return getToken(GrammarParser.LNEQQ_TAG, 0); }
		public Lesser_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lesser_operator; }
	}

	public final Lesser_operatorContext lesser_operator() throws RecognitionException {
		Lesser_operatorContext _localctx = new Lesser_operatorContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_lesser_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LT_TAG) | (1L << LNEQ_TAG) | (1L << LNEQQ_TAG) | (1L << LESSER_SYMBOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Lesser_equal_operatorContext extends ParserRuleContext {
		public TerminalNode LESSER_SYMBOL() { return getToken(GrammarParser.LESSER_SYMBOL, 0); }
		public TerminalNode LE_TAG() { return getToken(GrammarParser.LE_TAG, 0); }
		public TerminalNode LEQ_TAG() { return getToken(GrammarParser.LEQ_TAG, 0); }
		public TerminalNode LEQQ_TAG() { return getToken(GrammarParser.LEQQ_TAG, 0); }
		public TerminalNode LEQSLANT_TAG() { return getToken(GrammarParser.LEQSLANT_TAG, 0); }
		public Lesser_equal_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lesser_equal_operator; }
	}

	public final Lesser_equal_operatorContext lesser_equal_operator() throws RecognitionException {
		Lesser_equal_operatorContext _localctx = new Lesser_equal_operatorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_lesser_equal_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LE_TAG) | (1L << LEQ_TAG) | (1L << LEQQ_TAG) | (1L << LEQSLANT_TAG) | (1L << LESSER_SYMBOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Greater_operatorContext extends ParserRuleContext {
		public TerminalNode GREATER_SYMBOL() { return getToken(GrammarParser.GREATER_SYMBOL, 0); }
		public TerminalNode GT_TAG() { return getToken(GrammarParser.GT_TAG, 0); }
		public TerminalNode GNEQ_TAG() { return getToken(GrammarParser.GNEQ_TAG, 0); }
		public TerminalNode GNEQQ_TAG() { return getToken(GrammarParser.GNEQQ_TAG, 0); }
		public Greater_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_greater_operator; }
	}

	public final Greater_operatorContext greater_operator() throws RecognitionException {
		Greater_operatorContext _localctx = new Greater_operatorContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_greater_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT_TAG) | (1L << GNEQ_TAG) | (1L << GNEQQ_TAG) | (1L << GREATER_SYMBOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Greater_equal_operatorContext extends ParserRuleContext {
		public TerminalNode GREATER_EQUAL_SYMBOL() { return getToken(GrammarParser.GREATER_EQUAL_SYMBOL, 0); }
		public TerminalNode GEQ_TAG() { return getToken(GrammarParser.GEQ_TAG, 0); }
		public TerminalNode GEQQ_TAG() { return getToken(GrammarParser.GEQQ_TAG, 0); }
		public TerminalNode GEQSLANT_TAG() { return getToken(GrammarParser.GEQSLANT_TAG, 0); }
		public Greater_equal_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_greater_equal_operator; }
	}

	public final Greater_equal_operatorContext greater_equal_operator() throws RecognitionException {
		Greater_equal_operatorContext _localctx = new Greater_equal_operatorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_greater_equal_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GEQ_TAG) | (1L << GEQQ_TAG) | (1L << GEQSLANT_TAG) | (1L << GREATER_EQUAL_SYMBOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Composed_operationsContext extends ParserRuleContext {
		public List<Operation_elementContext> operation_element() {
			return getRuleContexts(Operation_elementContext.class);
		}
		public Operation_elementContext operation_element(int i) {
			return getRuleContext(Operation_elementContext.class,i);
		}
		public List<OperatorContext> operator() {
			return getRuleContexts(OperatorContext.class);
		}
		public OperatorContext operator(int i) {
			return getRuleContext(OperatorContext.class,i);
		}
		public Composed_operationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_composed_operations; }
	}

	public final Composed_operationsContext composed_operations() throws RecognitionException {
		Composed_operationsContext _localctx = new Composed_operationsContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_composed_operations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			operation_element();
			setState(259);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << MINUS) | (1L << MULTIPLICATION) | (1L << DIVISION))) != 0)) {
				{
				{
				setState(254);
				operator();
				setState(255);
				operation_element();
				}
				}
				setState(261);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Operation_elementContext extends ParserRuleContext {
		public Base_memberContext base_member() {
			return getRuleContext(Base_memberContext.class,0);
		}
		public TerminalNode HAT() { return getToken(GrammarParser.HAT, 0); }
		public Power_memberContext power_member() {
			return getRuleContext(Power_memberContext.class,0);
		}
		public Operation_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operation_element; }
	}

	public final Operation_elementContext operation_element() throws RecognitionException {
		Operation_elementContext _localctx = new Operation_elementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_operation_element);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			base_member();
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HAT) {
				{
				setState(263);
				match(HAT);
				setState(264);
				power_member();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Base_memberContext extends ParserRuleContext {
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public Priority_elementContext priority_element() {
			return getRuleContext(Priority_elementContext.class,0);
		}
		public Base_memberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_base_member; }
	}

	public final Base_memberContext base_member() throws RecognitionException {
		Base_memberContext _localctx = new Base_memberContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_base_member);
		try {
			setState(269);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(267);
				member();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				priority_element();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Power_memberContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Power_memberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_power_member; }
	}

	public final Power_memberContext power_member() throws RecognitionException {
		Power_memberContext _localctx = new Power_memberContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_power_member);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(CURLY_LF);
			setState(272);
			composed_operations();
			setState(273);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Priority_elementContext extends ParserRuleContext {
		public TerminalNode PARENTHESIS_LF() { return getToken(GrammarParser.PARENTHESIS_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode PARENTHESIS_RT() { return getToken(GrammarParser.PARENTHESIS_RT, 0); }
		public Priority_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_priority_element; }
	}

	public final Priority_elementContext priority_element() throws RecognitionException {
		Priority_elementContext _localctx = new Priority_elementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_priority_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(PARENTHESIS_LF);
			setState(276);
			composed_operations();
			setState(277);
			match(PARENTHESIS_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberContext extends ParserRuleContext {
		public IntegerContext integer() {
			return getRuleContext(IntegerContext.class,0);
		}
		public Double_typeContext double_type() {
			return getRuleContext(Double_typeContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public FactorialContext factorial() {
			return getRuleContext(FactorialContext.class,0);
		}
		public Math_function_defContext math_function_def() {
			return getRuleContext(Math_function_defContext.class,0);
		}
		public FractionContext fraction() {
			return getRuleContext(FractionContext.class,0);
		}
		public ExponentialContext exponential() {
			return getRuleContext(ExponentialContext.class,0);
		}
		public SqrtContext sqrt() {
			return getRuleContext(SqrtContext.class,0);
		}
		public TrigonometryContext trigonometry() {
			return getRuleContext(TrigonometryContext.class,0);
		}
		public SummationContext summation() {
			return getRuleContext(SummationContext.class,0);
		}
		public LogarithmContext logarithm() {
			return getRuleContext(LogarithmContext.class,0);
		}
		public IntegralContext integral() {
			return getRuleContext(IntegralContext.class,0);
		}
		public MemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_member; }
	}

	public final MemberContext member() throws RecognitionException {
		MemberContext _localctx = new MemberContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_member);
		try {
			setState(292);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(280);
				integer();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(281);
				double_type();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(282);
				variable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(283);
				factorial();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(284);
				math_function_def();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(285);
				fraction();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(286);
				exponential();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(287);
				sqrt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(288);
				trigonometry();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(289);
				summation();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(290);
				logarithm();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(291);
				integral();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public Variable_lower_indexContext variable_lower_index() {
			return getRuleContext(Variable_lower_indexContext.class,0);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_variable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			match(VARNAME);
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UNDERSCORE) {
				{
				setState(295);
				variable_lower_index();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Variable_lower_indexContext extends ParserRuleContext {
		public TerminalNode UNDERSCORE() { return getToken(GrammarParser.UNDERSCORE, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Index_elementsContext index_elements() {
			return getRuleContext(Index_elementsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Variable_lower_indexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable_lower_index; }
	}

	public final Variable_lower_indexContext variable_lower_index() throws RecognitionException {
		Variable_lower_indexContext _localctx = new Variable_lower_indexContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_variable_lower_index);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(UNDERSCORE);
			setState(299);
			match(CURLY_LF);
			setState(300);
			index_elements();
			setState(301);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Index_elementsContext extends ParserRuleContext {
		public List<Index_elementContext> index_element() {
			return getRuleContexts(Index_elementContext.class);
		}
		public Index_elementContext index_element(int i) {
			return getRuleContext(Index_elementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(GrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(GrammarParser.COMMA, i);
		}
		public Index_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_index_elements; }
	}

	public final Index_elementsContext index_elements() throws RecognitionException {
		Index_elementsContext _localctx = new Index_elementsContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_index_elements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			index_element();
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(304);
				match(COMMA);
				setState(305);
				index_element();
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Index_elementContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public Index_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_index_element; }
	}

	public final Index_elementContext index_element() throws RecognitionException {
		Index_elementContext _localctx = new Index_elementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_index_element);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(311);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerContext extends ParserRuleContext {
		public Integer_positive_zeroContext integer_positive_zero() {
			return getRuleContext(Integer_positive_zeroContext.class,0);
		}
		public Integer_negativeContext integer_negative() {
			return getRuleContext(Integer_negativeContext.class,0);
		}
		public IntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integer; }
	}

	public final IntegerContext integer() throws RecognitionException {
		IntegerContext _localctx = new IntegerContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_integer);
		try {
			setState(315);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER:
				enterOuterAlt(_localctx, 1);
				{
				setState(313);
				integer_positive_zero();
				}
				break;
			case PARENTHESIS_LF:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				integer_negative();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integer_positive_zeroContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public Integer_positive_zeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integer_positive_zero; }
	}

	public final Integer_positive_zeroContext integer_positive_zero() throws RecognitionException {
		Integer_positive_zeroContext _localctx = new Integer_positive_zeroContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_integer_positive_zero);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(INTEGER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integer_negativeContext extends ParserRuleContext {
		public TerminalNode PARENTHESIS_LF() { return getToken(GrammarParser.PARENTHESIS_LF, 0); }
		public TerminalNode MINUS() { return getToken(GrammarParser.MINUS, 0); }
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public TerminalNode PARENTHESIS_RT() { return getToken(GrammarParser.PARENTHESIS_RT, 0); }
		public Integer_negativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integer_negative; }
	}

	public final Integer_negativeContext integer_negative() throws RecognitionException {
		Integer_negativeContext _localctx = new Integer_negativeContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_integer_negative);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			match(PARENTHESIS_LF);
			setState(320);
			match(MINUS);
			setState(321);
			match(INTEGER);
			setState(322);
			match(PARENTHESIS_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Double_typeContext extends ParserRuleContext {
		public Double_positive_zeroContext double_positive_zero() {
			return getRuleContext(Double_positive_zeroContext.class,0);
		}
		public Double_negativeContext double_negative() {
			return getRuleContext(Double_negativeContext.class,0);
		}
		public Double_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_double_type; }
	}

	public final Double_typeContext double_type() throws RecognitionException {
		Double_typeContext _localctx = new Double_typeContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_double_type);
		try {
			setState(326);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOUBLE:
				enterOuterAlt(_localctx, 1);
				{
				setState(324);
				double_positive_zero();
				}
				break;
			case PARENTHESIS_LF:
				enterOuterAlt(_localctx, 2);
				{
				setState(325);
				double_negative();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Double_positive_zeroContext extends ParserRuleContext {
		public TerminalNode DOUBLE() { return getToken(GrammarParser.DOUBLE, 0); }
		public Double_positive_zeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_double_positive_zero; }
	}

	public final Double_positive_zeroContext double_positive_zero() throws RecognitionException {
		Double_positive_zeroContext _localctx = new Double_positive_zeroContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_double_positive_zero);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(DOUBLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Double_negativeContext extends ParserRuleContext {
		public TerminalNode PARENTHESIS_LF() { return getToken(GrammarParser.PARENTHESIS_LF, 0); }
		public TerminalNode MINUS() { return getToken(GrammarParser.MINUS, 0); }
		public TerminalNode DOUBLE() { return getToken(GrammarParser.DOUBLE, 0); }
		public TerminalNode PARENTHESIS_RT() { return getToken(GrammarParser.PARENTHESIS_RT, 0); }
		public Double_negativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_double_negative; }
	}

	public final Double_negativeContext double_negative() throws RecognitionException {
		Double_negativeContext _localctx = new Double_negativeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_double_negative);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			match(PARENTHESIS_LF);
			setState(331);
			match(MINUS);
			setState(332);
			match(DOUBLE);
			setState(333);
			match(PARENTHESIS_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorialContext extends ParserRuleContext {
		public TerminalNode FACTORIAL_SYMBOL() { return getToken(GrammarParser.FACTORIAL_SYMBOL, 0); }
		public Single_argument_factorialContext single_argument_factorial() {
			return getRuleContext(Single_argument_factorialContext.class,0);
		}
		public Complex_argument_factorialContext complex_argument_factorial() {
			return getRuleContext(Complex_argument_factorialContext.class,0);
		}
		public FactorialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factorial; }
	}

	public final FactorialContext factorial() throws RecognitionException {
		FactorialContext _localctx = new FactorialContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_factorial);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VARNAME:
			case INTEGER:
				{
				setState(335);
				single_argument_factorial();
				}
				break;
			case PARENTHESIS_LF:
				{
				setState(336);
				complex_argument_factorial();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(339);
			match(FACTORIAL_SYMBOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Single_argument_factorialContext extends ParserRuleContext {
		public Factorial_elementContext factorial_element() {
			return getRuleContext(Factorial_elementContext.class,0);
		}
		public Single_argument_factorialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_single_argument_factorial; }
	}

	public final Single_argument_factorialContext single_argument_factorial() throws RecognitionException {
		Single_argument_factorialContext _localctx = new Single_argument_factorialContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_single_argument_factorial);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(341);
			factorial_element();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Complex_argument_factorialContext extends ParserRuleContext {
		public TerminalNode PARENTHESIS_LF() { return getToken(GrammarParser.PARENTHESIS_LF, 0); }
		public List<Factorial_elementContext> factorial_element() {
			return getRuleContexts(Factorial_elementContext.class);
		}
		public Factorial_elementContext factorial_element(int i) {
			return getRuleContext(Factorial_elementContext.class,i);
		}
		public TerminalNode PARENTHESIS_RT() { return getToken(GrammarParser.PARENTHESIS_RT, 0); }
		public List<OperatorContext> operator() {
			return getRuleContexts(OperatorContext.class);
		}
		public OperatorContext operator(int i) {
			return getRuleContext(OperatorContext.class,i);
		}
		public Complex_argument_factorialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complex_argument_factorial; }
	}

	public final Complex_argument_factorialContext complex_argument_factorial() throws RecognitionException {
		Complex_argument_factorialContext _localctx = new Complex_argument_factorialContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_complex_argument_factorial);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			match(PARENTHESIS_LF);
			setState(344);
			factorial_element();
			setState(348); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(345);
				operator();
				setState(346);
				factorial_element();
				}
				}
				setState(350); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << MINUS) | (1L << MULTIPLICATION) | (1L << DIVISION))) != 0) );
			setState(352);
			match(PARENTHESIS_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Factorial_elementContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public Factorial_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factorial_element; }
	}

	public final Factorial_elementContext factorial_element() throws RecognitionException {
		Factorial_elementContext _localctx = new Factorial_elementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_factorial_element);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(354);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegralContext extends ParserRuleContext {
		public Single_integralContext single_integral() {
			return getRuleContext(Single_integralContext.class,0);
		}
		public Double_integralContext double_integral() {
			return getRuleContext(Double_integralContext.class,0);
		}
		public Triple_integralContext triple_integral() {
			return getRuleContext(Triple_integralContext.class,0);
		}
		public IntegralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integral; }
	}

	public final IntegralContext integral() throws RecognitionException {
		IntegralContext _localctx = new IntegralContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_integral);
		try {
			setState(359);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(356);
				single_integral();
				}
				break;
			case IINT_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(357);
				double_integral();
				}
				break;
			case IIINT_TAG:
				enterOuterAlt(_localctx, 3);
				{
				setState(358);
				triple_integral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Single_integralContext extends ParserRuleContext {
		public TerminalNode INT_TAG() { return getToken(GrammarParser.INT_TAG, 0); }
		public Integral_defContext integral_def() {
			return getRuleContext(Integral_defContext.class,0);
		}
		public Single_integralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_single_integral; }
	}

	public final Single_integralContext single_integral() throws RecognitionException {
		Single_integralContext _localctx = new Single_integralContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_single_integral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(INT_TAG);
			setState(362);
			integral_def();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Double_integralContext extends ParserRuleContext {
		public TerminalNode IINT_TAG() { return getToken(GrammarParser.IINT_TAG, 0); }
		public Integral_defContext integral_def() {
			return getRuleContext(Integral_defContext.class,0);
		}
		public Double_integralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_double_integral; }
	}

	public final Double_integralContext double_integral() throws RecognitionException {
		Double_integralContext _localctx = new Double_integralContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_double_integral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(IINT_TAG);
			setState(365);
			integral_def();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Triple_integralContext extends ParserRuleContext {
		public TerminalNode IIINT_TAG() { return getToken(GrammarParser.IIINT_TAG, 0); }
		public Integral_defContext integral_def() {
			return getRuleContext(Integral_defContext.class,0);
		}
		public Triple_integralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triple_integral; }
	}

	public final Triple_integralContext triple_integral() throws RecognitionException {
		Triple_integralContext _localctx = new Triple_integralContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_triple_integral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(IIINT_TAG);
			setState(368);
			integral_def();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integral_defContext extends ParserRuleContext {
		public Integral_lower_limitContext integral_lower_limit() {
			return getRuleContext(Integral_lower_limitContext.class,0);
		}
		public Integral_upper_limitContext integral_upper_limit() {
			return getRuleContext(Integral_upper_limitContext.class,0);
		}
		public Integral_bodyContext integral_body() {
			return getRuleContext(Integral_bodyContext.class,0);
		}
		public Integral_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integral_def; }
	}

	public final Integral_defContext integral_def() throws RecognitionException {
		Integral_defContext _localctx = new Integral_defContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_integral_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			integral_lower_limit();
			setState(371);
			integral_upper_limit();
			setState(372);
			integral_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integral_lower_limitContext extends ParserRuleContext {
		public TerminalNode UNDERSCORE() { return getToken(GrammarParser.UNDERSCORE, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Integral_lower_limitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integral_lower_limit; }
	}

	public final Integral_lower_limitContext integral_lower_limit() throws RecognitionException {
		Integral_lower_limitContext _localctx = new Integral_lower_limitContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_integral_lower_limit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(UNDERSCORE);
			setState(375);
			match(CURLY_LF);
			setState(376);
			composed_operations();
			setState(377);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integral_upper_limitContext extends ParserRuleContext {
		public TerminalNode HAT() { return getToken(GrammarParser.HAT, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Integral_upper_limitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integral_upper_limit; }
	}

	public final Integral_upper_limitContext integral_upper_limit() throws RecognitionException {
		Integral_upper_limitContext _localctx = new Integral_upper_limitContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_integral_upper_limit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(HAT);
			setState(380);
			match(CURLY_LF);
			setState(381);
			composed_operations();
			setState(382);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Integral_bodyContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Integral_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integral_body; }
	}

	public final Integral_bodyContext integral_body() throws RecognitionException {
		Integral_bodyContext _localctx = new Integral_bodyContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_integral_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
			match(CURLY_LF);
			setState(385);
			composed_operations();
			setState(386);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrigonometryContext extends ParserRuleContext {
		public NormalContext normal() {
			return getRuleContext(NormalContext.class,0);
		}
		public InverseContext inverse() {
			return getRuleContext(InverseContext.class,0);
		}
		public HyperbolicContext hyperbolic() {
			return getRuleContext(HyperbolicContext.class,0);
		}
		public TrigonometryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trigonometry; }
	}

	public final TrigonometryContext trigonometry() throws RecognitionException {
		TrigonometryContext _localctx = new TrigonometryContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_trigonometry);
		try {
			setState(391);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SIN_TAG:
			case COS_TAG:
			case TAN_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(388);
				normal();
				}
				break;
			case ARCSIN_TAG:
			case ARCCOS_TAG:
			case ARCTAN_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(389);
				inverse();
				}
				break;
			case SINH_TAG:
			case COSH_TAG:
			case TANH_TAG:
				enterOuterAlt(_localctx, 3);
				{
				setState(390);
				hyperbolic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NormalContext extends ParserRuleContext {
		public SinContext sin() {
			return getRuleContext(SinContext.class,0);
		}
		public CosContext cos() {
			return getRuleContext(CosContext.class,0);
		}
		public TanContext tan() {
			return getRuleContext(TanContext.class,0);
		}
		public NormalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_normal; }
	}

	public final NormalContext normal() throws RecognitionException {
		NormalContext _localctx = new NormalContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_normal);
		try {
			setState(396);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SIN_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(393);
				sin();
				}
				break;
			case COS_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(394);
				cos();
				}
				break;
			case TAN_TAG:
				enterOuterAlt(_localctx, 3);
				{
				setState(395);
				tan();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InverseContext extends ParserRuleContext {
		public ArcsinContext arcsin() {
			return getRuleContext(ArcsinContext.class,0);
		}
		public ArccosContext arccos() {
			return getRuleContext(ArccosContext.class,0);
		}
		public ArctanContext arctan() {
			return getRuleContext(ArctanContext.class,0);
		}
		public InverseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inverse; }
	}

	public final InverseContext inverse() throws RecognitionException {
		InverseContext _localctx = new InverseContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_inverse);
		try {
			setState(401);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARCSIN_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(398);
				arcsin();
				}
				break;
			case ARCCOS_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(399);
				arccos();
				}
				break;
			case ARCTAN_TAG:
				enterOuterAlt(_localctx, 3);
				{
				setState(400);
				arctan();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HyperbolicContext extends ParserRuleContext {
		public SinhContext sinh() {
			return getRuleContext(SinhContext.class,0);
		}
		public CoshContext cosh() {
			return getRuleContext(CoshContext.class,0);
		}
		public TanhContext tanh() {
			return getRuleContext(TanhContext.class,0);
		}
		public HyperbolicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hyperbolic; }
	}

	public final HyperbolicContext hyperbolic() throws RecognitionException {
		HyperbolicContext _localctx = new HyperbolicContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_hyperbolic);
		try {
			setState(406);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SINH_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(403);
				sinh();
				}
				break;
			case COSH_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(404);
				cosh();
				}
				break;
			case TANH_TAG:
				enterOuterAlt(_localctx, 3);
				{
				setState(405);
				tanh();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SinContext extends ParserRuleContext {
		public TerminalNode SIN_TAG() { return getToken(GrammarParser.SIN_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public SinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sin; }
	}

	public final SinContext sin() throws RecognitionException {
		SinContext _localctx = new SinContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_sin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			match(SIN_TAG);
			setState(409);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CosContext extends ParserRuleContext {
		public TerminalNode COS_TAG() { return getToken(GrammarParser.COS_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public CosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cos; }
	}

	public final CosContext cos() throws RecognitionException {
		CosContext _localctx = new CosContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_cos);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			match(COS_TAG);
			setState(412);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TanContext extends ParserRuleContext {
		public TerminalNode TAN_TAG() { return getToken(GrammarParser.TAN_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public TanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tan; }
	}

	public final TanContext tan() throws RecognitionException {
		TanContext _localctx = new TanContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_tan);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(414);
			match(TAN_TAG);
			setState(415);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArcsinContext extends ParserRuleContext {
		public TerminalNode ARCSIN_TAG() { return getToken(GrammarParser.ARCSIN_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public ArcsinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arcsin; }
	}

	public final ArcsinContext arcsin() throws RecognitionException {
		ArcsinContext _localctx = new ArcsinContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_arcsin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(ARCSIN_TAG);
			setState(418);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArccosContext extends ParserRuleContext {
		public TerminalNode ARCCOS_TAG() { return getToken(GrammarParser.ARCCOS_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public ArccosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arccos; }
	}

	public final ArccosContext arccos() throws RecognitionException {
		ArccosContext _localctx = new ArccosContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_arccos);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
			match(ARCCOS_TAG);
			setState(421);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArctanContext extends ParserRuleContext {
		public TerminalNode ARCTAN_TAG() { return getToken(GrammarParser.ARCTAN_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public ArctanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arctan; }
	}

	public final ArctanContext arctan() throws RecognitionException {
		ArctanContext _localctx = new ArctanContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_arctan);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			match(ARCTAN_TAG);
			setState(424);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SinhContext extends ParserRuleContext {
		public TerminalNode SINH_TAG() { return getToken(GrammarParser.SINH_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public SinhContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sinh; }
	}

	public final SinhContext sinh() throws RecognitionException {
		SinhContext _localctx = new SinhContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_sinh);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(SINH_TAG);
			setState(427);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CoshContext extends ParserRuleContext {
		public TerminalNode COSH_TAG() { return getToken(GrammarParser.COSH_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public CoshContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cosh; }
	}

	public final CoshContext cosh() throws RecognitionException {
		CoshContext _localctx = new CoshContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_cosh);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			match(COSH_TAG);
			setState(430);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TanhContext extends ParserRuleContext {
		public TerminalNode TANH_TAG() { return getToken(GrammarParser.TANH_TAG, 0); }
		public Trigonometric_function_argsContext trigonometric_function_args() {
			return getRuleContext(Trigonometric_function_argsContext.class,0);
		}
		public TanhContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tanh; }
	}

	public final TanhContext tanh() throws RecognitionException {
		TanhContext _localctx = new TanhContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_tanh);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			match(TANH_TAG);
			setState(433);
			trigonometric_function_args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Trigonometric_function_argsContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Trigonometric_function_powerContext trigonometric_function_power() {
			return getRuleContext(Trigonometric_function_powerContext.class,0);
		}
		public Trigonometric_function_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trigonometric_function_args; }
	}

	public final Trigonometric_function_argsContext trigonometric_function_args() throws RecognitionException {
		Trigonometric_function_argsContext _localctx = new Trigonometric_function_argsContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_trigonometric_function_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HAT) {
				{
				setState(435);
				trigonometric_function_power();
				}
			}

			setState(438);
			match(CURLY_LF);
			setState(439);
			composed_operations();
			setState(440);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Trigonometric_function_powerContext extends ParserRuleContext {
		public TerminalNode HAT() { return getToken(GrammarParser.HAT, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public Trigonometric_function_powerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trigonometric_function_power; }
	}

	public final Trigonometric_function_powerContext trigonometric_function_power() throws RecognitionException {
		Trigonometric_function_powerContext _localctx = new Trigonometric_function_powerContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_trigonometric_function_power);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			match(HAT);
			setState(443);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SummationContext extends ParserRuleContext {
		public TerminalNode SUMMATION_TAG() { return getToken(GrammarParser.SUMMATION_TAG, 0); }
		public Summation_lower_boundContext summation_lower_bound() {
			return getRuleContext(Summation_lower_boundContext.class,0);
		}
		public Summation_upper_boundContext summation_upper_bound() {
			return getRuleContext(Summation_upper_boundContext.class,0);
		}
		public Summation_bodyContext summation_body() {
			return getRuleContext(Summation_bodyContext.class,0);
		}
		public SummationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation; }
	}

	public final SummationContext summation() throws RecognitionException {
		SummationContext _localctx = new SummationContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_summation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			match(SUMMATION_TAG);
			setState(446);
			summation_lower_bound();
			setState(447);
			summation_upper_bound();
			setState(448);
			summation_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_lower_boundContext extends ParserRuleContext {
		public TerminalNode UNDERSCORE() { return getToken(GrammarParser.UNDERSCORE, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Summation_lower_bodyContext summation_lower_body() {
			return getRuleContext(Summation_lower_bodyContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Summation_lower_boundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_lower_bound; }
	}

	public final Summation_lower_boundContext summation_lower_bound() throws RecognitionException {
		Summation_lower_boundContext _localctx = new Summation_lower_boundContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_summation_lower_bound);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(UNDERSCORE);
			setState(451);
			match(CURLY_LF);
			setState(452);
			summation_lower_body();
			setState(453);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_lower_bodyContext extends ParserRuleContext {
		public Summation_lower_single_lineContext summation_lower_single_line() {
			return getRuleContext(Summation_lower_single_lineContext.class,0);
		}
		public Summation_lower_multiple_lineContext summation_lower_multiple_line() {
			return getRuleContext(Summation_lower_multiple_lineContext.class,0);
		}
		public Summation_lower_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_lower_body; }
	}

	public final Summation_lower_bodyContext summation_lower_body() throws RecognitionException {
		Summation_lower_bodyContext _localctx = new Summation_lower_bodyContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_summation_lower_body);
		try {
			setState(457);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VARNAME:
			case INTEGER:
				enterOuterAlt(_localctx, 1);
				{
				setState(455);
				summation_lower_single_line();
				}
				break;
			case SUBSTACK_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(456);
				summation_lower_multiple_line();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_lower_single_lineContext extends ParserRuleContext {
		public List<TerminalNode> VARNAME() { return getTokens(GrammarParser.VARNAME); }
		public TerminalNode VARNAME(int i) {
			return getToken(GrammarParser.VARNAME, i);
		}
		public List<TerminalNode> INTEGER() { return getTokens(GrammarParser.INTEGER); }
		public TerminalNode INTEGER(int i) {
			return getToken(GrammarParser.INTEGER, i);
		}
		public List<Summation_lower_bound_operatorsContext> summation_lower_bound_operators() {
			return getRuleContexts(Summation_lower_bound_operatorsContext.class);
		}
		public Summation_lower_bound_operatorsContext summation_lower_bound_operators(int i) {
			return getRuleContext(Summation_lower_bound_operatorsContext.class,i);
		}
		public Summation_lower_single_lineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_lower_single_line; }
	}

	public final Summation_lower_single_lineContext summation_lower_single_line() throws RecognitionException {
		Summation_lower_single_lineContext _localctx = new Summation_lower_single_lineContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_summation_lower_single_line);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(465);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LT_TAG) | (1L << LNEQ_TAG) | (1L << LNEQQ_TAG) | (1L << LE_TAG) | (1L << LEQ_TAG) | (1L << LEQQ_TAG) | (1L << LEQSLANT_TAG) | (1L << GT_TAG) | (1L << GNEQ_TAG) | (1L << GNEQQ_TAG) | (1L << GEQ_TAG) | (1L << GEQQ_TAG) | (1L << GEQSLANT_TAG) | (1L << LESSER_SYMBOL) | (1L << GREATER_SYMBOL) | (1L << GREATER_EQUAL_SYMBOL) | (1L << EQUAL))) != 0)) {
				{
				{
				setState(460);
				summation_lower_bound_operators();
				setState(461);
				_la = _input.LA(1);
				if ( !(_la==VARNAME || _la==INTEGER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(467);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_lower_bound_operatorsContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(GrammarParser.EQUAL, 0); }
		public Lesser_operatorContext lesser_operator() {
			return getRuleContext(Lesser_operatorContext.class,0);
		}
		public Lesser_equal_operatorContext lesser_equal_operator() {
			return getRuleContext(Lesser_equal_operatorContext.class,0);
		}
		public Greater_operatorContext greater_operator() {
			return getRuleContext(Greater_operatorContext.class,0);
		}
		public Greater_equal_operatorContext greater_equal_operator() {
			return getRuleContext(Greater_equal_operatorContext.class,0);
		}
		public Summation_lower_bound_operatorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_lower_bound_operators; }
	}

	public final Summation_lower_bound_operatorsContext summation_lower_bound_operators() throws RecognitionException {
		Summation_lower_bound_operatorsContext _localctx = new Summation_lower_bound_operatorsContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_summation_lower_bound_operators);
		try {
			setState(473);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(468);
				match(EQUAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(469);
				lesser_operator();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(470);
				lesser_equal_operator();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(471);
				greater_operator();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(472);
				greater_equal_operator();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_lower_multiple_lineContext extends ParserRuleContext {
		public TerminalNode SUBSTACK_TAG() { return getToken(GrammarParser.SUBSTACK_TAG, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public List<Summation_lower_single_lineContext> summation_lower_single_line() {
			return getRuleContexts(Summation_lower_single_lineContext.class);
		}
		public Summation_lower_single_lineContext summation_lower_single_line(int i) {
			return getRuleContext(Summation_lower_single_lineContext.class,i);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public List<TerminalNode> BREAKLINE() { return getTokens(GrammarParser.BREAKLINE); }
		public TerminalNode BREAKLINE(int i) {
			return getToken(GrammarParser.BREAKLINE, i);
		}
		public Summation_lower_multiple_lineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_lower_multiple_line; }
	}

	public final Summation_lower_multiple_lineContext summation_lower_multiple_line() throws RecognitionException {
		Summation_lower_multiple_lineContext _localctx = new Summation_lower_multiple_lineContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_summation_lower_multiple_line);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			match(SUBSTACK_TAG);
			setState(476);
			match(CURLY_LF);
			setState(477);
			summation_lower_single_line();
			setState(480); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(478);
				match(BREAKLINE);
				setState(479);
				summation_lower_single_line();
				}
				}
				setState(482); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==BREAKLINE );
			setState(484);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_upper_boundContext extends ParserRuleContext {
		public TerminalNode HAT() { return getToken(GrammarParser.HAT, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Summation_upper_bodyContext summation_upper_body() {
			return getRuleContext(Summation_upper_bodyContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Summation_upper_boundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_upper_bound; }
	}

	public final Summation_upper_boundContext summation_upper_bound() throws RecognitionException {
		Summation_upper_boundContext _localctx = new Summation_upper_boundContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_summation_upper_bound);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(486);
			match(HAT);
			setState(487);
			match(CURLY_LF);
			setState(488);
			summation_upper_body();
			setState(489);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_upper_bodyContext extends ParserRuleContext {
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode INFINITY_TAG() { return getToken(GrammarParser.INFINITY_TAG, 0); }
		public Summation_upper_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_upper_body; }
	}

	public final Summation_upper_bodyContext summation_upper_body() throws RecognitionException {
		Summation_upper_bodyContext _localctx = new Summation_upper_bodyContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_summation_upper_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INFINITY_TAG) | (1L << VARNAME) | (1L << INTEGER))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Summation_bodyContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Summation_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_summation_body; }
	}

	public final Summation_bodyContext summation_body() throws RecognitionException {
		Summation_bodyContext _localctx = new Summation_bodyContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_summation_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			match(CURLY_LF);
			setState(494);
			composed_operations();
			setState(495);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogarithmContext extends ParserRuleContext {
		public LogContext log() {
			return getRuleContext(LogContext.class,0);
		}
		public LnContext ln() {
			return getRuleContext(LnContext.class,0);
		}
		public LogarithmContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logarithm; }
	}

	public final LogarithmContext logarithm() throws RecognitionException {
		LogarithmContext _localctx = new LogarithmContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_logarithm);
		try {
			setState(499);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LOG_TAG:
				enterOuterAlt(_localctx, 1);
				{
				setState(497);
				log();
				}
				break;
			case LN_TAG:
				enterOuterAlt(_localctx, 2);
				{
				setState(498);
				ln();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogContext extends ParserRuleContext {
		public TerminalNode LOG_TAG() { return getToken(GrammarParser.LOG_TAG, 0); }
		public Logarithm_bodyContext logarithm_body() {
			return getRuleContext(Logarithm_bodyContext.class,0);
		}
		public Logarithm_lower_boundContext logarithm_lower_bound() {
			return getRuleContext(Logarithm_lower_boundContext.class,0);
		}
		public LogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_log; }
	}

	public final LogContext log() throws RecognitionException {
		LogContext _localctx = new LogContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_log);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			match(LOG_TAG);
			setState(503);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UNDERSCORE) {
				{
				setState(502);
				logarithm_lower_bound();
				}
			}

			setState(505);
			logarithm_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LnContext extends ParserRuleContext {
		public TerminalNode LN_TAG() { return getToken(GrammarParser.LN_TAG, 0); }
		public Logarithm_bodyContext logarithm_body() {
			return getRuleContext(Logarithm_bodyContext.class,0);
		}
		public Logarithm_lower_boundContext logarithm_lower_bound() {
			return getRuleContext(Logarithm_lower_boundContext.class,0);
		}
		public LnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ln; }
	}

	public final LnContext ln() throws RecognitionException {
		LnContext _localctx = new LnContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_ln);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			match(LN_TAG);
			setState(509);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UNDERSCORE) {
				{
				setState(508);
				logarithm_lower_bound();
				}
			}

			setState(511);
			logarithm_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logarithm_lower_boundContext extends ParserRuleContext {
		public TerminalNode UNDERSCORE() { return getToken(GrammarParser.UNDERSCORE, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public Logarithm_lower_boundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logarithm_lower_bound; }
	}

	public final Logarithm_lower_boundContext logarithm_lower_bound() throws RecognitionException {
		Logarithm_lower_boundContext _localctx = new Logarithm_lower_boundContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_logarithm_lower_bound);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			match(UNDERSCORE);
			setState(514);
			match(CURLY_LF);
			setState(515);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(516);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logarithm_bodyContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Logarithm_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logarithm_body; }
	}

	public final Logarithm_bodyContext logarithm_body() throws RecognitionException {
		Logarithm_bodyContext _localctx = new Logarithm_bodyContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_logarithm_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(518);
			match(CURLY_LF);
			setState(519);
			composed_operations();
			setState(520);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqrtContext extends ParserRuleContext {
		public TerminalNode SQRT_TAG() { return getToken(GrammarParser.SQRT_TAG, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Sqrt_bodyContext sqrt_body() {
			return getRuleContext(Sqrt_bodyContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Sqrt_rootContext sqrt_root() {
			return getRuleContext(Sqrt_rootContext.class,0);
		}
		public SqrtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqrt; }
	}

	public final SqrtContext sqrt() throws RecognitionException {
		SqrtContext _localctx = new SqrtContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_sqrt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(522);
			match(SQRT_TAG);
			setState(524);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BRACKET_LF) {
				{
				setState(523);
				sqrt_root();
				}
			}

			setState(526);
			match(CURLY_LF);
			setState(527);
			sqrt_body();
			setState(528);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sqrt_rootContext extends ParserRuleContext {
		public TerminalNode BRACKET_LF() { return getToken(GrammarParser.BRACKET_LF, 0); }
		public TerminalNode BRACKET_RT() { return getToken(GrammarParser.BRACKET_RT, 0); }
		public TerminalNode VARNAME() { return getToken(GrammarParser.VARNAME, 0); }
		public TerminalNode INTEGER() { return getToken(GrammarParser.INTEGER, 0); }
		public Sqrt_rootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqrt_root; }
	}

	public final Sqrt_rootContext sqrt_root() throws RecognitionException {
		Sqrt_rootContext _localctx = new Sqrt_rootContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_sqrt_root);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			match(BRACKET_LF);
			setState(531);
			_la = _input.LA(1);
			if ( !(_la==VARNAME || _la==INTEGER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(532);
			match(BRACKET_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sqrt_bodyContext extends ParserRuleContext {
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public Sqrt_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqrt_body; }
	}

	public final Sqrt_bodyContext sqrt_body() throws RecognitionException {
		Sqrt_bodyContext _localctx = new Sqrt_bodyContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_sqrt_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(534);
			composed_operations();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExponentialContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public TerminalNode EULER_NUMBER() { return getToken(GrammarParser.EULER_NUMBER, 0); }
		public TerminalNode HAT() { return getToken(GrammarParser.HAT, 0); }
		public TerminalNode EXP_TAG() { return getToken(GrammarParser.EXP_TAG, 0); }
		public ExponentialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exponential; }
	}

	public final ExponentialContext exponential() throws RecognitionException {
		ExponentialContext _localctx = new ExponentialContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_exponential);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EULER_NUMBER:
				{
				setState(536);
				match(EULER_NUMBER);
				setState(537);
				match(HAT);
				}
				break;
			case EXP_TAG:
				{
				setState(538);
				match(EXP_TAG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(541);
			match(CURLY_LF);
			setState(542);
			composed_operations();
			setState(543);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FractionContext extends ParserRuleContext {
		public TerminalNode FRAC_TAG() { return getToken(GrammarParser.FRAC_TAG, 0); }
		public NumeratorContext numerator() {
			return getRuleContext(NumeratorContext.class,0);
		}
		public DenominatorContext denominator() {
			return getRuleContext(DenominatorContext.class,0);
		}
		public FractionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fraction; }
	}

	public final FractionContext fraction() throws RecognitionException {
		FractionContext _localctx = new FractionContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_fraction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			match(FRAC_TAG);
			setState(546);
			numerator();
			setState(547);
			denominator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumeratorContext extends ParserRuleContext {
		public Fraction_memberContext fraction_member() {
			return getRuleContext(Fraction_memberContext.class,0);
		}
		public NumeratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numerator; }
	}

	public final NumeratorContext numerator() throws RecognitionException {
		NumeratorContext _localctx = new NumeratorContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_numerator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			fraction_member();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DenominatorContext extends ParserRuleContext {
		public Fraction_memberContext fraction_member() {
			return getRuleContext(Fraction_memberContext.class,0);
		}
		public DenominatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_denominator; }
	}

	public final DenominatorContext denominator() throws RecognitionException {
		DenominatorContext _localctx = new DenominatorContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_denominator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(551);
			fraction_member();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Fraction_memberContext extends ParserRuleContext {
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public Composed_operationsContext composed_operations() {
			return getRuleContext(Composed_operationsContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public Fraction_memberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fraction_member; }
	}

	public final Fraction_memberContext fraction_member() throws RecognitionException {
		Fraction_memberContext _localctx = new Fraction_memberContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_fraction_member);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			match(CURLY_LF);
			setState(554);
			composed_operations();
			setState(555);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndContext extends ParserRuleContext {
		public TerminalNode END() { return getToken(GrammarParser.END, 0); }
		public TerminalNode CURLY_LF() { return getToken(GrammarParser.CURLY_LF, 0); }
		public EnvironmentContext environment() {
			return getRuleContext(EnvironmentContext.class,0);
		}
		public TerminalNode CURLY_RT() { return getToken(GrammarParser.CURLY_RT, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_end);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(557);
			match(END);
			setState(558);
			match(CURLY_LF);
			setState(559);
			environment();
			setState(560);
			match(CURLY_RT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnvironmentContext extends ParserRuleContext {
		public TerminalNode EQUATION() { return getToken(GrammarParser.EQUATION, 0); }
		public TerminalNode EQUATION_STAR() { return getToken(GrammarParser.EQUATION_STAR, 0); }
		public TerminalNode MATRIX() { return getToken(GrammarParser.MATRIX, 0); }
		public EnvironmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_environment; }
	}

	public final EnvironmentContext environment() throws RecognitionException {
		EnvironmentContext _localctx = new EnvironmentContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_environment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(562);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUATION) | (1L << EQUATION_STAR) | (1L << MATRIX))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3D\u0237\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\3\2\3"+
		"\2\3\2\3\2\7\2\u00ab\n\2\f\2\16\2\u00ae\13\2\6\2\u00b0\n\2\r\2\16\2\u00b1"+
		"\3\2\3\2\3\3\7\3\u00b7\n\3\f\3\16\3\u00ba\13\3\3\3\3\3\3\4\3\4\3\4\3\4"+
		"\3\4\6\4\u00c3\n\4\r\4\16\4\u00c4\3\5\3\5\3\5\5\5\u00ca\n\5\3\5\6\5\u00cd"+
		"\n\5\r\5\16\5\u00ce\3\6\3\6\3\6\3\6\3\7\3\7\3\7\7\7\u00d8\n\7\f\7\16\7"+
		"\u00db\13\7\3\b\3\b\3\b\7\b\u00e0\n\b\f\b\16\b\u00e3\13\b\3\t\3\t\3\t"+
		"\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\7\13\u00f1\n\13\f\13\16\13\u00f4"+
		"\13\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3"+
		"\21\7\21\u0104\n\21\f\21\16\21\u0107\13\21\3\22\3\22\3\22\5\22\u010c\n"+
		"\22\3\23\3\23\5\23\u0110\n\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\5\26"+
		"\u0127\n\26\3\27\3\27\5\27\u012b\n\27\3\30\3\30\3\30\3\30\3\30\3\31\3"+
		"\31\3\31\7\31\u0135\n\31\f\31\16\31\u0138\13\31\3\32\3\32\3\33\3\33\5"+
		"\33\u013e\n\33\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\5\36\u0149"+
		"\n\36\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\5!\u0154\n!\3!\3!\3\"\3\"\3#\3#\3"+
		"#\3#\3#\6#\u015f\n#\r#\16#\u0160\3#\3#\3$\3$\3%\3%\3%\5%\u016a\n%\3&\3"+
		"&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3"+
		",\3,\3,\3,\3-\3-\3-\5-\u018a\n-\3.\3.\3.\5.\u018f\n.\3/\3/\3/\5/\u0194"+
		"\n/\3\60\3\60\3\60\5\60\u0199\n\60\3\61\3\61\3\61\3\62\3\62\3\62\3\63"+
		"\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67"+
		"\38\38\38\39\39\39\3:\5:\u01b7\n:\3:\3:\3:\3:\3;\3;\3;\3<\3<\3<\3<\3<"+
		"\3=\3=\3=\3=\3=\3>\3>\5>\u01cc\n>\3?\3?\3?\3?\7?\u01d2\n?\f?\16?\u01d5"+
		"\13?\3@\3@\3@\3@\3@\5@\u01dc\n@\3A\3A\3A\3A\3A\6A\u01e3\nA\rA\16A\u01e4"+
		"\3A\3A\3B\3B\3B\3B\3B\3C\3C\3D\3D\3D\3D\3E\3E\5E\u01f6\nE\3F\3F\5F\u01fa"+
		"\nF\3F\3F\3G\3G\5G\u0200\nG\3G\3G\3H\3H\3H\3H\3H\3I\3I\3I\3I\3J\3J\5J"+
		"\u020f\nJ\3J\3J\3J\3J\3K\3K\3K\3K\3L\3L\3M\3M\3M\5M\u021e\nM\3M\3M\3M"+
		"\3M\3N\3N\3N\3N\3O\3O\3P\3P\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3S\3S\3S\2\2T\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJL"+
		"NPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\2\13"+
		"\4\2::<=\3\2>A\4\2\27\31))\4\2\32\35))\4\2\36 ++\4\2!#,,\4\2::<<\5\2\7"+
		"\7::<<\3\2&(\2\u021a\2\u00af\3\2\2\2\4\u00b8\3\2\2\2\6\u00bd\3\2\2\2\b"+
		"\u00c9\3\2\2\2\n\u00d0\3\2\2\2\f\u00d4\3\2\2\2\16\u00dc\3\2\2\2\20\u00e4"+
		"\3\2\2\2\22\u00e8\3\2\2\2\24\u00ed\3\2\2\2\26\u00f5\3\2\2\2\30\u00f7\3"+
		"\2\2\2\32\u00f9\3\2\2\2\34\u00fb\3\2\2\2\36\u00fd\3\2\2\2 \u00ff\3\2\2"+
		"\2\"\u0108\3\2\2\2$\u010f\3\2\2\2&\u0111\3\2\2\2(\u0115\3\2\2\2*\u0126"+
		"\3\2\2\2,\u0128\3\2\2\2.\u012c\3\2\2\2\60\u0131\3\2\2\2\62\u0139\3\2\2"+
		"\2\64\u013d\3\2\2\2\66\u013f\3\2\2\28\u0141\3\2\2\2:\u0148\3\2\2\2<\u014a"+
		"\3\2\2\2>\u014c\3\2\2\2@\u0153\3\2\2\2B\u0157\3\2\2\2D\u0159\3\2\2\2F"+
		"\u0164\3\2\2\2H\u0169\3\2\2\2J\u016b\3\2\2\2L\u016e\3\2\2\2N\u0171\3\2"+
		"\2\2P\u0174\3\2\2\2R\u0178\3\2\2\2T\u017d\3\2\2\2V\u0182\3\2\2\2X\u0189"+
		"\3\2\2\2Z\u018e\3\2\2\2\\\u0193\3\2\2\2^\u0198\3\2\2\2`\u019a\3\2\2\2"+
		"b\u019d\3\2\2\2d\u01a0\3\2\2\2f\u01a3\3\2\2\2h\u01a6\3\2\2\2j\u01a9\3"+
		"\2\2\2l\u01ac\3\2\2\2n\u01af\3\2\2\2p\u01b2\3\2\2\2r\u01b6\3\2\2\2t\u01bc"+
		"\3\2\2\2v\u01bf\3\2\2\2x\u01c4\3\2\2\2z\u01cb\3\2\2\2|\u01cd\3\2\2\2~"+
		"\u01db\3\2\2\2\u0080\u01dd\3\2\2\2\u0082\u01e8\3\2\2\2\u0084\u01ed\3\2"+
		"\2\2\u0086\u01ef\3\2\2\2\u0088\u01f5\3\2\2\2\u008a\u01f7\3\2\2\2\u008c"+
		"\u01fd\3\2\2\2\u008e\u0203\3\2\2\2\u0090\u0208\3\2\2\2\u0092\u020c\3\2"+
		"\2\2\u0094\u0214\3\2\2\2\u0096\u0218\3\2\2\2\u0098\u021d\3\2\2\2\u009a"+
		"\u0223\3\2\2\2\u009c\u0227\3\2\2\2\u009e\u0229\3\2\2\2\u00a0\u022b\3\2"+
		"\2\2\u00a2\u022f\3\2\2\2\u00a4\u0234\3\2\2\2\u00a6\u00a7\5\4\3\2\u00a7"+
		"\u00a8\5\b\5\2\u00a8\u00ac\5\u00a2R\2\u00a9\u00ab\7B\2\2\u00aa\u00a9\3"+
		"\2\2\2\u00ab\u00ae\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad"+
		"\u00b0\3\2\2\2\u00ae\u00ac\3\2\2\2\u00af\u00a6\3\2\2\2\u00b0\u00b1\3\2"+
		"\2\2\u00b1\u00af\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3"+
		"\u00b4\7\2\2\3\u00b4\3\3\2\2\2\u00b5\u00b7\7B\2\2\u00b6\u00b5\3\2\2\2"+
		"\u00b7\u00ba\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00bb"+
		"\3\2\2\2\u00ba\u00b8\3\2\2\2\u00bb\u00bc\5\6\4\2\u00bc\5\3\2\2\2\u00bd"+
		"\u00be\7$\2\2\u00be\u00bf\7/\2\2\u00bf\u00c0\5\u00a4S\2\u00c0\u00c2\7"+
		"\60\2\2\u00c1\u00c3\7B\2\2\u00c2\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4"+
		"\u00c2\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\7\3\2\2\2\u00c6\u00ca\5\n\6\2"+
		"\u00c7\u00ca\5\f\7\2\u00c8\u00ca\5\20\t\2\u00c9\u00c6\3\2\2\2\u00c9\u00c7"+
		"\3\2\2\2\u00c9\u00c8\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00cd\7B\2\2\u00cc"+
		"\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce\u00cf\3\2"+
		"\2\2\u00cf\t\3\2\2\2\u00d0\u00d1\7:\2\2\u00d1\u00d2\7;\2\2\u00d2\u00d3"+
		"\5 \21\2\u00d3\13\3\2\2\2\u00d4\u00d9\5\16\b\2\u00d5\u00d6\7\62\2\2\u00d6"+
		"\u00d8\5\16\b\2\u00d7\u00d5\3\2\2\2\u00d8\u00db\3\2\2\2\u00d9\u00d7\3"+
		"\2\2\2\u00d9\u00da\3\2\2\2\u00da\r\3\2\2\2\u00db\u00d9\3\2\2\2\u00dc\u00e1"+
		"\5*\26\2\u00dd\u00de\7.\2\2\u00de\u00e0\5*\26\2\u00df\u00dd\3\2\2\2\u00e0"+
		"\u00e3\3\2\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\17\3\2\2"+
		"\2\u00e3\u00e1\3\2\2\2\u00e4\u00e5\5\22\n\2\u00e5\u00e6\7;\2\2\u00e6\u00e7"+
		"\5 \21\2\u00e7\21\3\2\2\2\u00e8\u00e9\7:\2\2\u00e9\u00ea\7\66\2\2\u00ea"+
		"\u00eb\5\24\13\2\u00eb\u00ec\7\67\2\2\u00ec\23\3\2\2\2\u00ed\u00f2\t\2"+
		"\2\2\u00ee\u00ef\79\2\2\u00ef\u00f1\t\2\2\2\u00f0\u00ee\3\2\2\2\u00f1"+
		"\u00f4\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\25\3\2\2"+
		"\2\u00f4\u00f2\3\2\2\2\u00f5\u00f6\t\3\2\2\u00f6\27\3\2\2\2\u00f7\u00f8"+
		"\t\4\2\2\u00f8\31\3\2\2\2\u00f9\u00fa\t\5\2\2\u00fa\33\3\2\2\2\u00fb\u00fc"+
		"\t\6\2\2\u00fc\35\3\2\2\2\u00fd\u00fe\t\7\2\2\u00fe\37\3\2\2\2\u00ff\u0105"+
		"\5\"\22\2\u0100\u0101\5\26\f\2\u0101\u0102\5\"\22\2\u0102\u0104\3\2\2"+
		"\2\u0103\u0100\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2\2\2\u0105\u0106"+
		"\3\2\2\2\u0106!\3\2\2\2\u0107\u0105\3\2\2\2\u0108\u010b\5$\23\2\u0109"+
		"\u010a\78\2\2\u010a\u010c\5&\24\2\u010b\u0109\3\2\2\2\u010b\u010c\3\2"+
		"\2\2\u010c#\3\2\2\2\u010d\u0110\5*\26\2\u010e\u0110\5(\25\2\u010f\u010d"+
		"\3\2\2\2\u010f\u010e\3\2\2\2\u0110%\3\2\2\2\u0111\u0112\7/\2\2\u0112\u0113"+
		"\5 \21\2\u0113\u0114\7\60\2\2\u0114\'\3\2\2\2\u0115\u0116\7\66\2\2\u0116"+
		"\u0117\5 \21\2\u0117\u0118\7\67\2\2\u0118)\3\2\2\2\u0119\u0127\3\2\2\2"+
		"\u011a\u0127\5\64\33\2\u011b\u0127\5:\36\2\u011c\u0127\5,\27\2\u011d\u0127"+
		"\5@!\2\u011e\u0127\5\22\n\2\u011f\u0127\5\u009aN\2\u0120\u0127\5\u0098"+
		"M\2\u0121\u0127\5\u0092J\2\u0122\u0127\5X-\2\u0123\u0127\5v<\2\u0124\u0127"+
		"\5\u0088E\2\u0125\u0127\5H%\2\u0126\u0119\3\2\2\2\u0126\u011a\3\2\2\2"+
		"\u0126\u011b\3\2\2\2\u0126\u011c\3\2\2\2\u0126\u011d\3\2\2\2\u0126\u011e"+
		"\3\2\2\2\u0126\u011f\3\2\2\2\u0126\u0120\3\2\2\2\u0126\u0121\3\2\2\2\u0126"+
		"\u0122\3\2\2\2\u0126\u0123\3\2\2\2\u0126\u0124\3\2\2\2\u0126\u0125\3\2"+
		"\2\2\u0127+\3\2\2\2\u0128\u012a\7:\2\2\u0129\u012b\5.\30\2\u012a\u0129"+
		"\3\2\2\2\u012a\u012b\3\2\2\2\u012b-\3\2\2\2\u012c\u012d\7\61\2\2\u012d"+
		"\u012e\7/\2\2\u012e\u012f\5\60\31\2\u012f\u0130\7\60\2\2\u0130/\3\2\2"+
		"\2\u0131\u0136\5\62\32\2\u0132\u0133\79\2\2\u0133\u0135\5\62\32\2\u0134"+
		"\u0132\3\2\2\2\u0135\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2"+
		"\2\2\u0137\61\3\2\2\2\u0138\u0136\3\2\2\2\u0139\u013a\t\b\2\2\u013a\63"+
		"\3\2\2\2\u013b\u013e\5\66\34\2\u013c\u013e\58\35\2\u013d\u013b\3\2\2\2"+
		"\u013d\u013c\3\2\2\2\u013e\65\3\2\2\2\u013f\u0140\7<\2\2\u0140\67\3\2"+
		"\2\2\u0141\u0142\7\66\2\2\u0142\u0143\7?\2\2\u0143\u0144\7<\2\2\u0144"+
		"\u0145\7\67\2\2\u01459\3\2\2\2\u0146\u0149\5<\37\2\u0147\u0149\5> \2\u0148"+
		"\u0146\3\2\2\2\u0148\u0147\3\2\2\2\u0149;\3\2\2\2\u014a\u014b\7=\2\2\u014b"+
		"=\3\2\2\2\u014c\u014d\7\66\2\2\u014d\u014e\7?\2\2\u014e\u014f\7=\2\2\u014f"+
		"\u0150\7\67\2\2\u0150?\3\2\2\2\u0151\u0154\5B\"\2\u0152\u0154\5D#\2\u0153"+
		"\u0151\3\2\2\2\u0153\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0156\7-"+
		"\2\2\u0156A\3\2\2\2\u0157\u0158\5F$\2\u0158C\3\2\2\2\u0159\u015a\7\66"+
		"\2\2\u015a\u015e\5F$\2\u015b\u015c\5\26\f\2\u015c\u015d\5F$\2\u015d\u015f"+
		"\3\2\2\2\u015e\u015b\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u015e\3\2\2\2\u0160"+
		"\u0161\3\2\2\2\u0161\u0162\3\2\2\2\u0162\u0163\7\67\2\2\u0163E\3\2\2\2"+
		"\u0164\u0165\t\b\2\2\u0165G\3\2\2\2\u0166\u016a\5J&\2\u0167\u016a\5L\'"+
		"\2\u0168\u016a\5N(\2\u0169\u0166\3\2\2\2\u0169\u0167\3\2\2\2\u0169\u0168"+
		"\3\2\2\2\u016aI\3\2\2\2\u016b\u016c\7\24\2\2\u016c\u016d\5P)\2\u016dK"+
		"\3\2\2\2\u016e\u016f\7\25\2\2\u016f\u0170\5P)\2\u0170M\3\2\2\2\u0171\u0172"+
		"\7\26\2\2\u0172\u0173\5P)\2\u0173O\3\2\2\2\u0174\u0175\5R*\2\u0175\u0176"+
		"\5T+\2\u0176\u0177\5V,\2\u0177Q\3\2\2\2\u0178\u0179\7\61\2\2\u0179\u017a"+
		"\7/\2\2\u017a\u017b\5 \21\2\u017b\u017c\7\60\2\2\u017cS\3\2\2\2\u017d"+
		"\u017e\78\2\2\u017e\u017f\7/\2\2\u017f\u0180\5 \21\2\u0180\u0181\7\60"+
		"\2\2\u0181U\3\2\2\2\u0182\u0183\7/\2\2\u0183\u0184\5 \21\2\u0184\u0185"+
		"\7\60\2\2\u0185W\3\2\2\2\u0186\u018a\5Z.\2\u0187\u018a\5\\/\2\u0188\u018a"+
		"\5^\60\2\u0189\u0186\3\2\2\2\u0189\u0187\3\2\2\2\u0189\u0188\3\2\2\2\u018a"+
		"Y\3\2\2\2\u018b\u018f\5`\61\2\u018c\u018f\5b\62\2\u018d\u018f\5d\63\2"+
		"\u018e\u018b\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018d\3\2\2\2\u018f[\3"+
		"\2\2\2\u0190\u0194\5f\64\2\u0191\u0194\5h\65\2\u0192\u0194\5j\66\2\u0193"+
		"\u0190\3\2\2\2\u0193\u0191\3\2\2\2\u0193\u0192\3\2\2\2\u0194]\3\2\2\2"+
		"\u0195\u0199\5l\67\2\u0196\u0199\5n8\2\u0197\u0199\5p9\2\u0198\u0195\3"+
		"\2\2\2\u0198\u0196\3\2\2\2\u0198\u0197\3\2\2\2\u0199_\3\2\2\2\u019a\u019b"+
		"\7\t\2\2\u019b\u019c\5r:\2\u019ca\3\2\2\2\u019d\u019e\7\n\2\2\u019e\u019f"+
		"\5r:\2\u019fc\3\2\2\2\u01a0\u01a1\7\13\2\2\u01a1\u01a2\5r:\2\u01a2e\3"+
		"\2\2\2\u01a3\u01a4\7\f\2\2\u01a4\u01a5\5r:\2\u01a5g\3\2\2\2\u01a6\u01a7"+
		"\7\r\2\2\u01a7\u01a8\5r:\2\u01a8i\3\2\2\2\u01a9\u01aa\7\16\2\2\u01aa\u01ab"+
		"\5r:\2\u01abk\3\2\2\2\u01ac\u01ad\7\17\2\2\u01ad\u01ae\5r:\2\u01aem\3"+
		"\2\2\2\u01af\u01b0\7\20\2\2\u01b0\u01b1\5r:\2\u01b1o\3\2\2\2\u01b2\u01b3"+
		"\7\21\2\2\u01b3\u01b4\5r:\2\u01b4q\3\2\2\2\u01b5\u01b7\5t;\2\u01b6\u01b5"+
		"\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u01b9\7/\2\2\u01b9"+
		"\u01ba\5 \21\2\u01ba\u01bb\7\60\2\2\u01bbs\3\2\2\2\u01bc\u01bd\78\2\2"+
		"\u01bd\u01be\t\b\2\2\u01beu\3\2\2\2\u01bf\u01c0\7\6\2\2\u01c0\u01c1\5"+
		"x=\2\u01c1\u01c2\5\u0082B\2\u01c2\u01c3\5\u0086D\2\u01c3w\3\2\2\2\u01c4"+
		"\u01c5\7\61\2\2\u01c5\u01c6\7/\2\2\u01c6\u01c7\5z>\2\u01c7\u01c8\7\60"+
		"\2\2\u01c8y\3\2\2\2\u01c9\u01cc\5|?\2\u01ca\u01cc\5\u0080A\2\u01cb\u01c9"+
		"\3\2\2\2\u01cb\u01ca\3\2\2\2\u01cc{\3\2\2\2\u01cd\u01d3\t\b\2\2\u01ce"+
		"\u01cf\5~@\2\u01cf\u01d0\t\b\2\2\u01d0\u01d2\3\2\2\2\u01d1\u01ce\3\2\2"+
		"\2\u01d2\u01d5\3\2\2\2\u01d3\u01d1\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4}"+
		"\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d6\u01dc\7;\2\2\u01d7\u01dc\5\30\r\2\u01d8"+
		"\u01dc\5\32\16\2\u01d9\u01dc\5\34\17\2\u01da\u01dc\5\36\20\2\u01db\u01d6"+
		"\3\2\2\2\u01db\u01d7\3\2\2\2\u01db\u01d8\3\2\2\2\u01db\u01d9\3\2\2\2\u01db"+
		"\u01da\3\2\2\2\u01dc\177\3\2\2\2\u01dd\u01de\7\b\2\2\u01de\u01df\7/\2"+
		"\2\u01df\u01e2\5|?\2\u01e0\u01e1\7\62\2\2\u01e1\u01e3\5|?\2\u01e2\u01e0"+
		"\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5"+
		"\u01e6\3\2\2\2\u01e6\u01e7\7\60\2\2\u01e7\u0081\3\2\2\2\u01e8\u01e9\7"+
		"8\2\2\u01e9\u01ea\7/\2\2\u01ea\u01eb\5\u0084C\2\u01eb\u01ec\7\60\2\2\u01ec"+
		"\u0083\3\2\2\2\u01ed\u01ee\t\t\2\2\u01ee\u0085\3\2\2\2\u01ef\u01f0\7/"+
		"\2\2\u01f0\u01f1\5 \21\2\u01f1\u01f2\7\60\2\2\u01f2\u0087\3\2\2\2\u01f3"+
		"\u01f6\5\u008aF\2\u01f4\u01f6\5\u008cG\2\u01f5\u01f3\3\2\2\2\u01f5\u01f4"+
		"\3\2\2\2\u01f6\u0089\3\2\2\2\u01f7\u01f9\7\22\2\2\u01f8\u01fa\5\u008e"+
		"H\2\u01f9\u01f8\3\2\2\2\u01f9\u01fa\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb"+
		"\u01fc\5\u0090I\2\u01fc\u008b\3\2\2\2\u01fd\u01ff\7\23\2\2\u01fe\u0200"+
		"\5\u008eH\2\u01ff\u01fe\3\2\2\2\u01ff\u0200\3\2\2\2\u0200\u0201\3\2\2"+
		"\2\u0201\u0202\5\u0090I\2\u0202\u008d\3\2\2\2\u0203\u0204\7\61\2\2\u0204"+
		"\u0205\7/\2\2\u0205\u0206\t\b\2\2\u0206\u0207\7\60\2\2\u0207\u008f\3\2"+
		"\2\2\u0208\u0209\7/\2\2\u0209\u020a\5 \21\2\u020a\u020b\7\60\2\2\u020b"+
		"\u0091\3\2\2\2\u020c\u020e\7\5\2\2\u020d\u020f\5\u0094K\2\u020e\u020d"+
		"\3\2\2\2\u020e\u020f\3\2\2\2\u020f\u0210\3\2\2\2\u0210\u0211\7/\2\2\u0211"+
		"\u0212\5\u0096L\2\u0212\u0213\7\60\2\2\u0213\u0093\3\2\2\2\u0214\u0215"+
		"\7\64\2\2\u0215\u0216\t\b\2\2\u0216\u0217\7\65\2\2\u0217\u0095\3\2\2\2"+
		"\u0218\u0219\5 \21\2\u0219\u0097\3\2\2\2\u021a\u021b\7\63\2\2\u021b\u021e"+
		"\78\2\2\u021c\u021e\7\3\2\2\u021d\u021a\3\2\2\2\u021d\u021c\3\2\2\2\u021e"+
		"\u021f\3\2\2\2\u021f\u0220\7/\2\2\u0220\u0221\5 \21\2\u0221\u0222\7\60"+
		"\2\2\u0222\u0099\3\2\2\2\u0223\u0224\7\4\2\2\u0224\u0225\5\u009cO\2\u0225"+
		"\u0226\5\u009eP\2\u0226\u009b\3\2\2\2\u0227\u0228\5\u00a0Q\2\u0228\u009d"+
		"\3\2\2\2\u0229\u022a\5\u00a0Q\2\u022a\u009f\3\2\2\2\u022b\u022c\7/\2\2"+
		"\u022c\u022d\5 \21\2\u022d\u022e\7\60\2\2\u022e\u00a1\3\2\2\2\u022f\u0230"+
		"\7%\2\2\u0230\u0231\7/\2\2\u0231\u0232\5\u00a4S\2\u0232\u0233\7\60\2\2"+
		"\u0233\u00a3\3\2\2\2\u0234\u0235\t\n\2\2\u0235\u00a5\3\2\2\2$\u00ac\u00b1"+
		"\u00b8\u00c4\u00c9\u00ce\u00d9\u00e1\u00f2\u0105\u010b\u010f\u0126\u012a"+
		"\u0136\u013d\u0148\u0153\u0160\u0169\u0189\u018e\u0193\u0198\u01b6\u01cb"+
		"\u01d3\u01db\u01e4\u01f5\u01f9\u01ff\u020e\u021d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}