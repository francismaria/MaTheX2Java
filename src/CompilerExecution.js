/**
 * © Francisco Maria, 2019
 */

// ESLint disable rules
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */

const antlr4 = require('antlr4/index');
// -- Generator for Java code
const JavaGenerator = require('Java/JavaGenerator').JavaGenerator;
// -- Annotation Grammar
const AnnotationLexer = require('Grammars/static/AnnotationGrammar/AnnotationLexer').AnnotationLexer;
const AnnotationParser = require('Grammars/static/AnnotationGrammar/AnnotationParser').AnnotationParser;
const AnnotationCodeVisitor = require('Visitors/annotation/AnnotationCodeVisitor').AnnotationCodeVisitor;
// -- Amsmath Grammar
const AmsmathLexer = require('Grammars/static/AmsmathGrammar/GrammarLexer').GrammarLexer;
const AmsmathParser = require('Grammars/static/AmsmathGrammar/GrammarParser').GrammarParser;
const AmsmathGenerateCodeVisitor = require('Visitors/amsmath/AmsmathGenerateCodeVisitor').AmsmathGenerateCodeVisitor;
const AmsmathErrorHandler = require('Visitors/errors/AmsmathErrorHandler').AmsmathErrorListener;
// -- Symbols Table
const GlobalSymbolTable = require('Structures/symbolTables/GlobalSymbolTable').GlobalSymbolTable;

/**
 * Class responsible for the building and the execution of the grammars parsers.
 */
class CompilerExecution {
  constructor(input, fileName) {
    this.fileName = fileName;
    this.globalSymbolTable = new GlobalSymbolTable();
    this.javaGenerator = new JavaGenerator(this.fileName, this.globalSymbolTable);

    this.initAnnotationParsing(input);
    this.initCodeParsing(input);
  }

  /* ---------------------------- *
   *  Annotation Parser and Tree
   * ---------------------------- */

  /**
   * Creates and runs the parser of the code related
   * with the annotaions.
   * @param {string} input user input
   */
  initAnnotationParsing(input) {
    this.annotationChars = new antlr4.InputStream(input);
    this.annotationLexer = new AnnotationLexer(this.annotationChars);
    this.annotationTokens = new antlr4.CommonTokenStream(this.annotationLexer);
    this.annotationParser = new AnnotationParser(this.annotationTokens);

    const errorHandler = new AmsmathErrorHandler();

    this.annotationParser.removeErrorListeners();
    this.annotationParser.addErrorListener(errorHandler);
  }

  /**
   * Builds the parse tree of the annotation code.
   */
  buildAnnotationParseTrees() {
    this.annotationParser.buildParseTrees = true;
    this.annotationTree = this.annotationParser.run();
  }

  /**
   * Returns the annotation parser.
   */
  getAnnotationParser() {
    return this.annotationParser;
  }

  /**
   * Returns the parsing tree for the annotations code.
   */
  getAnnotationTree() {
    return this.annotationTree;
  }

  /**
   * Visits/traverses the annotation code tree in order
   * to generate the correspondent Java code.
   */
  walkAnnotationTree() {
    this.annotationTree.accept(new AnnotationCodeVisitor(this.globalSymbolTable));
  }

  /* ---------------------------- *
   *    Amsmath Parser and Tree
   * ---------------------------- */

  /**
   * Creates and runs the parser for the LaTeX/amsmath code.
   * @param {string} input user input
   */
  initCodeParsing(input) {
    this.codeChars = new antlr4.InputStream(input);
    this.codeLexer = new AmsmathLexer(this.codeChars);
    this.codeTokens = new antlr4.CommonTokenStream(this.codeLexer);
    this.codeParser = new AmsmathParser(this.codeTokens);

    const errorHandler = new AmsmathErrorHandler();

    this.codeParser.removeErrorListeners();
    this.codeParser.addErrorListener(errorHandler);
  }

  /**
   * Builds the parse tree of the LaTeX (amsmath) code.
   */
  buildCodeParseTrees() {
    this.codeParser.buildParseTrees = true;
    this.codeTree = this.codeParser.chat();
  }

  /**
   * Returns the LaTeX (amsmath) code parser.
   */
  getCodeParser() {
    return this.codeParser;
  }

  /**
   * Returns the parsing tree for the LaTeX code.
   */
  getCodeTree() {
    return this.codeTree;
  }

  /**
   * Visits/traverses the annotation code tree in order
   * to generate the correspondent Java code.
   */
  walkAmsmathTree() {
    this.codeTree.accept(
      new AmsmathGenerateCodeVisitor(this.javaGenerator)
    );
  }

  finalize() {
    return this.javaGenerator.getTranslation();
  }
}

exports.CompilerExecution = CompilerExecution;
