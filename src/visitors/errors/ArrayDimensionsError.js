/**
 * © Francisco Maria, 2019
 */

class ArrayDimensionsError extends Error {
  constructor(equationName, variableName) {
    super();
    this.equationName = equationName;
    this.variableName = variableName;
  }

  toString() {
    return `In equation " ${this.equationName} ", the variable " ${this.variableName} " array dimensions do not match. Please check the reserved space.`;
  }
}

exports.ArrayDimensionsError = ArrayDimensionsError;
