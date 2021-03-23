/**
 * © Francisco Maria, 2019
 */

class ArrayIndexOutOfBoundsError extends Error {
  constructor(equationName, variableName) {
    super();
    this.equationName = equationName;
    this.variableName = variableName;
  }

  toString() {
    return `In equation " ${this.equationName} ", the variable ${this.variableName} index goes out of the reserved space.`;
  }
}

exports.ArrayIndexOutOfBoundsError = ArrayIndexOutOfBoundsError;
