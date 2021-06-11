const CompilerExecution = require('CompilerExecution').CompilerExecution;
const EmptyInputCodeError = require('errors/EmptyInputCodeError').EmptyInputCodeError;

const EMPTY = '';
const FILENAME_PREFIX = 'GeneratedAmsmath';

class CompilerExecutor {
  static getCurrentDate() {
    const date = new Date();
    return (`${String(date.getDate())}_${String(date.getMonth() + 1)}_${String(date.getFullYear())}_${String(date.getHours())}_${String(date.getMinutes())}_${String(date.getSeconds())}`);
  }

  static generateFileName() {
    return `${FILENAME_PREFIX}_${this.getCurrentDate()}`;
  }

  static validateCode(code) {
    if(code === EMPTY)
      throw new EmptyInputCodeError('Code input is empty.');
  }

  static startCompilerExecution(code) {
    const fileName = `${getCurrentDate()}`;
    const execution = new CompilerExecution(code, fileName);

    execution.buildAnnotationParseTrees();
    execution.walkAnnotationTree();
    execution.buildCodeParseTrees();
    execution.walkAmsmathTree();
    return execution.finalize();
  }

  static runner(inputCode) {
    let translatedCode;

    try {
      this.validateCode(inputCode);
      translatedCode = this.startCompilerExecution(inputCode);
    } catch (error) {
      console.error('An error has occured when computing translation.', error);
      throw error;
    }
    return translatedCode;
  }
}

exports.CompilerExecutor = CompilerExecutor;