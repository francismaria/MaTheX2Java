/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-constructor */

const MethodSymbolTable = require('./MethodSymbolTable').MethodSymbolTable;

class FactorialMethodSymbolTable extends MethodSymbolTable {
  constructor(name) {
    super(name);
  }
}


exports.FactorialMethodSymbolTable = FactorialMethodSymbolTable;
