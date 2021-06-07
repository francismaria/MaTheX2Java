/**
 * This file tests the SummationMethodSymbolTable class.
 *
 * © Francisco Maria, 2019
 */

/* eslint-disable */
const SummationMethodSymbolTable = require('structures/symbolTables/SummationMethodSymbolTable').SummationMethodSymbolTable;
const Symbol = require('structures/symbols/Symbol').Symbol;
const SummationSymbol = require('structures/symbols/SummationSymbol').SummationSymbol;
const InputTypeError = require('errors/InputTypeError').InputTypeError;

/** --------------------------
 *   TEST ADD/GET PARENT NAME
 *  -------------------------- */

test('Verify symbol table parent name', () => {
  const symbolTableTest = new SummationMethodSymbolTable('equation_test', null);
  expect(symbolTableTest.getParentName()).toBeNull();
  // invalid
  expect(symbolTableTest.addParent).toThrow(InputTypeError);
  expect(symbolTableTest.getParentName()).toBeNull();
  // valid
  symbolTableTest.addParent('parent_equation_test');
  expect(symbolTableTest.getParentName()).toBe('parent_equation_test');
});

/** --------------------------
 *        TEST BUFFER
 *  -------------------------- */

test('Verify symbol table parent name', () => {
  const symbolTableTest = new SummationMethodSymbolTable('equation_test', null);

  expect(symbolTableTest.getBuffer()).toBe('');

  symbolTableTest.addToBuffer('example')
  symbolTableTest.addToBuffer('2')

  expect(symbolTableTest.getBuffer()).toBe('example2');
});

test('Verify symbol table - save buffer', () => {
  const symbolTableTest = new SummationMethodSymbolTable('equation_test', null);

  expect(symbolTableTest.getBuffer()).toBe('');

  symbolTableTest.saveBuffer('buffer test')

  expect(symbolTableTest.getBuffer()).toBe('buffer test');
});

/** ----------------------------
 *   TEST GET INDEXES VARIABLES
 *  ---------------------------- */

test('Verify symbol table get indexes variables', () => {
  const exampleSymbolTable = new SummationMethodSymbolTable('equation_test', 'parent_equation_test');

  expect(exampleSymbolTable.getIndexesVariables()).toStrictEqual([]);
  exampleSymbolTable.addIndexVariable(new SummationSymbol('test', 'INT', false, true));
  expect(exampleSymbolTable.getIndexesVariables()).not.toBeNull();
  expect(exampleSymbolTable.addIndexVariable).toThrow(InputTypeError);
});

/** ----------------
 *   TEST IS CHILD
 *  ---------------- */

test('Verify symbol table get indexes variables', () => {
  const exampleSymbolTable = new SummationMethodSymbolTable('equation_test', null);

  expect(exampleSymbolTable.isChild()).toBe(false);
  exampleSymbolTable.addParent('parent_test');
  expect(exampleSymbolTable.isChild()).toBe(true);
});

/** -------------------------
 *   TEST INSERT UPPER BOUND
 *  ------------------------- */

test('Verify symbol table get indexes variables', () => {
  const exampleSymbolTable = new SummationMethodSymbolTable('equation_test', null);
  expect(exampleSymbolTable.getUpperBound()).toBeNull();
  // invalid
  expect(exampleSymbolTable.insertUpperBound).toThrow(InputTypeError);
  expect(exampleSymbolTable.getUpperBound()).toBeNull();
  // valid
  const upperExample = new SummationSymbol('test', 'INT', true, false);
  exampleSymbolTable.insertUpperBound(upperExample);
  expect(exampleSymbolTable.getUpperBound()).not.toBeNull();
  expect(exampleSymbolTable.getUpperBound()).toStrictEqual(upperExample);
});
