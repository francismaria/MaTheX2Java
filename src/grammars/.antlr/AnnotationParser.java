// Generated from /Users/francisco/Documents/FEUP/Projetos/COMP/Math2Code/generation/grammars/Annotation.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AnnotationParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, REAL=2, SHORT=3, INT=4, FLOAT=5, DOUBLE=6, LONG=7, NAME_TAG=8, 
		RETURN_TAG=9, VARNAME=10, INTEGER=11, BEGIN_TAG=12, END_TAG=13, NEWLINE_TAG=14, 
		COMMENT_TAG=15, EXP_TAG=16, FRAC_TAG=17, SQRT_TAG=18, SUMMATION_TAG=19, 
		SUBSTACK_TAG=20, SIN_TAG=21, COS_TAG=22, TAN_TAG=23, ARCSIN_TAG=24, ARCCOS_TAG=25, 
		ARCTAN_TAG=26, SINH_TAG=27, COSH_TAG=28, TANH_TAG=29, LOG_TAG=30, LN_TAG=31, 
		INT_TAG=32, IINT_TAG=33, IIINT_TAG=34, LT_TAG=35, LNEQ_TAG=36, LNEQQ_TAG=37, 
		LE_TAG=38, LEQ_TAG=39, LEQQ_TAG=40, LEQSLANT_TAG=41, GT_TAG=42, GNEQ_TAG=43, 
		GNEQQ_TAG=44, GEQ_TAG=45, GEQQ_TAG=46, GEQSLANT_TAG=47, CURLY_LF=48, CURLY_RT=49, 
		BRACKET_LF=50, BRACKET_RT=51, SINGLE_QUOTE_TAG=52, COLON_TAG=53, COMMA_TAG=54, 
		DOT_SYMBOL=55, LESSER_SYMBOL=56, LESS_EQUAL_SYMBOL=57, GREATER_SYMBOL=58, 
		GREATER_EQUAL_SYMBOL=59, FACTORIAL_SYMBOL=60, JOIN=61, UNDERSCORE=62, 
		BREAKLINE=63, EULER_NUMBER=64, PARENTHESIS_LF=65, PARENTHESIS_RT=66, HAT=67, 
		EQUAL=68, PLUS=69, MINUS=70, MULTIPLICATION=71, DIVISION=72, ENVIRONMENT_IGNORE=73, 
		WS=74;
	public static final int
		RULE_run = 0, RULE_method_specs = 1, RULE_name_spec = 2, RULE_return_spec = 3, 
		RULE_return_type = 4, RULE_start = 5, RULE_variable_specs = 6, RULE_new_line_declaration = 7, 
		RULE_variables_type_declaration = 8, RULE_variables = 9, RULE_variables_type = 10, 
		RULE_array = 11, RULE_array_dimension = 12, RULE_to_ignore = 13, RULE_end = 14;
	public static final String[] ruleNames = {
		"run", "method_specs", "name_spec", "return_spec", "return_type", "start", 
		"variable_specs", "new_line_declaration", "variables_type_declaration", 
		"variables", "variables_type", "array", "array_dimension", "to_ignore", 
		"end"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'\\n'", null, null, null, null, null, null, null, null, null, null, 
		"'\\begin'", "'\\end'", null, "'%'", "'\\exp'", "'\\frac'", "'\\sqrt'", 
		"'\\sum'", "'\\substack'", "'\\sin'", "'\\cos'", "'\\tan'", "'\\arcsin'", 
		"'\\arccos'", "'\\arctan'", "'\\sinh'", "'\\cosh'", "'\\tanh'", "'\\log'", 
		"'\\ln'", "'\\int'", "'\\iint'", "'\\iiint'", "'\\lt'", "'\\lneq'", "'\\lneqq'", 
		"'\\le'", "'\\leq'", "'\\leqq'", "'\\leqslant'", "'\\gt'", "'\\gneq'", 
		"'\\gneqq'", "'\\geq'", "'\\geqq'", "'\\geqslant'", "'{'", "'}'", "'['", 
		"']'", "'''", "':'", "','", "'.'", "'<'", "'<='", "'>'", "'>='", "'!'", 
		"'&'", "'_'", "'\\\\'", "'e'", "'('", "')'", "'^'", "'='", "'+'", "'-'", 
		null, "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, "REAL", "SHORT", "INT", "FLOAT", "DOUBLE", "LONG", "NAME_TAG", 
		"RETURN_TAG", "VARNAME", "INTEGER", "BEGIN_TAG", "END_TAG", "NEWLINE_TAG", 
		"COMMENT_TAG", "EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", "SUBSTACK_TAG", 
		"SIN_TAG", "COS_TAG", "TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", "ARCTAN_TAG", 
		"SINH_TAG", "COSH_TAG", "TANH_TAG", "LOG_TAG", "LN_TAG", "INT_TAG", "IINT_TAG", 
		"IIINT_TAG", "LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", "LE_TAG", "LEQ_TAG", "LEQQ_TAG", 
		"LEQSLANT_TAG", "GT_TAG", "GNEQ_TAG", "GNEQQ_TAG", "GEQ_TAG", "GEQQ_TAG", 
		"GEQSLANT_TAG", "CURLY_LF", "CURLY_RT", "BRACKET_LF", "BRACKET_RT", "SINGLE_QUOTE_TAG", 
		"COLON_TAG", "COMMA_TAG", "DOT_SYMBOL", "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", 
		"GREATER_SYMBOL", "GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", "JOIN", 
		"UNDERSCORE", "BREAKLINE", "EULER_NUMBER", "PARENTHESIS_LF", "PARENTHESIS_RT", 
		"HAT", "EQUAL", "PLUS", "MINUS", "MULTIPLICATION", "DIVISION", "ENVIRONMENT_IGNORE", 
		"WS"
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
	public String getGrammarFileName() { return "Annotation.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AnnotationParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RunContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(AnnotationParser.EOF, 0); }
		public List<Method_specsContext> method_specs() {
			return getRuleContexts(Method_specsContext.class);
		}
		public Method_specsContext method_specs(int i) {
			return getRuleContext(Method_specsContext.class,i);
		}
		public List<StartContext> start() {
			return getRuleContexts(StartContext.class);
		}
		public StartContext start(int i) {
			return getRuleContext(StartContext.class,i);
		}
		public List<To_ignoreContext> to_ignore() {
			return getRuleContexts(To_ignoreContext.class);
		}
		public To_ignoreContext to_ignore(int i) {
			return getRuleContext(To_ignoreContext.class,i);
		}
		public List<Variable_specsContext> variable_specs() {
			return getRuleContexts(Variable_specsContext.class);
		}
		public Variable_specsContext variable_specs(int i) {
			return getRuleContext(Variable_specsContext.class,i);
		}
		public RunContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_run; }
	}

	public final RunContext run() throws RecognitionException {
		RunContext _localctx = new RunContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_run);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(30);
				method_specs();
				setState(31);
				start();
				setState(33);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(32);
					variable_specs();
					}
					break;
				}
				setState(35);
				to_ignore();
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__0) {
					{
					{
					setState(36);
					match(T__0);
					}
					}
					setState(41);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				setState(44); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEGIN_TAG) | (1L << NEWLINE_TAG) | (1L << COMMENT_TAG))) != 0) );
			setState(46);
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

	public static class Method_specsContext extends ParserRuleContext {
		public Name_specContext name_spec() {
			return getRuleContext(Name_specContext.class,0);
		}
		public Return_specContext return_spec() {
			return getRuleContext(Return_specContext.class,0);
		}
		public Method_specsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_specs; }
	}

	public final Method_specsContext method_specs() throws RecognitionException {
		Method_specsContext _localctx = new Method_specsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_method_specs);
		try {
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(49);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(48);
					name_spec();
					}
					break;
				}
				setState(52);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(51);
					return_spec();
					}
					break;
				}
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(55);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(54);
					return_spec();
					}
					break;
				}
				setState(58);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(57);
					name_spec();
					}
					break;
				}
				}
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

	public static class Name_specContext extends ParserRuleContext {
		public TerminalNode COMMENT_TAG() { return getToken(AnnotationParser.COMMENT_TAG, 0); }
		public TerminalNode NAME_TAG() { return getToken(AnnotationParser.NAME_TAG, 0); }
		public TerminalNode COLON_TAG() { return getToken(AnnotationParser.COLON_TAG, 0); }
		public TerminalNode VARNAME() { return getToken(AnnotationParser.VARNAME, 0); }
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(AnnotationParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(AnnotationParser.NEWLINE_TAG, i);
		}
		public Name_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name_spec; }
	}

	public final Name_specContext name_spec() throws RecognitionException {
		Name_specContext _localctx = new Name_specContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_name_spec);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE_TAG) {
				{
				{
				setState(62);
				match(NEWLINE_TAG);
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(68);
			match(COMMENT_TAG);
			setState(69);
			match(NAME_TAG);
			setState(70);
			match(COLON_TAG);
			setState(71);
			match(VARNAME);
			setState(73); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(72);
					match(NEWLINE_TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(75); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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

	public static class Return_specContext extends ParserRuleContext {
		public TerminalNode COMMENT_TAG() { return getToken(AnnotationParser.COMMENT_TAG, 0); }
		public TerminalNode RETURN_TAG() { return getToken(AnnotationParser.RETURN_TAG, 0); }
		public TerminalNode COLON_TAG() { return getToken(AnnotationParser.COLON_TAG, 0); }
		public Return_typeContext return_type() {
			return getRuleContext(Return_typeContext.class,0);
		}
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(AnnotationParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(AnnotationParser.NEWLINE_TAG, i);
		}
		public Return_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_spec; }
	}

	public final Return_specContext return_spec() throws RecognitionException {
		Return_specContext _localctx = new Return_specContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_return_spec);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE_TAG) {
				{
				{
				setState(77);
				match(NEWLINE_TAG);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
			match(COMMENT_TAG);
			setState(84);
			match(RETURN_TAG);
			setState(85);
			match(COLON_TAG);
			setState(86);
			return_type();
			setState(88); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(87);
					match(NEWLINE_TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(90); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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

	public static class Return_typeContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(AnnotationParser.INT, 0); }
		public TerminalNode DOUBLE() { return getToken(AnnotationParser.DOUBLE, 0); }
		public TerminalNode SHORT() { return getToken(AnnotationParser.SHORT, 0); }
		public TerminalNode LONG() { return getToken(AnnotationParser.LONG, 0); }
		public Return_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_type; }
	}

	public final Return_typeContext return_type() throws RecognitionException {
		Return_typeContext _localctx = new Return_typeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_return_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SHORT) | (1L << INT) | (1L << DOUBLE) | (1L << LONG))) != 0)) ) {
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

	public static class StartContext extends ParserRuleContext {
		public TerminalNode BEGIN_TAG() { return getToken(AnnotationParser.BEGIN_TAG, 0); }
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(AnnotationParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(AnnotationParser.NEWLINE_TAG, i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_start);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE_TAG) {
				{
				{
				setState(94);
				match(NEWLINE_TAG);
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
			match(BEGIN_TAG);
			setState(102); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(101);
					match(NEWLINE_TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(104); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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

	public static class Variable_specsContext extends ParserRuleContext {
		public List<New_line_declarationContext> new_line_declaration() {
			return getRuleContexts(New_line_declarationContext.class);
		}
		public New_line_declarationContext new_line_declaration(int i) {
			return getRuleContext(New_line_declarationContext.class,i);
		}
		public Variable_specsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable_specs; }
	}

	public final Variable_specsContext variable_specs() throws RecognitionException {
		Variable_specsContext _localctx = new Variable_specsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_variable_specs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(107); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(106);
					new_line_declaration();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(109); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
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

	public static class New_line_declarationContext extends ParserRuleContext {
		public TerminalNode COMMENT_TAG() { return getToken(AnnotationParser.COMMENT_TAG, 0); }
		public List<Variables_type_declarationContext> variables_type_declaration() {
			return getRuleContexts(Variables_type_declarationContext.class);
		}
		public Variables_type_declarationContext variables_type_declaration(int i) {
			return getRuleContext(Variables_type_declarationContext.class,i);
		}
		public TerminalNode COMMA_TAG() { return getToken(AnnotationParser.COMMA_TAG, 0); }
		public List<TerminalNode> NEWLINE_TAG() { return getTokens(AnnotationParser.NEWLINE_TAG); }
		public TerminalNode NEWLINE_TAG(int i) {
			return getToken(AnnotationParser.NEWLINE_TAG, i);
		}
		public New_line_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_new_line_declaration; }
	}

	public final New_line_declarationContext new_line_declaration() throws RecognitionException {
		New_line_declarationContext _localctx = new New_line_declarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_new_line_declaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(COMMENT_TAG);
			setState(112);
			variables_type_declaration();
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA_TAG) {
				{
				setState(113);
				match(COMMA_TAG);
				setState(114);
				variables_type_declaration();
				}
			}

			setState(118); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(117);
					match(NEWLINE_TAG);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(120); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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

	public static class Variables_type_declarationContext extends ParserRuleContext {
		public TerminalNode BRACKET_LF() { return getToken(AnnotationParser.BRACKET_LF, 0); }
		public VariablesContext variables() {
			return getRuleContext(VariablesContext.class,0);
		}
		public TerminalNode BRACKET_RT() { return getToken(AnnotationParser.BRACKET_RT, 0); }
		public TerminalNode COLON_TAG() { return getToken(AnnotationParser.COLON_TAG, 0); }
		public Variables_typeContext variables_type() {
			return getRuleContext(Variables_typeContext.class,0);
		}
		public Variables_type_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variables_type_declaration; }
	}

	public final Variables_type_declarationContext variables_type_declaration() throws RecognitionException {
		Variables_type_declarationContext _localctx = new Variables_type_declarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variables_type_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(BRACKET_LF);
			setState(123);
			variables();
			setState(124);
			match(BRACKET_RT);
			setState(125);
			match(COLON_TAG);
			setState(126);
			variables_type();
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

	public static class VariablesContext extends ParserRuleContext {
		public List<TerminalNode> VARNAME() { return getTokens(AnnotationParser.VARNAME); }
		public TerminalNode VARNAME(int i) {
			return getToken(AnnotationParser.VARNAME, i);
		}
		public TerminalNode COMMA_TAG() { return getToken(AnnotationParser.COMMA_TAG, 0); }
		public VariablesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variables; }
	}

	public final VariablesContext variables() throws RecognitionException {
		VariablesContext _localctx = new VariablesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variables);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(VARNAME);
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA_TAG) {
				{
				setState(129);
				match(COMMA_TAG);
				setState(130);
				match(VARNAME);
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

	public static class Variables_typeContext extends ParserRuleContext {
		public TerminalNode REAL() { return getToken(AnnotationParser.REAL, 0); }
		public TerminalNode SHORT() { return getToken(AnnotationParser.SHORT, 0); }
		public TerminalNode INT() { return getToken(AnnotationParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(AnnotationParser.FLOAT, 0); }
		public TerminalNode DOUBLE() { return getToken(AnnotationParser.DOUBLE, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public Variables_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variables_type; }
	}

	public final Variables_typeContext variables_type() throws RecognitionException {
		Variables_typeContext _localctx = new Variables_typeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variables_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REAL) | (1L << SHORT) | (1L << INT) | (1L << FLOAT) | (1L << DOUBLE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BRACKET_LF) {
				{
				setState(134);
				array();
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

	public static class ArrayContext extends ParserRuleContext {
		public List<Array_dimensionContext> array_dimension() {
			return getRuleContexts(Array_dimensionContext.class);
		}
		public Array_dimensionContext array_dimension(int i) {
			return getRuleContext(Array_dimensionContext.class,i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(137);
				array_dimension();
				}
				}
				setState(140); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==BRACKET_LF );
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

	public static class Array_dimensionContext extends ParserRuleContext {
		public TerminalNode BRACKET_LF() { return getToken(AnnotationParser.BRACKET_LF, 0); }
		public TerminalNode INTEGER() { return getToken(AnnotationParser.INTEGER, 0); }
		public TerminalNode BRACKET_RT() { return getToken(AnnotationParser.BRACKET_RT, 0); }
		public Array_dimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_dimension; }
	}

	public final Array_dimensionContext array_dimension() throws RecognitionException {
		Array_dimensionContext _localctx = new Array_dimensionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_array_dimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			match(BRACKET_LF);
			setState(143);
			match(INTEGER);
			setState(144);
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

	public static class To_ignoreContext extends ParserRuleContext {
		public List<TerminalNode> ARCCOS_TAG() { return getTokens(AnnotationParser.ARCCOS_TAG); }
		public TerminalNode ARCCOS_TAG(int i) {
			return getToken(AnnotationParser.ARCCOS_TAG, i);
		}
		public List<TerminalNode> ARCSIN_TAG() { return getTokens(AnnotationParser.ARCSIN_TAG); }
		public TerminalNode ARCSIN_TAG(int i) {
			return getToken(AnnotationParser.ARCSIN_TAG, i);
		}
		public List<TerminalNode> BRACKET_LF() { return getTokens(AnnotationParser.BRACKET_LF); }
		public TerminalNode BRACKET_LF(int i) {
			return getToken(AnnotationParser.BRACKET_LF, i);
		}
		public List<TerminalNode> BRACKET_RT() { return getTokens(AnnotationParser.BRACKET_RT); }
		public TerminalNode BRACKET_RT(int i) {
			return getToken(AnnotationParser.BRACKET_RT, i);
		}
		public List<TerminalNode> BREAKLINE() { return getTokens(AnnotationParser.BREAKLINE); }
		public TerminalNode BREAKLINE(int i) {
			return getToken(AnnotationParser.BREAKLINE, i);
		}
		public List<TerminalNode> COLON_TAG() { return getTokens(AnnotationParser.COLON_TAG); }
		public TerminalNode COLON_TAG(int i) {
			return getToken(AnnotationParser.COLON_TAG, i);
		}
		public List<TerminalNode> COMMA_TAG() { return getTokens(AnnotationParser.COMMA_TAG); }
		public TerminalNode COMMA_TAG(int i) {
			return getToken(AnnotationParser.COMMA_TAG, i);
		}
		public List<TerminalNode> COMMENT_TAG() { return getTokens(AnnotationParser.COMMENT_TAG); }
		public TerminalNode COMMENT_TAG(int i) {
			return getToken(AnnotationParser.COMMENT_TAG, i);
		}
		public List<TerminalNode> COS_TAG() { return getTokens(AnnotationParser.COS_TAG); }
		public TerminalNode COS_TAG(int i) {
			return getToken(AnnotationParser.COS_TAG, i);
		}
		public List<TerminalNode> COSH_TAG() { return getTokens(AnnotationParser.COSH_TAG); }
		public TerminalNode COSH_TAG(int i) {
			return getToken(AnnotationParser.COSH_TAG, i);
		}
		public List<TerminalNode> CURLY_LF() { return getTokens(AnnotationParser.CURLY_LF); }
		public TerminalNode CURLY_LF(int i) {
			return getToken(AnnotationParser.CURLY_LF, i);
		}
		public List<TerminalNode> CURLY_RT() { return getTokens(AnnotationParser.CURLY_RT); }
		public TerminalNode CURLY_RT(int i) {
			return getToken(AnnotationParser.CURLY_RT, i);
		}
		public List<TerminalNode> DOT_SYMBOL() { return getTokens(AnnotationParser.DOT_SYMBOL); }
		public TerminalNode DOT_SYMBOL(int i) {
			return getToken(AnnotationParser.DOT_SYMBOL, i);
		}
		public List<TerminalNode> DIVISION() { return getTokens(AnnotationParser.DIVISION); }
		public TerminalNode DIVISION(int i) {
			return getToken(AnnotationParser.DIVISION, i);
		}
		public List<TerminalNode> EQUAL() { return getTokens(AnnotationParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(AnnotationParser.EQUAL, i);
		}
		public List<TerminalNode> EULER_NUMBER() { return getTokens(AnnotationParser.EULER_NUMBER); }
		public TerminalNode EULER_NUMBER(int i) {
			return getToken(AnnotationParser.EULER_NUMBER, i);
		}
		public List<TerminalNode> EXP_TAG() { return getTokens(AnnotationParser.EXP_TAG); }
		public TerminalNode EXP_TAG(int i) {
			return getToken(AnnotationParser.EXP_TAG, i);
		}
		public List<TerminalNode> FRAC_TAG() { return getTokens(AnnotationParser.FRAC_TAG); }
		public TerminalNode FRAC_TAG(int i) {
			return getToken(AnnotationParser.FRAC_TAG, i);
		}
		public List<TerminalNode> FACTORIAL_SYMBOL() { return getTokens(AnnotationParser.FACTORIAL_SYMBOL); }
		public TerminalNode FACTORIAL_SYMBOL(int i) {
			return getToken(AnnotationParser.FACTORIAL_SYMBOL, i);
		}
		public List<TerminalNode> GEQ_TAG() { return getTokens(AnnotationParser.GEQ_TAG); }
		public TerminalNode GEQ_TAG(int i) {
			return getToken(AnnotationParser.GEQ_TAG, i);
		}
		public List<TerminalNode> GEQQ_TAG() { return getTokens(AnnotationParser.GEQQ_TAG); }
		public TerminalNode GEQQ_TAG(int i) {
			return getToken(AnnotationParser.GEQQ_TAG, i);
		}
		public List<TerminalNode> GEQSLANT_TAG() { return getTokens(AnnotationParser.GEQSLANT_TAG); }
		public TerminalNode GEQSLANT_TAG(int i) {
			return getToken(AnnotationParser.GEQSLANT_TAG, i);
		}
		public List<TerminalNode> GNEQ_TAG() { return getTokens(AnnotationParser.GNEQ_TAG); }
		public TerminalNode GNEQ_TAG(int i) {
			return getToken(AnnotationParser.GNEQ_TAG, i);
		}
		public List<TerminalNode> GNEQQ_TAG() { return getTokens(AnnotationParser.GNEQQ_TAG); }
		public TerminalNode GNEQQ_TAG(int i) {
			return getToken(AnnotationParser.GNEQQ_TAG, i);
		}
		public List<TerminalNode> GREATER_EQUAL_SYMBOL() { return getTokens(AnnotationParser.GREATER_EQUAL_SYMBOL); }
		public TerminalNode GREATER_EQUAL_SYMBOL(int i) {
			return getToken(AnnotationParser.GREATER_EQUAL_SYMBOL, i);
		}
		public List<TerminalNode> GREATER_SYMBOL() { return getTokens(AnnotationParser.GREATER_SYMBOL); }
		public TerminalNode GREATER_SYMBOL(int i) {
			return getToken(AnnotationParser.GREATER_SYMBOL, i);
		}
		public List<TerminalNode> GT_TAG() { return getTokens(AnnotationParser.GT_TAG); }
		public TerminalNode GT_TAG(int i) {
			return getToken(AnnotationParser.GT_TAG, i);
		}
		public List<TerminalNode> HAT() { return getTokens(AnnotationParser.HAT); }
		public TerminalNode HAT(int i) {
			return getToken(AnnotationParser.HAT, i);
		}
		public List<TerminalNode> IIINT_TAG() { return getTokens(AnnotationParser.IIINT_TAG); }
		public TerminalNode IIINT_TAG(int i) {
			return getToken(AnnotationParser.IIINT_TAG, i);
		}
		public List<TerminalNode> IINT_TAG() { return getTokens(AnnotationParser.IINT_TAG); }
		public TerminalNode IINT_TAG(int i) {
			return getToken(AnnotationParser.IINT_TAG, i);
		}
		public List<TerminalNode> INT_TAG() { return getTokens(AnnotationParser.INT_TAG); }
		public TerminalNode INT_TAG(int i) {
			return getToken(AnnotationParser.INT_TAG, i);
		}
		public List<TerminalNode> JOIN() { return getTokens(AnnotationParser.JOIN); }
		public TerminalNode JOIN(int i) {
			return getToken(AnnotationParser.JOIN, i);
		}
		public List<TerminalNode> LE_TAG() { return getTokens(AnnotationParser.LE_TAG); }
		public TerminalNode LE_TAG(int i) {
			return getToken(AnnotationParser.LE_TAG, i);
		}
		public List<TerminalNode> LEQ_TAG() { return getTokens(AnnotationParser.LEQ_TAG); }
		public TerminalNode LEQ_TAG(int i) {
			return getToken(AnnotationParser.LEQ_TAG, i);
		}
		public List<TerminalNode> LEQQ_TAG() { return getTokens(AnnotationParser.LEQQ_TAG); }
		public TerminalNode LEQQ_TAG(int i) {
			return getToken(AnnotationParser.LEQQ_TAG, i);
		}
		public List<TerminalNode> LEQSLANT_TAG() { return getTokens(AnnotationParser.LEQSLANT_TAG); }
		public TerminalNode LEQSLANT_TAG(int i) {
			return getToken(AnnotationParser.LEQSLANT_TAG, i);
		}
		public List<TerminalNode> LESS_EQUAL_SYMBOL() { return getTokens(AnnotationParser.LESS_EQUAL_SYMBOL); }
		public TerminalNode LESS_EQUAL_SYMBOL(int i) {
			return getToken(AnnotationParser.LESS_EQUAL_SYMBOL, i);
		}
		public List<TerminalNode> LESSER_SYMBOL() { return getTokens(AnnotationParser.LESSER_SYMBOL); }
		public TerminalNode LESSER_SYMBOL(int i) {
			return getToken(AnnotationParser.LESSER_SYMBOL, i);
		}
		public List<TerminalNode> LN_TAG() { return getTokens(AnnotationParser.LN_TAG); }
		public TerminalNode LN_TAG(int i) {
			return getToken(AnnotationParser.LN_TAG, i);
		}
		public List<TerminalNode> LNEQ_TAG() { return getTokens(AnnotationParser.LNEQ_TAG); }
		public TerminalNode LNEQ_TAG(int i) {
			return getToken(AnnotationParser.LNEQ_TAG, i);
		}
		public List<TerminalNode> LNEQQ_TAG() { return getTokens(AnnotationParser.LNEQQ_TAG); }
		public TerminalNode LNEQQ_TAG(int i) {
			return getToken(AnnotationParser.LNEQQ_TAG, i);
		}
		public List<TerminalNode> LOG_TAG() { return getTokens(AnnotationParser.LOG_TAG); }
		public TerminalNode LOG_TAG(int i) {
			return getToken(AnnotationParser.LOG_TAG, i);
		}
		public List<TerminalNode> LT_TAG() { return getTokens(AnnotationParser.LT_TAG); }
		public TerminalNode LT_TAG(int i) {
			return getToken(AnnotationParser.LT_TAG, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(AnnotationParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(AnnotationParser.MINUS, i);
		}
		public List<TerminalNode> MULTIPLICATION() { return getTokens(AnnotationParser.MULTIPLICATION); }
		public TerminalNode MULTIPLICATION(int i) {
			return getToken(AnnotationParser.MULTIPLICATION, i);
		}
		public List<TerminalNode> PARENTHESIS_LF() { return getTokens(AnnotationParser.PARENTHESIS_LF); }
		public TerminalNode PARENTHESIS_LF(int i) {
			return getToken(AnnotationParser.PARENTHESIS_LF, i);
		}
		public List<TerminalNode> PARENTHESIS_RT() { return getTokens(AnnotationParser.PARENTHESIS_RT); }
		public TerminalNode PARENTHESIS_RT(int i) {
			return getToken(AnnotationParser.PARENTHESIS_RT, i);
		}
		public List<TerminalNode> PLUS() { return getTokens(AnnotationParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(AnnotationParser.PLUS, i);
		}
		public List<TerminalNode> SIN_TAG() { return getTokens(AnnotationParser.SIN_TAG); }
		public TerminalNode SIN_TAG(int i) {
			return getToken(AnnotationParser.SIN_TAG, i);
		}
		public List<TerminalNode> SINH_TAG() { return getTokens(AnnotationParser.SINH_TAG); }
		public TerminalNode SINH_TAG(int i) {
			return getToken(AnnotationParser.SINH_TAG, i);
		}
		public List<TerminalNode> SQRT_TAG() { return getTokens(AnnotationParser.SQRT_TAG); }
		public TerminalNode SQRT_TAG(int i) {
			return getToken(AnnotationParser.SQRT_TAG, i);
		}
		public List<TerminalNode> SUBSTACK_TAG() { return getTokens(AnnotationParser.SUBSTACK_TAG); }
		public TerminalNode SUBSTACK_TAG(int i) {
			return getToken(AnnotationParser.SUBSTACK_TAG, i);
		}
		public List<TerminalNode> SUMMATION_TAG() { return getTokens(AnnotationParser.SUMMATION_TAG); }
		public TerminalNode SUMMATION_TAG(int i) {
			return getToken(AnnotationParser.SUMMATION_TAG, i);
		}
		public List<TerminalNode> TAN_TAG() { return getTokens(AnnotationParser.TAN_TAG); }
		public TerminalNode TAN_TAG(int i) {
			return getToken(AnnotationParser.TAN_TAG, i);
		}
		public List<TerminalNode> TANH_TAG() { return getTokens(AnnotationParser.TANH_TAG); }
		public TerminalNode TANH_TAG(int i) {
			return getToken(AnnotationParser.TANH_TAG, i);
		}
		public List<TerminalNode> UNDERSCORE() { return getTokens(AnnotationParser.UNDERSCORE); }
		public TerminalNode UNDERSCORE(int i) {
			return getToken(AnnotationParser.UNDERSCORE, i);
		}
		public To_ignoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_to_ignore; }
	}

	public final To_ignoreContext to_ignore() throws RecognitionException {
		To_ignoreContext _localctx = new To_ignoreContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_to_ignore);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					setState(203);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
					case 1:
						{
						setState(146);
						matchWildcard();
						}
						break;
					case 2:
						{
						setState(147);
						match(ARCCOS_TAG);
						}
						break;
					case 3:
						{
						setState(148);
						match(ARCSIN_TAG);
						}
						break;
					case 4:
						{
						setState(149);
						match(BRACKET_LF);
						}
						break;
					case 5:
						{
						setState(150);
						match(BRACKET_RT);
						}
						break;
					case 6:
						{
						setState(151);
						match(BREAKLINE);
						}
						break;
					case 7:
						{
						setState(152);
						match(COLON_TAG);
						}
						break;
					case 8:
						{
						setState(153);
						match(COMMA_TAG);
						}
						break;
					case 9:
						{
						setState(154);
						match(COMMENT_TAG);
						}
						break;
					case 10:
						{
						setState(155);
						match(COS_TAG);
						}
						break;
					case 11:
						{
						setState(156);
						match(COSH_TAG);
						}
						break;
					case 12:
						{
						setState(157);
						match(CURLY_LF);
						}
						break;
					case 13:
						{
						setState(158);
						match(CURLY_RT);
						}
						break;
					case 14:
						{
						setState(159);
						match(DOT_SYMBOL);
						}
						break;
					case 15:
						{
						setState(160);
						match(DIVISION);
						}
						break;
					case 16:
						{
						setState(161);
						match(EQUAL);
						}
						break;
					case 17:
						{
						setState(162);
						match(EULER_NUMBER);
						}
						break;
					case 18:
						{
						setState(163);
						match(EXP_TAG);
						}
						break;
					case 19:
						{
						setState(164);
						match(FRAC_TAG);
						}
						break;
					case 20:
						{
						setState(165);
						match(FACTORIAL_SYMBOL);
						}
						break;
					case 21:
						{
						setState(166);
						match(GEQ_TAG);
						}
						break;
					case 22:
						{
						setState(167);
						match(GEQQ_TAG);
						}
						break;
					case 23:
						{
						setState(168);
						match(GEQSLANT_TAG);
						}
						break;
					case 24:
						{
						setState(169);
						match(GNEQ_TAG);
						}
						break;
					case 25:
						{
						setState(170);
						match(GNEQQ_TAG);
						}
						break;
					case 26:
						{
						setState(171);
						match(GREATER_EQUAL_SYMBOL);
						}
						break;
					case 27:
						{
						setState(172);
						match(GREATER_SYMBOL);
						}
						break;
					case 28:
						{
						setState(173);
						match(GT_TAG);
						}
						break;
					case 29:
						{
						setState(174);
						match(HAT);
						}
						break;
					case 30:
						{
						setState(175);
						match(IIINT_TAG);
						}
						break;
					case 31:
						{
						setState(176);
						match(IINT_TAG);
						}
						break;
					case 32:
						{
						setState(177);
						match(INT_TAG);
						}
						break;
					case 33:
						{
						setState(178);
						match(JOIN);
						}
						break;
					case 34:
						{
						setState(179);
						match(LE_TAG);
						}
						break;
					case 35:
						{
						setState(180);
						match(LEQ_TAG);
						}
						break;
					case 36:
						{
						setState(181);
						match(LEQQ_TAG);
						}
						break;
					case 37:
						{
						setState(182);
						match(LEQSLANT_TAG);
						}
						break;
					case 38:
						{
						setState(183);
						match(LESS_EQUAL_SYMBOL);
						}
						break;
					case 39:
						{
						setState(184);
						match(LESSER_SYMBOL);
						}
						break;
					case 40:
						{
						setState(185);
						match(LN_TAG);
						}
						break;
					case 41:
						{
						setState(186);
						match(LNEQ_TAG);
						}
						break;
					case 42:
						{
						setState(187);
						match(LNEQQ_TAG);
						}
						break;
					case 43:
						{
						setState(188);
						match(LOG_TAG);
						}
						break;
					case 44:
						{
						setState(189);
						match(LT_TAG);
						}
						break;
					case 45:
						{
						setState(190);
						match(MINUS);
						}
						break;
					case 46:
						{
						setState(191);
						match(MULTIPLICATION);
						}
						break;
					case 47:
						{
						setState(192);
						match(PARENTHESIS_LF);
						}
						break;
					case 48:
						{
						setState(193);
						match(PARENTHESIS_RT);
						}
						break;
					case 49:
						{
						setState(194);
						match(PLUS);
						}
						break;
					case 50:
						{
						setState(195);
						match(SIN_TAG);
						}
						break;
					case 51:
						{
						setState(196);
						match(SINH_TAG);
						}
						break;
					case 52:
						{
						setState(197);
						match(SQRT_TAG);
						}
						break;
					case 53:
						{
						setState(198);
						match(SUBSTACK_TAG);
						}
						break;
					case 54:
						{
						setState(199);
						match(SUMMATION_TAG);
						}
						break;
					case 55:
						{
						setState(200);
						match(TAN_TAG);
						}
						break;
					case 56:
						{
						setState(201);
						match(TANH_TAG);
						}
						break;
					case 57:
						{
						setState(202);
						match(UNDERSCORE);
						}
						break;
					}
					} 
				}
				setState(207);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
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

	public static class EndContext extends ParserRuleContext {
		public TerminalNode END_TAG() { return getToken(AnnotationParser.END_TAG, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_end);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(END_TAG);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3L\u00d5\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\2\5\2$\n\2"+
		"\3\2\3\2\7\2(\n\2\f\2\16\2+\13\2\6\2-\n\2\r\2\16\2.\3\2\3\2\3\3\5\3\64"+
		"\n\3\3\3\5\3\67\n\3\3\3\5\3:\n\3\3\3\5\3=\n\3\5\3?\n\3\3\4\7\4B\n\4\f"+
		"\4\16\4E\13\4\3\4\3\4\3\4\3\4\3\4\6\4L\n\4\r\4\16\4M\3\5\7\5Q\n\5\f\5"+
		"\16\5T\13\5\3\5\3\5\3\5\3\5\3\5\6\5[\n\5\r\5\16\5\\\3\6\3\6\3\7\7\7b\n"+
		"\7\f\7\16\7e\13\7\3\7\3\7\6\7i\n\7\r\7\16\7j\3\b\6\bn\n\b\r\b\16\bo\3"+
		"\t\3\t\3\t\3\t\5\tv\n\t\3\t\6\ty\n\t\r\t\16\tz\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\13\3\13\3\13\5\13\u0086\n\13\3\f\3\f\5\f\u008a\n\f\3\r\6\r\u008d\n"+
		"\r\r\r\16\r\u008e\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u00ce\n\17\f\17\16\17"+
		"\u00d1\13\17\3\20\3\20\3\20\3\u00cf\2\21\2\4\6\b\n\f\16\20\22\24\26\30"+
		"\32\34\36\2\4\4\2\5\6\b\t\3\2\4\b\2\u0112\2,\3\2\2\2\4>\3\2\2\2\6C\3\2"+
		"\2\2\bR\3\2\2\2\n^\3\2\2\2\fc\3\2\2\2\16m\3\2\2\2\20q\3\2\2\2\22|\3\2"+
		"\2\2\24\u0082\3\2\2\2\26\u0087\3\2\2\2\30\u008c\3\2\2\2\32\u0090\3\2\2"+
		"\2\34\u00cf\3\2\2\2\36\u00d2\3\2\2\2 !\5\4\3\2!#\5\f\7\2\"$\5\16\b\2#"+
		"\"\3\2\2\2#$\3\2\2\2$%\3\2\2\2%)\5\34\17\2&(\7\3\2\2\'&\3\2\2\2(+\3\2"+
		"\2\2)\'\3\2\2\2)*\3\2\2\2*-\3\2\2\2+)\3\2\2\2, \3\2\2\2-.\3\2\2\2.,\3"+
		"\2\2\2./\3\2\2\2/\60\3\2\2\2\60\61\7\2\2\3\61\3\3\2\2\2\62\64\5\6\4\2"+
		"\63\62\3\2\2\2\63\64\3\2\2\2\64\66\3\2\2\2\65\67\5\b\5\2\66\65\3\2\2\2"+
		"\66\67\3\2\2\2\67?\3\2\2\28:\5\b\5\298\3\2\2\29:\3\2\2\2:<\3\2\2\2;=\5"+
		"\6\4\2<;\3\2\2\2<=\3\2\2\2=?\3\2\2\2>\63\3\2\2\2>9\3\2\2\2?\5\3\2\2\2"+
		"@B\7\20\2\2A@\3\2\2\2BE\3\2\2\2CA\3\2\2\2CD\3\2\2\2DF\3\2\2\2EC\3\2\2"+
		"\2FG\7\21\2\2GH\7\n\2\2HI\7\67\2\2IK\7\f\2\2JL\7\20\2\2KJ\3\2\2\2LM\3"+
		"\2\2\2MK\3\2\2\2MN\3\2\2\2N\7\3\2\2\2OQ\7\20\2\2PO\3\2\2\2QT\3\2\2\2R"+
		"P\3\2\2\2RS\3\2\2\2SU\3\2\2\2TR\3\2\2\2UV\7\21\2\2VW\7\13\2\2WX\7\67\2"+
		"\2XZ\5\n\6\2Y[\7\20\2\2ZY\3\2\2\2[\\\3\2\2\2\\Z\3\2\2\2\\]\3\2\2\2]\t"+
		"\3\2\2\2^_\t\2\2\2_\13\3\2\2\2`b\7\20\2\2a`\3\2\2\2be\3\2\2\2ca\3\2\2"+
		"\2cd\3\2\2\2df\3\2\2\2ec\3\2\2\2fh\7\16\2\2gi\7\20\2\2hg\3\2\2\2ij\3\2"+
		"\2\2jh\3\2\2\2jk\3\2\2\2k\r\3\2\2\2ln\5\20\t\2ml\3\2\2\2no\3\2\2\2om\3"+
		"\2\2\2op\3\2\2\2p\17\3\2\2\2qr\7\21\2\2ru\5\22\n\2st\78\2\2tv\5\22\n\2"+
		"us\3\2\2\2uv\3\2\2\2vx\3\2\2\2wy\7\20\2\2xw\3\2\2\2yz\3\2\2\2zx\3\2\2"+
		"\2z{\3\2\2\2{\21\3\2\2\2|}\7\64\2\2}~\5\24\13\2~\177\7\65\2\2\177\u0080"+
		"\7\67\2\2\u0080\u0081\5\26\f\2\u0081\23\3\2\2\2\u0082\u0085\7\f\2\2\u0083"+
		"\u0084\78\2\2\u0084\u0086\7\f\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2"+
		"\2\2\u0086\25\3\2\2\2\u0087\u0089\t\3\2\2\u0088\u008a\5\30\r\2\u0089\u0088"+
		"\3\2\2\2\u0089\u008a\3\2\2\2\u008a\27\3\2\2\2\u008b\u008d\5\32\16\2\u008c"+
		"\u008b\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u008c\3\2\2\2\u008e\u008f\3\2"+
		"\2\2\u008f\31\3\2\2\2\u0090\u0091\7\64\2\2\u0091\u0092\7\r\2\2\u0092\u0093"+
		"\7\65\2\2\u0093\33\3\2\2\2\u0094\u00ce\13\2\2\2\u0095\u00ce\7\33\2\2\u0096"+
		"\u00ce\7\32\2\2\u0097\u00ce\7\64\2\2\u0098\u00ce\7\65\2\2\u0099\u00ce"+
		"\7A\2\2\u009a\u00ce\7\67\2\2\u009b\u00ce\78\2\2\u009c\u00ce\7\21\2\2\u009d"+
		"\u00ce\7\30\2\2\u009e\u00ce\7\36\2\2\u009f\u00ce\7\62\2\2\u00a0\u00ce"+
		"\7\63\2\2\u00a1\u00ce\79\2\2\u00a2\u00ce\7J\2\2\u00a3\u00ce\7F\2\2\u00a4"+
		"\u00ce\7B\2\2\u00a5\u00ce\7\22\2\2\u00a6\u00ce\7\23\2\2\u00a7\u00ce\7"+
		">\2\2\u00a8\u00ce\7/\2\2\u00a9\u00ce\7\60\2\2\u00aa\u00ce\7\61\2\2\u00ab"+
		"\u00ce\7-\2\2\u00ac\u00ce\7.\2\2\u00ad\u00ce\7=\2\2\u00ae\u00ce\7<\2\2"+
		"\u00af\u00ce\7,\2\2\u00b0\u00ce\7E\2\2\u00b1\u00ce\7$\2\2\u00b2\u00ce"+
		"\7#\2\2\u00b3\u00ce\7\"\2\2\u00b4\u00ce\7?\2\2\u00b5\u00ce\7(\2\2\u00b6"+
		"\u00ce\7)\2\2\u00b7\u00ce\7*\2\2\u00b8\u00ce\7+\2\2\u00b9\u00ce\7;\2\2"+
		"\u00ba\u00ce\7:\2\2\u00bb\u00ce\7!\2\2\u00bc\u00ce\7&\2\2\u00bd\u00ce"+
		"\7\'\2\2\u00be\u00ce\7 \2\2\u00bf\u00ce\7%\2\2\u00c0\u00ce\7H\2\2\u00c1"+
		"\u00ce\7I\2\2\u00c2\u00ce\7C\2\2\u00c3\u00ce\7D\2\2\u00c4\u00ce\7G\2\2"+
		"\u00c5\u00ce\7\27\2\2\u00c6\u00ce\7\35\2\2\u00c7\u00ce\7\24\2\2\u00c8"+
		"\u00ce\7\26\2\2\u00c9\u00ce\7\25\2\2\u00ca\u00ce\7\31\2\2\u00cb\u00ce"+
		"\7\37\2\2\u00cc\u00ce\7@\2\2\u00cd\u0094\3\2\2\2\u00cd\u0095\3\2\2\2\u00cd"+
		"\u0096\3\2\2\2\u00cd\u0097\3\2\2\2\u00cd\u0098\3\2\2\2\u00cd\u0099\3\2"+
		"\2\2\u00cd\u009a\3\2\2\2\u00cd\u009b\3\2\2\2\u00cd\u009c\3\2\2\2\u00cd"+
		"\u009d\3\2\2\2\u00cd\u009e\3\2\2\2\u00cd\u009f\3\2\2\2\u00cd\u00a0\3\2"+
		"\2\2\u00cd\u00a1\3\2\2\2\u00cd\u00a2\3\2\2\2\u00cd\u00a3\3\2\2\2\u00cd"+
		"\u00a4\3\2\2\2\u00cd\u00a5\3\2\2\2\u00cd\u00a6\3\2\2\2\u00cd\u00a7\3\2"+
		"\2\2\u00cd\u00a8\3\2\2\2\u00cd\u00a9\3\2\2\2\u00cd\u00aa\3\2\2\2\u00cd"+
		"\u00ab\3\2\2\2\u00cd\u00ac\3\2\2\2\u00cd\u00ad\3\2\2\2\u00cd\u00ae\3\2"+
		"\2\2\u00cd\u00af\3\2\2\2\u00cd\u00b0\3\2\2\2\u00cd\u00b1\3\2\2\2\u00cd"+
		"\u00b2\3\2\2\2\u00cd\u00b3\3\2\2\2\u00cd\u00b4\3\2\2\2\u00cd\u00b5\3\2"+
		"\2\2\u00cd\u00b6\3\2\2\2\u00cd\u00b7\3\2\2\2\u00cd\u00b8\3\2\2\2\u00cd"+
		"\u00b9\3\2\2\2\u00cd\u00ba\3\2\2\2\u00cd\u00bb\3\2\2\2\u00cd\u00bc\3\2"+
		"\2\2\u00cd\u00bd\3\2\2\2\u00cd\u00be\3\2\2\2\u00cd\u00bf\3\2\2\2\u00cd"+
		"\u00c0\3\2\2\2\u00cd\u00c1\3\2\2\2\u00cd\u00c2\3\2\2\2\u00cd\u00c3\3\2"+
		"\2\2\u00cd\u00c4\3\2\2\2\u00cd\u00c5\3\2\2\2\u00cd\u00c6\3\2\2\2\u00cd"+
		"\u00c7\3\2\2\2\u00cd\u00c8\3\2\2\2\u00cd\u00c9\3\2\2\2\u00cd\u00ca\3\2"+
		"\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00cc\3\2\2\2\u00ce\u00d1\3\2\2\2\u00cf"+
		"\u00d0\3\2\2\2\u00cf\u00cd\3\2\2\2\u00d0\35\3\2\2\2\u00d1\u00cf\3\2\2"+
		"\2\u00d2\u00d3\7\17\2\2\u00d3\37\3\2\2\2\30#).\63\669<>CMR\\cjouz\u0085"+
		"\u0089\u008e\u00cd\u00cf";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}