// Generated from /Users/francisco/Documents/Work/mathex2java-translator/src/grammars/Grammar.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", "INFINITY_TAG", "SUBSTACK_TAG", 
			"SIN_TAG", "COS_TAG", "TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", "ARCTAN_TAG", 
			"SINH_TAG", "COSH_TAG", "TANH_TAG", "LOG_TAG", "LN_TAG", "INT_TAG", "IINT_TAG", 
			"IIINT_TAG", "LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", "LE_TAG", "LEQ_TAG", 
			"LEQQ_TAG", "LEQSLANT_TAG", "GT_TAG", "GNEQ_TAG", "GNEQQ_TAG", "GEQ_TAG", 
			"GEQQ_TAG", "GEQSLANT_TAG", "BEGIN", "END", "EQUATION", "EQUATION_STAR", 
			"MATRIX", "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", "GREATER_SYMBOL", "GREATER_EQUAL_SYMBOL", 
			"FACTORIAL_SYMBOL", "JOIN", "CURLY_LF", "CURLY_RT", "UNDERSCORE", "BREAKLINE", 
			"EULER_NUMBER", "BRACKET_LF", "BRACKET_RT", "PARENTHESIS_LF", "PARENTHESIS_RT", 
			"HAT", "COMMA", "VARNAME", "EQUAL", "INTEGER", "DOUBLE", "PLUS", "MINUS", 
			"MULTIPLICATION", "MULTIPLICATION_TAGS", "DIVISION", "NEWLINE_TAG", "NEWLINE", 
			"COMMENT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'\\exp'", "'\\frac'", "'\\sqrt'", "'\\sum'", "'\\infty'", "'\\substack'", 
			"'\\sin'", "'\\cos'", "'\\tan'", "'\\arcsin'", "'\\arccos'", "'\\arctan'", 
			"'\\sinh'", "'\\cosh'", "'\\tanh'", "'\\log'", "'\\ln'", "'\\int'", "'\\iint'", 
			"'\\iiint'", "'\\lt'", "'\\lneq'", "'\\lneqq'", "'\\le'", "'\\leq'", 
			"'\\leqq'", "'\\leqslant'", "'\\gt'", "'\\gneq'", "'\\gneqq'", "'\\geq'", 
			"'\\geqq'", "'\\geqslant'", "'\\begin'", "'\\end'", "'equation'", "'equation*'", 
			"'matrix'", "'<'", "'<='", "'>'", "'>='", "'!'", "'&'", "'{'", "'}'", 
			"'_'", "'\\\\'", "'e'", "'['", "']'", "'('", "')'", "'^'", "','", null, 
			"'='", null, null, "'+'", "'-'", null, "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
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
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
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


	public GrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2D\u01ed\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\3\2\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31"+
		"\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3"+
		"!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3"+
		"#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3"+
		"&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3)\3)\3)\3*\3*\3+\3+\3+\3,\3"+
		",\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\61\3\62\3\62\3\63\3\63\3\64"+
		"\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\79\u01a4\n9\f9\169\u01a7"+
		"\139\39\59\u01aa\n9\3:\3:\3;\6;\u01af\n;\r;\16;\u01b0\3<\6<\u01b4\n<\r"+
		"<\16<\u01b5\3<\3<\6<\u01ba\n<\r<\16<\u01bb\3=\3=\3>\3>\3?\3?\3@\3@\3@"+
		"\3@\3@\3@\3@\5@\u01cb\n@\3A\3A\3B\3B\3C\3C\3C\5C\u01d4\nC\3D\3D\7D\u01d8"+
		"\nD\fD\16D\u01db\13D\3D\5D\u01de\nD\3D\6D\u01e1\nD\rD\16D\u01e2\3D\3D"+
		"\3E\6E\u01e8\nE\rE\16E\u01e9\3E\3E\3\u01d9\2F\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S"+
		"+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177\2\u0081"+
		"A\u0083B\u0085\2\u0087C\u0089D\3\2\b\4\2C\\c|\6\2\62;C\\aac|\5\2\62;C"+
		"\\c|\3\2\62;\4\2\f\f\17\17\4\2\13\13\"\"\2\u01f5\2\3\3\2\2\2\2\5\3\2\2"+
		"\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2"+
		"\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2"+
		"\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\3\u008b"+
		"\3\2\2\2\5\u0090\3\2\2\2\7\u0096\3\2\2\2\t\u009c\3\2\2\2\13\u00a1\3\2"+
		"\2\2\r\u00a8\3\2\2\2\17\u00b2\3\2\2\2\21\u00b7\3\2\2\2\23\u00bc\3\2\2"+
		"\2\25\u00c1\3\2\2\2\27\u00c9\3\2\2\2\31\u00d1\3\2\2\2\33\u00d9\3\2\2\2"+
		"\35\u00df\3\2\2\2\37\u00e5\3\2\2\2!\u00eb\3\2\2\2#\u00f0\3\2\2\2%\u00f4"+
		"\3\2\2\2\'\u00f9\3\2\2\2)\u00ff\3\2\2\2+\u0106\3\2\2\2-\u010a\3\2\2\2"+
		"/\u0110\3\2\2\2\61\u0117\3\2\2\2\63\u011b\3\2\2\2\65\u0120\3\2\2\2\67"+
		"\u0126\3\2\2\29\u0130\3\2\2\2;\u0134\3\2\2\2=\u013a\3\2\2\2?\u0141\3\2"+
		"\2\2A\u0146\3\2\2\2C\u014c\3\2\2\2E\u0156\3\2\2\2G\u015d\3\2\2\2I\u0162"+
		"\3\2\2\2K\u016b\3\2\2\2M\u0175\3\2\2\2O\u017c\3\2\2\2Q\u017e\3\2\2\2S"+
		"\u0181\3\2\2\2U\u0183\3\2\2\2W\u0186\3\2\2\2Y\u0188\3\2\2\2[\u018a\3\2"+
		"\2\2]\u018c\3\2\2\2_\u018e\3\2\2\2a\u0190\3\2\2\2c\u0193\3\2\2\2e\u0195"+
		"\3\2\2\2g\u0197\3\2\2\2i\u0199\3\2\2\2k\u019b\3\2\2\2m\u019d\3\2\2\2o"+
		"\u019f\3\2\2\2q\u01a1\3\2\2\2s\u01ab\3\2\2\2u\u01ae\3\2\2\2w\u01b3\3\2"+
		"\2\2y\u01bd\3\2\2\2{\u01bf\3\2\2\2}\u01c1\3\2\2\2\177\u01ca\3\2\2\2\u0081"+
		"\u01cc\3\2\2\2\u0083\u01ce\3\2\2\2\u0085\u01d3\3\2\2\2\u0087\u01d5\3\2"+
		"\2\2\u0089\u01e7\3\2\2\2\u008b\u008c\7^\2\2\u008c\u008d\7g\2\2\u008d\u008e"+
		"\7z\2\2\u008e\u008f\7r\2\2\u008f\4\3\2\2\2\u0090\u0091\7^\2\2\u0091\u0092"+
		"\7h\2\2\u0092\u0093\7t\2\2\u0093\u0094\7c\2\2\u0094\u0095\7e\2\2\u0095"+
		"\6\3\2\2\2\u0096\u0097\7^\2\2\u0097\u0098\7u\2\2\u0098\u0099\7s\2\2\u0099"+
		"\u009a\7t\2\2\u009a\u009b\7v\2\2\u009b\b\3\2\2\2\u009c\u009d\7^\2\2\u009d"+
		"\u009e\7u\2\2\u009e\u009f\7w\2\2\u009f\u00a0\7o\2\2\u00a0\n\3\2\2\2\u00a1"+
		"\u00a2\7^\2\2\u00a2\u00a3\7k\2\2\u00a3\u00a4\7p\2\2\u00a4\u00a5\7h\2\2"+
		"\u00a5\u00a6\7v\2\2\u00a6\u00a7\7{\2\2\u00a7\f\3\2\2\2\u00a8\u00a9\7^"+
		"\2\2\u00a9\u00aa\7u\2\2\u00aa\u00ab\7w\2\2\u00ab\u00ac\7d\2\2\u00ac\u00ad"+
		"\7u\2\2\u00ad\u00ae\7v\2\2\u00ae\u00af\7c\2\2\u00af\u00b0\7e\2\2\u00b0"+
		"\u00b1\7m\2\2\u00b1\16\3\2\2\2\u00b2\u00b3\7^\2\2\u00b3\u00b4\7u\2\2\u00b4"+
		"\u00b5\7k\2\2\u00b5\u00b6\7p\2\2\u00b6\20\3\2\2\2\u00b7\u00b8\7^\2\2\u00b8"+
		"\u00b9\7e\2\2\u00b9\u00ba\7q\2\2\u00ba\u00bb\7u\2\2\u00bb\22\3\2\2\2\u00bc"+
		"\u00bd\7^\2\2\u00bd\u00be\7v\2\2\u00be\u00bf\7c\2\2\u00bf\u00c0\7p\2\2"+
		"\u00c0\24\3\2\2\2\u00c1\u00c2\7^\2\2\u00c2\u00c3\7c\2\2\u00c3\u00c4\7"+
		"t\2\2\u00c4\u00c5\7e\2\2\u00c5\u00c6\7u\2\2\u00c6\u00c7\7k\2\2\u00c7\u00c8"+
		"\7p\2\2\u00c8\26\3\2\2\2\u00c9\u00ca\7^\2\2\u00ca\u00cb\7c\2\2\u00cb\u00cc"+
		"\7t\2\2\u00cc\u00cd\7e\2\2\u00cd\u00ce\7e\2\2\u00ce\u00cf\7q\2\2\u00cf"+
		"\u00d0\7u\2\2\u00d0\30\3\2\2\2\u00d1\u00d2\7^\2\2\u00d2\u00d3\7c\2\2\u00d3"+
		"\u00d4\7t\2\2\u00d4\u00d5\7e\2\2\u00d5\u00d6\7v\2\2\u00d6\u00d7\7c\2\2"+
		"\u00d7\u00d8\7p\2\2\u00d8\32\3\2\2\2\u00d9\u00da\7^\2\2\u00da\u00db\7"+
		"u\2\2\u00db\u00dc\7k\2\2\u00dc\u00dd\7p\2\2\u00dd\u00de\7j\2\2\u00de\34"+
		"\3\2\2\2\u00df\u00e0\7^\2\2\u00e0\u00e1\7e\2\2\u00e1\u00e2\7q\2\2\u00e2"+
		"\u00e3\7u\2\2\u00e3\u00e4\7j\2\2\u00e4\36\3\2\2\2\u00e5\u00e6\7^\2\2\u00e6"+
		"\u00e7\7v\2\2\u00e7\u00e8\7c\2\2\u00e8\u00e9\7p\2\2\u00e9\u00ea\7j\2\2"+
		"\u00ea \3\2\2\2\u00eb\u00ec\7^\2\2\u00ec\u00ed\7n\2\2\u00ed\u00ee\7q\2"+
		"\2\u00ee\u00ef\7i\2\2\u00ef\"\3\2\2\2\u00f0\u00f1\7^\2\2\u00f1\u00f2\7"+
		"n\2\2\u00f2\u00f3\7p\2\2\u00f3$\3\2\2\2\u00f4\u00f5\7^\2\2\u00f5\u00f6"+
		"\7k\2\2\u00f6\u00f7\7p\2\2\u00f7\u00f8\7v\2\2\u00f8&\3\2\2\2\u00f9\u00fa"+
		"\7^\2\2\u00fa\u00fb\7k\2\2\u00fb\u00fc\7k\2\2\u00fc\u00fd\7p\2\2\u00fd"+
		"\u00fe\7v\2\2\u00fe(\3\2\2\2\u00ff\u0100\7^\2\2\u0100\u0101\7k\2\2\u0101"+
		"\u0102\7k\2\2\u0102\u0103\7k\2\2\u0103\u0104\7p\2\2\u0104\u0105\7v\2\2"+
		"\u0105*\3\2\2\2\u0106\u0107\7^\2\2\u0107\u0108\7n\2\2\u0108\u0109\7v\2"+
		"\2\u0109,\3\2\2\2\u010a\u010b\7^\2\2\u010b\u010c\7n\2\2\u010c\u010d\7"+
		"p\2\2\u010d\u010e\7g\2\2\u010e\u010f\7s\2\2\u010f.\3\2\2\2\u0110\u0111"+
		"\7^\2\2\u0111\u0112\7n\2\2\u0112\u0113\7p\2\2\u0113\u0114\7g\2\2\u0114"+
		"\u0115\7s\2\2\u0115\u0116\7s\2\2\u0116\60\3\2\2\2\u0117\u0118\7^\2\2\u0118"+
		"\u0119\7n\2\2\u0119\u011a\7g\2\2\u011a\62\3\2\2\2\u011b\u011c\7^\2\2\u011c"+
		"\u011d\7n\2\2\u011d\u011e\7g\2\2\u011e\u011f\7s\2\2\u011f\64\3\2\2\2\u0120"+
		"\u0121\7^\2\2\u0121\u0122\7n\2\2\u0122\u0123\7g\2\2\u0123\u0124\7s\2\2"+
		"\u0124\u0125\7s\2\2\u0125\66\3\2\2\2\u0126\u0127\7^\2\2\u0127\u0128\7"+
		"n\2\2\u0128\u0129\7g\2\2\u0129\u012a\7s\2\2\u012a\u012b\7u\2\2\u012b\u012c"+
		"\7n\2\2\u012c\u012d\7c\2\2\u012d\u012e\7p\2\2\u012e\u012f\7v\2\2\u012f"+
		"8\3\2\2\2\u0130\u0131\7^\2\2\u0131\u0132\7i\2\2\u0132\u0133\7v\2\2\u0133"+
		":\3\2\2\2\u0134\u0135\7^\2\2\u0135\u0136\7i\2\2\u0136\u0137\7p\2\2\u0137"+
		"\u0138\7g\2\2\u0138\u0139\7s\2\2\u0139<\3\2\2\2\u013a\u013b\7^\2\2\u013b"+
		"\u013c\7i\2\2\u013c\u013d\7p\2\2\u013d\u013e\7g\2\2\u013e\u013f\7s\2\2"+
		"\u013f\u0140\7s\2\2\u0140>\3\2\2\2\u0141\u0142\7^\2\2\u0142\u0143\7i\2"+
		"\2\u0143\u0144\7g\2\2\u0144\u0145\7s\2\2\u0145@\3\2\2\2\u0146\u0147\7"+
		"^\2\2\u0147\u0148\7i\2\2\u0148\u0149\7g\2\2\u0149\u014a\7s\2\2\u014a\u014b"+
		"\7s\2\2\u014bB\3\2\2\2\u014c\u014d\7^\2\2\u014d\u014e\7i\2\2\u014e\u014f"+
		"\7g\2\2\u014f\u0150\7s\2\2\u0150\u0151\7u\2\2\u0151\u0152\7n\2\2\u0152"+
		"\u0153\7c\2\2\u0153\u0154\7p\2\2\u0154\u0155\7v\2\2\u0155D\3\2\2\2\u0156"+
		"\u0157\7^\2\2\u0157\u0158\7d\2\2\u0158\u0159\7g\2\2\u0159\u015a\7i\2\2"+
		"\u015a\u015b\7k\2\2\u015b\u015c\7p\2\2\u015cF\3\2\2\2\u015d\u015e\7^\2"+
		"\2\u015e\u015f\7g\2\2\u015f\u0160\7p\2\2\u0160\u0161\7f\2\2\u0161H\3\2"+
		"\2\2\u0162\u0163\7g\2\2\u0163\u0164\7s\2\2\u0164\u0165\7w\2\2\u0165\u0166"+
		"\7c\2\2\u0166\u0167\7v\2\2\u0167\u0168\7k\2\2\u0168\u0169\7q\2\2\u0169"+
		"\u016a\7p\2\2\u016aJ\3\2\2\2\u016b\u016c\7g\2\2\u016c\u016d\7s\2\2\u016d"+
		"\u016e\7w\2\2\u016e\u016f\7c\2\2\u016f\u0170\7v\2\2\u0170\u0171\7k\2\2"+
		"\u0171\u0172\7q\2\2\u0172\u0173\7p\2\2\u0173\u0174\7,\2\2\u0174L\3\2\2"+
		"\2\u0175\u0176\7o\2\2\u0176\u0177\7c\2\2\u0177\u0178\7v\2\2\u0178\u0179"+
		"\7t\2\2\u0179\u017a\7k\2\2\u017a\u017b\7z\2\2\u017bN\3\2\2\2\u017c\u017d"+
		"\7>\2\2\u017dP\3\2\2\2\u017e\u017f\7>\2\2\u017f\u0180\7?\2\2\u0180R\3"+
		"\2\2\2\u0181\u0182\7@\2\2\u0182T\3\2\2\2\u0183\u0184\7@\2\2\u0184\u0185"+
		"\7?\2\2\u0185V\3\2\2\2\u0186\u0187\7#\2\2\u0187X\3\2\2\2\u0188\u0189\7"+
		"(\2\2\u0189Z\3\2\2\2\u018a\u018b\7}\2\2\u018b\\\3\2\2\2\u018c\u018d\7"+
		"\177\2\2\u018d^\3\2\2\2\u018e\u018f\7a\2\2\u018f`\3\2\2\2\u0190\u0191"+
		"\7^\2\2\u0191\u0192\7^\2\2\u0192b\3\2\2\2\u0193\u0194\7g\2\2\u0194d\3"+
		"\2\2\2\u0195\u0196\7]\2\2\u0196f\3\2\2\2\u0197\u0198\7_\2\2\u0198h\3\2"+
		"\2\2\u0199\u019a\7*\2\2\u019aj\3\2\2\2\u019b\u019c\7+\2\2\u019cl\3\2\2"+
		"\2\u019d\u019e\7`\2\2\u019en\3\2\2\2\u019f\u01a0\7.\2\2\u01a0p\3\2\2\2"+
		"\u01a1\u01a9\t\2\2\2\u01a2\u01a4\t\3\2\2\u01a3\u01a2\3\2\2\2\u01a4\u01a7"+
		"\3\2\2\2\u01a5\u01a3\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a8\3\2\2\2\u01a7"+
		"\u01a5\3\2\2\2\u01a8\u01aa\t\4\2\2\u01a9\u01a5\3\2\2\2\u01a9\u01aa\3\2"+
		"\2\2\u01aar\3\2\2\2\u01ab\u01ac\7?\2\2\u01act\3\2\2\2\u01ad\u01af\t\5"+
		"\2\2\u01ae\u01ad\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b0"+
		"\u01b1\3\2\2\2\u01b1v\3\2\2\2\u01b2\u01b4\t\5\2\2\u01b3\u01b2\3\2\2\2"+
		"\u01b4\u01b5\3\2\2\2\u01b5\u01b3\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7"+
		"\3\2\2\2\u01b7\u01b9\7\60\2\2\u01b8\u01ba\t\5\2\2\u01b9\u01b8\3\2\2\2"+
		"\u01ba\u01bb\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bcx\3"+
		"\2\2\2\u01bd\u01be\7-\2\2\u01bez\3\2\2\2\u01bf\u01c0\7/\2\2\u01c0|\3\2"+
		"\2\2\u01c1\u01c2\5\177@\2\u01c2~\3\2\2\2\u01c3\u01cb\7,\2\2\u01c4\u01c5"+
		"\7^\2\2\u01c5\u01c6\7v\2\2\u01c6\u01c7\7k\2\2\u01c7\u01c8\7o\2\2\u01c8"+
		"\u01c9\7g\2\2\u01c9\u01cb\7u\2\2\u01ca\u01c3\3\2\2\2\u01ca\u01c4\3\2\2"+
		"\2\u01cb\u0080\3\2\2\2\u01cc\u01cd\7\61\2\2\u01cd\u0082\3\2\2\2\u01ce"+
		"\u01cf\5\u0085C\2\u01cf\u0084\3\2\2\2\u01d0\u01d1\7\17\2\2\u01d1\u01d4"+
		"\7\f\2\2\u01d2\u01d4\t\6\2\2\u01d3\u01d0\3\2\2\2\u01d3\u01d2\3\2\2\2\u01d4"+
		"\u0086\3\2\2\2\u01d5\u01d9\7\'\2\2\u01d6\u01d8\13\2\2\2\u01d7\u01d6\3"+
		"\2\2\2\u01d8\u01db\3\2\2\2\u01d9\u01da\3\2\2\2\u01d9\u01d7\3\2\2\2\u01da"+
		"\u01e0\3\2\2\2\u01db\u01d9\3\2\2\2\u01dc\u01de\7\17\2\2\u01dd\u01dc\3"+
		"\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01e1\7\f\2\2\u01e0"+
		"\u01dd\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e2\u01e3\3\2"+
		"\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\bD\2\2\u01e5\u0088\3\2\2\2\u01e6"+
		"\u01e8\t\7\2\2\u01e7\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01e7\3\2"+
		"\2\2\u01e9\u01ea\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb\u01ec\bE\2\2\u01ec"+
		"\u008a\3\2\2\2\16\2\u01a5\u01a9\u01b0\u01b5\u01bb\u01ca\u01d3\u01d9\u01dd"+
		"\u01e2\u01e9\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}