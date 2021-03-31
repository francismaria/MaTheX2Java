/**
 * © Francisco Maria, 2019
 */

 class EmptyInputCodeError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  toString() {
    return this.message;
  }
}

exports.EmptyInputCodeError = EmptyInputCodeError;
