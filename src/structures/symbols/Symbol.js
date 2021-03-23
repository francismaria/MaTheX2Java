/**
 * © Francisco Maria, 2019
 */

// ESLint Disable rules
/* eslint-disable radix */

/**
 * Represents a symbol used in the generation of the code.
 */
class Symbol {
  constructor(name, type, isArgument) {
    this.name = name;
    this.type = type;
    this.isArgument = isArgument;
    // keeps track of the space necessary to alloc to each dimension
    this.arrayDimensions = [];
  }

  /**
   * It adds an array dimension to the variable (symbol).
   * Note: for each new dimension added it is pushed into the array.
   * @param {integer} dimensionAlloc represents the space necessary to alloc the dimension
   */
  addArrayDimension(dimensionAlloc) {
    this.arrayDimensions.push(dimensionAlloc);
  }

  /**
   * Returns the name of the symbol.
   */
  getName() {
    return this.name;
  }

  /**
   * Returns the type of the symbol.
   */
  getType() {
    return this.type;
  }

  /**
   * Returns the dimension requested allocated space.
   * Note: If the input number is not an integer or it is not inside the bounds of
   * the defined dimensions, then it returns null.
   * @param {integer} dimension the dimenson to get the allocated space
   */
  getDimensionReservedSpace(dimension) {
    if (!Number.isInteger(dimension)) {
      return null;
    }
    if (dimension > this.arrayDimensions.length || dimension < 0) {
      return null;
    }
    return parseInt(this.arrayDimensions[dimension]);
  }

  /**
   * Returns the number of dimentions of the symbol.
   */
  getNumberOfDimensions() {
    return this.arrayDimensions.length;
  }

  /**
   * Returns the array of dimensions of the symbol.
   * This function is necessary for copying the array to the
   * new summation symbol (then it will be correctly displayed
   * in the java generator).
   */
  getArrayDimensions() {
    return this.arrayDimensions;
  }

  /**
   * Returns true if the symbol is an argument to the
   * method it is in.
   * Otherwise, returns false.
   */
  isArg() {
    return this.isArgument;
  }

  /**
   * An equation has only one local variable: the result variable that
   * will be returned from the method.
   */
  isLocalResultVariable() {
    return !this.isArg();
  }

  /**
   * Returns true if the symbol represents an array.
   * In this case, the symbol is an array if the dimensions
   * array has elements.
   */
  isArray() {
    return (this.arrayDimensions.length > 0);
  }

  /**
   * Sets the argument flag to true or false
   * depending if the symbol (variable) is or not a an argument
   * to the method.
   * **Note**: If input is not of a valid type - boolean - then it
   * does not change the symbol's current value and returns.
   *
   * @param {boolean} isArgument states if the symbol is or not
   * an argument to the method it belongs to
   */
  setArgumentFlag(isArgument) {
    if (typeof isArgument !== 'boolean') {
      return;
    }
    this.isArgument = isArgument;
  }

  /**
   * Checks if the objets have the same name.
   * If they do, then they are the same.
   * @param {Symbol} obj any object
   */
  equals(obj) {
    if (obj instanceof Symbol) {
      return this.name === obj.getName();
    }
    return false;
  }
}

exports.Symbol = Symbol;
