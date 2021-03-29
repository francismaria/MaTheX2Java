/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable space-infix-ops */
/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/**
 * © Francisco Maria, 2019
 */

// ESLint disabled rules
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */

/**
 * © Francisco Maria, 2019
 */

const AnnotationVisitor = require('Grammars/static/AnnotationGrammar/AnnotationVisitor').AnnotationVisitor;
const Symbol = require('Structures/symbols/Symbol').Symbol;

/**
 * This class is a custom visitor for the Annotation grammar of the MatheX2Java application.
 */
class AnnotationCodeVisitor extends AnnotationVisitor {
  constructor(symbolTable) {
    super();
    this.symbolTable = symbolTable;
    this.equationName = null;
    this.nameSpecified = false;
    this.returnType = null;
    this.equationsCount = 0;
    this.variablesParsed = [];
  }

  visitRun(ctx) {
    this.visitChildren(ctx);
  }

  // -- Custom Method Name ---

  visitMethod_name(ctx) {
    console.debug(ctx.toString());
  }

  visitMethod_specs(ctx) {
    this.visitChildren(ctx);
  }

  visitName_spec(ctx) {
    this.equationName = this.visitTerminal(ctx.VARNAME(0));
    this.symbolTable.insertMethod(this.equationName);
    this.nameSpecified = true;
  }

  visitReturn_spec(ctx) {
    this.visitChildren(ctx);
  }

  visitReturn_type(ctx) {
    this.returnType = this.visitTerminal(ctx.getChild(0)).toUpperCase();
  }

  // --- Start ---

  /**
     * Increments the counting of the number of equations
     * defined in the input and checks if it is necessary or not
     * to define a template name for the method that will be created.
     * @param {*} ctx
     */
  visitStart(ctx) {
    // if it was not mentioned any desired name for the equation method in the java method, then it assigns an iterative name
    if (this.equationName == null || this.nameSpecified === false) {
      this.equationName = 'equation_' + this.equationsCount.toString();
      this.symbolTable.insertMethod(this.equationName);
    }
    this.addMethodReturnType(this.equationName, this.returnType);
    this.equationsCount++;
    // updates for each environment visit -> if the name is nor specified then it must be assigned a template method name
    this.nameSpecified = false;
  }

  addMethodReturnType(equationName, returnType) {
    if (this.returnType == null) {
      this.returnType = 'REAL';
    }
    this.symbolTable.lookupMethod(equationName).addReturnType(returnType);
  }

  // --- Variable Specifications ---

  visitVariable_specs(ctx) {
    this.visitChildren(ctx);
  }

  visitNew_line_declaration(ctx) {
    this.visitChildren(ctx);
  }

  visitVariables_type_declaration(ctx) {
    this.visitChildren(ctx);
  }

  /**
   * Visits the "variables" node which has all the variables
   * that are being defined with the respective type.
   *
   * **Note:** The number of variables is always one element more than
   * the commas:
   *
   *      a,b,c,d : vars = 4 | commas = 3
   *
   * @param {*} ctx
   */
  visitVariables(ctx) {
    const childCount = ctx.getChildCount();
    const variablesCount = childCount - (Math.floor(childCount / 2));
    const variablesParsed = [];

    for (let i = 0, j = 0; i < variablesCount; i++, j = j+2) {
      this.variablesParsed.push(this.visitTerminal(ctx.getChild(j)));
    }
    return variablesParsed;
  }

  visitVariables_type(ctx) {
    const methodSymbolTable = this.symbolTable.lookupMethod(this.equationName);

    // the use of toUpperCase() is for the variables type to be unified and not to have some in caps lock and others in lowercase.
    for (let i = 0; i < this.variablesParsed.length; i++) {
      methodSymbolTable.insertVariable(new Symbol(this.variablesParsed[i], this.visitTerminal(ctx.getChild(0)).toUpperCase(), null));
    }

    this.visitChildren(ctx);

    // empties/resets variables parsed data structure for others can be parsed
    this.variablesParsed = [];
  }

  visitArray(ctx) {
    this.visitChildren(ctx);
  }

  visitArray_dimension(ctx) {
    const methodSymbolTable = this.symbolTable.lookupMethod(this.equationName);

    for (let i = 0; i < this.variablesParsed.length; i++) {
      const input = this.visitTerminal(ctx.getChild(1));
      if (this.validateNumber(input)) {
        const intDimension = parseInt(input);
        methodSymbolTable.lookupVariable(this.variablesParsed[i]).addArrayDimension(intDimension);
      } else {
        // throw InputTypeError
        return;
      }
    }
  }

  visitTerminal(ctx) {
    return ctx.getText().toString();
  }

  /* -------------------------------
   *        INPUT VALIDATION
   * ------------------------------- */

  validateNumber(input) {
    return !isNaN(input);
  }
}

exports.AnnotationCodeVisitor = AnnotationCodeVisitor;
