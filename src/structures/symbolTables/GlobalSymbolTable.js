/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */

// templates
const FACTORIAL_METHOD_TEMPLATE = 'factorial_MX2J';
const SUMMATION_METHOD_PREFIX_TEMPLATE = 'summation_MX2J_';
// exceptions (errors)
const InputTypeError = require('errors/InputTypeError').InputTypeError;
// symbol tables
const MethodSymbolTable = require('./MethodSymbolTable').MethodSymbolTable;
const FactorialMethodSymbolTable = require('./FactorialMethodSymbolTable').FactorialMethodSymbolTable;
const SummationMethodSymbolTable = require('./SummationMethodSymbolTable').SummationMethodSymbolTable;

/**
 * Class which represents the symbol table for all of the methods
 * that are generated.
 */
class GlobalSymbolTable {
  constructor() {
    this.methodsSymbolTables = [];
    this.summationsCounter = 0;
  }

  /**
   * Inserts a new (regular) method symbol table.
   * @param {string} equationName the name of the new method
   */
  insertMethod(equationName) {
    if (!this.validateMethodName(equationName)) {
      throw new InputTypeError('GlobalSymbolTable: _insertMethod -> the equation name must be a string and can not be empty.');
    }
    this.methodsSymbolTables.push(new MethodSymbolTable(equationName));
  }

  /**
   * Inserts a symbol table for the factorial method.
   */
  insertFactorialMethod() {
    this.methodsSymbolTables.push(new FactorialMethodSymbolTable(FACTORIAL_METHOD_TEMPLATE));
  }

  /**
   * Inserts a new summation method symbol table.
   * @param {string} parentName the name of the parent summation of the summation to be added
   */
  insertSummationMethod(parentName) {
    const summationName = SUMMATION_METHOD_PREFIX_TEMPLATE + this.summationsCounter;

    this.methodsSymbolTables.push(new SummationMethodSymbolTable(summationName, parentName));
    this.summationsCounter++;

    return summationName;
  }

  /**
   * Checks if name is of type string.
   * If true, then it checks if it is acceptable:
   * It can't be just whitespaces, or just ''.
   * @param {string} name input to validate
   */
  validateMethodName(name) {
    if (typeof name !== 'string') {
      return false;
    }
    return (name !== '' && name.trim().length !== 0);
  }

  /**
   * Returns the symbol table of the method, if exists.
   * Otherwise, returns null.
   * @param {string} name name of the method to look for.
   */
  lookupMethod(methodName) {
    for (let i = 0; i < this.methodsSymbolTables.length; i++) {
      if (this.methodsSymbolTables[i].getName() === methodName) {
        return this.methodsSymbolTables[i];
      }
    }
    return null;
  }

  /**
   * Returns all registered methods symbol tables.
   */
  getAllMethods() {
    return this.methodsSymbolTables;
  }

  /**
   * Returns only the methods that correspond to equations.
   */
  getEquationsMethods() {
    const equationsMethods = [];

    for (let i = 0; i < this.methodsSymbolTables.length; i++) {
      if (!(this.methodsSymbolTables[i] instanceof SummationMethodSymbolTable)
          && !(this.methodsSymbolTables[i] instanceof FactorialMethodSymbolTable)) {
        equationsMethods.push(this.methodsSymbolTables[i]);
      }
    }
    return equationsMethods;
  }

  /**
   * Returns only the symbol tables which correspond to summation methods.
   */
  getSummationsMethods() {
    const summationsMethods = [];

    for (let i = 0; i < this.methodsSymbolTables.length; i++) {
      if (this.methodsSymbolTables[i] instanceof SummationMethodSymbolTable) {
        summationsMethods.push(this.methodsSymbolTables[i]);
      }
    }
    return summationsMethods;
  }

  toString() {
    for (let i = 0; i < this.methodsSymbolTables.length; i++) {
      console.debug(this.methodsSymbolTables[i]);
    }
  }
}

exports.GlobalSymbolTable = GlobalSymbolTable;
