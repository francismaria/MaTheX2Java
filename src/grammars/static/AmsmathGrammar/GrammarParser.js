// Generated from Grammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003D\u0237\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0004",
    "H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004M\tM\u0004N\tN\u0004",
    "O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\u00ab\n\u0002\f\u0002\u000e\u0002",
    "\u00ae\u000b\u0002\u0006\u0002\u00b0\n\u0002\r\u0002\u000e\u0002\u00b1",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003\u00b7\n\u0003\f\u0003",
    "\u000e\u0003\u00ba\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004\u00c3\n\u0004",
    "\r\u0004\u000e\u0004\u00c4\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u00ca\n\u0005\u0003\u0005\u0006\u0005\u00cd\n\u0005\r\u0005\u000e",
    "\u0005\u00ce\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007\u00d8\n\u0007\f\u0007\u000e\u0007",
    "\u00db\u000b\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u00e0\n\b\f\b\u000e",
    "\b\u00e3\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00f1",
    "\n\u000b\f\u000b\u000e\u000b\u00f4\u000b\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011",
    "\u0104\n\u0011\f\u0011\u000e\u0011\u0107\u000b\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u010c\n\u0012\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u0110\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u0127\n\u0016\u0003\u0017\u0003\u0017\u0005\u0017\u012b\n\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u0135\n\u0019\f\u0019\u000e\u0019",
    "\u0138\u000b\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u013e\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0005\u001e",
    "\u0149\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003!\u0003!\u0005!\u0154\n!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0006#\u015f\n#\r#\u000e#\u0160\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003%\u0005%\u016a\n%\u0003&\u0003",
    "&\u0003&\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003)\u0003)",
    "\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0005",
    "-\u018a\n-\u0003.\u0003.\u0003.\u0005.\u018f\n.\u0003/\u0003/\u0003",
    "/\u0005/\u0194\n/\u00030\u00030\u00030\u00050\u0199\n0\u00031\u0003",
    "1\u00031\u00032\u00032\u00032\u00033\u00033\u00033\u00034\u00034\u0003",
    "4\u00035\u00035\u00035\u00036\u00036\u00036\u00037\u00037\u00037\u0003",
    "8\u00038\u00038\u00039\u00039\u00039\u0003:\u0005:\u01b7\n:\u0003:\u0003",
    ":\u0003:\u0003:\u0003;\u0003;\u0003;\u0003<\u0003<\u0003<\u0003<\u0003",
    "<\u0003=\u0003=\u0003=\u0003=\u0003=\u0003>\u0003>\u0005>\u01cc\n>\u0003",
    "?\u0003?\u0003?\u0003?\u0007?\u01d2\n?\f?\u000e?\u01d5\u000b?\u0003",
    "@\u0003@\u0003@\u0003@\u0003@\u0005@\u01dc\n@\u0003A\u0003A\u0003A\u0003",
    "A\u0003A\u0006A\u01e3\nA\rA\u000eA\u01e4\u0003A\u0003A\u0003B\u0003",
    "B\u0003B\u0003B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003D\u0003D\u0003",
    "E\u0003E\u0005E\u01f6\nE\u0003F\u0003F\u0005F\u01fa\nF\u0003F\u0003",
    "F\u0003G\u0003G\u0005G\u0200\nG\u0003G\u0003G\u0003H\u0003H\u0003H\u0003",
    "H\u0003H\u0003I\u0003I\u0003I\u0003I\u0003J\u0003J\u0005J\u020f\nJ\u0003",
    "J\u0003J\u0003J\u0003J\u0003K\u0003K\u0003K\u0003K\u0003L\u0003L\u0003",
    "M\u0003M\u0003M\u0005M\u021e\nM\u0003M\u0003M\u0003M\u0003M\u0003N\u0003",
    "N\u0003N\u0003N\u0003O\u0003O\u0003P\u0003P\u0003Q\u0003Q\u0003Q\u0003",
    "Q\u0003R\u0003R\u0003R\u0003R\u0003R\u0003S\u0003S\u0003S\u0002\u0002",
    "T\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080",
    "\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098",
    "\u009a\u009c\u009e\u00a0\u00a2\u00a4\u0002\u000b\u0004\u0002::<=\u0003",
    "\u0002>A\u0004\u0002\u0017\u0019))\u0004\u0002\u001a\u001d))\u0004\u0002",
    "\u001e ++\u0004\u0002!#,,\u0004\u0002::<<\u0005\u0002\u0007\u0007::",
    "<<\u0003\u0002&(\u0002\u021a\u0002\u00af\u0003\u0002\u0002\u0002\u0004",
    "\u00b8\u0003\u0002\u0002\u0002\u0006\u00bd\u0003\u0002\u0002\u0002\b",
    "\u00c9\u0003\u0002\u0002\u0002\n\u00d0\u0003\u0002\u0002\u0002\f\u00d4",
    "\u0003\u0002\u0002\u0002\u000e\u00dc\u0003\u0002\u0002\u0002\u0010\u00e4",
    "\u0003\u0002\u0002\u0002\u0012\u00e8\u0003\u0002\u0002\u0002\u0014\u00ed",
    "\u0003\u0002\u0002\u0002\u0016\u00f5\u0003\u0002\u0002\u0002\u0018\u00f7",
    "\u0003\u0002\u0002\u0002\u001a\u00f9\u0003\u0002\u0002\u0002\u001c\u00fb",
    "\u0003\u0002\u0002\u0002\u001e\u00fd\u0003\u0002\u0002\u0002 \u00ff",
    "\u0003\u0002\u0002\u0002\"\u0108\u0003\u0002\u0002\u0002$\u010f\u0003",
    "\u0002\u0002\u0002&\u0111\u0003\u0002\u0002\u0002(\u0115\u0003\u0002",
    "\u0002\u0002*\u0126\u0003\u0002\u0002\u0002,\u0128\u0003\u0002\u0002",
    "\u0002.\u012c\u0003\u0002\u0002\u00020\u0131\u0003\u0002\u0002\u0002",
    "2\u0139\u0003\u0002\u0002\u00024\u013d\u0003\u0002\u0002\u00026\u013f",
    "\u0003\u0002\u0002\u00028\u0141\u0003\u0002\u0002\u0002:\u0148\u0003",
    "\u0002\u0002\u0002<\u014a\u0003\u0002\u0002\u0002>\u014c\u0003\u0002",
    "\u0002\u0002@\u0153\u0003\u0002\u0002\u0002B\u0157\u0003\u0002\u0002",
    "\u0002D\u0159\u0003\u0002\u0002\u0002F\u0164\u0003\u0002\u0002\u0002",
    "H\u0169\u0003\u0002\u0002\u0002J\u016b\u0003\u0002\u0002\u0002L\u016e",
    "\u0003\u0002\u0002\u0002N\u0171\u0003\u0002\u0002\u0002P\u0174\u0003",
    "\u0002\u0002\u0002R\u0178\u0003\u0002\u0002\u0002T\u017d\u0003\u0002",
    "\u0002\u0002V\u0182\u0003\u0002\u0002\u0002X\u0189\u0003\u0002\u0002",
    "\u0002Z\u018e\u0003\u0002\u0002\u0002\\\u0193\u0003\u0002\u0002\u0002",
    "^\u0198\u0003\u0002\u0002\u0002`\u019a\u0003\u0002\u0002\u0002b\u019d",
    "\u0003\u0002\u0002\u0002d\u01a0\u0003\u0002\u0002\u0002f\u01a3\u0003",
    "\u0002\u0002\u0002h\u01a6\u0003\u0002\u0002\u0002j\u01a9\u0003\u0002",
    "\u0002\u0002l\u01ac\u0003\u0002\u0002\u0002n\u01af\u0003\u0002\u0002",
    "\u0002p\u01b2\u0003\u0002\u0002\u0002r\u01b6\u0003\u0002\u0002\u0002",
    "t\u01bc\u0003\u0002\u0002\u0002v\u01bf\u0003\u0002\u0002\u0002x\u01c4",
    "\u0003\u0002\u0002\u0002z\u01cb\u0003\u0002\u0002\u0002|\u01cd\u0003",
    "\u0002\u0002\u0002~\u01db\u0003\u0002\u0002\u0002\u0080\u01dd\u0003",
    "\u0002\u0002\u0002\u0082\u01e8\u0003\u0002\u0002\u0002\u0084\u01ed\u0003",
    "\u0002\u0002\u0002\u0086\u01ef\u0003\u0002\u0002\u0002\u0088\u01f5\u0003",
    "\u0002\u0002\u0002\u008a\u01f7\u0003\u0002\u0002\u0002\u008c\u01fd\u0003",
    "\u0002\u0002\u0002\u008e\u0203\u0003\u0002\u0002\u0002\u0090\u0208\u0003",
    "\u0002\u0002\u0002\u0092\u020c\u0003\u0002\u0002\u0002\u0094\u0214\u0003",
    "\u0002\u0002\u0002\u0096\u0218\u0003\u0002\u0002\u0002\u0098\u021d\u0003",
    "\u0002\u0002\u0002\u009a\u0223\u0003\u0002\u0002\u0002\u009c\u0227\u0003",
    "\u0002\u0002\u0002\u009e\u0229\u0003\u0002\u0002\u0002\u00a0\u022b\u0003",
    "\u0002\u0002\u0002\u00a2\u022f\u0003\u0002\u0002\u0002\u00a4\u0234\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0005\u0004\u0003\u0002\u00a7\u00a8\u0005",
    "\b\u0005\u0002\u00a8\u00ac\u0005\u00a2R\u0002\u00a9\u00ab\u0007B\u0002",
    "\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002",
    "\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002",
    "\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002",
    "\u0002\u00af\u00a6\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u0002\u0002",
    "\u0003\u00b4\u0003\u0003\u0002\u0002\u0002\u00b5\u00b7\u0007B\u0002",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0005\u0006\u0004\u0002\u00bc\u0005\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0007$\u0002\u0002\u00be\u00bf\u0007/\u0002\u0002",
    "\u00bf\u00c0\u0005\u00a4S\u0002\u00c0\u00c2\u00070\u0002\u0002\u00c1",
    "\u00c3\u0007B\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u0007\u0003\u0002\u0002\u0002\u00c6",
    "\u00ca\u0005\n\u0006\u0002\u00c7\u00ca\u0005\f\u0007\u0002\u00c8\u00ca",
    "\u0005\u0010\t\u0002\u00c9\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c7",
    "\u0003\u0002\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cc",
    "\u0003\u0002\u0002\u0002\u00cb\u00cd\u0007B\u0002\u0002\u00cc\u00cb",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cc",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\t",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007:\u0002\u0002\u00d1\u00d2",
    "\u0007;\u0002\u0002\u00d2\u00d3\u0005 \u0011\u0002\u00d3\u000b\u0003",
    "\u0002\u0002\u0002\u00d4\u00d9\u0005\u000e\b\u0002\u00d5\u00d6\u0007",
    "2\u0002\u0002\u00d6\u00d8\u0005\u000e\b\u0002\u00d7\u00d5\u0003\u0002",
    "\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\r\u0003\u0002",
    "\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00e1\u0005*",
    "\u0016\u0002\u00dd\u00de\u0007.\u0002\u0002\u00de\u00e0\u0005*\u0016",
    "\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e3\u0003\u0002\u0002",
    "\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002",
    "\u0002\u00e2\u000f\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0005\u0012\n\u0002\u00e5\u00e6\u0007;\u0002\u0002",
    "\u00e6\u00e7\u0005 \u0011\u0002\u00e7\u0011\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0007:\u0002\u0002\u00e9\u00ea\u00076\u0002\u0002\u00ea",
    "\u00eb\u0005\u0014\u000b\u0002\u00eb\u00ec\u00077\u0002\u0002\u00ec",
    "\u0013\u0003\u0002\u0002\u0002\u00ed\u00f2\t\u0002\u0002\u0002\u00ee",
    "\u00ef\u00079\u0002\u0002\u00ef\u00f1\t\u0002\u0002\u0002\u00f0\u00ee",
    "\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003\u0002\u0002\u0002\u00f2\u00f0",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u0015",
    "\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f6",
    "\t\u0003\u0002\u0002\u00f6\u0017\u0003\u0002\u0002\u0002\u00f7\u00f8",
    "\t\u0004\u0002\u0002\u00f8\u0019\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\t\u0005\u0002\u0002\u00fa\u001b\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\t\u0006\u0002\u0002\u00fc\u001d\u0003\u0002\u0002\u0002\u00fd\u00fe",
    "\t\u0007\u0002\u0002\u00fe\u001f\u0003\u0002\u0002\u0002\u00ff\u0105",
    "\u0005\"\u0012\u0002\u0100\u0101\u0005\u0016\f\u0002\u0101\u0102\u0005",
    "\"\u0012\u0002\u0102\u0104\u0003\u0002\u0002\u0002\u0103\u0100\u0003",
    "\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002\u0002\u0105\u0103\u0003",
    "\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106!\u0003",
    "\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0108\u010b\u0005",
    "$\u0013\u0002\u0109\u010a\u00078\u0002\u0002\u010a\u010c\u0005&\u0014",
    "\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002",
    "\u0002\u010c#\u0003\u0002\u0002\u0002\u010d\u0110\u0005*\u0016\u0002",
    "\u010e\u0110\u0005(\u0015\u0002\u010f\u010d\u0003\u0002\u0002\u0002",
    "\u010f\u010e\u0003\u0002\u0002\u0002\u0110%\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007/\u0002\u0002\u0112\u0113\u0005 \u0011\u0002\u0113",
    "\u0114\u00070\u0002\u0002\u0114\'\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u00076\u0002\u0002\u0116\u0117\u0005 \u0011\u0002\u0117\u0118\u0007",
    "7\u0002\u0002\u0118)\u0003\u0002\u0002\u0002\u0119\u0127\u0003\u0002",
    "\u0002\u0002\u011a\u0127\u00054\u001b\u0002\u011b\u0127\u0005:\u001e",
    "\u0002\u011c\u0127\u0005,\u0017\u0002\u011d\u0127\u0005@!\u0002\u011e",
    "\u0127\u0005\u0012\n\u0002\u011f\u0127\u0005\u009aN\u0002\u0120\u0127",
    "\u0005\u0098M\u0002\u0121\u0127\u0005\u0092J\u0002\u0122\u0127\u0005",
    "X-\u0002\u0123\u0127\u0005v<\u0002\u0124\u0127\u0005\u0088E\u0002\u0125",
    "\u0127\u0005H%\u0002\u0126\u0119\u0003\u0002\u0002\u0002\u0126\u011a",
    "\u0003\u0002\u0002\u0002\u0126\u011b\u0003\u0002\u0002\u0002\u0126\u011c",
    "\u0003\u0002\u0002\u0002\u0126\u011d\u0003\u0002\u0002\u0002\u0126\u011e",
    "\u0003\u0002\u0002\u0002\u0126\u011f\u0003\u0002\u0002\u0002\u0126\u0120",
    "\u0003\u0002\u0002\u0002\u0126\u0121\u0003\u0002\u0002\u0002\u0126\u0122",
    "\u0003\u0002\u0002\u0002\u0126\u0123\u0003\u0002\u0002\u0002\u0126\u0124",
    "\u0003\u0002\u0002\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0127+",
    "\u0003\u0002\u0002\u0002\u0128\u012a\u0007:\u0002\u0002\u0129\u012b",
    "\u0005.\u0018\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012a\u012b",
    "\u0003\u0002\u0002\u0002\u012b-\u0003\u0002\u0002\u0002\u012c\u012d",
    "\u00071\u0002\u0002\u012d\u012e\u0007/\u0002\u0002\u012e\u012f\u0005",
    "0\u0019\u0002\u012f\u0130\u00070\u0002\u0002\u0130/\u0003\u0002\u0002",
    "\u0002\u0131\u0136\u00052\u001a\u0002\u0132\u0133\u00079\u0002\u0002",
    "\u0133\u0135\u00052\u001a\u0002\u0134\u0132\u0003\u0002\u0002\u0002",
    "\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0003\u0002\u0002\u0002\u01371\u0003\u0002\u0002\u0002",
    "\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013a\t\b\u0002\u0002\u013a",
    "3\u0003\u0002\u0002\u0002\u013b\u013e\u00056\u001c\u0002\u013c\u013e",
    "\u00058\u001d\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013c",
    "\u0003\u0002\u0002\u0002\u013e5\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0007<\u0002\u0002\u01407\u0003\u0002\u0002\u0002\u0141\u0142\u0007",
    "6\u0002\u0002\u0142\u0143\u0007?\u0002\u0002\u0143\u0144\u0007<\u0002",
    "\u0002\u0144\u0145\u00077\u0002\u0002\u01459\u0003\u0002\u0002\u0002",
    "\u0146\u0149\u0005<\u001f\u0002\u0147\u0149\u0005> \u0002\u0148\u0146",
    "\u0003\u0002\u0002\u0002\u0148\u0147\u0003\u0002\u0002\u0002\u0149;",
    "\u0003\u0002\u0002\u0002\u014a\u014b\u0007=\u0002\u0002\u014b=\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u00076\u0002\u0002\u014d\u014e\u0007",
    "?\u0002\u0002\u014e\u014f\u0007=\u0002\u0002\u014f\u0150\u00077\u0002",
    "\u0002\u0150?\u0003\u0002\u0002\u0002\u0151\u0154\u0005B\"\u0002\u0152",
    "\u0154\u0005D#\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0152",
    "\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155\u0156",
    "\u0007-\u0002\u0002\u0156A\u0003\u0002\u0002\u0002\u0157\u0158\u0005",
    "F$\u0002\u0158C\u0003\u0002\u0002\u0002\u0159\u015a\u00076\u0002\u0002",
    "\u015a\u015e\u0005F$\u0002\u015b\u015c\u0005\u0016\f\u0002\u015c\u015d",
    "\u0005F$\u0002\u015d\u015f\u0003\u0002\u0002\u0002\u015e\u015b\u0003",
    "\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160\u015e\u0003",
    "\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u00077\u0002\u0002\u0163E\u0003\u0002",
    "\u0002\u0002\u0164\u0165\t\b\u0002\u0002\u0165G\u0003\u0002\u0002\u0002",
    "\u0166\u016a\u0005J&\u0002\u0167\u016a\u0005L\'\u0002\u0168\u016a\u0005",
    "N(\u0002\u0169\u0166\u0003\u0002\u0002\u0002\u0169\u0167\u0003\u0002",
    "\u0002\u0002\u0169\u0168\u0003\u0002\u0002\u0002\u016aI\u0003\u0002",
    "\u0002\u0002\u016b\u016c\u0007\u0014\u0002\u0002\u016c\u016d\u0005P",
    ")\u0002\u016dK\u0003\u0002\u0002\u0002\u016e\u016f\u0007\u0015\u0002",
    "\u0002\u016f\u0170\u0005P)\u0002\u0170M\u0003\u0002\u0002\u0002\u0171",
    "\u0172\u0007\u0016\u0002\u0002\u0172\u0173\u0005P)\u0002\u0173O\u0003",
    "\u0002\u0002\u0002\u0174\u0175\u0005R*\u0002\u0175\u0176\u0005T+\u0002",
    "\u0176\u0177\u0005V,\u0002\u0177Q\u0003\u0002\u0002\u0002\u0178\u0179",
    "\u00071\u0002\u0002\u0179\u017a\u0007/\u0002\u0002\u017a\u017b\u0005",
    " \u0011\u0002\u017b\u017c\u00070\u0002\u0002\u017cS\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u00078\u0002\u0002\u017e\u017f\u0007/\u0002\u0002",
    "\u017f\u0180\u0005 \u0011\u0002\u0180\u0181\u00070\u0002\u0002\u0181",
    "U\u0003\u0002\u0002\u0002\u0182\u0183\u0007/\u0002\u0002\u0183\u0184",
    "\u0005 \u0011\u0002\u0184\u0185\u00070\u0002\u0002\u0185W\u0003\u0002",
    "\u0002\u0002\u0186\u018a\u0005Z.\u0002\u0187\u018a\u0005\\/\u0002\u0188",
    "\u018a\u0005^0\u0002\u0189\u0186\u0003\u0002\u0002\u0002\u0189\u0187",
    "\u0003\u0002\u0002\u0002\u0189\u0188\u0003\u0002\u0002\u0002\u018aY",
    "\u0003\u0002\u0002\u0002\u018b\u018f\u0005`1\u0002\u018c\u018f\u0005",
    "b2\u0002\u018d\u018f\u0005d3\u0002\u018e\u018b\u0003\u0002\u0002\u0002",
    "\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018d\u0003\u0002\u0002\u0002",
    "\u018f[\u0003\u0002\u0002\u0002\u0190\u0194\u0005f4\u0002\u0191\u0194",
    "\u0005h5\u0002\u0192\u0194\u0005j6\u0002\u0193\u0190\u0003\u0002\u0002",
    "\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0192\u0003\u0002\u0002",
    "\u0002\u0194]\u0003\u0002\u0002\u0002\u0195\u0199\u0005l7\u0002\u0196",
    "\u0199\u0005n8\u0002\u0197\u0199\u0005p9\u0002\u0198\u0195\u0003\u0002",
    "\u0002\u0002\u0198\u0196\u0003\u0002\u0002\u0002\u0198\u0197\u0003\u0002",
    "\u0002\u0002\u0199_\u0003\u0002\u0002\u0002\u019a\u019b\u0007\t\u0002",
    "\u0002\u019b\u019c\u0005r:\u0002\u019ca\u0003\u0002\u0002\u0002\u019d",
    "\u019e\u0007\n\u0002\u0002\u019e\u019f\u0005r:\u0002\u019fc\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0007\u000b\u0002\u0002\u01a1\u01a2\u0005r",
    ":\u0002\u01a2e\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007\f\u0002\u0002",
    "\u01a4\u01a5\u0005r:\u0002\u01a5g\u0003\u0002\u0002\u0002\u01a6\u01a7",
    "\u0007\r\u0002\u0002\u01a7\u01a8\u0005r:\u0002\u01a8i\u0003\u0002\u0002",
    "\u0002\u01a9\u01aa\u0007\u000e\u0002\u0002\u01aa\u01ab\u0005r:\u0002",
    "\u01abk\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007\u000f\u0002\u0002",
    "\u01ad\u01ae\u0005r:\u0002\u01aem\u0003\u0002\u0002\u0002\u01af\u01b0",
    "\u0007\u0010\u0002\u0002\u01b0\u01b1\u0005r:\u0002\u01b1o\u0003\u0002",
    "\u0002\u0002\u01b2\u01b3\u0007\u0011\u0002\u0002\u01b3\u01b4\u0005r",
    ":\u0002\u01b4q\u0003\u0002\u0002\u0002\u01b5\u01b7\u0005t;\u0002\u01b6",
    "\u01b5\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002\u01b7",
    "\u01b8\u0003\u0002\u0002\u0002\u01b8\u01b9\u0007/\u0002\u0002\u01b9",
    "\u01ba\u0005 \u0011\u0002\u01ba\u01bb\u00070\u0002\u0002\u01bbs\u0003",
    "\u0002\u0002\u0002\u01bc\u01bd\u00078\u0002\u0002\u01bd\u01be\t\b\u0002",
    "\u0002\u01beu\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007\u0006\u0002",
    "\u0002\u01c0\u01c1\u0005x=\u0002\u01c1\u01c2\u0005\u0082B\u0002\u01c2",
    "\u01c3\u0005\u0086D\u0002\u01c3w\u0003\u0002\u0002\u0002\u01c4\u01c5",
    "\u00071\u0002\u0002\u01c5\u01c6\u0007/\u0002\u0002\u01c6\u01c7\u0005",
    "z>\u0002\u01c7\u01c8\u00070\u0002\u0002\u01c8y\u0003\u0002\u0002\u0002",
    "\u01c9\u01cc\u0005|?\u0002\u01ca\u01cc\u0005\u0080A\u0002\u01cb\u01c9",
    "\u0003\u0002\u0002\u0002\u01cb\u01ca\u0003\u0002\u0002\u0002\u01cc{",
    "\u0003\u0002\u0002\u0002\u01cd\u01d3\t\b\u0002\u0002\u01ce\u01cf\u0005",
    "~@\u0002\u01cf\u01d0\t\b\u0002\u0002\u01d0\u01d2\u0003\u0002\u0002\u0002",
    "\u01d1\u01ce\u0003\u0002\u0002\u0002\u01d2\u01d5\u0003\u0002\u0002\u0002",
    "\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002\u0002",
    "\u01d4}\u0003\u0002\u0002\u0002\u01d5\u01d3\u0003\u0002\u0002\u0002",
    "\u01d6\u01dc\u0007;\u0002\u0002\u01d7\u01dc\u0005\u0018\r\u0002\u01d8",
    "\u01dc\u0005\u001a\u000e\u0002\u01d9\u01dc\u0005\u001c\u000f\u0002\u01da",
    "\u01dc\u0005\u001e\u0010\u0002\u01db\u01d6\u0003\u0002\u0002\u0002\u01db",
    "\u01d7\u0003\u0002\u0002\u0002\u01db\u01d8\u0003\u0002\u0002\u0002\u01db",
    "\u01d9\u0003\u0002\u0002\u0002\u01db\u01da\u0003\u0002\u0002\u0002\u01dc",
    "\u007f\u0003\u0002\u0002\u0002\u01dd\u01de\u0007\b\u0002\u0002\u01de",
    "\u01df\u0007/\u0002\u0002\u01df\u01e2\u0005|?\u0002\u01e0\u01e1\u0007",
    "2\u0002\u0002\u01e1\u01e3\u0005|?\u0002\u01e2\u01e0\u0003\u0002\u0002",
    "\u0002\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4\u01e2\u0003\u0002\u0002",
    "\u0002\u01e4\u01e5\u0003\u0002\u0002\u0002\u01e5\u01e6\u0003\u0002\u0002",
    "\u0002\u01e6\u01e7\u00070\u0002\u0002\u01e7\u0081\u0003\u0002\u0002",
    "\u0002\u01e8\u01e9\u00078\u0002\u0002\u01e9\u01ea\u0007/\u0002\u0002",
    "\u01ea\u01eb\u0005\u0084C\u0002\u01eb\u01ec\u00070\u0002\u0002\u01ec",
    "\u0083\u0003\u0002\u0002\u0002\u01ed\u01ee\t\t\u0002\u0002\u01ee\u0085",
    "\u0003\u0002\u0002\u0002\u01ef\u01f0\u0007/\u0002\u0002\u01f0\u01f1",
    "\u0005 \u0011\u0002\u01f1\u01f2\u00070\u0002\u0002\u01f2\u0087\u0003",
    "\u0002\u0002\u0002\u01f3\u01f6\u0005\u008aF\u0002\u01f4\u01f6\u0005",
    "\u008cG\u0002\u01f5\u01f3\u0003\u0002\u0002\u0002\u01f5\u01f4\u0003",
    "\u0002\u0002\u0002\u01f6\u0089\u0003\u0002\u0002\u0002\u01f7\u01f9\u0007",
    "\u0012\u0002\u0002\u01f8\u01fa\u0005\u008eH\u0002\u01f9\u01f8\u0003",
    "\u0002\u0002\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01fa\u01fb\u0003",
    "\u0002\u0002\u0002\u01fb\u01fc\u0005\u0090I\u0002\u01fc\u008b\u0003",
    "\u0002\u0002\u0002\u01fd\u01ff\u0007\u0013\u0002\u0002\u01fe\u0200\u0005",
    "\u008eH\u0002\u01ff\u01fe\u0003\u0002\u0002\u0002\u01ff\u0200\u0003",
    "\u0002\u0002\u0002\u0200\u0201\u0003\u0002\u0002\u0002\u0201\u0202\u0005",
    "\u0090I\u0002\u0202\u008d\u0003\u0002\u0002\u0002\u0203\u0204\u0007",
    "1\u0002\u0002\u0204\u0205\u0007/\u0002\u0002\u0205\u0206\t\b\u0002\u0002",
    "\u0206\u0207\u00070\u0002\u0002\u0207\u008f\u0003\u0002\u0002\u0002",
    "\u0208\u0209\u0007/\u0002\u0002\u0209\u020a\u0005 \u0011\u0002\u020a",
    "\u020b\u00070\u0002\u0002\u020b\u0091\u0003\u0002\u0002\u0002\u020c",
    "\u020e\u0007\u0005\u0002\u0002\u020d\u020f\u0005\u0094K\u0002\u020e",
    "\u020d\u0003\u0002\u0002\u0002\u020e\u020f\u0003\u0002\u0002\u0002\u020f",
    "\u0210\u0003\u0002\u0002\u0002\u0210\u0211\u0007/\u0002\u0002\u0211",
    "\u0212\u0005\u0096L\u0002\u0212\u0213\u00070\u0002\u0002\u0213\u0093",
    "\u0003\u0002\u0002\u0002\u0214\u0215\u00074\u0002\u0002\u0215\u0216",
    "\t\b\u0002\u0002\u0216\u0217\u00075\u0002\u0002\u0217\u0095\u0003\u0002",
    "\u0002\u0002\u0218\u0219\u0005 \u0011\u0002\u0219\u0097\u0003\u0002",
    "\u0002\u0002\u021a\u021b\u00073\u0002\u0002\u021b\u021e\u00078\u0002",
    "\u0002\u021c\u021e\u0007\u0003\u0002\u0002\u021d\u021a\u0003\u0002\u0002",
    "\u0002\u021d\u021c\u0003\u0002\u0002\u0002\u021e\u021f\u0003\u0002\u0002",
    "\u0002\u021f\u0220\u0007/\u0002\u0002\u0220\u0221\u0005 \u0011\u0002",
    "\u0221\u0222\u00070\u0002\u0002\u0222\u0099\u0003\u0002\u0002\u0002",
    "\u0223\u0224\u0007\u0004\u0002\u0002\u0224\u0225\u0005\u009cO\u0002",
    "\u0225\u0226\u0005\u009eP\u0002\u0226\u009b\u0003\u0002\u0002\u0002",
    "\u0227\u0228\u0005\u00a0Q\u0002\u0228\u009d\u0003\u0002\u0002\u0002",
    "\u0229\u022a\u0005\u00a0Q\u0002\u022a\u009f\u0003\u0002\u0002\u0002",
    "\u022b\u022c\u0007/\u0002\u0002\u022c\u022d\u0005 \u0011\u0002\u022d",
    "\u022e\u00070\u0002\u0002\u022e\u00a1\u0003\u0002\u0002\u0002\u022f",
    "\u0230\u0007%\u0002\u0002\u0230\u0231\u0007/\u0002\u0002\u0231\u0232",
    "\u0005\u00a4S\u0002\u0232\u0233\u00070\u0002\u0002\u0233\u00a3\u0003",
    "\u0002\u0002\u0002\u0234\u0235\t\n\u0002\u0002\u0235\u00a5\u0003\u0002",
    "\u0002\u0002$\u00ac\u00b1\u00b8\u00c4\u00c9\u00ce\u00d9\u00e1\u00f2",
    "\u0105\u010b\u010f\u0126\u012a\u0136\u013d\u0148\u0153\u0160\u0169\u0189",
    "\u018e\u0193\u0198\u01b6\u01cb\u01d3\u01db\u01e4\u01f5\u01f9\u01ff\u020e",
    "\u021d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\\exp'", "'\\frac'", "'\\sqrt'", "'\\sum'", 
                     "'\\infty'", "'\\substack'", "'\\sin'", "'\\cos'", 
                     "'\\tan'", "'\\arcsin'", "'\\arccos'", "'\\arctan'", 
                     "'\\sinh'", "'\\cosh'", "'\\tanh'", "'\\log'", "'\\ln'", 
                     "'\\int'", "'\\iint'", "'\\iiint'", "'\\lt'", "'\\lneq'", 
                     "'\\lneqq'", "'\\le'", "'\\leq'", "'\\leqq'", "'\\leqslant'", 
                     "'\\gt'", "'\\gneq'", "'\\gneqq'", "'\\geq'", "'\\geqq'", 
                     "'\\geqslant'", "'\\begin'", "'\\end'", "'equation'", 
                     "'equation*'", "'matrix'", "'<'", "'<='", "'>'", "'>='", 
                     "'!'", "'&'", "'{'", "'}'", "'_'", "'\\\\'", "'e'", 
                     "'['", "']'", "'('", "')'", "'^'", "','", null, "'='", 
                     null, null, "'+'", "'-'", null, "'/'" ];

var symbolicNames = [ null, "EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", 
                      "INFINITY_TAG", "SUBSTACK_TAG", "SIN_TAG", "COS_TAG", 
                      "TAN_TAG", "ARCSIN_TAG", "ARCCOS_TAG", "ARCTAN_TAG", 
                      "SINH_TAG", "COSH_TAG", "TANH_TAG", "LOG_TAG", "LN_TAG", 
                      "INT_TAG", "IINT_TAG", "IIINT_TAG", "LT_TAG", "LNEQ_TAG", 
                      "LNEQQ_TAG", "LE_TAG", "LEQ_TAG", "LEQQ_TAG", "LEQSLANT_TAG", 
                      "GT_TAG", "GNEQ_TAG", "GNEQQ_TAG", "GEQ_TAG", "GEQQ_TAG", 
                      "GEQSLANT_TAG", "BEGIN", "END", "EQUATION", "EQUATION_STAR", 
                      "MATRIX", "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", "GREATER_SYMBOL", 
                      "GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", "JOIN", 
                      "CURLY_LF", "CURLY_RT", "UNDERSCORE", "BREAKLINE", 
                      "EULER_NUMBER", "BRACKET_LF", "BRACKET_RT", "PARENTHESIS_LF", 
                      "PARENTHESIS_RT", "HAT", "COMMA", "VARNAME", "EQUAL", 
                      "INTEGER", "DOUBLE", "PLUS", "MINUS", "MULTIPLICATION", 
                      "DIVISION", "NEWLINE_TAG", "COMMENT", "WS" ];

var ruleNames =  [ "chat", "start", "begin", "body", "equation", "matrix", 
                   "matrix_line", "math_function", "math_function_def", 
                   "math_function_args", "operator", "lesser_operator", 
                   "lesser_equal_operator", "greater_operator", "greater_equal_operator", 
                   "composed_operations", "operation_element", "base_member", 
                   "power_member", "priority_element", "member", "variable", 
                   "variable_lower_index", "index_elements", "index_element", 
                   "integer", "integer_positive_zero", "integer_negative", 
                   "double_type", "double_positive_zero", "double_negative", 
                   "factorial", "single_argument_factorial", "complex_argument_factorial", 
                   "factorial_element", "integral", "single_integral", "double_integral", 
                   "triple_integral", "integral_def", "integral_lower_limit", 
                   "integral_upper_limit", "integral_body", "trigonometry", 
                   "normal", "inverse", "hyperbolic", "sin", "cos", "tan", 
                   "arcsin", "arccos", "arctan", "sinh", "cosh", "tanh", 
                   "trigonometric_function_args", "trigonometric_function_power", 
                   "summation", "summation_lower_bound", "summation_lower_body", 
                   "summation_lower_single_line", "summation_lower_bound_operators", 
                   "summation_lower_multiple_line", "summation_upper_bound", 
                   "summation_upper_body", "summation_body", "logarithm", 
                   "log", "ln", "logarithm_lower_bound", "logarithm_body", 
                   "sqrt", "sqrt_root", "sqrt_body", "exponential", "fraction", 
                   "numerator", "denominator", "fraction_member", "end", 
                   "environment" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.EXP_TAG = 1;
GrammarParser.FRAC_TAG = 2;
GrammarParser.SQRT_TAG = 3;
GrammarParser.SUMMATION_TAG = 4;
GrammarParser.INFINITY_TAG = 5;
GrammarParser.SUBSTACK_TAG = 6;
GrammarParser.SIN_TAG = 7;
GrammarParser.COS_TAG = 8;
GrammarParser.TAN_TAG = 9;
GrammarParser.ARCSIN_TAG = 10;
GrammarParser.ARCCOS_TAG = 11;
GrammarParser.ARCTAN_TAG = 12;
GrammarParser.SINH_TAG = 13;
GrammarParser.COSH_TAG = 14;
GrammarParser.TANH_TAG = 15;
GrammarParser.LOG_TAG = 16;
GrammarParser.LN_TAG = 17;
GrammarParser.INT_TAG = 18;
GrammarParser.IINT_TAG = 19;
GrammarParser.IIINT_TAG = 20;
GrammarParser.LT_TAG = 21;
GrammarParser.LNEQ_TAG = 22;
GrammarParser.LNEQQ_TAG = 23;
GrammarParser.LE_TAG = 24;
GrammarParser.LEQ_TAG = 25;
GrammarParser.LEQQ_TAG = 26;
GrammarParser.LEQSLANT_TAG = 27;
GrammarParser.GT_TAG = 28;
GrammarParser.GNEQ_TAG = 29;
GrammarParser.GNEQQ_TAG = 30;
GrammarParser.GEQ_TAG = 31;
GrammarParser.GEQQ_TAG = 32;
GrammarParser.GEQSLANT_TAG = 33;
GrammarParser.BEGIN = 34;
GrammarParser.END = 35;
GrammarParser.EQUATION = 36;
GrammarParser.EQUATION_STAR = 37;
GrammarParser.MATRIX = 38;
GrammarParser.LESSER_SYMBOL = 39;
GrammarParser.LESS_EQUAL_SYMBOL = 40;
GrammarParser.GREATER_SYMBOL = 41;
GrammarParser.GREATER_EQUAL_SYMBOL = 42;
GrammarParser.FACTORIAL_SYMBOL = 43;
GrammarParser.JOIN = 44;
GrammarParser.CURLY_LF = 45;
GrammarParser.CURLY_RT = 46;
GrammarParser.UNDERSCORE = 47;
GrammarParser.BREAKLINE = 48;
GrammarParser.EULER_NUMBER = 49;
GrammarParser.BRACKET_LF = 50;
GrammarParser.BRACKET_RT = 51;
GrammarParser.PARENTHESIS_LF = 52;
GrammarParser.PARENTHESIS_RT = 53;
GrammarParser.HAT = 54;
GrammarParser.COMMA = 55;
GrammarParser.VARNAME = 56;
GrammarParser.EQUAL = 57;
GrammarParser.INTEGER = 58;
GrammarParser.DOUBLE = 59;
GrammarParser.PLUS = 60;
GrammarParser.MINUS = 61;
GrammarParser.MULTIPLICATION = 62;
GrammarParser.DIVISION = 63;
GrammarParser.NEWLINE_TAG = 64;
GrammarParser.COMMENT = 65;
GrammarParser.WS = 66;

GrammarParser.RULE_chat = 0;
GrammarParser.RULE_start = 1;
GrammarParser.RULE_begin = 2;
GrammarParser.RULE_body = 3;
GrammarParser.RULE_equation = 4;
GrammarParser.RULE_matrix = 5;
GrammarParser.RULE_matrix_line = 6;
GrammarParser.RULE_math_function = 7;
GrammarParser.RULE_math_function_def = 8;
GrammarParser.RULE_math_function_args = 9;
GrammarParser.RULE_operator = 10;
GrammarParser.RULE_lesser_operator = 11;
GrammarParser.RULE_lesser_equal_operator = 12;
GrammarParser.RULE_greater_operator = 13;
GrammarParser.RULE_greater_equal_operator = 14;
GrammarParser.RULE_composed_operations = 15;
GrammarParser.RULE_operation_element = 16;
GrammarParser.RULE_base_member = 17;
GrammarParser.RULE_power_member = 18;
GrammarParser.RULE_priority_element = 19;
GrammarParser.RULE_member = 20;
GrammarParser.RULE_variable = 21;
GrammarParser.RULE_variable_lower_index = 22;
GrammarParser.RULE_index_elements = 23;
GrammarParser.RULE_index_element = 24;
GrammarParser.RULE_integer = 25;
GrammarParser.RULE_integer_positive_zero = 26;
GrammarParser.RULE_integer_negative = 27;
GrammarParser.RULE_double_type = 28;
GrammarParser.RULE_double_positive_zero = 29;
GrammarParser.RULE_double_negative = 30;
GrammarParser.RULE_factorial = 31;
GrammarParser.RULE_single_argument_factorial = 32;
GrammarParser.RULE_complex_argument_factorial = 33;
GrammarParser.RULE_factorial_element = 34;
GrammarParser.RULE_integral = 35;
GrammarParser.RULE_single_integral = 36;
GrammarParser.RULE_double_integral = 37;
GrammarParser.RULE_triple_integral = 38;
GrammarParser.RULE_integral_def = 39;
GrammarParser.RULE_integral_lower_limit = 40;
GrammarParser.RULE_integral_upper_limit = 41;
GrammarParser.RULE_integral_body = 42;
GrammarParser.RULE_trigonometry = 43;
GrammarParser.RULE_normal = 44;
GrammarParser.RULE_inverse = 45;
GrammarParser.RULE_hyperbolic = 46;
GrammarParser.RULE_sin = 47;
GrammarParser.RULE_cos = 48;
GrammarParser.RULE_tan = 49;
GrammarParser.RULE_arcsin = 50;
GrammarParser.RULE_arccos = 51;
GrammarParser.RULE_arctan = 52;
GrammarParser.RULE_sinh = 53;
GrammarParser.RULE_cosh = 54;
GrammarParser.RULE_tanh = 55;
GrammarParser.RULE_trigonometric_function_args = 56;
GrammarParser.RULE_trigonometric_function_power = 57;
GrammarParser.RULE_summation = 58;
GrammarParser.RULE_summation_lower_bound = 59;
GrammarParser.RULE_summation_lower_body = 60;
GrammarParser.RULE_summation_lower_single_line = 61;
GrammarParser.RULE_summation_lower_bound_operators = 62;
GrammarParser.RULE_summation_lower_multiple_line = 63;
GrammarParser.RULE_summation_upper_bound = 64;
GrammarParser.RULE_summation_upper_body = 65;
GrammarParser.RULE_summation_body = 66;
GrammarParser.RULE_logarithm = 67;
GrammarParser.RULE_log = 68;
GrammarParser.RULE_ln = 69;
GrammarParser.RULE_logarithm_lower_bound = 70;
GrammarParser.RULE_logarithm_body = 71;
GrammarParser.RULE_sqrt = 72;
GrammarParser.RULE_sqrt_root = 73;
GrammarParser.RULE_sqrt_body = 74;
GrammarParser.RULE_exponential = 75;
GrammarParser.RULE_fraction = 76;
GrammarParser.RULE_numerator = 77;
GrammarParser.RULE_denominator = 78;
GrammarParser.RULE_fraction_member = 79;
GrammarParser.RULE_end = 80;
GrammarParser.RULE_environment = 81;


function ChatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_chat;
    return this;
}

ChatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChatContext.prototype.constructor = ChatContext;

ChatContext.prototype.EOF = function() {
    return this.getToken(GrammarParser.EOF, 0);
};

ChatContext.prototype.start = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StartContext);
    } else {
        return this.getTypedRuleContext(StartContext,i);
    }
};

ChatContext.prototype.body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyContext);
    } else {
        return this.getTypedRuleContext(BodyContext,i);
    }
};

ChatContext.prototype.end = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndContext);
    } else {
        return this.getTypedRuleContext(EndContext,i);
    }
};

ChatContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.NEWLINE_TAG);
    } else {
        return this.getToken(GrammarParser.NEWLINE_TAG, i);
    }
};


ChatContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterChat(this);
	}
};

ChatContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitChat(this);
	}
};

ChatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitChat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ChatContext = ChatContext;

GrammarParser.prototype.chat = function() {

    var localctx = new ChatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_chat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 164;
            this.start();
            this.state = 165;
            this.body();
            this.state = 166;
            this.end();
            this.state = 170;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 167;
                    this.match(GrammarParser.NEWLINE_TAG); 
                }
                this.state = 172;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
            }

            this.state = 175; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.BEGIN || _la===GrammarParser.NEWLINE_TAG);
        this.state = 177;
        this.match(GrammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.begin = function() {
    return this.getTypedRuleContext(BeginContext,0);
};

StartContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.NEWLINE_TAG);
    } else {
        return this.getToken(GrammarParser.NEWLINE_TAG, i);
    }
};


StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStart(this);
	}
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.StartContext = StartContext;

GrammarParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.NEWLINE_TAG) {
            this.state = 179;
            this.match(GrammarParser.NEWLINE_TAG);
            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 185;
        this.begin();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BeginContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_begin;
    return this;
}

BeginContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BeginContext.prototype.constructor = BeginContext;

BeginContext.prototype.BEGIN = function() {
    return this.getToken(GrammarParser.BEGIN, 0);
};

BeginContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

BeginContext.prototype.environment = function() {
    return this.getTypedRuleContext(EnvironmentContext,0);
};

BeginContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

BeginContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.NEWLINE_TAG);
    } else {
        return this.getToken(GrammarParser.NEWLINE_TAG, i);
    }
};


BeginContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBegin(this);
	}
};

BeginContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBegin(this);
	}
};

BeginContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBegin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.BeginContext = BeginContext;

GrammarParser.prototype.begin = function() {

    var localctx = new BeginContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_begin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(GrammarParser.BEGIN);
        this.state = 188;
        this.match(GrammarParser.CURLY_LF);
        this.state = 189;
        this.environment();
        this.state = 190;
        this.match(GrammarParser.CURLY_RT);
        this.state = 192; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 191;
        		this.match(GrammarParser.NEWLINE_TAG);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 194; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.equation = function() {
    return this.getTypedRuleContext(EquationContext,0);
};

BodyContext.prototype.matrix = function() {
    return this.getTypedRuleContext(MatrixContext,0);
};

BodyContext.prototype.math_function = function() {
    return this.getTypedRuleContext(Math_functionContext,0);
};

BodyContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.NEWLINE_TAG);
    } else {
        return this.getToken(GrammarParser.NEWLINE_TAG, i);
    }
};


BodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBody(this);
	}
};

BodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.BodyContext = BodyContext;

GrammarParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 196;
            this.equation();
            break;

        case 2:
            this.state = 197;
            this.matrix();
            break;

        case 3:
            this.state = 198;
            this.math_function();
            break;

        }
        this.state = 202; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 201;
            this.match(GrammarParser.NEWLINE_TAG);
            this.state = 204; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.NEWLINE_TAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EquationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_equation;
    return this;
}

EquationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EquationContext.prototype.constructor = EquationContext;

EquationContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

EquationContext.prototype.EQUAL = function() {
    return this.getToken(GrammarParser.EQUAL, 0);
};

EquationContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

EquationContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterEquation(this);
	}
};

EquationContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitEquation(this);
	}
};

EquationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitEquation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.EquationContext = EquationContext;

GrammarParser.prototype.equation = function() {

    var localctx = new EquationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_equation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(GrammarParser.VARNAME);
        this.state = 207;
        this.match(GrammarParser.EQUAL);
        this.state = 208;
        this.composed_operations();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MatrixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_matrix;
    return this;
}

MatrixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MatrixContext.prototype.constructor = MatrixContext;

MatrixContext.prototype.matrix_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Matrix_lineContext);
    } else {
        return this.getTypedRuleContext(Matrix_lineContext,i);
    }
};

MatrixContext.prototype.BREAKLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.BREAKLINE);
    } else {
        return this.getToken(GrammarParser.BREAKLINE, i);
    }
};


MatrixContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMatrix(this);
	}
};

MatrixContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMatrix(this);
	}
};

MatrixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMatrix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.MatrixContext = MatrixContext;

GrammarParser.prototype.matrix = function() {

    var localctx = new MatrixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_matrix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.matrix_line();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.BREAKLINE) {
            this.state = 211;
            this.match(GrammarParser.BREAKLINE);
            this.state = 212;
            this.matrix_line();
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Matrix_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_matrix_line;
    return this;
}

Matrix_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Matrix_lineContext.prototype.constructor = Matrix_lineContext;

Matrix_lineContext.prototype.member = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MemberContext);
    } else {
        return this.getTypedRuleContext(MemberContext,i);
    }
};

Matrix_lineContext.prototype.JOIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.JOIN);
    } else {
        return this.getToken(GrammarParser.JOIN, i);
    }
};


Matrix_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMatrix_line(this);
	}
};

Matrix_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMatrix_line(this);
	}
};

Matrix_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMatrix_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Matrix_lineContext = Matrix_lineContext;

GrammarParser.prototype.matrix_line = function() {

    var localctx = new Matrix_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_matrix_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.member();
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.JOIN) {
            this.state = 219;
            this.match(GrammarParser.JOIN);
            this.state = 220;
            this.member();
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_functionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_math_function;
    return this;
}

Math_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_functionContext.prototype.constructor = Math_functionContext;

Math_functionContext.prototype.math_function_def = function() {
    return this.getTypedRuleContext(Math_function_defContext,0);
};

Math_functionContext.prototype.EQUAL = function() {
    return this.getToken(GrammarParser.EQUAL, 0);
};

Math_functionContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Math_functionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMath_function(this);
	}
};

Math_functionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMath_function(this);
	}
};

Math_functionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMath_function(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Math_functionContext = Math_functionContext;

GrammarParser.prototype.math_function = function() {

    var localctx = new Math_functionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GrammarParser.RULE_math_function);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.math_function_def();
        this.state = 227;
        this.match(GrammarParser.EQUAL);
        this.state = 228;
        this.composed_operations();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_function_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_math_function_def;
    return this;
}

Math_function_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_function_defContext.prototype.constructor = Math_function_defContext;

Math_function_defContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Math_function_defContext.prototype.PARENTHESIS_LF = function() {
    return this.getToken(GrammarParser.PARENTHESIS_LF, 0);
};

Math_function_defContext.prototype.math_function_args = function() {
    return this.getTypedRuleContext(Math_function_argsContext,0);
};

Math_function_defContext.prototype.PARENTHESIS_RT = function() {
    return this.getToken(GrammarParser.PARENTHESIS_RT, 0);
};

Math_function_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMath_function_def(this);
	}
};

Math_function_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMath_function_def(this);
	}
};

Math_function_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMath_function_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Math_function_defContext = Math_function_defContext;

GrammarParser.prototype.math_function_def = function() {

    var localctx = new Math_function_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_math_function_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(GrammarParser.VARNAME);
        this.state = 231;
        this.match(GrammarParser.PARENTHESIS_LF);
        this.state = 232;
        this.math_function_args();
        this.state = 233;
        this.match(GrammarParser.PARENTHESIS_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Math_function_argsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_math_function_args;
    return this;
}

Math_function_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Math_function_argsContext.prototype.constructor = Math_function_argsContext;

Math_function_argsContext.prototype.INTEGER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.INTEGER);
    } else {
        return this.getToken(GrammarParser.INTEGER, i);
    }
};


Math_function_argsContext.prototype.VARNAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.VARNAME);
    } else {
        return this.getToken(GrammarParser.VARNAME, i);
    }
};


Math_function_argsContext.prototype.DOUBLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.DOUBLE);
    } else {
        return this.getToken(GrammarParser.DOUBLE, i);
    }
};


Math_function_argsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.COMMA);
    } else {
        return this.getToken(GrammarParser.COMMA, i);
    }
};


Math_function_argsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMath_function_args(this);
	}
};

Math_function_argsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMath_function_args(this);
	}
};

Math_function_argsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMath_function_args(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Math_function_argsContext = Math_function_argsContext;

GrammarParser.prototype.math_function_args = function() {

    var localctx = new Math_function_argsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GrammarParser.RULE_math_function_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (GrammarParser.VARNAME - 56)) | (1 << (GrammarParser.INTEGER - 56)) | (1 << (GrammarParser.DOUBLE - 56)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.COMMA) {
            this.state = 236;
            this.match(GrammarParser.COMMA);
            this.state = 237;
            _la = this._input.LA(1);
            if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (GrammarParser.VARNAME - 56)) | (1 << (GrammarParser.INTEGER - 56)) | (1 << (GrammarParser.DOUBLE - 56)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.PLUS = function() {
    return this.getToken(GrammarParser.PLUS, 0);
};

OperatorContext.prototype.MINUS = function() {
    return this.getToken(GrammarParser.MINUS, 0);
};

OperatorContext.prototype.MULTIPLICATION = function() {
    return this.getToken(GrammarParser.MULTIPLICATION, 0);
};

OperatorContext.prototype.DIVISION = function() {
    return this.getToken(GrammarParser.DIVISION, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.OperatorContext = OperatorContext;

GrammarParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GrammarParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (GrammarParser.PLUS - 60)) | (1 << (GrammarParser.MINUS - 60)) | (1 << (GrammarParser.MULTIPLICATION - 60)) | (1 << (GrammarParser.DIVISION - 60)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Lesser_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_lesser_operator;
    return this;
}

Lesser_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lesser_operatorContext.prototype.constructor = Lesser_operatorContext;

Lesser_operatorContext.prototype.LESSER_SYMBOL = function() {
    return this.getToken(GrammarParser.LESSER_SYMBOL, 0);
};

Lesser_operatorContext.prototype.LT_TAG = function() {
    return this.getToken(GrammarParser.LT_TAG, 0);
};

Lesser_operatorContext.prototype.LNEQ_TAG = function() {
    return this.getToken(GrammarParser.LNEQ_TAG, 0);
};

Lesser_operatorContext.prototype.LNEQQ_TAG = function() {
    return this.getToken(GrammarParser.LNEQQ_TAG, 0);
};

Lesser_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLesser_operator(this);
	}
};

Lesser_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLesser_operator(this);
	}
};

Lesser_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLesser_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Lesser_operatorContext = Lesser_operatorContext;

GrammarParser.prototype.lesser_operator = function() {

    var localctx = new Lesser_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GrammarParser.RULE_lesser_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (GrammarParser.LT_TAG - 21)) | (1 << (GrammarParser.LNEQ_TAG - 21)) | (1 << (GrammarParser.LNEQQ_TAG - 21)) | (1 << (GrammarParser.LESSER_SYMBOL - 21)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Lesser_equal_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_lesser_equal_operator;
    return this;
}

Lesser_equal_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lesser_equal_operatorContext.prototype.constructor = Lesser_equal_operatorContext;

Lesser_equal_operatorContext.prototype.LESSER_SYMBOL = function() {
    return this.getToken(GrammarParser.LESSER_SYMBOL, 0);
};

Lesser_equal_operatorContext.prototype.LE_TAG = function() {
    return this.getToken(GrammarParser.LE_TAG, 0);
};

Lesser_equal_operatorContext.prototype.LEQ_TAG = function() {
    return this.getToken(GrammarParser.LEQ_TAG, 0);
};

Lesser_equal_operatorContext.prototype.LEQQ_TAG = function() {
    return this.getToken(GrammarParser.LEQQ_TAG, 0);
};

Lesser_equal_operatorContext.prototype.LEQSLANT_TAG = function() {
    return this.getToken(GrammarParser.LEQSLANT_TAG, 0);
};

Lesser_equal_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLesser_equal_operator(this);
	}
};

Lesser_equal_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLesser_equal_operator(this);
	}
};

Lesser_equal_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLesser_equal_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Lesser_equal_operatorContext = Lesser_equal_operatorContext;

GrammarParser.prototype.lesser_equal_operator = function() {

    var localctx = new Lesser_equal_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GrammarParser.RULE_lesser_equal_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        _la = this._input.LA(1);
        if(!(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (GrammarParser.LE_TAG - 24)) | (1 << (GrammarParser.LEQ_TAG - 24)) | (1 << (GrammarParser.LEQQ_TAG - 24)) | (1 << (GrammarParser.LEQSLANT_TAG - 24)) | (1 << (GrammarParser.LESSER_SYMBOL - 24)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Greater_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_greater_operator;
    return this;
}

Greater_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Greater_operatorContext.prototype.constructor = Greater_operatorContext;

Greater_operatorContext.prototype.GREATER_SYMBOL = function() {
    return this.getToken(GrammarParser.GREATER_SYMBOL, 0);
};

Greater_operatorContext.prototype.GT_TAG = function() {
    return this.getToken(GrammarParser.GT_TAG, 0);
};

Greater_operatorContext.prototype.GNEQ_TAG = function() {
    return this.getToken(GrammarParser.GNEQ_TAG, 0);
};

Greater_operatorContext.prototype.GNEQQ_TAG = function() {
    return this.getToken(GrammarParser.GNEQQ_TAG, 0);
};

Greater_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterGreater_operator(this);
	}
};

Greater_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitGreater_operator(this);
	}
};

Greater_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitGreater_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Greater_operatorContext = Greater_operatorContext;

GrammarParser.prototype.greater_operator = function() {

    var localctx = new Greater_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GrammarParser.RULE_greater_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        _la = this._input.LA(1);
        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (GrammarParser.GT_TAG - 28)) | (1 << (GrammarParser.GNEQ_TAG - 28)) | (1 << (GrammarParser.GNEQQ_TAG - 28)) | (1 << (GrammarParser.GREATER_SYMBOL - 28)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Greater_equal_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_greater_equal_operator;
    return this;
}

Greater_equal_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Greater_equal_operatorContext.prototype.constructor = Greater_equal_operatorContext;

Greater_equal_operatorContext.prototype.GREATER_EQUAL_SYMBOL = function() {
    return this.getToken(GrammarParser.GREATER_EQUAL_SYMBOL, 0);
};

Greater_equal_operatorContext.prototype.GEQ_TAG = function() {
    return this.getToken(GrammarParser.GEQ_TAG, 0);
};

Greater_equal_operatorContext.prototype.GEQQ_TAG = function() {
    return this.getToken(GrammarParser.GEQQ_TAG, 0);
};

Greater_equal_operatorContext.prototype.GEQSLANT_TAG = function() {
    return this.getToken(GrammarParser.GEQSLANT_TAG, 0);
};

Greater_equal_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterGreater_equal_operator(this);
	}
};

Greater_equal_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitGreater_equal_operator(this);
	}
};

Greater_equal_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitGreater_equal_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Greater_equal_operatorContext = Greater_equal_operatorContext;

GrammarParser.prototype.greater_equal_operator = function() {

    var localctx = new Greater_equal_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, GrammarParser.RULE_greater_equal_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (GrammarParser.GEQ_TAG - 31)) | (1 << (GrammarParser.GEQQ_TAG - 31)) | (1 << (GrammarParser.GEQSLANT_TAG - 31)) | (1 << (GrammarParser.GREATER_EQUAL_SYMBOL - 31)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Composed_operationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_composed_operations;
    return this;
}

Composed_operationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Composed_operationsContext.prototype.constructor = Composed_operationsContext;

Composed_operationsContext.prototype.operation_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Operation_elementContext);
    } else {
        return this.getTypedRuleContext(Operation_elementContext,i);
    }
};

Composed_operationsContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

Composed_operationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterComposed_operations(this);
	}
};

Composed_operationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitComposed_operations(this);
	}
};

Composed_operationsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitComposed_operations(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Composed_operationsContext = Composed_operationsContext;

GrammarParser.prototype.composed_operations = function() {

    var localctx = new Composed_operationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GrammarParser.RULE_composed_operations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.operation_element();
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (GrammarParser.PLUS - 60)) | (1 << (GrammarParser.MINUS - 60)) | (1 << (GrammarParser.MULTIPLICATION - 60)) | (1 << (GrammarParser.DIVISION - 60)))) !== 0)) {
            this.state = 254;
            this.operator();
            this.state = 255;
            this.operation_element();
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Operation_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_operation_element;
    return this;
}

Operation_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Operation_elementContext.prototype.constructor = Operation_elementContext;

Operation_elementContext.prototype.base_member = function() {
    return this.getTypedRuleContext(Base_memberContext,0);
};

Operation_elementContext.prototype.HAT = function() {
    return this.getToken(GrammarParser.HAT, 0);
};

Operation_elementContext.prototype.power_member = function() {
    return this.getTypedRuleContext(Power_memberContext,0);
};

Operation_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterOperation_element(this);
	}
};

Operation_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitOperation_element(this);
	}
};

Operation_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitOperation_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Operation_elementContext = Operation_elementContext;

GrammarParser.prototype.operation_element = function() {

    var localctx = new Operation_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, GrammarParser.RULE_operation_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.base_member();
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.HAT) {
            this.state = 263;
            this.match(GrammarParser.HAT);
            this.state = 264;
            this.power_member();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Base_memberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_base_member;
    return this;
}

Base_memberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Base_memberContext.prototype.constructor = Base_memberContext;

Base_memberContext.prototype.member = function() {
    return this.getTypedRuleContext(MemberContext,0);
};

Base_memberContext.prototype.priority_element = function() {
    return this.getTypedRuleContext(Priority_elementContext,0);
};

Base_memberContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBase_member(this);
	}
};

Base_memberContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBase_member(this);
	}
};

Base_memberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitBase_member(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Base_memberContext = Base_memberContext;

GrammarParser.prototype.base_member = function() {

    var localctx = new Base_memberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, GrammarParser.RULE_base_member);
    try {
        this.state = 269;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 267;
            this.member();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 268;
            this.priority_element();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Power_memberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_power_member;
    return this;
}

Power_memberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Power_memberContext.prototype.constructor = Power_memberContext;

Power_memberContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Power_memberContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Power_memberContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Power_memberContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPower_member(this);
	}
};

Power_memberContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPower_member(this);
	}
};

Power_memberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitPower_member(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Power_memberContext = Power_memberContext;

GrammarParser.prototype.power_member = function() {

    var localctx = new Power_memberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, GrammarParser.RULE_power_member);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(GrammarParser.CURLY_LF);
        this.state = 272;
        this.composed_operations();
        this.state = 273;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Priority_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_priority_element;
    return this;
}

Priority_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Priority_elementContext.prototype.constructor = Priority_elementContext;

Priority_elementContext.prototype.PARENTHESIS_LF = function() {
    return this.getToken(GrammarParser.PARENTHESIS_LF, 0);
};

Priority_elementContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Priority_elementContext.prototype.PARENTHESIS_RT = function() {
    return this.getToken(GrammarParser.PARENTHESIS_RT, 0);
};

Priority_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPriority_element(this);
	}
};

Priority_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPriority_element(this);
	}
};

Priority_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitPriority_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Priority_elementContext = Priority_elementContext;

GrammarParser.prototype.priority_element = function() {

    var localctx = new Priority_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, GrammarParser.RULE_priority_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(GrammarParser.PARENTHESIS_LF);
        this.state = 276;
        this.composed_operations();
        this.state = 277;
        this.match(GrammarParser.PARENTHESIS_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_member;
    return this;
}

MemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberContext.prototype.constructor = MemberContext;

MemberContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

MemberContext.prototype.double_type = function() {
    return this.getTypedRuleContext(Double_typeContext,0);
};

MemberContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

MemberContext.prototype.factorial = function() {
    return this.getTypedRuleContext(FactorialContext,0);
};

MemberContext.prototype.math_function_def = function() {
    return this.getTypedRuleContext(Math_function_defContext,0);
};

MemberContext.prototype.fraction = function() {
    return this.getTypedRuleContext(FractionContext,0);
};

MemberContext.prototype.exponential = function() {
    return this.getTypedRuleContext(ExponentialContext,0);
};

MemberContext.prototype.sqrt = function() {
    return this.getTypedRuleContext(SqrtContext,0);
};

MemberContext.prototype.trigonometry = function() {
    return this.getTypedRuleContext(TrigonometryContext,0);
};

MemberContext.prototype.summation = function() {
    return this.getTypedRuleContext(SummationContext,0);
};

MemberContext.prototype.logarithm = function() {
    return this.getTypedRuleContext(LogarithmContext,0);
};

MemberContext.prototype.integral = function() {
    return this.getTypedRuleContext(IntegralContext,0);
};

MemberContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMember(this);
	}
};

MemberContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMember(this);
	}
};

MemberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMember(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.MemberContext = MemberContext;

GrammarParser.prototype.member = function() {

    var localctx = new MemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, GrammarParser.RULE_member);
    try {
        this.state = 292;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 280;
            this.integer();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 281;
            this.double_type();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 282;
            this.variable();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 283;
            this.factorial();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 284;
            this.math_function_def();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 285;
            this.fraction();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 286;
            this.exponential();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 287;
            this.sqrt();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 288;
            this.trigonometry();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 289;
            this.summation();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 290;
            this.logarithm();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 291;
            this.integral();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

VariableContext.prototype.variable_lower_index = function() {
    return this.getTypedRuleContext(Variable_lower_indexContext,0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.VariableContext = VariableContext;

GrammarParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, GrammarParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(GrammarParser.VARNAME);
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.UNDERSCORE) {
            this.state = 295;
            this.variable_lower_index();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Variable_lower_indexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_variable_lower_index;
    return this;
}

Variable_lower_indexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_lower_indexContext.prototype.constructor = Variable_lower_indexContext;

Variable_lower_indexContext.prototype.UNDERSCORE = function() {
    return this.getToken(GrammarParser.UNDERSCORE, 0);
};

Variable_lower_indexContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Variable_lower_indexContext.prototype.index_elements = function() {
    return this.getTypedRuleContext(Index_elementsContext,0);
};

Variable_lower_indexContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Variable_lower_indexContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterVariable_lower_index(this);
	}
};

Variable_lower_indexContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitVariable_lower_index(this);
	}
};

Variable_lower_indexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitVariable_lower_index(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Variable_lower_indexContext = Variable_lower_indexContext;

GrammarParser.prototype.variable_lower_index = function() {

    var localctx = new Variable_lower_indexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, GrammarParser.RULE_variable_lower_index);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(GrammarParser.UNDERSCORE);
        this.state = 299;
        this.match(GrammarParser.CURLY_LF);
        this.state = 300;
        this.index_elements();
        this.state = 301;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Index_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_index_elements;
    return this;
}

Index_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Index_elementsContext.prototype.constructor = Index_elementsContext;

Index_elementsContext.prototype.index_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Index_elementContext);
    } else {
        return this.getTypedRuleContext(Index_elementContext,i);
    }
};

Index_elementsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.COMMA);
    } else {
        return this.getToken(GrammarParser.COMMA, i);
    }
};


Index_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIndex_elements(this);
	}
};

Index_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIndex_elements(this);
	}
};

Index_elementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIndex_elements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Index_elementsContext = Index_elementsContext;

GrammarParser.prototype.index_elements = function() {

    var localctx = new Index_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, GrammarParser.RULE_index_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.index_element();
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.COMMA) {
            this.state = 304;
            this.match(GrammarParser.COMMA);
            this.state = 305;
            this.index_element();
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Index_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_index_element;
    return this;
}

Index_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Index_elementContext.prototype.constructor = Index_elementContext;

Index_elementContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Index_elementContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Index_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIndex_element(this);
	}
};

Index_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIndex_element(this);
	}
};

Index_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIndex_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Index_elementContext = Index_elementContext;

GrammarParser.prototype.index_element = function() {

    var localctx = new Index_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, GrammarParser.RULE_index_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integer;
    return this;
}

IntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

IntegerContext.prototype.integer_positive_zero = function() {
    return this.getTypedRuleContext(Integer_positive_zeroContext,0);
};

IntegerContext.prototype.integer_negative = function() {
    return this.getTypedRuleContext(Integer_negativeContext,0);
};

IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInteger(this);
	}
};

IntegerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInteger(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.IntegerContext = IntegerContext;

GrammarParser.prototype.integer = function() {

    var localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, GrammarParser.RULE_integer);
    try {
        this.state = 315;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.INTEGER:
            this.enterOuterAlt(localctx, 1);
            this.state = 313;
            this.integer_positive_zero();
            break;
        case GrammarParser.PARENTHESIS_LF:
            this.enterOuterAlt(localctx, 2);
            this.state = 314;
            this.integer_negative();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integer_positive_zeroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integer_positive_zero;
    return this;
}

Integer_positive_zeroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integer_positive_zeroContext.prototype.constructor = Integer_positive_zeroContext;

Integer_positive_zeroContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Integer_positive_zeroContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInteger_positive_zero(this);
	}
};

Integer_positive_zeroContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInteger_positive_zero(this);
	}
};

Integer_positive_zeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInteger_positive_zero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integer_positive_zeroContext = Integer_positive_zeroContext;

GrammarParser.prototype.integer_positive_zero = function() {

    var localctx = new Integer_positive_zeroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, GrammarParser.RULE_integer_positive_zero);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(GrammarParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integer_negativeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integer_negative;
    return this;
}

Integer_negativeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integer_negativeContext.prototype.constructor = Integer_negativeContext;

Integer_negativeContext.prototype.PARENTHESIS_LF = function() {
    return this.getToken(GrammarParser.PARENTHESIS_LF, 0);
};

Integer_negativeContext.prototype.MINUS = function() {
    return this.getToken(GrammarParser.MINUS, 0);
};

Integer_negativeContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Integer_negativeContext.prototype.PARENTHESIS_RT = function() {
    return this.getToken(GrammarParser.PARENTHESIS_RT, 0);
};

Integer_negativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInteger_negative(this);
	}
};

Integer_negativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInteger_negative(this);
	}
};

Integer_negativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInteger_negative(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integer_negativeContext = Integer_negativeContext;

GrammarParser.prototype.integer_negative = function() {

    var localctx = new Integer_negativeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, GrammarParser.RULE_integer_negative);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.match(GrammarParser.PARENTHESIS_LF);
        this.state = 320;
        this.match(GrammarParser.MINUS);
        this.state = 321;
        this.match(GrammarParser.INTEGER);
        this.state = 322;
        this.match(GrammarParser.PARENTHESIS_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Double_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_double_type;
    return this;
}

Double_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Double_typeContext.prototype.constructor = Double_typeContext;

Double_typeContext.prototype.double_positive_zero = function() {
    return this.getTypedRuleContext(Double_positive_zeroContext,0);
};

Double_typeContext.prototype.double_negative = function() {
    return this.getTypedRuleContext(Double_negativeContext,0);
};

Double_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDouble_type(this);
	}
};

Double_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDouble_type(this);
	}
};

Double_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDouble_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Double_typeContext = Double_typeContext;

GrammarParser.prototype.double_type = function() {

    var localctx = new Double_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, GrammarParser.RULE_double_type);
    try {
        this.state = 326;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.DOUBLE:
            this.enterOuterAlt(localctx, 1);
            this.state = 324;
            this.double_positive_zero();
            break;
        case GrammarParser.PARENTHESIS_LF:
            this.enterOuterAlt(localctx, 2);
            this.state = 325;
            this.double_negative();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Double_positive_zeroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_double_positive_zero;
    return this;
}

Double_positive_zeroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Double_positive_zeroContext.prototype.constructor = Double_positive_zeroContext;

Double_positive_zeroContext.prototype.DOUBLE = function() {
    return this.getToken(GrammarParser.DOUBLE, 0);
};

Double_positive_zeroContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDouble_positive_zero(this);
	}
};

Double_positive_zeroContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDouble_positive_zero(this);
	}
};

Double_positive_zeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDouble_positive_zero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Double_positive_zeroContext = Double_positive_zeroContext;

GrammarParser.prototype.double_positive_zero = function() {

    var localctx = new Double_positive_zeroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, GrammarParser.RULE_double_positive_zero);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.match(GrammarParser.DOUBLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Double_negativeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_double_negative;
    return this;
}

Double_negativeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Double_negativeContext.prototype.constructor = Double_negativeContext;

Double_negativeContext.prototype.PARENTHESIS_LF = function() {
    return this.getToken(GrammarParser.PARENTHESIS_LF, 0);
};

Double_negativeContext.prototype.MINUS = function() {
    return this.getToken(GrammarParser.MINUS, 0);
};

Double_negativeContext.prototype.DOUBLE = function() {
    return this.getToken(GrammarParser.DOUBLE, 0);
};

Double_negativeContext.prototype.PARENTHESIS_RT = function() {
    return this.getToken(GrammarParser.PARENTHESIS_RT, 0);
};

Double_negativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDouble_negative(this);
	}
};

Double_negativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDouble_negative(this);
	}
};

Double_negativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDouble_negative(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Double_negativeContext = Double_negativeContext;

GrammarParser.prototype.double_negative = function() {

    var localctx = new Double_negativeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, GrammarParser.RULE_double_negative);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(GrammarParser.PARENTHESIS_LF);
        this.state = 331;
        this.match(GrammarParser.MINUS);
        this.state = 332;
        this.match(GrammarParser.DOUBLE);
        this.state = 333;
        this.match(GrammarParser.PARENTHESIS_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_factorial;
    return this;
}

FactorialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorialContext.prototype.constructor = FactorialContext;

FactorialContext.prototype.FACTORIAL_SYMBOL = function() {
    return this.getToken(GrammarParser.FACTORIAL_SYMBOL, 0);
};

FactorialContext.prototype.single_argument_factorial = function() {
    return this.getTypedRuleContext(Single_argument_factorialContext,0);
};

FactorialContext.prototype.complex_argument_factorial = function() {
    return this.getTypedRuleContext(Complex_argument_factorialContext,0);
};

FactorialContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFactorial(this);
	}
};

FactorialContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFactorial(this);
	}
};

FactorialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFactorial(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.FactorialContext = FactorialContext;

GrammarParser.prototype.factorial = function() {

    var localctx = new FactorialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, GrammarParser.RULE_factorial);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.VARNAME:
        case GrammarParser.INTEGER:
            this.state = 335;
            this.single_argument_factorial();
            break;
        case GrammarParser.PARENTHESIS_LF:
            this.state = 336;
            this.complex_argument_factorial();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 339;
        this.match(GrammarParser.FACTORIAL_SYMBOL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Single_argument_factorialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_single_argument_factorial;
    return this;
}

Single_argument_factorialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_argument_factorialContext.prototype.constructor = Single_argument_factorialContext;

Single_argument_factorialContext.prototype.factorial_element = function() {
    return this.getTypedRuleContext(Factorial_elementContext,0);
};

Single_argument_factorialContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSingle_argument_factorial(this);
	}
};

Single_argument_factorialContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSingle_argument_factorial(this);
	}
};

Single_argument_factorialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSingle_argument_factorial(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Single_argument_factorialContext = Single_argument_factorialContext;

GrammarParser.prototype.single_argument_factorial = function() {

    var localctx = new Single_argument_factorialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, GrammarParser.RULE_single_argument_factorial);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.factorial_element();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Complex_argument_factorialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_complex_argument_factorial;
    return this;
}

Complex_argument_factorialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Complex_argument_factorialContext.prototype.constructor = Complex_argument_factorialContext;

Complex_argument_factorialContext.prototype.PARENTHESIS_LF = function() {
    return this.getToken(GrammarParser.PARENTHESIS_LF, 0);
};

Complex_argument_factorialContext.prototype.factorial_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Factorial_elementContext);
    } else {
        return this.getTypedRuleContext(Factorial_elementContext,i);
    }
};

Complex_argument_factorialContext.prototype.PARENTHESIS_RT = function() {
    return this.getToken(GrammarParser.PARENTHESIS_RT, 0);
};

Complex_argument_factorialContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

Complex_argument_factorialContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterComplex_argument_factorial(this);
	}
};

Complex_argument_factorialContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitComplex_argument_factorial(this);
	}
};

Complex_argument_factorialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitComplex_argument_factorial(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Complex_argument_factorialContext = Complex_argument_factorialContext;

GrammarParser.prototype.complex_argument_factorial = function() {

    var localctx = new Complex_argument_factorialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, GrammarParser.RULE_complex_argument_factorial);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(GrammarParser.PARENTHESIS_LF);
        this.state = 344;
        this.factorial_element();
        this.state = 348; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 345;
            this.operator();
            this.state = 346;
            this.factorial_element();
            this.state = 350; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (GrammarParser.PLUS - 60)) | (1 << (GrammarParser.MINUS - 60)) | (1 << (GrammarParser.MULTIPLICATION - 60)) | (1 << (GrammarParser.DIVISION - 60)))) !== 0));
        this.state = 352;
        this.match(GrammarParser.PARENTHESIS_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Factorial_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_factorial_element;
    return this;
}

Factorial_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Factorial_elementContext.prototype.constructor = Factorial_elementContext;

Factorial_elementContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Factorial_elementContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Factorial_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFactorial_element(this);
	}
};

Factorial_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFactorial_element(this);
	}
};

Factorial_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFactorial_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Factorial_elementContext = Factorial_elementContext;

GrammarParser.prototype.factorial_element = function() {

    var localctx = new Factorial_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, GrammarParser.RULE_factorial_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntegralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integral;
    return this;
}

IntegralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegralContext.prototype.constructor = IntegralContext;

IntegralContext.prototype.single_integral = function() {
    return this.getTypedRuleContext(Single_integralContext,0);
};

IntegralContext.prototype.double_integral = function() {
    return this.getTypedRuleContext(Double_integralContext,0);
};

IntegralContext.prototype.triple_integral = function() {
    return this.getTypedRuleContext(Triple_integralContext,0);
};

IntegralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIntegral(this);
	}
};

IntegralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIntegral(this);
	}
};

IntegralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIntegral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.IntegralContext = IntegralContext;

GrammarParser.prototype.integral = function() {

    var localctx = new IntegralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, GrammarParser.RULE_integral);
    try {
        this.state = 359;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.INT_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 356;
            this.single_integral();
            break;
        case GrammarParser.IINT_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 357;
            this.double_integral();
            break;
        case GrammarParser.IIINT_TAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 358;
            this.triple_integral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Single_integralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_single_integral;
    return this;
}

Single_integralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_integralContext.prototype.constructor = Single_integralContext;

Single_integralContext.prototype.INT_TAG = function() {
    return this.getToken(GrammarParser.INT_TAG, 0);
};

Single_integralContext.prototype.integral_def = function() {
    return this.getTypedRuleContext(Integral_defContext,0);
};

Single_integralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSingle_integral(this);
	}
};

Single_integralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSingle_integral(this);
	}
};

Single_integralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSingle_integral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Single_integralContext = Single_integralContext;

GrammarParser.prototype.single_integral = function() {

    var localctx = new Single_integralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, GrammarParser.RULE_single_integral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.match(GrammarParser.INT_TAG);
        this.state = 362;
        this.integral_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Double_integralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_double_integral;
    return this;
}

Double_integralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Double_integralContext.prototype.constructor = Double_integralContext;

Double_integralContext.prototype.IINT_TAG = function() {
    return this.getToken(GrammarParser.IINT_TAG, 0);
};

Double_integralContext.prototype.integral_def = function() {
    return this.getTypedRuleContext(Integral_defContext,0);
};

Double_integralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDouble_integral(this);
	}
};

Double_integralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDouble_integral(this);
	}
};

Double_integralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDouble_integral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Double_integralContext = Double_integralContext;

GrammarParser.prototype.double_integral = function() {

    var localctx = new Double_integralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, GrammarParser.RULE_double_integral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.match(GrammarParser.IINT_TAG);
        this.state = 365;
        this.integral_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Triple_integralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_triple_integral;
    return this;
}

Triple_integralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Triple_integralContext.prototype.constructor = Triple_integralContext;

Triple_integralContext.prototype.IIINT_TAG = function() {
    return this.getToken(GrammarParser.IIINT_TAG, 0);
};

Triple_integralContext.prototype.integral_def = function() {
    return this.getTypedRuleContext(Integral_defContext,0);
};

Triple_integralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTriple_integral(this);
	}
};

Triple_integralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTriple_integral(this);
	}
};

Triple_integralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTriple_integral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Triple_integralContext = Triple_integralContext;

GrammarParser.prototype.triple_integral = function() {

    var localctx = new Triple_integralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, GrammarParser.RULE_triple_integral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(GrammarParser.IIINT_TAG);
        this.state = 368;
        this.integral_def();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integral_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integral_def;
    return this;
}

Integral_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integral_defContext.prototype.constructor = Integral_defContext;

Integral_defContext.prototype.integral_lower_limit = function() {
    return this.getTypedRuleContext(Integral_lower_limitContext,0);
};

Integral_defContext.prototype.integral_upper_limit = function() {
    return this.getTypedRuleContext(Integral_upper_limitContext,0);
};

Integral_defContext.prototype.integral_body = function() {
    return this.getTypedRuleContext(Integral_bodyContext,0);
};

Integral_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIntegral_def(this);
	}
};

Integral_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIntegral_def(this);
	}
};

Integral_defContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIntegral_def(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integral_defContext = Integral_defContext;

GrammarParser.prototype.integral_def = function() {

    var localctx = new Integral_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, GrammarParser.RULE_integral_def);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this.integral_lower_limit();
        this.state = 371;
        this.integral_upper_limit();
        this.state = 372;
        this.integral_body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integral_lower_limitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integral_lower_limit;
    return this;
}

Integral_lower_limitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integral_lower_limitContext.prototype.constructor = Integral_lower_limitContext;

Integral_lower_limitContext.prototype.UNDERSCORE = function() {
    return this.getToken(GrammarParser.UNDERSCORE, 0);
};

Integral_lower_limitContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Integral_lower_limitContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Integral_lower_limitContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Integral_lower_limitContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIntegral_lower_limit(this);
	}
};

Integral_lower_limitContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIntegral_lower_limit(this);
	}
};

Integral_lower_limitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIntegral_lower_limit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integral_lower_limitContext = Integral_lower_limitContext;

GrammarParser.prototype.integral_lower_limit = function() {

    var localctx = new Integral_lower_limitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, GrammarParser.RULE_integral_lower_limit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(GrammarParser.UNDERSCORE);
        this.state = 375;
        this.match(GrammarParser.CURLY_LF);
        this.state = 376;
        this.composed_operations();
        this.state = 377;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integral_upper_limitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integral_upper_limit;
    return this;
}

Integral_upper_limitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integral_upper_limitContext.prototype.constructor = Integral_upper_limitContext;

Integral_upper_limitContext.prototype.HAT = function() {
    return this.getToken(GrammarParser.HAT, 0);
};

Integral_upper_limitContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Integral_upper_limitContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Integral_upper_limitContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Integral_upper_limitContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIntegral_upper_limit(this);
	}
};

Integral_upper_limitContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIntegral_upper_limit(this);
	}
};

Integral_upper_limitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIntegral_upper_limit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integral_upper_limitContext = Integral_upper_limitContext;

GrammarParser.prototype.integral_upper_limit = function() {

    var localctx = new Integral_upper_limitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, GrammarParser.RULE_integral_upper_limit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(GrammarParser.HAT);
        this.state = 380;
        this.match(GrammarParser.CURLY_LF);
        this.state = 381;
        this.composed_operations();
        this.state = 382;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integral_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_integral_body;
    return this;
}

Integral_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integral_bodyContext.prototype.constructor = Integral_bodyContext;

Integral_bodyContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Integral_bodyContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Integral_bodyContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Integral_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIntegral_body(this);
	}
};

Integral_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIntegral_body(this);
	}
};

Integral_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitIntegral_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Integral_bodyContext = Integral_bodyContext;

GrammarParser.prototype.integral_body = function() {

    var localctx = new Integral_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, GrammarParser.RULE_integral_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(GrammarParser.CURLY_LF);
        this.state = 385;
        this.composed_operations();
        this.state = 386;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TrigonometryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_trigonometry;
    return this;
}

TrigonometryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrigonometryContext.prototype.constructor = TrigonometryContext;

TrigonometryContext.prototype.normal = function() {
    return this.getTypedRuleContext(NormalContext,0);
};

TrigonometryContext.prototype.inverse = function() {
    return this.getTypedRuleContext(InverseContext,0);
};

TrigonometryContext.prototype.hyperbolic = function() {
    return this.getTypedRuleContext(HyperbolicContext,0);
};

TrigonometryContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTrigonometry(this);
	}
};

TrigonometryContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTrigonometry(this);
	}
};

TrigonometryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTrigonometry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.TrigonometryContext = TrigonometryContext;

GrammarParser.prototype.trigonometry = function() {

    var localctx = new TrigonometryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, GrammarParser.RULE_trigonometry);
    try {
        this.state = 391;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.SIN_TAG:
        case GrammarParser.COS_TAG:
        case GrammarParser.TAN_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 388;
            this.normal();
            break;
        case GrammarParser.ARCSIN_TAG:
        case GrammarParser.ARCCOS_TAG:
        case GrammarParser.ARCTAN_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            this.inverse();
            break;
        case GrammarParser.SINH_TAG:
        case GrammarParser.COSH_TAG:
        case GrammarParser.TANH_TAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 390;
            this.hyperbolic();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NormalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_normal;
    return this;
}

NormalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NormalContext.prototype.constructor = NormalContext;

NormalContext.prototype.sin = function() {
    return this.getTypedRuleContext(SinContext,0);
};

NormalContext.prototype.cos = function() {
    return this.getTypedRuleContext(CosContext,0);
};

NormalContext.prototype.tan = function() {
    return this.getTypedRuleContext(TanContext,0);
};

NormalContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNormal(this);
	}
};

NormalContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNormal(this);
	}
};

NormalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNormal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.NormalContext = NormalContext;

GrammarParser.prototype.normal = function() {

    var localctx = new NormalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, GrammarParser.RULE_normal);
    try {
        this.state = 396;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.SIN_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 393;
            this.sin();
            break;
        case GrammarParser.COS_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 394;
            this.cos();
            break;
        case GrammarParser.TAN_TAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 395;
            this.tan();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InverseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_inverse;
    return this;
}

InverseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InverseContext.prototype.constructor = InverseContext;

InverseContext.prototype.arcsin = function() {
    return this.getTypedRuleContext(ArcsinContext,0);
};

InverseContext.prototype.arccos = function() {
    return this.getTypedRuleContext(ArccosContext,0);
};

InverseContext.prototype.arctan = function() {
    return this.getTypedRuleContext(ArctanContext,0);
};

InverseContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterInverse(this);
	}
};

InverseContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitInverse(this);
	}
};

InverseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitInverse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.InverseContext = InverseContext;

GrammarParser.prototype.inverse = function() {

    var localctx = new InverseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, GrammarParser.RULE_inverse);
    try {
        this.state = 401;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.ARCSIN_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.arcsin();
            break;
        case GrammarParser.ARCCOS_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
            this.arccos();
            break;
        case GrammarParser.ARCTAN_TAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 400;
            this.arctan();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HyperbolicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_hyperbolic;
    return this;
}

HyperbolicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HyperbolicContext.prototype.constructor = HyperbolicContext;

HyperbolicContext.prototype.sinh = function() {
    return this.getTypedRuleContext(SinhContext,0);
};

HyperbolicContext.prototype.cosh = function() {
    return this.getTypedRuleContext(CoshContext,0);
};

HyperbolicContext.prototype.tanh = function() {
    return this.getTypedRuleContext(TanhContext,0);
};

HyperbolicContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterHyperbolic(this);
	}
};

HyperbolicContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitHyperbolic(this);
	}
};

HyperbolicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitHyperbolic(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.HyperbolicContext = HyperbolicContext;

GrammarParser.prototype.hyperbolic = function() {

    var localctx = new HyperbolicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, GrammarParser.RULE_hyperbolic);
    try {
        this.state = 406;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.SINH_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 403;
            this.sinh();
            break;
        case GrammarParser.COSH_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 404;
            this.cosh();
            break;
        case GrammarParser.TANH_TAG:
            this.enterOuterAlt(localctx, 3);
            this.state = 405;
            this.tanh();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_sin;
    return this;
}

SinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SinContext.prototype.constructor = SinContext;

SinContext.prototype.SIN_TAG = function() {
    return this.getToken(GrammarParser.SIN_TAG, 0);
};

SinContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

SinContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSin(this);
	}
};

SinContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSin(this);
	}
};

SinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.SinContext = SinContext;

GrammarParser.prototype.sin = function() {

    var localctx = new SinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, GrammarParser.RULE_sin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.match(GrammarParser.SIN_TAG);
        this.state = 409;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_cos;
    return this;
}

CosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CosContext.prototype.constructor = CosContext;

CosContext.prototype.COS_TAG = function() {
    return this.getToken(GrammarParser.COS_TAG, 0);
};

CosContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

CosContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCos(this);
	}
};

CosContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCos(this);
	}
};

CosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitCos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.CosContext = CosContext;

GrammarParser.prototype.cos = function() {

    var localctx = new CosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, GrammarParser.RULE_cos);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(GrammarParser.COS_TAG);
        this.state = 412;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tan;
    return this;
}

TanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TanContext.prototype.constructor = TanContext;

TanContext.prototype.TAN_TAG = function() {
    return this.getToken(GrammarParser.TAN_TAG, 0);
};

TanContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

TanContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTan(this);
	}
};

TanContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTan(this);
	}
};

TanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTan(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.TanContext = TanContext;

GrammarParser.prototype.tan = function() {

    var localctx = new TanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, GrammarParser.RULE_tan);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        this.match(GrammarParser.TAN_TAG);
        this.state = 415;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArcsinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_arcsin;
    return this;
}

ArcsinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArcsinContext.prototype.constructor = ArcsinContext;

ArcsinContext.prototype.ARCSIN_TAG = function() {
    return this.getToken(GrammarParser.ARCSIN_TAG, 0);
};

ArcsinContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

ArcsinContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArcsin(this);
	}
};

ArcsinContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArcsin(this);
	}
};

ArcsinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArcsin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ArcsinContext = ArcsinContext;

GrammarParser.prototype.arcsin = function() {

    var localctx = new ArcsinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, GrammarParser.RULE_arcsin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(GrammarParser.ARCSIN_TAG);
        this.state = 418;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArccosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_arccos;
    return this;
}

ArccosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArccosContext.prototype.constructor = ArccosContext;

ArccosContext.prototype.ARCCOS_TAG = function() {
    return this.getToken(GrammarParser.ARCCOS_TAG, 0);
};

ArccosContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

ArccosContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArccos(this);
	}
};

ArccosContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArccos(this);
	}
};

ArccosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArccos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ArccosContext = ArccosContext;

GrammarParser.prototype.arccos = function() {

    var localctx = new ArccosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, GrammarParser.RULE_arccos);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420;
        this.match(GrammarParser.ARCCOS_TAG);
        this.state = 421;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArctanContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_arctan;
    return this;
}

ArctanContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArctanContext.prototype.constructor = ArctanContext;

ArctanContext.prototype.ARCTAN_TAG = function() {
    return this.getToken(GrammarParser.ARCTAN_TAG, 0);
};

ArctanContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

ArctanContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArctan(this);
	}
};

ArctanContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArctan(this);
	}
};

ArctanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArctan(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ArctanContext = ArctanContext;

GrammarParser.prototype.arctan = function() {

    var localctx = new ArctanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, GrammarParser.RULE_arctan);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.match(GrammarParser.ARCTAN_TAG);
        this.state = 424;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SinhContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_sinh;
    return this;
}

SinhContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SinhContext.prototype.constructor = SinhContext;

SinhContext.prototype.SINH_TAG = function() {
    return this.getToken(GrammarParser.SINH_TAG, 0);
};

SinhContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

SinhContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSinh(this);
	}
};

SinhContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSinh(this);
	}
};

SinhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSinh(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.SinhContext = SinhContext;

GrammarParser.prototype.sinh = function() {

    var localctx = new SinhContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, GrammarParser.RULE_sinh);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.match(GrammarParser.SINH_TAG);
        this.state = 427;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CoshContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_cosh;
    return this;
}

CoshContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoshContext.prototype.constructor = CoshContext;

CoshContext.prototype.COSH_TAG = function() {
    return this.getToken(GrammarParser.COSH_TAG, 0);
};

CoshContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

CoshContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCosh(this);
	}
};

CoshContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCosh(this);
	}
};

CoshContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitCosh(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.CoshContext = CoshContext;

GrammarParser.prototype.cosh = function() {

    var localctx = new CoshContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, GrammarParser.RULE_cosh);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.match(GrammarParser.COSH_TAG);
        this.state = 430;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TanhContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_tanh;
    return this;
}

TanhContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TanhContext.prototype.constructor = TanhContext;

TanhContext.prototype.TANH_TAG = function() {
    return this.getToken(GrammarParser.TANH_TAG, 0);
};

TanhContext.prototype.trigonometric_function_args = function() {
    return this.getTypedRuleContext(Trigonometric_function_argsContext,0);
};

TanhContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTanh(this);
	}
};

TanhContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTanh(this);
	}
};

TanhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTanh(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.TanhContext = TanhContext;

GrammarParser.prototype.tanh = function() {

    var localctx = new TanhContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, GrammarParser.RULE_tanh);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        this.match(GrammarParser.TANH_TAG);
        this.state = 433;
        this.trigonometric_function_args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Trigonometric_function_argsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_trigonometric_function_args;
    return this;
}

Trigonometric_function_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trigonometric_function_argsContext.prototype.constructor = Trigonometric_function_argsContext;

Trigonometric_function_argsContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Trigonometric_function_argsContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Trigonometric_function_argsContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Trigonometric_function_argsContext.prototype.trigonometric_function_power = function() {
    return this.getTypedRuleContext(Trigonometric_function_powerContext,0);
};

Trigonometric_function_argsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTrigonometric_function_args(this);
	}
};

Trigonometric_function_argsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTrigonometric_function_args(this);
	}
};

Trigonometric_function_argsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTrigonometric_function_args(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Trigonometric_function_argsContext = Trigonometric_function_argsContext;

GrammarParser.prototype.trigonometric_function_args = function() {

    var localctx = new Trigonometric_function_argsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, GrammarParser.RULE_trigonometric_function_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.HAT) {
            this.state = 435;
            this.trigonometric_function_power();
        }

        this.state = 438;
        this.match(GrammarParser.CURLY_LF);
        this.state = 439;
        this.composed_operations();
        this.state = 440;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Trigonometric_function_powerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_trigonometric_function_power;
    return this;
}

Trigonometric_function_powerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trigonometric_function_powerContext.prototype.constructor = Trigonometric_function_powerContext;

Trigonometric_function_powerContext.prototype.HAT = function() {
    return this.getToken(GrammarParser.HAT, 0);
};

Trigonometric_function_powerContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Trigonometric_function_powerContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Trigonometric_function_powerContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterTrigonometric_function_power(this);
	}
};

Trigonometric_function_powerContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitTrigonometric_function_power(this);
	}
};

Trigonometric_function_powerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitTrigonometric_function_power(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Trigonometric_function_powerContext = Trigonometric_function_powerContext;

GrammarParser.prototype.trigonometric_function_power = function() {

    var localctx = new Trigonometric_function_powerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, GrammarParser.RULE_trigonometric_function_power);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.match(GrammarParser.HAT);
        this.state = 443;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SummationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation;
    return this;
}

SummationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SummationContext.prototype.constructor = SummationContext;

SummationContext.prototype.SUMMATION_TAG = function() {
    return this.getToken(GrammarParser.SUMMATION_TAG, 0);
};

SummationContext.prototype.summation_lower_bound = function() {
    return this.getTypedRuleContext(Summation_lower_boundContext,0);
};

SummationContext.prototype.summation_upper_bound = function() {
    return this.getTypedRuleContext(Summation_upper_boundContext,0);
};

SummationContext.prototype.summation_body = function() {
    return this.getTypedRuleContext(Summation_bodyContext,0);
};

SummationContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation(this);
	}
};

SummationContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation(this);
	}
};

SummationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.SummationContext = SummationContext;

GrammarParser.prototype.summation = function() {

    var localctx = new SummationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, GrammarParser.RULE_summation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(GrammarParser.SUMMATION_TAG);
        this.state = 446;
        this.summation_lower_bound();
        this.state = 447;
        this.summation_upper_bound();
        this.state = 448;
        this.summation_body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_lower_boundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_lower_bound;
    return this;
}

Summation_lower_boundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_lower_boundContext.prototype.constructor = Summation_lower_boundContext;

Summation_lower_boundContext.prototype.UNDERSCORE = function() {
    return this.getToken(GrammarParser.UNDERSCORE, 0);
};

Summation_lower_boundContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Summation_lower_boundContext.prototype.summation_lower_body = function() {
    return this.getTypedRuleContext(Summation_lower_bodyContext,0);
};

Summation_lower_boundContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Summation_lower_boundContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_lower_bound(this);
	}
};

Summation_lower_boundContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_lower_bound(this);
	}
};

Summation_lower_boundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_lower_bound(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_lower_boundContext = Summation_lower_boundContext;

GrammarParser.prototype.summation_lower_bound = function() {

    var localctx = new Summation_lower_boundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, GrammarParser.RULE_summation_lower_bound);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 450;
        this.match(GrammarParser.UNDERSCORE);
        this.state = 451;
        this.match(GrammarParser.CURLY_LF);
        this.state = 452;
        this.summation_lower_body();
        this.state = 453;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_lower_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_lower_body;
    return this;
}

Summation_lower_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_lower_bodyContext.prototype.constructor = Summation_lower_bodyContext;

Summation_lower_bodyContext.prototype.summation_lower_single_line = function() {
    return this.getTypedRuleContext(Summation_lower_single_lineContext,0);
};

Summation_lower_bodyContext.prototype.summation_lower_multiple_line = function() {
    return this.getTypedRuleContext(Summation_lower_multiple_lineContext,0);
};

Summation_lower_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_lower_body(this);
	}
};

Summation_lower_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_lower_body(this);
	}
};

Summation_lower_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_lower_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_lower_bodyContext = Summation_lower_bodyContext;

GrammarParser.prototype.summation_lower_body = function() {

    var localctx = new Summation_lower_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, GrammarParser.RULE_summation_lower_body);
    try {
        this.state = 457;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.VARNAME:
        case GrammarParser.INTEGER:
            this.enterOuterAlt(localctx, 1);
            this.state = 455;
            this.summation_lower_single_line();
            break;
        case GrammarParser.SUBSTACK_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 456;
            this.summation_lower_multiple_line();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_lower_single_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_lower_single_line;
    return this;
}

Summation_lower_single_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_lower_single_lineContext.prototype.constructor = Summation_lower_single_lineContext;

Summation_lower_single_lineContext.prototype.VARNAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.VARNAME);
    } else {
        return this.getToken(GrammarParser.VARNAME, i);
    }
};


Summation_lower_single_lineContext.prototype.INTEGER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.INTEGER);
    } else {
        return this.getToken(GrammarParser.INTEGER, i);
    }
};


Summation_lower_single_lineContext.prototype.summation_lower_bound_operators = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Summation_lower_bound_operatorsContext);
    } else {
        return this.getTypedRuleContext(Summation_lower_bound_operatorsContext,i);
    }
};

Summation_lower_single_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_lower_single_line(this);
	}
};

Summation_lower_single_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_lower_single_line(this);
	}
};

Summation_lower_single_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_lower_single_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_lower_single_lineContext = Summation_lower_single_lineContext;

GrammarParser.prototype.summation_lower_single_line = function() {

    var localctx = new Summation_lower_single_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, GrammarParser.RULE_summation_lower_single_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 465;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.LT_TAG) | (1 << GrammarParser.LNEQ_TAG) | (1 << GrammarParser.LNEQQ_TAG) | (1 << GrammarParser.LE_TAG) | (1 << GrammarParser.LEQ_TAG) | (1 << GrammarParser.LEQQ_TAG) | (1 << GrammarParser.LEQSLANT_TAG) | (1 << GrammarParser.GT_TAG) | (1 << GrammarParser.GNEQ_TAG) | (1 << GrammarParser.GNEQQ_TAG) | (1 << GrammarParser.GEQ_TAG))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.GEQQ_TAG - 32)) | (1 << (GrammarParser.GEQSLANT_TAG - 32)) | (1 << (GrammarParser.LESSER_SYMBOL - 32)) | (1 << (GrammarParser.GREATER_SYMBOL - 32)) | (1 << (GrammarParser.GREATER_EQUAL_SYMBOL - 32)) | (1 << (GrammarParser.EQUAL - 32)))) !== 0)) {
            this.state = 460;
            this.summation_lower_bound_operators();
            this.state = 461;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 467;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_lower_bound_operatorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_lower_bound_operators;
    return this;
}

Summation_lower_bound_operatorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_lower_bound_operatorsContext.prototype.constructor = Summation_lower_bound_operatorsContext;

Summation_lower_bound_operatorsContext.prototype.EQUAL = function() {
    return this.getToken(GrammarParser.EQUAL, 0);
};

Summation_lower_bound_operatorsContext.prototype.lesser_operator = function() {
    return this.getTypedRuleContext(Lesser_operatorContext,0);
};

Summation_lower_bound_operatorsContext.prototype.lesser_equal_operator = function() {
    return this.getTypedRuleContext(Lesser_equal_operatorContext,0);
};

Summation_lower_bound_operatorsContext.prototype.greater_operator = function() {
    return this.getTypedRuleContext(Greater_operatorContext,0);
};

Summation_lower_bound_operatorsContext.prototype.greater_equal_operator = function() {
    return this.getTypedRuleContext(Greater_equal_operatorContext,0);
};

Summation_lower_bound_operatorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_lower_bound_operators(this);
	}
};

Summation_lower_bound_operatorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_lower_bound_operators(this);
	}
};

Summation_lower_bound_operatorsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_lower_bound_operators(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_lower_bound_operatorsContext = Summation_lower_bound_operatorsContext;

GrammarParser.prototype.summation_lower_bound_operators = function() {

    var localctx = new Summation_lower_bound_operatorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, GrammarParser.RULE_summation_lower_bound_operators);
    try {
        this.state = 473;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 468;
            this.match(GrammarParser.EQUAL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 469;
            this.lesser_operator();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 470;
            this.lesser_equal_operator();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 471;
            this.greater_operator();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 472;
            this.greater_equal_operator();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_lower_multiple_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_lower_multiple_line;
    return this;
}

Summation_lower_multiple_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_lower_multiple_lineContext.prototype.constructor = Summation_lower_multiple_lineContext;

Summation_lower_multiple_lineContext.prototype.SUBSTACK_TAG = function() {
    return this.getToken(GrammarParser.SUBSTACK_TAG, 0);
};

Summation_lower_multiple_lineContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Summation_lower_multiple_lineContext.prototype.summation_lower_single_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Summation_lower_single_lineContext);
    } else {
        return this.getTypedRuleContext(Summation_lower_single_lineContext,i);
    }
};

Summation_lower_multiple_lineContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Summation_lower_multiple_lineContext.prototype.BREAKLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.BREAKLINE);
    } else {
        return this.getToken(GrammarParser.BREAKLINE, i);
    }
};


Summation_lower_multiple_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_lower_multiple_line(this);
	}
};

Summation_lower_multiple_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_lower_multiple_line(this);
	}
};

Summation_lower_multiple_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_lower_multiple_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_lower_multiple_lineContext = Summation_lower_multiple_lineContext;

GrammarParser.prototype.summation_lower_multiple_line = function() {

    var localctx = new Summation_lower_multiple_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, GrammarParser.RULE_summation_lower_multiple_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 475;
        this.match(GrammarParser.SUBSTACK_TAG);
        this.state = 476;
        this.match(GrammarParser.CURLY_LF);
        this.state = 477;
        this.summation_lower_single_line();
        this.state = 480; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 478;
            this.match(GrammarParser.BREAKLINE);
            this.state = 479;
            this.summation_lower_single_line();
            this.state = 482; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.BREAKLINE);
        this.state = 484;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_upper_boundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_upper_bound;
    return this;
}

Summation_upper_boundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_upper_boundContext.prototype.constructor = Summation_upper_boundContext;

Summation_upper_boundContext.prototype.HAT = function() {
    return this.getToken(GrammarParser.HAT, 0);
};

Summation_upper_boundContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Summation_upper_boundContext.prototype.summation_upper_body = function() {
    return this.getTypedRuleContext(Summation_upper_bodyContext,0);
};

Summation_upper_boundContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Summation_upper_boundContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_upper_bound(this);
	}
};

Summation_upper_boundContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_upper_bound(this);
	}
};

Summation_upper_boundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_upper_bound(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_upper_boundContext = Summation_upper_boundContext;

GrammarParser.prototype.summation_upper_bound = function() {

    var localctx = new Summation_upper_boundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, GrammarParser.RULE_summation_upper_bound);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.match(GrammarParser.HAT);
        this.state = 487;
        this.match(GrammarParser.CURLY_LF);
        this.state = 488;
        this.summation_upper_body();
        this.state = 489;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_upper_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_upper_body;
    return this;
}

Summation_upper_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_upper_bodyContext.prototype.constructor = Summation_upper_bodyContext;

Summation_upper_bodyContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Summation_upper_bodyContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Summation_upper_bodyContext.prototype.INFINITY_TAG = function() {
    return this.getToken(GrammarParser.INFINITY_TAG, 0);
};

Summation_upper_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_upper_body(this);
	}
};

Summation_upper_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_upper_body(this);
	}
};

Summation_upper_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_upper_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_upper_bodyContext = Summation_upper_bodyContext;

GrammarParser.prototype.summation_upper_body = function() {

    var localctx = new Summation_upper_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, GrammarParser.RULE_summation_upper_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.INFINITY_TAG || _la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Summation_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_summation_body;
    return this;
}

Summation_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Summation_bodyContext.prototype.constructor = Summation_bodyContext;

Summation_bodyContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Summation_bodyContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Summation_bodyContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Summation_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSummation_body(this);
	}
};

Summation_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSummation_body(this);
	}
};

Summation_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSummation_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Summation_bodyContext = Summation_bodyContext;

GrammarParser.prototype.summation_body = function() {

    var localctx = new Summation_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, GrammarParser.RULE_summation_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 493;
        this.match(GrammarParser.CURLY_LF);
        this.state = 494;
        this.composed_operations();
        this.state = 495;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogarithmContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_logarithm;
    return this;
}

LogarithmContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogarithmContext.prototype.constructor = LogarithmContext;

LogarithmContext.prototype.log = function() {
    return this.getTypedRuleContext(LogContext,0);
};

LogarithmContext.prototype.ln = function() {
    return this.getTypedRuleContext(LnContext,0);
};

LogarithmContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLogarithm(this);
	}
};

LogarithmContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLogarithm(this);
	}
};

LogarithmContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLogarithm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.LogarithmContext = LogarithmContext;

GrammarParser.prototype.logarithm = function() {

    var localctx = new LogarithmContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, GrammarParser.RULE_logarithm);
    try {
        this.state = 499;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.LOG_TAG:
            this.enterOuterAlt(localctx, 1);
            this.state = 497;
            this.log();
            break;
        case GrammarParser.LN_TAG:
            this.enterOuterAlt(localctx, 2);
            this.state = 498;
            this.ln();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_log;
    return this;
}

LogContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogContext.prototype.constructor = LogContext;

LogContext.prototype.LOG_TAG = function() {
    return this.getToken(GrammarParser.LOG_TAG, 0);
};

LogContext.prototype.logarithm_body = function() {
    return this.getTypedRuleContext(Logarithm_bodyContext,0);
};

LogContext.prototype.logarithm_lower_bound = function() {
    return this.getTypedRuleContext(Logarithm_lower_boundContext,0);
};

LogContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLog(this);
	}
};

LogContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLog(this);
	}
};

LogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLog(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.LogContext = LogContext;

GrammarParser.prototype.log = function() {

    var localctx = new LogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, GrammarParser.RULE_log);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 501;
        this.match(GrammarParser.LOG_TAG);
        this.state = 503;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.UNDERSCORE) {
            this.state = 502;
            this.logarithm_lower_bound();
        }

        this.state = 505;
        this.logarithm_body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_ln;
    return this;
}

LnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LnContext.prototype.constructor = LnContext;

LnContext.prototype.LN_TAG = function() {
    return this.getToken(GrammarParser.LN_TAG, 0);
};

LnContext.prototype.logarithm_body = function() {
    return this.getTypedRuleContext(Logarithm_bodyContext,0);
};

LnContext.prototype.logarithm_lower_bound = function() {
    return this.getTypedRuleContext(Logarithm_lower_boundContext,0);
};

LnContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLn(this);
	}
};

LnContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLn(this);
	}
};

LnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.LnContext = LnContext;

GrammarParser.prototype.ln = function() {

    var localctx = new LnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, GrammarParser.RULE_ln);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 507;
        this.match(GrammarParser.LN_TAG);
        this.state = 509;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.UNDERSCORE) {
            this.state = 508;
            this.logarithm_lower_bound();
        }

        this.state = 511;
        this.logarithm_body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logarithm_lower_boundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_logarithm_lower_bound;
    return this;
}

Logarithm_lower_boundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logarithm_lower_boundContext.prototype.constructor = Logarithm_lower_boundContext;

Logarithm_lower_boundContext.prototype.UNDERSCORE = function() {
    return this.getToken(GrammarParser.UNDERSCORE, 0);
};

Logarithm_lower_boundContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Logarithm_lower_boundContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Logarithm_lower_boundContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Logarithm_lower_boundContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Logarithm_lower_boundContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLogarithm_lower_bound(this);
	}
};

Logarithm_lower_boundContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLogarithm_lower_bound(this);
	}
};

Logarithm_lower_boundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLogarithm_lower_bound(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Logarithm_lower_boundContext = Logarithm_lower_boundContext;

GrammarParser.prototype.logarithm_lower_bound = function() {

    var localctx = new Logarithm_lower_boundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 140, GrammarParser.RULE_logarithm_lower_bound);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this.match(GrammarParser.UNDERSCORE);
        this.state = 514;
        this.match(GrammarParser.CURLY_LF);
        this.state = 515;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 516;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logarithm_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_logarithm_body;
    return this;
}

Logarithm_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logarithm_bodyContext.prototype.constructor = Logarithm_bodyContext;

Logarithm_bodyContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Logarithm_bodyContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Logarithm_bodyContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Logarithm_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLogarithm_body(this);
	}
};

Logarithm_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLogarithm_body(this);
	}
};

Logarithm_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLogarithm_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Logarithm_bodyContext = Logarithm_bodyContext;

GrammarParser.prototype.logarithm_body = function() {

    var localctx = new Logarithm_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 142, GrammarParser.RULE_logarithm_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 518;
        this.match(GrammarParser.CURLY_LF);
        this.state = 519;
        this.composed_operations();
        this.state = 520;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SqrtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_sqrt;
    return this;
}

SqrtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqrtContext.prototype.constructor = SqrtContext;

SqrtContext.prototype.SQRT_TAG = function() {
    return this.getToken(GrammarParser.SQRT_TAG, 0);
};

SqrtContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

SqrtContext.prototype.sqrt_body = function() {
    return this.getTypedRuleContext(Sqrt_bodyContext,0);
};

SqrtContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

SqrtContext.prototype.sqrt_root = function() {
    return this.getTypedRuleContext(Sqrt_rootContext,0);
};

SqrtContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSqrt(this);
	}
};

SqrtContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSqrt(this);
	}
};

SqrtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSqrt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.SqrtContext = SqrtContext;

GrammarParser.prototype.sqrt = function() {

    var localctx = new SqrtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 144, GrammarParser.RULE_sqrt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
        this.match(GrammarParser.SQRT_TAG);
        this.state = 524;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GrammarParser.BRACKET_LF) {
            this.state = 523;
            this.sqrt_root();
        }

        this.state = 526;
        this.match(GrammarParser.CURLY_LF);
        this.state = 527;
        this.sqrt_body();
        this.state = 528;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Sqrt_rootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_sqrt_root;
    return this;
}

Sqrt_rootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sqrt_rootContext.prototype.constructor = Sqrt_rootContext;

Sqrt_rootContext.prototype.BRACKET_LF = function() {
    return this.getToken(GrammarParser.BRACKET_LF, 0);
};

Sqrt_rootContext.prototype.BRACKET_RT = function() {
    return this.getToken(GrammarParser.BRACKET_RT, 0);
};

Sqrt_rootContext.prototype.VARNAME = function() {
    return this.getToken(GrammarParser.VARNAME, 0);
};

Sqrt_rootContext.prototype.INTEGER = function() {
    return this.getToken(GrammarParser.INTEGER, 0);
};

Sqrt_rootContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSqrt_root(this);
	}
};

Sqrt_rootContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSqrt_root(this);
	}
};

Sqrt_rootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSqrt_root(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Sqrt_rootContext = Sqrt_rootContext;

GrammarParser.prototype.sqrt_root = function() {

    var localctx = new Sqrt_rootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 146, GrammarParser.RULE_sqrt_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.match(GrammarParser.BRACKET_LF);
        this.state = 531;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.VARNAME || _la===GrammarParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 532;
        this.match(GrammarParser.BRACKET_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Sqrt_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_sqrt_body;
    return this;
}

Sqrt_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sqrt_bodyContext.prototype.constructor = Sqrt_bodyContext;

Sqrt_bodyContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Sqrt_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterSqrt_body(this);
	}
};

Sqrt_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitSqrt_body(this);
	}
};

Sqrt_bodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitSqrt_body(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Sqrt_bodyContext = Sqrt_bodyContext;

GrammarParser.prototype.sqrt_body = function() {

    var localctx = new Sqrt_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 148, GrammarParser.RULE_sqrt_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 534;
        this.composed_operations();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExponentialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_exponential;
    return this;
}

ExponentialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExponentialContext.prototype.constructor = ExponentialContext;

ExponentialContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

ExponentialContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

ExponentialContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

ExponentialContext.prototype.EULER_NUMBER = function() {
    return this.getToken(GrammarParser.EULER_NUMBER, 0);
};

ExponentialContext.prototype.HAT = function() {
    return this.getToken(GrammarParser.HAT, 0);
};

ExponentialContext.prototype.EXP_TAG = function() {
    return this.getToken(GrammarParser.EXP_TAG, 0);
};

ExponentialContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterExponential(this);
	}
};

ExponentialContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitExponential(this);
	}
};

ExponentialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitExponential(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ExponentialContext = ExponentialContext;

GrammarParser.prototype.exponential = function() {

    var localctx = new ExponentialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 150, GrammarParser.RULE_exponential);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 539;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GrammarParser.EULER_NUMBER:
            this.state = 536;
            this.match(GrammarParser.EULER_NUMBER);
            this.state = 537;
            this.match(GrammarParser.HAT);
            break;
        case GrammarParser.EXP_TAG:
            this.state = 538;
            this.match(GrammarParser.EXP_TAG);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 541;
        this.match(GrammarParser.CURLY_LF);
        this.state = 542;
        this.composed_operations();
        this.state = 543;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FractionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fraction;
    return this;
}

FractionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FractionContext.prototype.constructor = FractionContext;

FractionContext.prototype.FRAC_TAG = function() {
    return this.getToken(GrammarParser.FRAC_TAG, 0);
};

FractionContext.prototype.numerator = function() {
    return this.getTypedRuleContext(NumeratorContext,0);
};

FractionContext.prototype.denominator = function() {
    return this.getTypedRuleContext(DenominatorContext,0);
};

FractionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFraction(this);
	}
};

FractionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFraction(this);
	}
};

FractionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFraction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.FractionContext = FractionContext;

GrammarParser.prototype.fraction = function() {

    var localctx = new FractionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 152, GrammarParser.RULE_fraction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
        this.match(GrammarParser.FRAC_TAG);
        this.state = 546;
        this.numerator();
        this.state = 547;
        this.denominator();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumeratorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_numerator;
    return this;
}

NumeratorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumeratorContext.prototype.constructor = NumeratorContext;

NumeratorContext.prototype.fraction_member = function() {
    return this.getTypedRuleContext(Fraction_memberContext,0);
};

NumeratorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNumerator(this);
	}
};

NumeratorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNumerator(this);
	}
};

NumeratorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNumerator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.NumeratorContext = NumeratorContext;

GrammarParser.prototype.numerator = function() {

    var localctx = new NumeratorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 154, GrammarParser.RULE_numerator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 549;
        this.fraction_member();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DenominatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_denominator;
    return this;
}

DenominatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DenominatorContext.prototype.constructor = DenominatorContext;

DenominatorContext.prototype.fraction_member = function() {
    return this.getTypedRuleContext(Fraction_memberContext,0);
};

DenominatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDenominator(this);
	}
};

DenominatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDenominator(this);
	}
};

DenominatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitDenominator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.DenominatorContext = DenominatorContext;

GrammarParser.prototype.denominator = function() {

    var localctx = new DenominatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 156, GrammarParser.RULE_denominator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 551;
        this.fraction_member();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Fraction_memberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_fraction_member;
    return this;
}

Fraction_memberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fraction_memberContext.prototype.constructor = Fraction_memberContext;

Fraction_memberContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

Fraction_memberContext.prototype.composed_operations = function() {
    return this.getTypedRuleContext(Composed_operationsContext,0);
};

Fraction_memberContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

Fraction_memberContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFraction_member(this);
	}
};

Fraction_memberContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFraction_member(this);
	}
};

Fraction_memberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitFraction_member(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Fraction_memberContext = Fraction_memberContext;

GrammarParser.prototype.fraction_member = function() {

    var localctx = new Fraction_memberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 158, GrammarParser.RULE_fraction_member);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 553;
        this.match(GrammarParser.CURLY_LF);
        this.state = 554;
        this.composed_operations();
        this.state = 555;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_end;
    return this;
}

EndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndContext.prototype.constructor = EndContext;

EndContext.prototype.END = function() {
    return this.getToken(GrammarParser.END, 0);
};

EndContext.prototype.CURLY_LF = function() {
    return this.getToken(GrammarParser.CURLY_LF, 0);
};

EndContext.prototype.environment = function() {
    return this.getTypedRuleContext(EnvironmentContext,0);
};

EndContext.prototype.CURLY_RT = function() {
    return this.getToken(GrammarParser.CURLY_RT, 0);
};

EndContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterEnd(this);
	}
};

EndContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitEnd(this);
	}
};

EndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.EndContext = EndContext;

GrammarParser.prototype.end = function() {

    var localctx = new EndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 160, GrammarParser.RULE_end);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 557;
        this.match(GrammarParser.END);
        this.state = 558;
        this.match(GrammarParser.CURLY_LF);
        this.state = 559;
        this.environment();
        this.state = 560;
        this.match(GrammarParser.CURLY_RT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EnvironmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_environment;
    return this;
}

EnvironmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnvironmentContext.prototype.constructor = EnvironmentContext;

EnvironmentContext.prototype.EQUATION = function() {
    return this.getToken(GrammarParser.EQUATION, 0);
};

EnvironmentContext.prototype.EQUATION_STAR = function() {
    return this.getToken(GrammarParser.EQUATION_STAR, 0);
};

EnvironmentContext.prototype.MATRIX = function() {
    return this.getToken(GrammarParser.MATRIX, 0);
};

EnvironmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterEnvironment(this);
	}
};

EnvironmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitEnvironment(this);
	}
};

EnvironmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitEnvironment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.EnvironmentContext = EnvironmentContext;

GrammarParser.prototype.environment = function() {

    var localctx = new EnvironmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 162, GrammarParser.RULE_environment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 562;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (GrammarParser.EQUATION - 36)) | (1 << (GrammarParser.EQUATION_STAR - 36)) | (1 << (GrammarParser.MATRIX - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GrammarParser = GrammarParser;
