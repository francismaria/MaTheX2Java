/**
 * This file tests the GlobalSymbolTable class.
 *
 * © Francisco Maria, 2019
 */

/* eslint-disable */

const GlobalSymbolTable = require('structures/symbolTables/GlobalSymbolTable').GlobalSymbolTable;
const InputTypeError = require('errors/InputTypeError').InputTypeError;

/** -----------------------------
 *   TEST METHOD NAME VALIDATION
 *  ----------------------------- */

test('Test validateMethodName - Valid input', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.validateMethodName('newMethodName')).toBe(true);
  expect(symbolTable.validateMethodName('   newMethodName')).toBe(true);
  expect(symbolTable.validateMethodName('_____newMethodName75612_?')).toBe(true);
});

test('Test validateMethodName - Invalid input', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.validateMethodName('')).toBe(false);
  expect(symbolTable.validateMethodName('   ')).toBe(false);
  expect(symbolTable.validateMethodName(1732392)).toBe(false);
  expect(symbolTable.validateMethodName(new GlobalSymbolTable())).toBe(false);
});

/** ---------------------------
 *      TEST INSERT METHOD
 *  --------------------------- */

test('Test insertMethod - Valid input', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(() => {symbolTable.insertMethod('newMethodName');}).not.toThrow(InputTypeError);
  expect(() => {symbolTable.insertMethod('   NewMethodName   ');}).not.toThrow(InputTypeError);
  expect(() => {symbolTable.insertMethod('128931928');}).not.toThrow(InputTypeError);
  expect(symbolTable.getAllMethods().length).toBe(3);
});

test('Test insertMethod - Invalid input', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(() => {symbolTable.insertMethod('');}).toThrow(InputTypeError);
  expect(() => {symbolTable.insertMethod('       ');}).toThrow(InputTypeError);
  expect(() => {symbolTable.insertMethod(1732392);}).toThrow(InputTypeError);
  expect(() => {symbolTable.insertMethod(new GlobalSymbolTable());}).toThrow(InputTypeError);
  expect(symbolTable.getAllMethods().length).toBe(0);
});

/** ---------------------------------
 *    TEST INSERT FACTORIAL METHOD
 *  --------------------------------- */

test('Test insertFactorialMethod', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.getAllMethods().length).toBe(0);

  symbolTable.insertFactorialMethod();

  expect(symbolTable.getAllMethods().length).toBe(1);
  expect(symbolTable.lookupMethod('factorial_MX2J')).not.toBeNull();
});

/** ---------------------------------
 *    TEST INSERT SUMMATION METHOD
 *  --------------------------------- */

test('Test insertSummationMethod', () => {
  const symbolTable = new GlobalSymbolTable();

  symbolTable.insertSummationMethod(null);

  expect(symbolTable.lookupMethod('summation_MX2J_0')).not.toBe(null);
  expect(symbolTable.lookupMethod('summation_MX2J_1')).toBe(null);

  symbolTable.insertSummationMethod(null);

  expect(symbolTable.lookupMethod('summation_MX2J_1')).not.toBe(null);
});

/** ---------------------------------
 *        TEST LOOKUP METHOD
 *  --------------------------------- */

test('Test lookupMethod - Found', () => {
  const symbolTable = new GlobalSymbolTable();

  symbolTable.insertMethod('newMethodName');
  expect(symbolTable.lookupMethod('newMethodName')).not.toBe(null);
});

test('Test lookupMethod - Not found', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.lookupMethod('newMethodName')).toBe(null);
});

/** ---------------------------------
 *       TEST GET ALL METHODS 
 *  --------------------------------- */

test('Test getAllMethods', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.getAllMethods().length).toBe(0);

  symbolTable.insertMethod('newMethodName');
  symbolTable.insertFactorialMethod();
  symbolTable.insertSummationMethod(null);

  expect(symbolTable.getAllMethods().length).toBe(3);
});

/** ---------------------------------
 *    TEST GET EQUATIONS METHODS
 *  --------------------------------- */

test('Test getEquationsMethods', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.getEquationsMethods().length).toBe(0);

  symbolTable.insertMethod('newMethodName');
  symbolTable.insertFactorialMethod();
  symbolTable.insertSummationMethod(null);

  expect(symbolTable.getEquationsMethods().length).toBe(1);
});

/** ---------------------------------
 *    TEST GET SUMMATION METHODS
 *  --------------------------------- */

test('Test getSummationMethods', () => {
  const symbolTable = new GlobalSymbolTable();

  expect(symbolTable.getSummationsMethods().length).toBe(0);

  symbolTable.insertMethod('newMethodName');
  symbolTable.insertSummationMethod(null);
  symbolTable.insertSummationMethod(null);

  expect(symbolTable.getSummationsMethods().length).toBe(2);
});

/** ---------------------------------
 *    TEST GET SUMMATION METHODS
 *  --------------------------------- */

test('Test toString', () => {
  const symbolTable = new GlobalSymbolTable();

  symbolTable.insertSummationMethod(null);
  
  expect(symbolTable.toString()).toBe();
});