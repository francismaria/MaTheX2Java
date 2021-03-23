/**
 * This file tests the MethodSymbolTable class.
 *
 * © Francisco Maria, 2019
 */

/* eslint-disable */

const MethodSymbolTable = require('../../src/structures/symbolTables/MethodSymbolTable').MethodSymbolTable;
const Symbol = require('../../src/structures/symbols/Symbol').Symbol;
const InputTypeError = require('../../src/visitors/errors/InputTypeError').InputTypeError;

// test symbol table
const symbolTableTest = new MethodSymbolTable('equation_tests');
// argument variable
const arg = new Symbol('arg', 'INT', true);
// local variable
const local = new Symbol('local', 'INT', false);
// non defined variable
const nonDefined = new Symbol('nonDefined', 'INT', null);

/** ------------------
 *   TEST CONSTRUCTOR
 *  ------------------ */

/*
//throws exception if constructor parameters are not of correct type
test('Verify constructor', () => {
    expect(symbolTableTest.getName()).toBe('equation_tests');
})
*/

/** ---------------
 *   TEST GET NAME
 *  --------------- */

test('Verify symbol table name', () => {
  expect(symbolTableTest.getName()).toBe('equation_tests');
});

/** --------------------------
 *   TEST ADD/GET RETURN TYPE
 *  -------------------------- */

test('Verify symbol table return type', () => {
  expect(symbolTableTest.getReturnType()).toBeNull();
  // valid
  symbolTableTest.addReturnType('INT');
  expect(symbolTableTest.getReturnType()).toBe('INT');
  // invalid
  symbolTableTest.addReturnType(12);
  expect(symbolTableTest.getReturnType()).toBe('INT');
});

/** ----------------------
 *   TEST INSERT VARIABLE
 *  ---------------------- */

test('Verify insert argument variable', () => {
  // insert argument
  symbolTableTest.insertVariable(arg);
  expect(symbolTableTest.getArguments()).toStrictEqual([arg]);
});

test('Verify insert local variable', () => {
  // insert local
  symbolTableTest.insertVariable(local);
  expect(symbolTableTest.getLocals()).toStrictEqual([local]);
});

test('Verify insert non defined variable', () => {
  // insert non defined
  expect(symbolTableTest.getNonDefinedVariables()).toStrictEqual([]);
  symbolTableTest.insertVariable(nonDefined);
  expect(symbolTableTest.getNonDefinedVariables()).toStrictEqual([nonDefined]);
});

test('Verify insert invalid variable', () => {
  // insert invalid
  symbolTableTest.insertVariable('error');
  expect(symbolTableTest.getArguments()).toStrictEqual([arg]);
  expect(symbolTableTest.getLocals()).toStrictEqual([local]);
  expect(symbolTableTest.getNonDefinedVariables()).toStrictEqual([nonDefined]);
});

/** ----------------------
 *   TEST LOOKUP VARIABLE
 *  ---------------------- */

test('Verify lookup symbol - non-exisiting symbol with no variables', () => {
  const symbolTable = new MethodSymbolTable('equation_tests');

  expect(symbolTable.lookupVariable('a')).toBeNull();
});

test('Verify lookup symbol - non-exisiting symbol with variables', () => {
  const symbolTable = new MethodSymbolTable('equation_tests');
  symbolTable.insertVariable(new Symbol('b', 'INT', true));

  expect(symbolTable.lookupVariable('a')).toBeNull();
});

test('Verify lookup symbol - exisiting symbol', () => {
  const symbolTable = new MethodSymbolTable('equation_tests');
  symbolTable.insertVariable(new Symbol('a', 'INT', true));

  expect(symbolTable.lookupVariable('a')).not.toBeNull();
});

test('Verify lookup symbol - invalid input', () => {
  const symbolTable = new MethodSymbolTable('equation_tests');

  expect(() => {symbolTable.lookupVariable(123);}).toThrow(InputTypeError);
  expect(() => {symbolTable.lookupVariable(new MethodSymbolTable('a'));}).toThrow(InputTypeError);
});

/** ----------------------
 *      TEST TO STRING
 *  ---------------------- */

test('Test toString()', () => {
  const symbolTableTestLookup = new MethodSymbolTable('equation_tests');
  expect(symbolTableTestLookup.toString()).toBe('--- equation_tests Symbol Table ---');
});
