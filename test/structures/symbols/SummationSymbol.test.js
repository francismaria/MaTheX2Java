/**
 * This file tests the SummationSymbol class.
 *
 * © Francisco Maria, 2019
 */

/* eslint-disable */

const SummationSymbol = require('structures/symbols/SummationSymbol').SummationSymbol;
// Summation Symbol that is an argument and is not an index variable
const testArgumentSymbol = new SummationSymbol('argVar', 'INT', true, false);
// Summation Symbol that is not an argument and is an index variable
const testIndexVariableSymbol = new SummationSymbol('indexVar', 'INT', false, true);

test('Argument symbol is not set as an index variable', () => {
  expect(testArgumentSymbol.isIndexVariable()).toBe(false);
});

test('Index variable symbol is set as an index variable', () => {
  expect(testIndexVariableSymbol.isIndexVariable()).toBe(true);
});

test('Infinity flag is set to false by default', () => {
  const exampleSymbol = new SummationSymbol('argVar', 'INT', true, false);

  expect(exampleSymbol.isInfinity()).toBe(false);
});

test('Infinity flag is set to true on demand', () => {
  const exampleSymbol = new SummationSymbol('argVar', 'INT', true, false);
  exampleSymbol.setAsInfinity();

  expect(exampleSymbol.isInfinity()).toBe(true);
});

/** ----------------------------------------------
 *   TEST SUMMATION SYMBOL SET ARRAY DIMENSIONS
 *  ---------------------------------------------- */

test('Verify set array dimensions operations', () => {
  // Summation Symbol that is an argument and is not an index variable
  const testDimsSymbol = new SummationSymbol('argVar', 'INT', true, false);
  const validDimensions = [10,7,5,4];

  testDimsSymbol.setArrayDimensions(validDimensions);
  expect(testDimsSymbol.getArrayDimensions()).toEqual(validDimensions);

  // invalid dimensions
  const invalidDimensions = ['error', 2, 0.4324];

  testDimsSymbol.setArrayDimensions(invalidDimensions);
  expect(testDimsSymbol.getArrayDimensions()).toEqual([10,7,5,4]);
  testDimsSymbol.setArrayDimensions('error');
  expect(testDimsSymbol.getArrayDimensions()).toEqual([10,7,5,4]);
});
