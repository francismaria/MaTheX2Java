/**
 * © Francisco Maria, 2019
 */

// ESlint disable rules
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */

const Symbol = require('./Symbol').Symbol;

/* This represents a symbol which appears inside or related
 * with the generation of a summmation.
 */
class SummationSymbol extends Symbol {
  constructor(name, type, isArgument, indexVariable) {
    super(name, type, isArgument);
    this.indexVariable = indexVariable;
    this.infinity = false;
  }

  /**
   * Checks if the symbol is an index variable for
   * the summation.
   */
  isIndexVariable() {
    return this.indexVariable;
  }

  /**
   * Checks if the symbol is infinity.
   */
  isInfinity() {
    return this.infinity;
  }

  /**
   * Sets the symbol to an infinity value.
   */
  setAsInfinity() {
    this.infinity = true;
  }

  /**
   * Sets the dimensions of a summation symbol - which then turns
   * into an array.
   * If the input is not valid, the it does not change the
   * dimensions array and returns.
   * Otherwise, it copies the received array to the array
   * which holds the dimensions information in the object.
   * @param {*} dimensions input to set the array dimensions
   */
  setArrayDimensions(dimensions) {
    if (!this.validInputDimensions(dimensions)) {
      return; // throw InputTypeError
    }
    this.arrayDimensions = dimensions;
  }

  /**
   * Checks if input is indeed an array and if all elements of
   * the received array are integers.
   * @param {*} dimensions input to set the array dimensions
   */
  validInputDimensions(dimensions) {
    if (Array.isArray(dimensions)) {
      for (let i = 0; i < dimensions.length; i++) {
        if (!Number.isInteger(dimensions[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

exports.SummationSymbol = SummationSymbol;
