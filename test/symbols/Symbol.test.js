/**
 * This file tests the Symbol class.
 *
 * © Francisco Maria, 2019
 */

/* eslint-disable */

const Symbol = require('Structures/symbols/Symbol').Symbol;
// Symbol that is an argument
const testArgumentSymbol = new Symbol('testArg', 'INT', true);
// Symbol that is not an argument and is an multi-dimensional array (3 dims)
const testNonArgumentSymbol = new Symbol('testNonArg', 'FLOAT', false);

testNonArgumentSymbol.addArrayDimension(10);
testNonArgumentSymbol.addArrayDimension(5);
testNonArgumentSymbol.addArrayDimension(3);

/** ----------------------------
 *       TEST SYMBOL NAME
 *  ---------------------------- */

test('Verify symbol name', () => {
  expect(testArgumentSymbol.getName()).toBe('testArg');
  expect(testNonArgumentSymbol.getName()).toBe('testNonArg');
})

/** ----------------------------
 *       TEST SYMBOL TYPE
 *  ---------------------------- */

test('Verify symbol type', () => {
  expect(testArgumentSymbol.getType()).toBe('INT');
  expect(testNonArgumentSymbol.getType()).toBe('FLOAT');
});

/** -----------------------------
 *     TEST SYMBOL IS ARG FLAG
 *  ----------------------------- */

test('Verify symbol\'s argument flag', () => {
  expect(testArgumentSymbol.isArg()).toBe(true);
  expect(testNonArgumentSymbol.isArg()).toBe(false);
});

/** -----------------------------------
*    TEST SYMBOL IS LOCAL RESULT FLAG
*  ----------------------------------- */

test('Verify symbol\'s local result flag', () => {
  expect(testArgumentSymbol.isLocalResultVariable()).toBe(false);
  expect(testNonArgumentSymbol.isLocalResultVariable()).toBe(true);
});

/** -----------------------------
 *    TEST SYMBOL IS ARRAY FLAG
 *  ----------------------------- */

test('Verify symbol\'s array flag (false)', () => {
  expect(testArgumentSymbol.isArray()).toBe(false);
  expect(testNonArgumentSymbol.isArray()).toBe(true);
});

/** ---------------------------------------
 *  TEST SYMBOL ARRAY DIMENSIONS STRUCTURE
 *  --------------------------------------- */

test('Verify symbol\'s array structure', () => {
  const expectedArray = [10, 5, 3];
  expect(testNonArgumentSymbol.getArrayDimensions()).toEqual(expectedArray);
});

/** ------------------------------------
 *  TEST SYMBOL ARRAY - DIMENSIONS COUNT
 *  ------------------------------------ */

test('Verify symbol\'s array: dimension count', () => {
  // Not an array
  expect(testArgumentSymbol.getNumberOfDimensions()).toBe(0);
  // Array
  expect(testNonArgumentSymbol.getNumberOfDimensions()).toBe(3);
});

/** ---------------------------------------------
 *  TEST SYMBOL ARRAY - DIMENSION RESERVED SPACE
 *  --------------------------------------------- */

test('Verify symbol\'s array: reserved space for dimension', () => {
  // valid values
  expect(testNonArgumentSymbol.getDimensionReservedSpace(0)).toBe(10);
  expect(testNonArgumentSymbol.getDimensionReservedSpace(1)).toBe(5);
  expect(testNonArgumentSymbol.getDimensionReservedSpace(2)).toBe(3);
  // out of bounds
  expect(testNonArgumentSymbol.getDimensionReservedSpace(500)).toBe(null);
  expect(testNonArgumentSymbol.getDimensionReservedSpace(-1)).toBe(null);
  // invalid values
  expect(testNonArgumentSymbol.getDimensionReservedSpace(0.5345395)).toBe(null);
  expect(testNonArgumentSymbol.getDimensionReservedSpace('error')).toBe(null);
});


/** -------------------------------------------
 *    TEST SYMBOL SET ARGUMENT FLAG OPERATION
 *  ------------------------------------------- */

test('Verify symbol\'s set argument flag operation', () => {
  let exampleSymbol = new Symbol('example', 'DOUBLE', false);

  expect(exampleSymbol.isArg()).toBe(false);
  exampleSymbol.setArgumentFlag(true);
  expect(exampleSymbol.isArg()).toBe(true);

  // invalid values
  exampleSymbol.setArgumentFlag('error');
  expect(exampleSymbol.isArg()).toBe(true);
  exampleSymbol.setArgumentFlag(0.52342342);
  expect(exampleSymbol.isArg()).toBe(true);
});

/** ---------------------
 *    TEST SYMBOL EQUALS
 *  --------------------- */

test('Verify symbol equals', () => {
  const equalArgumentSymbol = new Symbol('testArg', 'INT', true);
  // valid
  expect(equalArgumentSymbol.equals(testArgumentSymbol)).toBe(true);
  expect(equalArgumentSymbol.equals(testNonArgumentSymbol)).toBe(false);
  // invalid
  expect(equalArgumentSymbol.equals('error')).toBe(false);
  expect(equalArgumentSymbol.equals(1323)).toBe(false);
});
