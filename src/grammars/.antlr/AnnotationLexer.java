// Generated from /Users/francisco/Documents/Work/mathex2java-translator/src/grammars/Annotation.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AnnotationLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "REAL", "REAL_TAGS", "SHORT", "SHORT_TAGS", "INT", "INT_TAGS", 
			"FLOAT", "FLOAT_TAGS", "DOUBLE", "DOUBLE_TAGS", "LONG", "LONG_TAGS", 
			"NAME_TAG", "NAME_TAGS", "RETURN_TAG", "RETURN_TAGS", "VARNAME", "INTEGER", 
			"BEGIN_TAG", "END_TAG", "NEWLINE_TAG", "NEWLINE", "COMMENT_TAG", "EXP_TAG", 
			"FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", "SUBSTACK_TAG", "SIN_TAG", "COS_TAG", 
			"TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", "ARCTAN_TAG", "SINH_TAG", "COSH_TAG", 
			"TANH_TAG", "LOG_TAG", "LN_TAG", "INT_TAG", "IINT_TAG", "IIINT_TAG", 
			"LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", "LE_TAG", "LEQ_TAG", "LEQQ_TAG", "LEQSLANT_TAG", 
			"GT_TAG", "GNEQ_TAG", "GNEQQ_TAG", "GEQ_TAG", "GEQQ_TAG", "GEQSLANT_TAG", 
			"CURLY_LF", "CURLY_RT", "BRACKET_LF", "BRACKET_RT", "SINGLE_QUOTE_TAG", 
			"COLON_TAG", "COMMA_TAG", "DOT_SYMBOL", "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", 
			"GREATER_SYMBOL", "GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", "JOIN", 
			"UNDERSCORE", "BREAKLINE", "EULER_NUMBER", "PARENTHESIS_LF", "PARENTHESIS_RT", 
			"HAT", "EQUAL", "PLUS", "MINUS", "MULTIPLICATION", "MULTIPLICATION_TAGS", 
			"DIVISION", "ENVIRONMENT_IGNORE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'\\n'", null, null, null, null, null, null, null, null, null, 
			null, "'\\begin'", "'\\end'", null, "'%'", "'\\exp'", "'\\frac'", "'\\sqrt'", 
			"'\\sum'", "'\\substack'", "'\\sin'", "'\\cos'", "'\\tan'", "'\\arcsin'", 
			"'\\arccos'", "'\\arctan'", "'\\sinh'", "'\\cosh'", "'\\tanh'", "'\\log'", 
			"'\\ln'", "'\\int'", "'\\iint'", "'\\iiint'", "'\\lt'", "'\\lneq'", "'\\lneqq'", 
			"'\\le'", "'\\leq'", "'\\leqq'", "'\\leqslant'", "'\\gt'", "'\\gneq'", 
			"'\\gneqq'", "'\\geq'", "'\\geqq'", "'\\geqslant'", "'{'", "'}'", "'['", 
			"']'", "'''", "':'", "','", "'.'", "'<'", "'<='", "'>'", "'>='", "'!'", 
			"'&'", "'_'", "'\\\\'", "'e'", "'('", "')'", "'^'", "'='", "'+'", "'-'", 
			null, "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "REAL", "SHORT", "INT", "FLOAT", "DOUBLE", "LONG", "NAME_TAG", 
			"RETURN_TAG", "VARNAME", "INTEGER", "BEGIN_TAG", "END_TAG", "NEWLINE_TAG", 
			"COMMENT_TAG", "EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", "SUBSTACK_TAG", 
			"SIN_TAG", "COS_TAG", "TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", "ARCTAN_TAG", 
			"SINH_TAG", "COSH_TAG", "TANH_TAG", "LOG_TAG", "LN_TAG", "INT_TAG", "IINT_TAG", 
			"IIINT_TAG", "LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", "LE_TAG", "LEQ_TAG", 
			"LEQQ_TAG", "LEQSLANT_TAG", "GT_TAG", "GNEQ_TAG", "GNEQQ_TAG", "GEQ_TAG", 
			"GEQQ_TAG", "GEQSLANT_TAG", "CURLY_LF", "CURLY_RT", "BRACKET_LF", "BRACKET_RT", 
			"SINGLE_QUOTE_TAG", "COLON_TAG", "COMMA_TAG", "DOT_SYMBOL", "LESSER_SYMBOL", 
			"LESS_EQUAL_SYMBOL", "GREATER_SYMBOL", "GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", 
			"JOIN", "UNDERSCORE", "BREAKLINE", "EULER_NUMBER", "PARENTHESIS_LF", 
			"PARENTHESIS_RT", "HAT", "EQUAL", "PLUS", "MINUS", "MULTIPLICATION", 
			"DIVISION", "ENVIRONMENT_IGNORE", "WS"
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


	public AnnotationLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Annotation.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2L\u024d\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u00b9\n"+
		"\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00c7\n\6\3\7\3"+
		"\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00d1\n\b\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\5\n\u00df\n\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\5\f\u00ef\n\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\5\16\u00fb\n\16\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\5\20\u0107\n\20\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\5\22\u0117\n\22\3\23\3\23\7\23\u011b\n\23\f"+
		"\23\16\23\u011e\13\23\3\24\6\24\u0121\n\24\r\24\16\24\u0122\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\30\3\30"+
		"\3\30\5\30\u0136\n\30\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37"+
		"\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3"+
		"#\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3&\3"+
		"&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3)\3)\3)\3)\3*\3"+
		"*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3.\3.\3"+
		".\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61"+
		"\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63"+
		"\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\65\3\66"+
		"\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\38\38\38\38\3"+
		"8\38\39\39\39\39\39\39\39\39\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3>\3>\3?\3"+
		"?\3@\3@\3A\3A\3B\3B\3C\3C\3C\3D\3D\3E\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3"+
		"I\3J\3J\3K\3K\3L\3L\3M\3M\3N\3N\3O\3O\3P\3P\3Q\3Q\3R\3R\3R\3R\3R\3R\3"+
		"R\5R\u0238\nR\3S\3S\3T\3T\7T\u023e\nT\fT\16T\u0241\13T\3T\3T\3T\3T\3U"+
		"\6U\u0248\nU\rU\16U\u0249\3U\3U\3\u023f\2V\3\3\5\4\7\2\t\5\13\2\r\6\17"+
		"\2\21\7\23\2\25\b\27\2\31\t\33\2\35\n\37\2!\13#\2%\f\'\r)\16+\17-\20/"+
		"\2\61\21\63\22\65\23\67\249\25;\26=\27?\30A\31C\32E\33G\34I\35K\36M\37"+
		"O Q!S\"U#W$Y%[&]\'_(a)c*e+g,i-k.m/o\60q\61s\62u\63w\64y\65{\66}\67\177"+
		"8\u00819\u0083:\u0085;\u0087<\u0089=\u008b>\u008d?\u008f@\u0091A\u0093"+
		"B\u0095C\u0097D\u0099E\u009bF\u009dG\u009fH\u00a1I\u00a3\2\u00a5J\u00a7"+
		"K\u00a9L\3\2\7\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\4\2\13\13"+
		"\"\"\2\u0250\2\3\3\2\2\2\2\5\3\2\2\2\2\t\3\2\2\2\2\r\3\2\2\2\2\21\3\2"+
		"\2\2\2\25\3\2\2\2\2\31\3\2\2\2\2\35\3\2\2\2\2!\3\2\2\2\2%\3\2\2\2\2\'"+
		"\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2"+
		"\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2"+
		"A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3"+
		"\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2"+
		"\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2"+
		"g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3"+
		"\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3"+
		"\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2"+
		"\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091"+
		"\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2"+
		"\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a5"+
		"\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\3\u00ab\3\2\2\2\5\u00ae\3\2\2"+
		"\2\7\u00b8\3\2\2\2\t\u00ba\3\2\2\2\13\u00c6\3\2\2\2\r\u00c8\3\2\2\2\17"+
		"\u00d0\3\2\2\2\21\u00d2\3\2\2\2\23\u00de\3\2\2\2\25\u00e0\3\2\2\2\27\u00ee"+
		"\3\2\2\2\31\u00f0\3\2\2\2\33\u00fa\3\2\2\2\35\u00fc\3\2\2\2\37\u0106\3"+
		"\2\2\2!\u0108\3\2\2\2#\u0116\3\2\2\2%\u0118\3\2\2\2\'\u0120\3\2\2\2)\u0124"+
		"\3\2\2\2+\u012b\3\2\2\2-\u0130\3\2\2\2/\u0135\3\2\2\2\61\u0137\3\2\2\2"+
		"\63\u0139\3\2\2\2\65\u013e\3\2\2\2\67\u0144\3\2\2\29\u014a\3\2\2\2;\u014f"+
		"\3\2\2\2=\u0159\3\2\2\2?\u015e\3\2\2\2A\u0163\3\2\2\2C\u0168\3\2\2\2E"+
		"\u0170\3\2\2\2G\u0178\3\2\2\2I\u0180\3\2\2\2K\u0186\3\2\2\2M\u018c\3\2"+
		"\2\2O\u0192\3\2\2\2Q\u0197\3\2\2\2S\u019b\3\2\2\2U\u01a0\3\2\2\2W\u01a6"+
		"\3\2\2\2Y\u01ad\3\2\2\2[\u01b1\3\2\2\2]\u01b7\3\2\2\2_\u01be\3\2\2\2a"+
		"\u01c2\3\2\2\2c\u01c7\3\2\2\2e\u01cd\3\2\2\2g\u01d7\3\2\2\2i\u01db\3\2"+
		"\2\2k\u01e1\3\2\2\2m\u01e8\3\2\2\2o\u01ed\3\2\2\2q\u01f3\3\2\2\2s\u01fd"+
		"\3\2\2\2u\u01ff\3\2\2\2w\u0201\3\2\2\2y\u0203\3\2\2\2{\u0205\3\2\2\2}"+
		"\u0207\3\2\2\2\177\u0209\3\2\2\2\u0081\u020b\3\2\2\2\u0083\u020d\3\2\2"+
		"\2\u0085\u020f\3\2\2\2\u0087\u0212\3\2\2\2\u0089\u0214\3\2\2\2\u008b\u0217"+
		"\3\2\2\2\u008d\u0219\3\2\2\2\u008f\u021b\3\2\2\2\u0091\u021d\3\2\2\2\u0093"+
		"\u0220\3\2\2\2\u0095\u0222\3\2\2\2\u0097\u0224\3\2\2\2\u0099\u0226\3\2"+
		"\2\2\u009b\u0228\3\2\2\2\u009d\u022a\3\2\2\2\u009f\u022c\3\2\2\2\u00a1"+
		"\u022e\3\2\2\2\u00a3\u0237\3\2\2\2\u00a5\u0239\3\2\2\2\u00a7\u023b\3\2"+
		"\2\2\u00a9\u0247\3\2\2\2\u00ab\u00ac\7^\2\2\u00ac\u00ad\7p\2\2\u00ad\4"+
		"\3\2\2\2\u00ae\u00af\5\7\4\2\u00af\6\3\2\2\2\u00b0\u00b1\7t\2\2\u00b1"+
		"\u00b2\7g\2\2\u00b2\u00b3\7c\2\2\u00b3\u00b9\7n\2\2\u00b4\u00b5\7T\2\2"+
		"\u00b5\u00b6\7G\2\2\u00b6\u00b7\7C\2\2\u00b7\u00b9\7N\2\2\u00b8\u00b0"+
		"\3\2\2\2\u00b8\u00b4\3\2\2\2\u00b9\b\3\2\2\2\u00ba\u00bb\5\13\6\2\u00bb"+
		"\n\3\2\2\2\u00bc\u00bd\7u\2\2\u00bd\u00be\7j\2\2\u00be\u00bf\7q\2\2\u00bf"+
		"\u00c0\7t\2\2\u00c0\u00c7\7v\2\2\u00c1\u00c2\7U\2\2\u00c2\u00c3\7J\2\2"+
		"\u00c3\u00c4\7Q\2\2\u00c4\u00c5\7T\2\2\u00c5\u00c7\7V\2\2\u00c6\u00bc"+
		"\3\2\2\2\u00c6\u00c1\3\2\2\2\u00c7\f\3\2\2\2\u00c8\u00c9\5\17\b\2\u00c9"+
		"\16\3\2\2\2\u00ca\u00cb\7k\2\2\u00cb\u00cc\7p\2\2\u00cc\u00d1\7v\2\2\u00cd"+
		"\u00ce\7K\2\2\u00ce\u00cf\7P\2\2\u00cf\u00d1\7V\2\2\u00d0\u00ca\3\2\2"+
		"\2\u00d0\u00cd\3\2\2\2\u00d1\20\3\2\2\2\u00d2\u00d3\5\23\n\2\u00d3\22"+
		"\3\2\2\2\u00d4\u00d5\7h\2\2\u00d5\u00d6\7n\2\2\u00d6\u00d7\7q\2\2\u00d7"+
		"\u00d8\7c\2\2\u00d8\u00df\7v\2\2\u00d9\u00da\7H\2\2\u00da\u00db\7N\2\2"+
		"\u00db\u00dc\7Q\2\2\u00dc\u00dd\7C\2\2\u00dd\u00df\7V\2\2\u00de\u00d4"+
		"\3\2\2\2\u00de\u00d9\3\2\2\2\u00df\24\3\2\2\2\u00e0\u00e1\5\27\f\2\u00e1"+
		"\26\3\2\2\2\u00e2\u00e3\7f\2\2\u00e3\u00e4\7q\2\2\u00e4\u00e5\7w\2\2\u00e5"+
		"\u00e6\7d\2\2\u00e6\u00e7\7n\2\2\u00e7\u00ef\7g\2\2\u00e8\u00e9\7F\2\2"+
		"\u00e9\u00ea\7Q\2\2\u00ea\u00eb\7W\2\2\u00eb\u00ec\7D\2\2\u00ec\u00ed"+
		"\7N\2\2\u00ed\u00ef\7G\2\2\u00ee\u00e2\3\2\2\2\u00ee\u00e8\3\2\2\2\u00ef"+
		"\30\3\2\2\2\u00f0\u00f1\5\33\16\2\u00f1\32\3\2\2\2\u00f2\u00f3\7n\2\2"+
		"\u00f3\u00f4\7q\2\2\u00f4\u00f5\7p\2\2\u00f5\u00fb\7i\2\2\u00f6\u00f7"+
		"\7N\2\2\u00f7\u00f8\7Q\2\2\u00f8\u00f9\7P\2\2\u00f9\u00fb\7I\2\2\u00fa"+
		"\u00f2\3\2\2\2\u00fa\u00f6\3\2\2\2\u00fb\34\3\2\2\2\u00fc\u00fd\5\37\20"+
		"\2\u00fd\36\3\2\2\2\u00fe\u00ff\7p\2\2\u00ff\u0100\7c\2\2\u0100\u0101"+
		"\7o\2\2\u0101\u0107\7g\2\2\u0102\u0103\7P\2\2\u0103\u0104\7C\2\2\u0104"+
		"\u0105\7O\2\2\u0105\u0107\7G\2\2\u0106\u00fe\3\2\2\2\u0106\u0102\3\2\2"+
		"\2\u0107 \3\2\2\2\u0108\u0109\5#\22\2\u0109\"\3\2\2\2\u010a\u010b\7t\2"+
		"\2\u010b\u010c\7g\2\2\u010c\u010d\7v\2\2\u010d\u010e\7w\2\2\u010e\u010f"+
		"\7t\2\2\u010f\u0117\7p\2\2\u0110\u0111\7T\2\2\u0111\u0112\7G\2\2\u0112"+
		"\u0113\7V\2\2\u0113\u0114\7W\2\2\u0114\u0115\7T\2\2\u0115\u0117\7P\2\2"+
		"\u0116\u010a\3\2\2\2\u0116\u0110\3\2\2\2\u0117$\3\2\2\2\u0118\u011c\t"+
		"\2\2\2\u0119\u011b\t\3\2\2\u011a\u0119\3\2\2\2\u011b\u011e\3\2\2\2\u011c"+
		"\u011a\3\2\2\2\u011c\u011d\3\2\2\2\u011d&\3\2\2\2\u011e\u011c\3\2\2\2"+
		"\u011f\u0121\t\4\2\2\u0120\u011f\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0120"+
		"\3\2\2\2\u0122\u0123\3\2\2\2\u0123(\3\2\2\2\u0124\u0125\7^\2\2\u0125\u0126"+
		"\7d\2\2\u0126\u0127\7g\2\2\u0127\u0128\7i\2\2\u0128\u0129\7k\2\2\u0129"+
		"\u012a\7p\2\2\u012a*\3\2\2\2\u012b\u012c\7^\2\2\u012c\u012d\7g\2\2\u012d"+
		"\u012e\7p\2\2\u012e\u012f\7f\2\2\u012f,\3\2\2\2\u0130\u0131\5/\30\2\u0131"+
		".\3\2\2\2\u0132\u0133\7\17\2\2\u0133\u0136\7\f\2\2\u0134\u0136\t\5\2\2"+
		"\u0135\u0132\3\2\2\2\u0135\u0134\3\2\2\2\u0136\60\3\2\2\2\u0137\u0138"+
		"\7\'\2\2\u0138\62\3\2\2\2\u0139\u013a\7^\2\2\u013a\u013b\7g\2\2\u013b"+
		"\u013c\7z\2\2\u013c\u013d\7r\2\2\u013d\64\3\2\2\2\u013e\u013f\7^\2\2\u013f"+
		"\u0140\7h\2\2\u0140\u0141\7t\2\2\u0141\u0142\7c\2\2\u0142\u0143\7e\2\2"+
		"\u0143\66\3\2\2\2\u0144\u0145\7^\2\2\u0145\u0146\7u\2\2\u0146\u0147\7"+
		"s\2\2\u0147\u0148\7t\2\2\u0148\u0149\7v\2\2\u01498\3\2\2\2\u014a\u014b"+
		"\7^\2\2\u014b\u014c\7u\2\2\u014c\u014d\7w\2\2\u014d\u014e\7o\2\2\u014e"+
		":\3\2\2\2\u014f\u0150\7^\2\2\u0150\u0151\7u\2\2\u0151\u0152\7w\2\2\u0152"+
		"\u0153\7d\2\2\u0153\u0154\7u\2\2\u0154\u0155\7v\2\2\u0155\u0156\7c\2\2"+
		"\u0156\u0157\7e\2\2\u0157\u0158\7m\2\2\u0158<\3\2\2\2\u0159\u015a\7^\2"+
		"\2\u015a\u015b\7u\2\2\u015b\u015c\7k\2\2\u015c\u015d\7p\2\2\u015d>\3\2"+
		"\2\2\u015e\u015f\7^\2\2\u015f\u0160\7e\2\2\u0160\u0161\7q\2\2\u0161\u0162"+
		"\7u\2\2\u0162@\3\2\2\2\u0163\u0164\7^\2\2\u0164\u0165\7v\2\2\u0165\u0166"+
		"\7c\2\2\u0166\u0167\7p\2\2\u0167B\3\2\2\2\u0168\u0169\7^\2\2\u0169\u016a"+
		"\7c\2\2\u016a\u016b\7t\2\2\u016b\u016c\7e\2\2\u016c\u016d\7u\2\2\u016d"+
		"\u016e\7k\2\2\u016e\u016f\7p\2\2\u016fD\3\2\2\2\u0170\u0171\7^\2\2\u0171"+
		"\u0172\7c\2\2\u0172\u0173\7t\2\2\u0173\u0174\7e\2\2\u0174\u0175\7e\2\2"+
		"\u0175\u0176\7q\2\2\u0176\u0177\7u\2\2\u0177F\3\2\2\2\u0178\u0179\7^\2"+
		"\2\u0179\u017a\7c\2\2\u017a\u017b\7t\2\2\u017b\u017c\7e\2\2\u017c\u017d"+
		"\7v\2\2\u017d\u017e\7c\2\2\u017e\u017f\7p\2\2\u017fH\3\2\2\2\u0180\u0181"+
		"\7^\2\2\u0181\u0182\7u\2\2\u0182\u0183\7k\2\2\u0183\u0184\7p\2\2\u0184"+
		"\u0185\7j\2\2\u0185J\3\2\2\2\u0186\u0187\7^\2\2\u0187\u0188\7e\2\2\u0188"+
		"\u0189\7q\2\2\u0189\u018a\7u\2\2\u018a\u018b\7j\2\2\u018bL\3\2\2\2\u018c"+
		"\u018d\7^\2\2\u018d\u018e\7v\2\2\u018e\u018f\7c\2\2\u018f\u0190\7p\2\2"+
		"\u0190\u0191\7j\2\2\u0191N\3\2\2\2\u0192\u0193\7^\2\2\u0193\u0194\7n\2"+
		"\2\u0194\u0195\7q\2\2\u0195\u0196\7i\2\2\u0196P\3\2\2\2\u0197\u0198\7"+
		"^\2\2\u0198\u0199\7n\2\2\u0199\u019a\7p\2\2\u019aR\3\2\2\2\u019b\u019c"+
		"\7^\2\2\u019c\u019d\7k\2\2\u019d\u019e\7p\2\2\u019e\u019f\7v\2\2\u019f"+
		"T\3\2\2\2\u01a0\u01a1\7^\2\2\u01a1\u01a2\7k\2\2\u01a2\u01a3\7k\2\2\u01a3"+
		"\u01a4\7p\2\2\u01a4\u01a5\7v\2\2\u01a5V\3\2\2\2\u01a6\u01a7\7^\2\2\u01a7"+
		"\u01a8\7k\2\2\u01a8\u01a9\7k\2\2\u01a9\u01aa\7k\2\2\u01aa\u01ab\7p\2\2"+
		"\u01ab\u01ac\7v\2\2\u01acX\3\2\2\2\u01ad\u01ae\7^\2\2\u01ae\u01af\7n\2"+
		"\2\u01af\u01b0\7v\2\2\u01b0Z\3\2\2\2\u01b1\u01b2\7^\2\2\u01b2\u01b3\7"+
		"n\2\2\u01b3\u01b4\7p\2\2\u01b4\u01b5\7g\2\2\u01b5\u01b6\7s\2\2\u01b6\\"+
		"\3\2\2\2\u01b7\u01b8\7^\2\2\u01b8\u01b9\7n\2\2\u01b9\u01ba\7p\2\2\u01ba"+
		"\u01bb\7g\2\2\u01bb\u01bc\7s\2\2\u01bc\u01bd\7s\2\2\u01bd^\3\2\2\2\u01be"+
		"\u01bf\7^\2\2\u01bf\u01c0\7n\2\2\u01c0\u01c1\7g\2\2\u01c1`\3\2\2\2\u01c2"+
		"\u01c3\7^\2\2\u01c3\u01c4\7n\2\2\u01c4\u01c5\7g\2\2\u01c5\u01c6\7s\2\2"+
		"\u01c6b\3\2\2\2\u01c7\u01c8\7^\2\2\u01c8\u01c9\7n\2\2\u01c9\u01ca\7g\2"+
		"\2\u01ca\u01cb\7s\2\2\u01cb\u01cc\7s\2\2\u01ccd\3\2\2\2\u01cd\u01ce\7"+
		"^\2\2\u01ce\u01cf\7n\2\2\u01cf\u01d0\7g\2\2\u01d0\u01d1\7s\2\2\u01d1\u01d2"+
		"\7u\2\2\u01d2\u01d3\7n\2\2\u01d3\u01d4\7c\2\2\u01d4\u01d5\7p\2\2\u01d5"+
		"\u01d6\7v\2\2\u01d6f\3\2\2\2\u01d7\u01d8\7^\2\2\u01d8\u01d9\7i\2\2\u01d9"+
		"\u01da\7v\2\2\u01dah\3\2\2\2\u01db\u01dc\7^\2\2\u01dc\u01dd\7i\2\2\u01dd"+
		"\u01de\7p\2\2\u01de\u01df\7g\2\2\u01df\u01e0\7s\2\2\u01e0j\3\2\2\2\u01e1"+
		"\u01e2\7^\2\2\u01e2\u01e3\7i\2\2\u01e3\u01e4\7p\2\2\u01e4\u01e5\7g\2\2"+
		"\u01e5\u01e6\7s\2\2\u01e6\u01e7\7s\2\2\u01e7l\3\2\2\2\u01e8\u01e9\7^\2"+
		"\2\u01e9\u01ea\7i\2\2\u01ea\u01eb\7g\2\2\u01eb\u01ec\7s\2\2\u01ecn\3\2"+
		"\2\2\u01ed\u01ee\7^\2\2\u01ee\u01ef\7i\2\2\u01ef\u01f0\7g\2\2\u01f0\u01f1"+
		"\7s\2\2\u01f1\u01f2\7s\2\2\u01f2p\3\2\2\2\u01f3\u01f4\7^\2\2\u01f4\u01f5"+
		"\7i\2\2\u01f5\u01f6\7g\2\2\u01f6\u01f7\7s\2\2\u01f7\u01f8\7u\2\2\u01f8"+
		"\u01f9\7n\2\2\u01f9\u01fa\7c\2\2\u01fa\u01fb\7p\2\2\u01fb\u01fc\7v\2\2"+
		"\u01fcr\3\2\2\2\u01fd\u01fe\7}\2\2\u01fet\3\2\2\2\u01ff\u0200\7\177\2"+
		"\2\u0200v\3\2\2\2\u0201\u0202\7]\2\2\u0202x\3\2\2\2\u0203\u0204\7_\2\2"+
		"\u0204z\3\2\2\2\u0205\u0206\7)\2\2\u0206|\3\2\2\2\u0207\u0208\7<\2\2\u0208"+
		"~\3\2\2\2\u0209\u020a\7.\2\2\u020a\u0080\3\2\2\2\u020b\u020c\7\60\2\2"+
		"\u020c\u0082\3\2\2\2\u020d\u020e\7>\2\2\u020e\u0084\3\2\2\2\u020f\u0210"+
		"\7>\2\2\u0210\u0211\7?\2\2\u0211\u0086\3\2\2\2\u0212\u0213\7@\2\2\u0213"+
		"\u0088\3\2\2\2\u0214\u0215\7@\2\2\u0215\u0216\7?\2\2\u0216\u008a\3\2\2"+
		"\2\u0217\u0218\7#\2\2\u0218\u008c\3\2\2\2\u0219\u021a\7(\2\2\u021a\u008e"+
		"\3\2\2\2\u021b\u021c\7a\2\2\u021c\u0090\3\2\2\2\u021d\u021e\7^\2\2\u021e"+
		"\u021f\7^\2\2\u021f\u0092\3\2\2\2\u0220\u0221\7g\2\2\u0221\u0094\3\2\2"+
		"\2\u0222\u0223\7*\2\2\u0223\u0096\3\2\2\2\u0224\u0225\7+\2\2\u0225\u0098"+
		"\3\2\2\2\u0226\u0227\7`\2\2\u0227\u009a\3\2\2\2\u0228\u0229\7?\2\2\u0229"+
		"\u009c\3\2\2\2\u022a\u022b\7-\2\2\u022b\u009e\3\2\2\2\u022c\u022d\7/\2"+
		"\2\u022d\u00a0\3\2\2\2\u022e\u022f\5\u00a3R\2\u022f\u00a2\3\2\2\2\u0230"+
		"\u0238\7,\2\2\u0231\u0232\7^\2\2\u0232\u0233\7v\2\2\u0233\u0234\7k\2\2"+
		"\u0234\u0235\7o\2\2\u0235\u0236\7g\2\2\u0236\u0238\7u\2\2\u0237\u0230"+
		"\3\2\2\2\u0237\u0231\3\2\2\2\u0238\u00a4\3\2\2\2\u0239\u023a\7\61\2\2"+
		"\u023a\u00a6\3\2\2\2\u023b\u023f\5s:\2\u023c\u023e\13\2\2\2\u023d\u023c"+
		"\3\2\2\2\u023e\u0241\3\2\2\2\u023f\u0240\3\2\2\2\u023f\u023d\3\2\2\2\u0240"+
		"\u0242\3\2\2\2\u0241\u023f\3\2\2\2\u0242\u0243\5u;\2\u0243\u0244\3\2\2"+
		"\2\u0244\u0245\bT\2\2\u0245\u00a8\3\2\2\2\u0246\u0248\t\6\2\2\u0247\u0246"+
		"\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u0247\3\2\2\2\u0249\u024a\3\2\2\2\u024a"+
		"\u024b\3\2\2\2\u024b\u024c\bU\2\2\u024c\u00aa\3\2\2\2\21\2\u00b8\u00c6"+
		"\u00d0\u00de\u00ee\u00fa\u0106\u0116\u011c\u0122\u0135\u0237\u023f\u0249"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}