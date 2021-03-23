// Generated from Annotation.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by AnnotationParser.

function AnnotationVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

AnnotationVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
AnnotationVisitor.prototype.constructor = AnnotationVisitor;

// Visit a parse tree produced by AnnotationParser#run.
AnnotationVisitor.prototype.visitRun = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#method_specs.
AnnotationVisitor.prototype.visitMethod_specs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#name_spec.
AnnotationVisitor.prototype.visitName_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#return_spec.
AnnotationVisitor.prototype.visitReturn_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#return_type.
AnnotationVisitor.prototype.visitReturn_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#start.
AnnotationVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#variable_specs.
AnnotationVisitor.prototype.visitVariable_specs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#new_line_declaration.
AnnotationVisitor.prototype.visitNew_line_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#variables_type_declaration.
AnnotationVisitor.prototype.visitVariables_type_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#variables.
AnnotationVisitor.prototype.visitVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#variables_type.
AnnotationVisitor.prototype.visitVariables_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#array.
AnnotationVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#array_dimension.
AnnotationVisitor.prototype.visitArray_dimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#to_ignore.
AnnotationVisitor.prototype.visitTo_ignore = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AnnotationParser#end.
AnnotationVisitor.prototype.visitEnd = function(ctx) {
  return this.visitChildren(ctx);
};



exports.AnnotationVisitor = AnnotationVisitor;