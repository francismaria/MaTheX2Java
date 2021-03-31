/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

// exceptions (errors)
const InputTypeError = require('Errors/InputTypeError').InputTypeError;
// symbols
const Symbol = require('../symbols/Symbol').Symbol;
const SummationSymbol = require('../symbols/SummationSymbol').SummationSymbol;

/**
 * This class represents a symbol table for a method.
 */
class MethodSymbolTable {
  constructor(name) {
    this.name = name;
    this.returnType = null;
    this.variables = [];
  }

  /**
   * Sets a return type for the method.
   * @param {*} returnType type of the method return value
   */
  addReturnType(returnType) {
    // checks if input is valid
    if (typeof returnType !== 'string') return;

    this.returnType = returnType;
  }

  /**
   * Returns the name of the method.
   */
  getName() {
    return this.name;
  }

  /**
   * Returns the return type of the method.
   */
  getReturnType() {
    return this.returnType;
  }

  /**
   * Inserts a new variable into the symbol table.
   * If the input is not valid then it just returns and
   * does not do any alterations to the symbol table.
   * @param {*} newVar new variable to be inserted in the symbol table
   */
  insertVariable(newVar) {
    if (!(newVar instanceof Symbol) && !(newVar instanceof SummationSymbol)) return;

    this.variables.push(newVar);
  }

  /**
   * Returns the symbol (variable) with the specified name (input).
   * @param {string} varName name of the variable to retrieve
   */
  lookupVariable(varName) {
    if (typeof varName !== 'string') {
      throw new InputTypeError('lookup variable: the variable name to look for must be of the \'string\' type.');
    }

    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].getName() === varName) {
        return this.variables[i];
      }
    }
    return null;
  }

  /**
   * Non defined variables are variables whose "invocation" is not know -
   * variables that come from annotations.
   * A non defined variable has a value of null , coming from the annotation visitor
   */
  getNonDefinedVariables() {
    const args = [];

    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].isArg() == null) {
        args.push(this.variables[i]);
      }
    }
    return args;
  }

  /**
   * Returns the arguments of the method.
   */
  getArguments() {
    const args = [];

    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].isArg()) {
        args.push(this.variables[i]);
      }
    }
    return args;
  }

  /**
   * Returns the local variables of the method.
   */
  getLocals() {
    const locals = [];

    for (let i = 0; i < this.variables.length; i++) {
      if (this.variables[i].isArg() === false) {
        locals.push(this.variables[i]);
      }
    }
    return locals;
  }

  // TODO: TO BE IMPLEMENTED
  toString() {
    const print = `--- ${this.name} Symbol Table ---`;

    /* for(let i = 0; i < this.variables.length; i++){
        console.log(this.variables[i])
    } */
    return print;
  }
}

exports.MethodSymbolTable = MethodSymbolTable;
