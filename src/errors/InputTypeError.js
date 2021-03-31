/**
 * © Francisco Maria, 2019
 */

class InputTypeError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  toString() {
    return this.message;
  }
}

exports.InputTypeError = InputTypeError;
