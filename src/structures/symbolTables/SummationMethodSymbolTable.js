/**
 * © Francisco Maria, 2019
 */

// ESLint disable rules
/* eslint-disable prefer-destructuring */

// exceptions (errors)
const InputTypeError = require('../../visitors/errors/InputTypeError').InputTypeError;
// symbols
const Symbol = require('../symbols/Symbol').Symbol;
const SummationSymbol = require('../symbols/SummationSymbol').SummationSymbol;
// symbol table
const MethodSymbolTable = require('./MethodSymbolTable').MethodSymbolTable;

/**
 * This class represents a symbol table which handles all the
 * summation methods information.
 */
class SummationMethodSymbolTable extends MethodSymbolTable {
  constructor(name, parentName) {
    super(name);
    // Inits buffer
    this.buf = '';
    // Keeps track of the name of the parent summation
    this.parent = parentName;
    // This keeps track of all the indexes variables of the parent summations
    this.indexesVariables = [];
    // Needs to keep track of the upperbound symbol in order to generate it in the correct way.
    this.upperBound = null;
  }

  /**
   * Append elements (string) to buffer.
   * @param {string} elems elements to be appended
   */
  addToBuffer(elems) {
    this.buf += elems;
  }

  /**
   * If the summation method is a part of a complex summation
   * (a summation with multiple summations inside) then it needs
   * to keep track of the parent summation.
   *
   * @param {string} parentSummationName name of the parent summation method
   */
  addParent(parentSummationName) {
    if (typeof parentSummationName !== 'string') {
      throw new InputTypeError('SummationMethodSymbolTable: _addParent -> parent summation name can not be different from a string.');
    }
    this.parent = parentSummationName;
  }

  /**
   * Returns the name of the parent summation method.
   */
  getParentName() {
    return this.parent;
  }

  /**
   * Saves all the index variables to future child summations can have access.
   * @param {Symbol} variable symbol to be added
   */
  addIndexVariable(variable) {
    if (!(variable instanceof Symbol) && !(variable instanceof SummationSymbol)) {
      throw new InputTypeError('SummationMethodSymbolTable: _addIndexVariable -> input can not be different from a Symbol.');
    }
    this.indexesVariables.push(variable.getName());
    this.insertVariable(variable);
  }

  /**
   * Returns all the index variables of the current summation method.
   */
  getIndexesVariables() {
    return this.indexesVariables;
  }

  /**
   * Checks if the current summation method is a sub-summation
   * (a summation inside a summation).
   */
  isChild() {
    if (this.parent != null) {
      return true;
    }
    return false;
  }

  /**
   * Returns the saved buffer.
   */
  getBuffer() {
    return this.buf;
  }

  /**
   * Saves/assigns an external buffer to the current buffer.
   * @param {string} buf external buffer to be "copied"
   */
  saveBuffer(buf) {
    this.buf = buf;
  }

  /**
   * Sets an upperbound to the current summation method.
   * @param {*} symbol the upperbound
   */
  insertUpperBound(symbol) {
    if (!(symbol instanceof Symbol) && !(symbol instanceof SummationSymbol)) {
      throw new InputTypeError('SummationMethodSymbolTable: _insertUpperBound -> input can not be different from a Symbol.');
    }
    this.upperBound = symbol;
    super.insertVariable(symbol);
  }

  /**
   * Returns the upperbound symbol.
   */
  getUpperBound() {
    return this.upperBound;
  }

  /*
  // WHY ISN'T IT WORKING WITH JEST UNIT TESTS?
  validateSymbolInput(variable) {
    return (variable instanceof Symbol) && (variable instanceof SummationSymbol);
  } */
}

exports.SummationMethodSymbolTable = SummationMethodSymbolTable;
