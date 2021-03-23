// Generated from Annotation.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var AnnotationListener = require('./AnnotationListener').AnnotationListener;
var AnnotationVisitor = require('./AnnotationVisitor').AnnotationVisitor;

var grammarFileName = "Annotation.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003L\u00d5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002$\n\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0006\u0002",
    "-\n\u0002\r\u0002\u000e\u0002.\u0003\u0002\u0003\u0002\u0003\u0003\u0005",
    "\u00034\n\u0003\u0003\u0003\u0005\u00037\n\u0003\u0003\u0003\u0005\u0003",
    ":\n\u0003\u0003\u0003\u0005\u0003=\n\u0003\u0005\u0003?\n\u0003\u0003",
    "\u0004\u0007\u0004B\n\u0004\f\u0004\u000e\u0004E\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004L\n\u0004",
    "\r\u0004\u000e\u0004M\u0003\u0005\u0007\u0005Q\n\u0005\f\u0005\u000e",
    "\u0005T\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0006\u0005[\n\u0005\r\u0005\u000e\u0005\\\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0007\u0007b\n\u0007\f\u0007\u000e\u0007e\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0006\u0007i\n\u0007\r\u0007\u000e\u0007",
    "j\u0003\b\u0006\bn\n\b\r\b\u000e\bo\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\tv\n\t\u0003\t\u0006\ty\n\t\r\t\u000e\tz\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u0086\n\u000b\u0003\f\u0003\f\u0005\f\u008a\n\f\u0003\r\u0006",
    "\r\u008d\n\r\r\r\u000e\r\u008e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00ce\n\u000f",
    "\f\u000f\u000e\u000f\u00d1\u000b\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u00cf\u0002\u0011\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e\u0002\u0004\u0004\u0002\u0005\u0006",
    "\b\t\u0003\u0002\u0004\b\u0002\u0112\u0002,\u0003\u0002\u0002\u0002",
    "\u0004>\u0003\u0002\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bR\u0003",
    "\u0002\u0002\u0002\n^\u0003\u0002\u0002\u0002\fc\u0003\u0002\u0002\u0002",
    "\u000em\u0003\u0002\u0002\u0002\u0010q\u0003\u0002\u0002\u0002\u0012",
    "|\u0003\u0002\u0002\u0002\u0014\u0082\u0003\u0002\u0002\u0002\u0016",
    "\u0087\u0003\u0002\u0002\u0002\u0018\u008c\u0003\u0002\u0002\u0002\u001a",
    "\u0090\u0003\u0002\u0002\u0002\u001c\u00cf\u0003\u0002\u0002\u0002\u001e",
    "\u00d2\u0003\u0002\u0002\u0002 !\u0005\u0004\u0003\u0002!#\u0005\f\u0007",
    "\u0002\"$\u0005\u000e\b\u0002#\"\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$%\u0003\u0002\u0002\u0002%)\u0005\u001c\u000f\u0002&(\u0007",
    "\u0003\u0002\u0002\'&\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*-\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002, \u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u000201\u0007\u0002\u0002\u00031\u0003\u0003\u0002",
    "\u0002\u000224\u0005\u0006\u0004\u000232\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000246\u0003\u0002\u0002\u000257\u0005\b\u0005\u00026",
    "5\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027?\u0003\u0002\u0002",
    "\u00028:\u0005\b\u0005\u000298\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:<\u0003\u0002\u0002\u0002;=\u0005\u0006\u0004\u0002<;\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002",
    ">3\u0003\u0002\u0002\u0002>9\u0003\u0002\u0002\u0002?\u0005\u0003\u0002",
    "\u0002\u0002@B\u0007\u0010\u0002\u0002A@\u0003\u0002\u0002\u0002BE\u0003",
    "\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002",
    "DF\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FG\u0007\u0011\u0002",
    "\u0002GH\u0007\n\u0002\u0002HI\u00077\u0002\u0002IK\u0007\f\u0002\u0002",
    "JL\u0007\u0010\u0002\u0002KJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002",
    "\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u0007\u0003",
    "\u0002\u0002\u0002OQ\u0007\u0010\u0002\u0002PO\u0003\u0002\u0002\u0002",
    "QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002SU\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UV\u0007\u0011",
    "\u0002\u0002VW\u0007\u000b\u0002\u0002WX\u00077\u0002\u0002XZ\u0005",
    "\n\u0006\u0002Y[\u0007\u0010\u0002\u0002ZY\u0003\u0002\u0002\u0002[",
    "\\\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]\t\u0003\u0002\u0002\u0002^_\t\u0002\u0002\u0002_\u000b",
    "\u0003\u0002\u0002\u0002`b\u0007\u0010\u0002\u0002a`\u0003\u0002\u0002",
    "\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fh\u0007",
    "\u000e\u0002\u0002gi\u0007\u0010\u0002\u0002hg\u0003\u0002\u0002\u0002",
    "ij\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002k\r\u0003\u0002\u0002\u0002ln\u0005\u0010\t\u0002ml\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002p\u000f\u0003\u0002\u0002\u0002qr\u0007\u0011\u0002",
    "\u0002ru\u0005\u0012\n\u0002st\u00078\u0002\u0002tv\u0005\u0012\n\u0002",
    "us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vx\u0003\u0002\u0002",
    "\u0002wy\u0007\u0010\u0002\u0002xw\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u0011",
    "\u0003\u0002\u0002\u0002|}\u00074\u0002\u0002}~\u0005\u0014\u000b\u0002",
    "~\u007f\u00075\u0002\u0002\u007f\u0080\u00077\u0002\u0002\u0080\u0081",
    "\u0005\u0016\f\u0002\u0081\u0013\u0003\u0002\u0002\u0002\u0082\u0085",
    "\u0007\f\u0002\u0002\u0083\u0084\u00078\u0002\u0002\u0084\u0086\u0007",
    "\f\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0015\u0003\u0002\u0002\u0002\u0087\u0089\t",
    "\u0003\u0002\u0002\u0088\u008a\u0005\u0018\r\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u0017\u0003",
    "\u0002\u0002\u0002\u008b\u008d\u0005\u001a\u000e\u0002\u008c\u008b\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0019\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u00074\u0002\u0002\u0091\u0092\u0007",
    "\r\u0002\u0002\u0092\u0093\u00075\u0002\u0002\u0093\u001b\u0003\u0002",
    "\u0002\u0002\u0094\u00ce\u000b\u0002\u0002\u0002\u0095\u00ce\u0007\u001b",
    "\u0002\u0002\u0096\u00ce\u0007\u001a\u0002\u0002\u0097\u00ce\u00074",
    "\u0002\u0002\u0098\u00ce\u00075\u0002\u0002\u0099\u00ce\u0007A\u0002",
    "\u0002\u009a\u00ce\u00077\u0002\u0002\u009b\u00ce\u00078\u0002\u0002",
    "\u009c\u00ce\u0007\u0011\u0002\u0002\u009d\u00ce\u0007\u0018\u0002\u0002",
    "\u009e\u00ce\u0007\u001e\u0002\u0002\u009f\u00ce\u00072\u0002\u0002",
    "\u00a0\u00ce\u00073\u0002\u0002\u00a1\u00ce\u00079\u0002\u0002\u00a2",
    "\u00ce\u0007J\u0002\u0002\u00a3\u00ce\u0007F\u0002\u0002\u00a4\u00ce",
    "\u0007B\u0002\u0002\u00a5\u00ce\u0007\u0012\u0002\u0002\u00a6\u00ce",
    "\u0007\u0013\u0002\u0002\u00a7\u00ce\u0007>\u0002\u0002\u00a8\u00ce",
    "\u0007/\u0002\u0002\u00a9\u00ce\u00070\u0002\u0002\u00aa\u00ce\u0007",
    "1\u0002\u0002\u00ab\u00ce\u0007-\u0002\u0002\u00ac\u00ce\u0007.\u0002",
    "\u0002\u00ad\u00ce\u0007=\u0002\u0002\u00ae\u00ce\u0007<\u0002\u0002",
    "\u00af\u00ce\u0007,\u0002\u0002\u00b0\u00ce\u0007E\u0002\u0002\u00b1",
    "\u00ce\u0007$\u0002\u0002\u00b2\u00ce\u0007#\u0002\u0002\u00b3\u00ce",
    "\u0007\"\u0002\u0002\u00b4\u00ce\u0007?\u0002\u0002\u00b5\u00ce\u0007",
    "(\u0002\u0002\u00b6\u00ce\u0007)\u0002\u0002\u00b7\u00ce\u0007*\u0002",
    "\u0002\u00b8\u00ce\u0007+\u0002\u0002\u00b9\u00ce\u0007;\u0002\u0002",
    "\u00ba\u00ce\u0007:\u0002\u0002\u00bb\u00ce\u0007!\u0002\u0002\u00bc",
    "\u00ce\u0007&\u0002\u0002\u00bd\u00ce\u0007\'\u0002\u0002\u00be\u00ce",
    "\u0007 \u0002\u0002\u00bf\u00ce\u0007%\u0002\u0002\u00c0\u00ce\u0007",
    "H\u0002\u0002\u00c1\u00ce\u0007I\u0002\u0002\u00c2\u00ce\u0007C\u0002",
    "\u0002\u00c3\u00ce\u0007D\u0002\u0002\u00c4\u00ce\u0007G\u0002\u0002",
    "\u00c5\u00ce\u0007\u0017\u0002\u0002\u00c6\u00ce\u0007\u001d\u0002\u0002",
    "\u00c7\u00ce\u0007\u0014\u0002\u0002\u00c8\u00ce\u0007\u0016\u0002\u0002",
    "\u00c9\u00ce\u0007\u0015\u0002\u0002\u00ca\u00ce\u0007\u0019\u0002\u0002",
    "\u00cb\u00ce\u0007\u001f\u0002\u0002\u00cc\u00ce\u0007@\u0002\u0002",
    "\u00cd\u0094\u0003\u0002\u0002\u0002\u00cd\u0095\u0003\u0002\u0002\u0002",
    "\u00cd\u0096\u0003\u0002\u0002\u0002\u00cd\u0097\u0003\u0002\u0002\u0002",
    "\u00cd\u0098\u0003\u0002\u0002\u0002\u00cd\u0099\u0003\u0002\u0002\u0002",
    "\u00cd\u009a\u0003\u0002\u0002\u0002\u00cd\u009b\u0003\u0002\u0002\u0002",
    "\u00cd\u009c\u0003\u0002\u0002\u0002\u00cd\u009d\u0003\u0002\u0002\u0002",
    "\u00cd\u009e\u0003\u0002\u0002\u0002\u00cd\u009f\u0003\u0002\u0002\u0002",
    "\u00cd\u00a0\u0003\u0002\u0002\u0002\u00cd\u00a1\u0003\u0002\u0002\u0002",
    "\u00cd\u00a2\u0003\u0002\u0002\u0002\u00cd\u00a3\u0003\u0002\u0002\u0002",
    "\u00cd\u00a4\u0003\u0002\u0002\u0002\u00cd\u00a5\u0003\u0002\u0002\u0002",
    "\u00cd\u00a6\u0003\u0002\u0002\u0002\u00cd\u00a7\u0003\u0002\u0002\u0002",
    "\u00cd\u00a8\u0003\u0002\u0002\u0002\u00cd\u00a9\u0003\u0002\u0002\u0002",
    "\u00cd\u00aa\u0003\u0002\u0002\u0002\u00cd\u00ab\u0003\u0002\u0002\u0002",
    "\u00cd\u00ac\u0003\u0002\u0002\u0002\u00cd\u00ad\u0003\u0002\u0002\u0002",
    "\u00cd\u00ae\u0003\u0002\u0002\u0002\u00cd\u00af\u0003\u0002\u0002\u0002",
    "\u00cd\u00b0\u0003\u0002\u0002\u0002\u00cd\u00b1\u0003\u0002\u0002\u0002",
    "\u00cd\u00b2\u0003\u0002\u0002\u0002\u00cd\u00b3\u0003\u0002\u0002\u0002",
    "\u00cd\u00b4\u0003\u0002\u0002\u0002\u00cd\u00b5\u0003\u0002\u0002\u0002",
    "\u00cd\u00b6\u0003\u0002\u0002\u0002\u00cd\u00b7\u0003\u0002\u0002\u0002",
    "\u00cd\u00b8\u0003\u0002\u0002\u0002\u00cd\u00b9\u0003\u0002\u0002\u0002",
    "\u00cd\u00ba\u0003\u0002\u0002\u0002\u00cd\u00bb\u0003\u0002\u0002\u0002",
    "\u00cd\u00bc\u0003\u0002\u0002\u0002\u00cd\u00bd\u0003\u0002\u0002\u0002",
    "\u00cd\u00be\u0003\u0002\u0002\u0002\u00cd\u00bf\u0003\u0002\u0002\u0002",
    "\u00cd\u00c0\u0003\u0002\u0002\u0002\u00cd\u00c1\u0003\u0002\u0002\u0002",
    "\u00cd\u00c2\u0003\u0002\u0002\u0002\u00cd\u00c3\u0003\u0002\u0002\u0002",
    "\u00cd\u00c4\u0003\u0002\u0002\u0002\u00cd\u00c5\u0003\u0002\u0002\u0002",
    "\u00cd\u00c6\u0003\u0002\u0002\u0002\u00cd\u00c7\u0003\u0002\u0002\u0002",
    "\u00cd\u00c8\u0003\u0002\u0002\u0002\u00cd\u00c9\u0003\u0002\u0002\u0002",
    "\u00cd\u00ca\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002",
    "\u00cd\u00cc\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002",
    "\u00d0\u001d\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0007\u000f\u0002\u0002\u00d3\u001f\u0003\u0002\u0002\u0002",
    "\u0018#).369<>CMR\\cjouz\u0085\u0089\u008e\u00cd\u00cf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\\n'", null, null, null, null, null, null, 
                     null, null, null, null, "'\\begin'", "'\\end'", null, 
                     "'%'", "'\\exp'", "'\\frac'", "'\\sqrt'", "'\\sum'", 
                     "'\\substack'", "'\\sin'", "'\\cos'", "'\\tan'", "'\\arcsin'", 
                     "'\\arccos'", "'\\arctan'", "'\\sinh'", "'\\cosh'", 
                     "'\\tanh'", "'\\log'", "'\\ln'", "'\\int'", "'\\iint'", 
                     "'\\iiint'", "'\\lt'", "'\\lneq'", "'\\lneqq'", "'\\le'", 
                     "'\\leq'", "'\\leqq'", "'\\leqslant'", "'\\gt'", "'\\gneq'", 
                     "'\\gneqq'", "'\\geq'", "'\\geqq'", "'\\geqslant'", 
                     "'{'", "'}'", "'['", "']'", "'''", "':'", "','", "'.'", 
                     "'<'", "'<='", "'>'", "'>='", "'!'", "'&'", "'_'", 
                     "'\\\\'", "'e'", "'('", "')'", "'^'", "'='", "'+'", 
                     "'-'", null, "'/'" ];

var symbolicNames = [ null, null, "REAL", "SHORT", "INT", "FLOAT", "DOUBLE", 
                      "LONG", "NAME_TAG", "RETURN_TAG", "VARNAME", "INTEGER", 
                      "BEGIN_TAG", "END_TAG", "NEWLINE_TAG", "COMMENT_TAG", 
                      "EXP_TAG", "FRAC_TAG", "SQRT_TAG", "SUMMATION_TAG", 
                      "SUBSTACK_TAG", "SIN_TAG", "COS_TAG", "TAN_TAG", "ARCSIN_TAG", 
                      "ARCCOS_TAG", "ARCTAN_TAG", "SINH_TAG", "COSH_TAG", 
                      "TANH_TAG", "LOG_TAG", "LN_TAG", "INT_TAG", "IINT_TAG", 
                      "IIINT_TAG", "LT_TAG", "LNEQ_TAG", "LNEQQ_TAG", "LE_TAG", 
                      "LEQ_TAG", "LEQQ_TAG", "LEQSLANT_TAG", "GT_TAG", "GNEQ_TAG", 
                      "GNEQQ_TAG", "GEQ_TAG", "GEQQ_TAG", "GEQSLANT_TAG", 
                      "CURLY_LF", "CURLY_RT", "BRACKET_LF", "BRACKET_RT", 
                      "SINGLE_QUOTE_TAG", "COLON_TAG", "COMMA_TAG", "DOT_SYMBOL", 
                      "LESSER_SYMBOL", "LESS_EQUAL_SYMBOL", "GREATER_SYMBOL", 
                      "GREATER_EQUAL_SYMBOL", "FACTORIAL_SYMBOL", "JOIN", 
                      "UNDERSCORE", "BREAKLINE", "EULER_NUMBER", "PARENTHESIS_LF", 
                      "PARENTHESIS_RT", "HAT", "EQUAL", "PLUS", "MINUS", 
                      "MULTIPLICATION", "DIVISION", "ENVIRONMENT_IGNORE", 
                      "WS" ];

var ruleNames =  [ "run", "method_specs", "name_spec", "return_spec", "return_type", 
                   "start", "variable_specs", "new_line_declaration", "variables_type_declaration", 
                   "variables", "variables_type", "array", "array_dimension", 
                   "to_ignore", "end" ];

function AnnotationParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

AnnotationParser.prototype = Object.create(antlr4.Parser.prototype);
AnnotationParser.prototype.constructor = AnnotationParser;

Object.defineProperty(AnnotationParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

AnnotationParser.EOF = antlr4.Token.EOF;
AnnotationParser.T__0 = 1;
AnnotationParser.REAL = 2;
AnnotationParser.SHORT = 3;
AnnotationParser.INT = 4;
AnnotationParser.FLOAT = 5;
AnnotationParser.DOUBLE = 6;
AnnotationParser.LONG = 7;
AnnotationParser.NAME_TAG = 8;
AnnotationParser.RETURN_TAG = 9;
AnnotationParser.VARNAME = 10;
AnnotationParser.INTEGER = 11;
AnnotationParser.BEGIN_TAG = 12;
AnnotationParser.END_TAG = 13;
AnnotationParser.NEWLINE_TAG = 14;
AnnotationParser.COMMENT_TAG = 15;
AnnotationParser.EXP_TAG = 16;
AnnotationParser.FRAC_TAG = 17;
AnnotationParser.SQRT_TAG = 18;
AnnotationParser.SUMMATION_TAG = 19;
AnnotationParser.SUBSTACK_TAG = 20;
AnnotationParser.SIN_TAG = 21;
AnnotationParser.COS_TAG = 22;
AnnotationParser.TAN_TAG = 23;
AnnotationParser.ARCSIN_TAG = 24;
AnnotationParser.ARCCOS_TAG = 25;
AnnotationParser.ARCTAN_TAG = 26;
AnnotationParser.SINH_TAG = 27;
AnnotationParser.COSH_TAG = 28;
AnnotationParser.TANH_TAG = 29;
AnnotationParser.LOG_TAG = 30;
AnnotationParser.LN_TAG = 31;
AnnotationParser.INT_TAG = 32;
AnnotationParser.IINT_TAG = 33;
AnnotationParser.IIINT_TAG = 34;
AnnotationParser.LT_TAG = 35;
AnnotationParser.LNEQ_TAG = 36;
AnnotationParser.LNEQQ_TAG = 37;
AnnotationParser.LE_TAG = 38;
AnnotationParser.LEQ_TAG = 39;
AnnotationParser.LEQQ_TAG = 40;
AnnotationParser.LEQSLANT_TAG = 41;
AnnotationParser.GT_TAG = 42;
AnnotationParser.GNEQ_TAG = 43;
AnnotationParser.GNEQQ_TAG = 44;
AnnotationParser.GEQ_TAG = 45;
AnnotationParser.GEQQ_TAG = 46;
AnnotationParser.GEQSLANT_TAG = 47;
AnnotationParser.CURLY_LF = 48;
AnnotationParser.CURLY_RT = 49;
AnnotationParser.BRACKET_LF = 50;
AnnotationParser.BRACKET_RT = 51;
AnnotationParser.SINGLE_QUOTE_TAG = 52;
AnnotationParser.COLON_TAG = 53;
AnnotationParser.COMMA_TAG = 54;
AnnotationParser.DOT_SYMBOL = 55;
AnnotationParser.LESSER_SYMBOL = 56;
AnnotationParser.LESS_EQUAL_SYMBOL = 57;
AnnotationParser.GREATER_SYMBOL = 58;
AnnotationParser.GREATER_EQUAL_SYMBOL = 59;
AnnotationParser.FACTORIAL_SYMBOL = 60;
AnnotationParser.JOIN = 61;
AnnotationParser.UNDERSCORE = 62;
AnnotationParser.BREAKLINE = 63;
AnnotationParser.EULER_NUMBER = 64;
AnnotationParser.PARENTHESIS_LF = 65;
AnnotationParser.PARENTHESIS_RT = 66;
AnnotationParser.HAT = 67;
AnnotationParser.EQUAL = 68;
AnnotationParser.PLUS = 69;
AnnotationParser.MINUS = 70;
AnnotationParser.MULTIPLICATION = 71;
AnnotationParser.DIVISION = 72;
AnnotationParser.ENVIRONMENT_IGNORE = 73;
AnnotationParser.WS = 74;

AnnotationParser.RULE_run = 0;
AnnotationParser.RULE_method_specs = 1;
AnnotationParser.RULE_name_spec = 2;
AnnotationParser.RULE_return_spec = 3;
AnnotationParser.RULE_return_type = 4;
AnnotationParser.RULE_start = 5;
AnnotationParser.RULE_variable_specs = 6;
AnnotationParser.RULE_new_line_declaration = 7;
AnnotationParser.RULE_variables_type_declaration = 8;
AnnotationParser.RULE_variables = 9;
AnnotationParser.RULE_variables_type = 10;
AnnotationParser.RULE_array = 11;
AnnotationParser.RULE_array_dimension = 12;
AnnotationParser.RULE_to_ignore = 13;
AnnotationParser.RULE_end = 14;


function RunContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_run;
    return this;
}

RunContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RunContext.prototype.constructor = RunContext;

RunContext.prototype.EOF = function() {
    return this.getToken(AnnotationParser.EOF, 0);
};

RunContext.prototype.method_specs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Method_specsContext);
    } else {
        return this.getTypedRuleContext(Method_specsContext,i);
    }
};

RunContext.prototype.start = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StartContext);
    } else {
        return this.getTypedRuleContext(StartContext,i);
    }
};

RunContext.prototype.to_ignore = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(To_ignoreContext);
    } else {
        return this.getTypedRuleContext(To_ignoreContext,i);
    }
};

RunContext.prototype.variable_specs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variable_specsContext);
    } else {
        return this.getTypedRuleContext(Variable_specsContext,i);
    }
};

RunContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterRun(this);
	}
};

RunContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitRun(this);
	}
};

RunContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitRun(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.RunContext = RunContext;

AnnotationParser.prototype.run = function() {

    var localctx = new RunContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, AnnotationParser.RULE_run);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this.method_specs();
            this.state = 31;
            this.start();
            this.state = 33;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            if(la_===1) {
                this.state = 32;
                this.variable_specs();

            }
            this.state = 35;
            this.to_ignore();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===AnnotationParser.T__0) {
                this.state = 36;
                this.match(AnnotationParser.T__0);
                this.state = 41;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 44; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AnnotationParser.BEGIN_TAG) | (1 << AnnotationParser.NEWLINE_TAG) | (1 << AnnotationParser.COMMENT_TAG))) !== 0));
        this.state = 46;
        this.match(AnnotationParser.EOF);
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


function Method_specsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_method_specs;
    return this;
}

Method_specsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Method_specsContext.prototype.constructor = Method_specsContext;

Method_specsContext.prototype.name_spec = function() {
    return this.getTypedRuleContext(Name_specContext,0);
};

Method_specsContext.prototype.return_spec = function() {
    return this.getTypedRuleContext(Return_specContext,0);
};

Method_specsContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterMethod_specs(this);
	}
};

Method_specsContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitMethod_specs(this);
	}
};

Method_specsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitMethod_specs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Method_specsContext = Method_specsContext;

AnnotationParser.prototype.method_specs = function() {

    var localctx = new Method_specsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, AnnotationParser.RULE_method_specs);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 48;
                this.name_spec();

            }
            this.state = 52;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 51;
                this.return_spec();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
            if(la_===1) {
                this.state = 54;
                this.return_spec();

            }
            this.state = 58;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 57;
                this.name_spec();

            }
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


function Name_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_name_spec;
    return this;
}

Name_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Name_specContext.prototype.constructor = Name_specContext;

Name_specContext.prototype.COMMENT_TAG = function() {
    return this.getToken(AnnotationParser.COMMENT_TAG, 0);
};

Name_specContext.prototype.NAME_TAG = function() {
    return this.getToken(AnnotationParser.NAME_TAG, 0);
};

Name_specContext.prototype.COLON_TAG = function() {
    return this.getToken(AnnotationParser.COLON_TAG, 0);
};

Name_specContext.prototype.VARNAME = function() {
    return this.getToken(AnnotationParser.VARNAME, 0);
};

Name_specContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.NEWLINE_TAG);
    } else {
        return this.getToken(AnnotationParser.NEWLINE_TAG, i);
    }
};


Name_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterName_spec(this);
	}
};

Name_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitName_spec(this);
	}
};

Name_specContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitName_spec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Name_specContext = Name_specContext;

AnnotationParser.prototype.name_spec = function() {

    var localctx = new Name_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, AnnotationParser.RULE_name_spec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AnnotationParser.NEWLINE_TAG) {
            this.state = 62;
            this.match(AnnotationParser.NEWLINE_TAG);
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 68;
        this.match(AnnotationParser.COMMENT_TAG);
        this.state = 69;
        this.match(AnnotationParser.NAME_TAG);
        this.state = 70;
        this.match(AnnotationParser.COLON_TAG);
        this.state = 71;
        this.match(AnnotationParser.VARNAME);
        this.state = 73; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 72;
        		this.match(AnnotationParser.NEWLINE_TAG);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 75; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
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


function Return_specContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_return_spec;
    return this;
}

Return_specContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_specContext.prototype.constructor = Return_specContext;

Return_specContext.prototype.COMMENT_TAG = function() {
    return this.getToken(AnnotationParser.COMMENT_TAG, 0);
};

Return_specContext.prototype.RETURN_TAG = function() {
    return this.getToken(AnnotationParser.RETURN_TAG, 0);
};

Return_specContext.prototype.COLON_TAG = function() {
    return this.getToken(AnnotationParser.COLON_TAG, 0);
};

Return_specContext.prototype.return_type = function() {
    return this.getTypedRuleContext(Return_typeContext,0);
};

Return_specContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.NEWLINE_TAG);
    } else {
        return this.getToken(AnnotationParser.NEWLINE_TAG, i);
    }
};


Return_specContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterReturn_spec(this);
	}
};

Return_specContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitReturn_spec(this);
	}
};

Return_specContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitReturn_spec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Return_specContext = Return_specContext;

AnnotationParser.prototype.return_spec = function() {

    var localctx = new Return_specContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, AnnotationParser.RULE_return_spec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AnnotationParser.NEWLINE_TAG) {
            this.state = 77;
            this.match(AnnotationParser.NEWLINE_TAG);
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
        this.match(AnnotationParser.COMMENT_TAG);
        this.state = 84;
        this.match(AnnotationParser.RETURN_TAG);
        this.state = 85;
        this.match(AnnotationParser.COLON_TAG);
        this.state = 86;
        this.return_type();
        this.state = 88; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 87;
        		this.match(AnnotationParser.NEWLINE_TAG);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 90; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
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


function Return_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_return_type;
    return this;
}

Return_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_typeContext.prototype.constructor = Return_typeContext;

Return_typeContext.prototype.INT = function() {
    return this.getToken(AnnotationParser.INT, 0);
};

Return_typeContext.prototype.DOUBLE = function() {
    return this.getToken(AnnotationParser.DOUBLE, 0);
};

Return_typeContext.prototype.SHORT = function() {
    return this.getToken(AnnotationParser.SHORT, 0);
};

Return_typeContext.prototype.LONG = function() {
    return this.getToken(AnnotationParser.LONG, 0);
};

Return_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterReturn_type(this);
	}
};

Return_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitReturn_type(this);
	}
};

Return_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitReturn_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Return_typeContext = Return_typeContext;

AnnotationParser.prototype.return_type = function() {

    var localctx = new Return_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, AnnotationParser.RULE_return_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AnnotationParser.SHORT) | (1 << AnnotationParser.INT) | (1 << AnnotationParser.DOUBLE) | (1 << AnnotationParser.LONG))) !== 0))) {
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


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.BEGIN_TAG = function() {
    return this.getToken(AnnotationParser.BEGIN_TAG, 0);
};

StartContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.NEWLINE_TAG);
    } else {
        return this.getToken(AnnotationParser.NEWLINE_TAG, i);
    }
};


StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitStart(this);
	}
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.StartContext = StartContext;

AnnotationParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, AnnotationParser.RULE_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AnnotationParser.NEWLINE_TAG) {
            this.state = 94;
            this.match(AnnotationParser.NEWLINE_TAG);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 100;
        this.match(AnnotationParser.BEGIN_TAG);
        this.state = 102; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 101;
        		this.match(AnnotationParser.NEWLINE_TAG);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 104; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
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


function Variable_specsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_variable_specs;
    return this;
}

Variable_specsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_specsContext.prototype.constructor = Variable_specsContext;

Variable_specsContext.prototype.new_line_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(New_line_declarationContext);
    } else {
        return this.getTypedRuleContext(New_line_declarationContext,i);
    }
};

Variable_specsContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterVariable_specs(this);
	}
};

Variable_specsContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitVariable_specs(this);
	}
};

Variable_specsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitVariable_specs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Variable_specsContext = Variable_specsContext;

AnnotationParser.prototype.variable_specs = function() {

    var localctx = new Variable_specsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, AnnotationParser.RULE_variable_specs);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 106;
        		this.new_line_declaration();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 109; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
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


function New_line_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_new_line_declaration;
    return this;
}

New_line_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
New_line_declarationContext.prototype.constructor = New_line_declarationContext;

New_line_declarationContext.prototype.COMMENT_TAG = function() {
    return this.getToken(AnnotationParser.COMMENT_TAG, 0);
};

New_line_declarationContext.prototype.variables_type_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Variables_type_declarationContext);
    } else {
        return this.getTypedRuleContext(Variables_type_declarationContext,i);
    }
};

New_line_declarationContext.prototype.COMMA_TAG = function() {
    return this.getToken(AnnotationParser.COMMA_TAG, 0);
};

New_line_declarationContext.prototype.NEWLINE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.NEWLINE_TAG);
    } else {
        return this.getToken(AnnotationParser.NEWLINE_TAG, i);
    }
};


New_line_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterNew_line_declaration(this);
	}
};

New_line_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitNew_line_declaration(this);
	}
};

New_line_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitNew_line_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.New_line_declarationContext = New_line_declarationContext;

AnnotationParser.prototype.new_line_declaration = function() {

    var localctx = new New_line_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, AnnotationParser.RULE_new_line_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(AnnotationParser.COMMENT_TAG);
        this.state = 112;
        this.variables_type_declaration();
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AnnotationParser.COMMA_TAG) {
            this.state = 113;
            this.match(AnnotationParser.COMMA_TAG);
            this.state = 114;
            this.variables_type_declaration();
        }

        this.state = 118; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 117;
        		this.match(AnnotationParser.NEWLINE_TAG);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 120; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
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


function Variables_type_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_variables_type_declaration;
    return this;
}

Variables_type_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variables_type_declarationContext.prototype.constructor = Variables_type_declarationContext;

Variables_type_declarationContext.prototype.BRACKET_LF = function() {
    return this.getToken(AnnotationParser.BRACKET_LF, 0);
};

Variables_type_declarationContext.prototype.variables = function() {
    return this.getTypedRuleContext(VariablesContext,0);
};

Variables_type_declarationContext.prototype.BRACKET_RT = function() {
    return this.getToken(AnnotationParser.BRACKET_RT, 0);
};

Variables_type_declarationContext.prototype.COLON_TAG = function() {
    return this.getToken(AnnotationParser.COLON_TAG, 0);
};

Variables_type_declarationContext.prototype.variables_type = function() {
    return this.getTypedRuleContext(Variables_typeContext,0);
};

Variables_type_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterVariables_type_declaration(this);
	}
};

Variables_type_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitVariables_type_declaration(this);
	}
};

Variables_type_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitVariables_type_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Variables_type_declarationContext = Variables_type_declarationContext;

AnnotationParser.prototype.variables_type_declaration = function() {

    var localctx = new Variables_type_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, AnnotationParser.RULE_variables_type_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(AnnotationParser.BRACKET_LF);
        this.state = 123;
        this.variables();
        this.state = 124;
        this.match(AnnotationParser.BRACKET_RT);
        this.state = 125;
        this.match(AnnotationParser.COLON_TAG);
        this.state = 126;
        this.variables_type();
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


function VariablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_variables;
    return this;
}

VariablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariablesContext.prototype.constructor = VariablesContext;

VariablesContext.prototype.VARNAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.VARNAME);
    } else {
        return this.getToken(AnnotationParser.VARNAME, i);
    }
};


VariablesContext.prototype.COMMA_TAG = function() {
    return this.getToken(AnnotationParser.COMMA_TAG, 0);
};

VariablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterVariables(this);
	}
};

VariablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitVariables(this);
	}
};

VariablesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitVariables(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.VariablesContext = VariablesContext;

AnnotationParser.prototype.variables = function() {

    var localctx = new VariablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, AnnotationParser.RULE_variables);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(AnnotationParser.VARNAME);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AnnotationParser.COMMA_TAG) {
            this.state = 129;
            this.match(AnnotationParser.COMMA_TAG);
            this.state = 130;
            this.match(AnnotationParser.VARNAME);
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


function Variables_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_variables_type;
    return this;
}

Variables_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variables_typeContext.prototype.constructor = Variables_typeContext;

Variables_typeContext.prototype.REAL = function() {
    return this.getToken(AnnotationParser.REAL, 0);
};

Variables_typeContext.prototype.SHORT = function() {
    return this.getToken(AnnotationParser.SHORT, 0);
};

Variables_typeContext.prototype.INT = function() {
    return this.getToken(AnnotationParser.INT, 0);
};

Variables_typeContext.prototype.FLOAT = function() {
    return this.getToken(AnnotationParser.FLOAT, 0);
};

Variables_typeContext.prototype.DOUBLE = function() {
    return this.getToken(AnnotationParser.DOUBLE, 0);
};

Variables_typeContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

Variables_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterVariables_type(this);
	}
};

Variables_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitVariables_type(this);
	}
};

Variables_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitVariables_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Variables_typeContext = Variables_typeContext;

AnnotationParser.prototype.variables_type = function() {

    var localctx = new Variables_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, AnnotationParser.RULE_variables_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AnnotationParser.REAL) | (1 << AnnotationParser.SHORT) | (1 << AnnotationParser.INT) | (1 << AnnotationParser.FLOAT) | (1 << AnnotationParser.DOUBLE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AnnotationParser.BRACKET_LF) {
            this.state = 134;
            this.array();
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


function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.array_dimension = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Array_dimensionContext);
    } else {
        return this.getTypedRuleContext(Array_dimensionContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.ArrayContext = ArrayContext;

AnnotationParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, AnnotationParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 137;
            this.array_dimension();
            this.state = 140; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AnnotationParser.BRACKET_LF);
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


function Array_dimensionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_array_dimension;
    return this;
}

Array_dimensionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_dimensionContext.prototype.constructor = Array_dimensionContext;

Array_dimensionContext.prototype.BRACKET_LF = function() {
    return this.getToken(AnnotationParser.BRACKET_LF, 0);
};

Array_dimensionContext.prototype.INTEGER = function() {
    return this.getToken(AnnotationParser.INTEGER, 0);
};

Array_dimensionContext.prototype.BRACKET_RT = function() {
    return this.getToken(AnnotationParser.BRACKET_RT, 0);
};

Array_dimensionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterArray_dimension(this);
	}
};

Array_dimensionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitArray_dimension(this);
	}
};

Array_dimensionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitArray_dimension(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.Array_dimensionContext = Array_dimensionContext;

AnnotationParser.prototype.array_dimension = function() {

    var localctx = new Array_dimensionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, AnnotationParser.RULE_array_dimension);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(AnnotationParser.BRACKET_LF);
        this.state = 143;
        this.match(AnnotationParser.INTEGER);
        this.state = 144;
        this.match(AnnotationParser.BRACKET_RT);
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


function To_ignoreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_to_ignore;
    return this;
}

To_ignoreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
To_ignoreContext.prototype.constructor = To_ignoreContext;

To_ignoreContext.prototype.ARCCOS_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.ARCCOS_TAG);
    } else {
        return this.getToken(AnnotationParser.ARCCOS_TAG, i);
    }
};


To_ignoreContext.prototype.ARCSIN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.ARCSIN_TAG);
    } else {
        return this.getToken(AnnotationParser.ARCSIN_TAG, i);
    }
};


To_ignoreContext.prototype.BRACKET_LF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.BRACKET_LF);
    } else {
        return this.getToken(AnnotationParser.BRACKET_LF, i);
    }
};


To_ignoreContext.prototype.BRACKET_RT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.BRACKET_RT);
    } else {
        return this.getToken(AnnotationParser.BRACKET_RT, i);
    }
};


To_ignoreContext.prototype.BREAKLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.BREAKLINE);
    } else {
        return this.getToken(AnnotationParser.BREAKLINE, i);
    }
};


To_ignoreContext.prototype.COLON_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.COLON_TAG);
    } else {
        return this.getToken(AnnotationParser.COLON_TAG, i);
    }
};


To_ignoreContext.prototype.COMMA_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.COMMA_TAG);
    } else {
        return this.getToken(AnnotationParser.COMMA_TAG, i);
    }
};


To_ignoreContext.prototype.COMMENT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.COMMENT_TAG);
    } else {
        return this.getToken(AnnotationParser.COMMENT_TAG, i);
    }
};


To_ignoreContext.prototype.COS_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.COS_TAG);
    } else {
        return this.getToken(AnnotationParser.COS_TAG, i);
    }
};


To_ignoreContext.prototype.COSH_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.COSH_TAG);
    } else {
        return this.getToken(AnnotationParser.COSH_TAG, i);
    }
};


To_ignoreContext.prototype.CURLY_LF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.CURLY_LF);
    } else {
        return this.getToken(AnnotationParser.CURLY_LF, i);
    }
};


To_ignoreContext.prototype.CURLY_RT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.CURLY_RT);
    } else {
        return this.getToken(AnnotationParser.CURLY_RT, i);
    }
};


To_ignoreContext.prototype.DOT_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.DOT_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.DOT_SYMBOL, i);
    }
};


To_ignoreContext.prototype.DIVISION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.DIVISION);
    } else {
        return this.getToken(AnnotationParser.DIVISION, i);
    }
};


To_ignoreContext.prototype.EQUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.EQUAL);
    } else {
        return this.getToken(AnnotationParser.EQUAL, i);
    }
};


To_ignoreContext.prototype.EULER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.EULER_NUMBER);
    } else {
        return this.getToken(AnnotationParser.EULER_NUMBER, i);
    }
};


To_ignoreContext.prototype.EXP_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.EXP_TAG);
    } else {
        return this.getToken(AnnotationParser.EXP_TAG, i);
    }
};


To_ignoreContext.prototype.FRAC_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.FRAC_TAG);
    } else {
        return this.getToken(AnnotationParser.FRAC_TAG, i);
    }
};


To_ignoreContext.prototype.FACTORIAL_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.FACTORIAL_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.FACTORIAL_SYMBOL, i);
    }
};


To_ignoreContext.prototype.GEQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GEQ_TAG);
    } else {
        return this.getToken(AnnotationParser.GEQ_TAG, i);
    }
};


To_ignoreContext.prototype.GEQQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GEQQ_TAG);
    } else {
        return this.getToken(AnnotationParser.GEQQ_TAG, i);
    }
};


To_ignoreContext.prototype.GEQSLANT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GEQSLANT_TAG);
    } else {
        return this.getToken(AnnotationParser.GEQSLANT_TAG, i);
    }
};


To_ignoreContext.prototype.GNEQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GNEQ_TAG);
    } else {
        return this.getToken(AnnotationParser.GNEQ_TAG, i);
    }
};


To_ignoreContext.prototype.GNEQQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GNEQQ_TAG);
    } else {
        return this.getToken(AnnotationParser.GNEQQ_TAG, i);
    }
};


To_ignoreContext.prototype.GREATER_EQUAL_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GREATER_EQUAL_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.GREATER_EQUAL_SYMBOL, i);
    }
};


To_ignoreContext.prototype.GREATER_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GREATER_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.GREATER_SYMBOL, i);
    }
};


To_ignoreContext.prototype.GT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.GT_TAG);
    } else {
        return this.getToken(AnnotationParser.GT_TAG, i);
    }
};


To_ignoreContext.prototype.HAT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.HAT);
    } else {
        return this.getToken(AnnotationParser.HAT, i);
    }
};


To_ignoreContext.prototype.IIINT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.IIINT_TAG);
    } else {
        return this.getToken(AnnotationParser.IIINT_TAG, i);
    }
};


To_ignoreContext.prototype.IINT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.IINT_TAG);
    } else {
        return this.getToken(AnnotationParser.IINT_TAG, i);
    }
};


To_ignoreContext.prototype.INT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.INT_TAG);
    } else {
        return this.getToken(AnnotationParser.INT_TAG, i);
    }
};


To_ignoreContext.prototype.JOIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.JOIN);
    } else {
        return this.getToken(AnnotationParser.JOIN, i);
    }
};


To_ignoreContext.prototype.LE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LE_TAG);
    } else {
        return this.getToken(AnnotationParser.LE_TAG, i);
    }
};


To_ignoreContext.prototype.LEQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LEQ_TAG);
    } else {
        return this.getToken(AnnotationParser.LEQ_TAG, i);
    }
};


To_ignoreContext.prototype.LEQQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LEQQ_TAG);
    } else {
        return this.getToken(AnnotationParser.LEQQ_TAG, i);
    }
};


To_ignoreContext.prototype.LEQSLANT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LEQSLANT_TAG);
    } else {
        return this.getToken(AnnotationParser.LEQSLANT_TAG, i);
    }
};


To_ignoreContext.prototype.LESS_EQUAL_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LESS_EQUAL_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.LESS_EQUAL_SYMBOL, i);
    }
};


To_ignoreContext.prototype.LESSER_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LESSER_SYMBOL);
    } else {
        return this.getToken(AnnotationParser.LESSER_SYMBOL, i);
    }
};


To_ignoreContext.prototype.LN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LN_TAG);
    } else {
        return this.getToken(AnnotationParser.LN_TAG, i);
    }
};


To_ignoreContext.prototype.LNEQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LNEQ_TAG);
    } else {
        return this.getToken(AnnotationParser.LNEQ_TAG, i);
    }
};


To_ignoreContext.prototype.LNEQQ_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LNEQQ_TAG);
    } else {
        return this.getToken(AnnotationParser.LNEQQ_TAG, i);
    }
};


To_ignoreContext.prototype.LOG_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LOG_TAG);
    } else {
        return this.getToken(AnnotationParser.LOG_TAG, i);
    }
};


To_ignoreContext.prototype.LT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.LT_TAG);
    } else {
        return this.getToken(AnnotationParser.LT_TAG, i);
    }
};


To_ignoreContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.MINUS);
    } else {
        return this.getToken(AnnotationParser.MINUS, i);
    }
};


To_ignoreContext.prototype.MULTIPLICATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.MULTIPLICATION);
    } else {
        return this.getToken(AnnotationParser.MULTIPLICATION, i);
    }
};


To_ignoreContext.prototype.PARENTHESIS_LF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.PARENTHESIS_LF);
    } else {
        return this.getToken(AnnotationParser.PARENTHESIS_LF, i);
    }
};


To_ignoreContext.prototype.PARENTHESIS_RT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.PARENTHESIS_RT);
    } else {
        return this.getToken(AnnotationParser.PARENTHESIS_RT, i);
    }
};


To_ignoreContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.PLUS);
    } else {
        return this.getToken(AnnotationParser.PLUS, i);
    }
};


To_ignoreContext.prototype.SIN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.SIN_TAG);
    } else {
        return this.getToken(AnnotationParser.SIN_TAG, i);
    }
};


To_ignoreContext.prototype.SINH_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.SINH_TAG);
    } else {
        return this.getToken(AnnotationParser.SINH_TAG, i);
    }
};


To_ignoreContext.prototype.SQRT_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.SQRT_TAG);
    } else {
        return this.getToken(AnnotationParser.SQRT_TAG, i);
    }
};


To_ignoreContext.prototype.SUBSTACK_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.SUBSTACK_TAG);
    } else {
        return this.getToken(AnnotationParser.SUBSTACK_TAG, i);
    }
};


To_ignoreContext.prototype.SUMMATION_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.SUMMATION_TAG);
    } else {
        return this.getToken(AnnotationParser.SUMMATION_TAG, i);
    }
};


To_ignoreContext.prototype.TAN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.TAN_TAG);
    } else {
        return this.getToken(AnnotationParser.TAN_TAG, i);
    }
};


To_ignoreContext.prototype.TANH_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.TANH_TAG);
    } else {
        return this.getToken(AnnotationParser.TANH_TAG, i);
    }
};


To_ignoreContext.prototype.UNDERSCORE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AnnotationParser.UNDERSCORE);
    } else {
        return this.getToken(AnnotationParser.UNDERSCORE, i);
    }
};


To_ignoreContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterTo_ignore(this);
	}
};

To_ignoreContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitTo_ignore(this);
	}
};

To_ignoreContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitTo_ignore(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.To_ignoreContext = To_ignoreContext;

AnnotationParser.prototype.to_ignore = function() {

    var localctx = new To_ignoreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, AnnotationParser.RULE_to_ignore);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 203;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 146;
                    this.matchWildcard();
                    break;

                case 2:
                    this.state = 147;
                    this.match(AnnotationParser.ARCCOS_TAG);
                    break;

                case 3:
                    this.state = 148;
                    this.match(AnnotationParser.ARCSIN_TAG);
                    break;

                case 4:
                    this.state = 149;
                    this.match(AnnotationParser.BRACKET_LF);
                    break;

                case 5:
                    this.state = 150;
                    this.match(AnnotationParser.BRACKET_RT);
                    break;

                case 6:
                    this.state = 151;
                    this.match(AnnotationParser.BREAKLINE);
                    break;

                case 7:
                    this.state = 152;
                    this.match(AnnotationParser.COLON_TAG);
                    break;

                case 8:
                    this.state = 153;
                    this.match(AnnotationParser.COMMA_TAG);
                    break;

                case 9:
                    this.state = 154;
                    this.match(AnnotationParser.COMMENT_TAG);
                    break;

                case 10:
                    this.state = 155;
                    this.match(AnnotationParser.COS_TAG);
                    break;

                case 11:
                    this.state = 156;
                    this.match(AnnotationParser.COSH_TAG);
                    break;

                case 12:
                    this.state = 157;
                    this.match(AnnotationParser.CURLY_LF);
                    break;

                case 13:
                    this.state = 158;
                    this.match(AnnotationParser.CURLY_RT);
                    break;

                case 14:
                    this.state = 159;
                    this.match(AnnotationParser.DOT_SYMBOL);
                    break;

                case 15:
                    this.state = 160;
                    this.match(AnnotationParser.DIVISION);
                    break;

                case 16:
                    this.state = 161;
                    this.match(AnnotationParser.EQUAL);
                    break;

                case 17:
                    this.state = 162;
                    this.match(AnnotationParser.EULER_NUMBER);
                    break;

                case 18:
                    this.state = 163;
                    this.match(AnnotationParser.EXP_TAG);
                    break;

                case 19:
                    this.state = 164;
                    this.match(AnnotationParser.FRAC_TAG);
                    break;

                case 20:
                    this.state = 165;
                    this.match(AnnotationParser.FACTORIAL_SYMBOL);
                    break;

                case 21:
                    this.state = 166;
                    this.match(AnnotationParser.GEQ_TAG);
                    break;

                case 22:
                    this.state = 167;
                    this.match(AnnotationParser.GEQQ_TAG);
                    break;

                case 23:
                    this.state = 168;
                    this.match(AnnotationParser.GEQSLANT_TAG);
                    break;

                case 24:
                    this.state = 169;
                    this.match(AnnotationParser.GNEQ_TAG);
                    break;

                case 25:
                    this.state = 170;
                    this.match(AnnotationParser.GNEQQ_TAG);
                    break;

                case 26:
                    this.state = 171;
                    this.match(AnnotationParser.GREATER_EQUAL_SYMBOL);
                    break;

                case 27:
                    this.state = 172;
                    this.match(AnnotationParser.GREATER_SYMBOL);
                    break;

                case 28:
                    this.state = 173;
                    this.match(AnnotationParser.GT_TAG);
                    break;

                case 29:
                    this.state = 174;
                    this.match(AnnotationParser.HAT);
                    break;

                case 30:
                    this.state = 175;
                    this.match(AnnotationParser.IIINT_TAG);
                    break;

                case 31:
                    this.state = 176;
                    this.match(AnnotationParser.IINT_TAG);
                    break;

                case 32:
                    this.state = 177;
                    this.match(AnnotationParser.INT_TAG);
                    break;

                case 33:
                    this.state = 178;
                    this.match(AnnotationParser.JOIN);
                    break;

                case 34:
                    this.state = 179;
                    this.match(AnnotationParser.LE_TAG);
                    break;

                case 35:
                    this.state = 180;
                    this.match(AnnotationParser.LEQ_TAG);
                    break;

                case 36:
                    this.state = 181;
                    this.match(AnnotationParser.LEQQ_TAG);
                    break;

                case 37:
                    this.state = 182;
                    this.match(AnnotationParser.LEQSLANT_TAG);
                    break;

                case 38:
                    this.state = 183;
                    this.match(AnnotationParser.LESS_EQUAL_SYMBOL);
                    break;

                case 39:
                    this.state = 184;
                    this.match(AnnotationParser.LESSER_SYMBOL);
                    break;

                case 40:
                    this.state = 185;
                    this.match(AnnotationParser.LN_TAG);
                    break;

                case 41:
                    this.state = 186;
                    this.match(AnnotationParser.LNEQ_TAG);
                    break;

                case 42:
                    this.state = 187;
                    this.match(AnnotationParser.LNEQQ_TAG);
                    break;

                case 43:
                    this.state = 188;
                    this.match(AnnotationParser.LOG_TAG);
                    break;

                case 44:
                    this.state = 189;
                    this.match(AnnotationParser.LT_TAG);
                    break;

                case 45:
                    this.state = 190;
                    this.match(AnnotationParser.MINUS);
                    break;

                case 46:
                    this.state = 191;
                    this.match(AnnotationParser.MULTIPLICATION);
                    break;

                case 47:
                    this.state = 192;
                    this.match(AnnotationParser.PARENTHESIS_LF);
                    break;

                case 48:
                    this.state = 193;
                    this.match(AnnotationParser.PARENTHESIS_RT);
                    break;

                case 49:
                    this.state = 194;
                    this.match(AnnotationParser.PLUS);
                    break;

                case 50:
                    this.state = 195;
                    this.match(AnnotationParser.SIN_TAG);
                    break;

                case 51:
                    this.state = 196;
                    this.match(AnnotationParser.SINH_TAG);
                    break;

                case 52:
                    this.state = 197;
                    this.match(AnnotationParser.SQRT_TAG);
                    break;

                case 53:
                    this.state = 198;
                    this.match(AnnotationParser.SUBSTACK_TAG);
                    break;

                case 54:
                    this.state = 199;
                    this.match(AnnotationParser.SUMMATION_TAG);
                    break;

                case 55:
                    this.state = 200;
                    this.match(AnnotationParser.TAN_TAG);
                    break;

                case 56:
                    this.state = 201;
                    this.match(AnnotationParser.TANH_TAG);
                    break;

                case 57:
                    this.state = 202;
                    this.match(AnnotationParser.UNDERSCORE);
                    break;

                } 
            }
            this.state = 207;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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


function EndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AnnotationParser.RULE_end;
    return this;
}

EndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndContext.prototype.constructor = EndContext;

EndContext.prototype.END_TAG = function() {
    return this.getToken(AnnotationParser.END_TAG, 0);
};

EndContext.prototype.enterRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.enterEnd(this);
	}
};

EndContext.prototype.exitRule = function(listener) {
    if(listener instanceof AnnotationListener ) {
        listener.exitEnd(this);
	}
};

EndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AnnotationVisitor ) {
        return visitor.visitEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AnnotationParser.EndContext = EndContext;

AnnotationParser.prototype.end = function() {

    var localctx = new EndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, AnnotationParser.RULE_end);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(AnnotationParser.END_TAG);
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


exports.AnnotationParser = AnnotationParser;
