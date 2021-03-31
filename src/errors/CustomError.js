/**
 * © Francisco Maria, 2019
 */

class CustomError extends Error {
  constructor(line, column, message) {
    super();
    this.line = line;
    this.column = column;
    this.message = message;
  }

  toString() {
    return `In line: ${this.line}, column: ${this.column} - ${this.message}`;
  }
}

exports.CustomError = CustomError;
