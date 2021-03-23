/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */

const antlr4 = require('antlr4');
const CustomError = require('./CustomError').CustomError;

class AmsmathErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  existErrors() {
    return this.errors.length > 0;
  }

  /**
   * Checks syntax error
   *
   * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
   * @param {object} symbol Offending symbol
   * @param {int} line Line of offending symbol
   * @param {int} column Position in line of offending symbol
   * @param {string} message Error message
   * @param {string} payload Stack trace
   */
  syntaxError(recognizer, symbol, line, column, message, payload) {
    // throw new SyntaxGenericError({line, column, message});

    const error = { message, line, column };

    this.errors.push(error);
    console.error(message);
    console.debug(this.errors);
    throw new CustomError(line, column, message);
  }
}

exports.AmsmathErrorListener = AmsmathErrorListener;
