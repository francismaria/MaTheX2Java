const CompilerExecution = require('CompilerExecution').CompilerExecution;

class CompilerExecutor {
  static getCurrentDate() {
    const date = new Date();
    return (`${String(date.getDate())}_${String(date.getMonth() + 1)}_${String(date.getFullYear())}_${String(date.getHours())}_${String(date.getMinutes())}_${String(date.getSeconds())}`);
  }

  static runner(code) {
    const fileName = getCurrentDate();
    const execution = new CompilerExecution(code, fileName);

    try {
      execution.buildAnnotationParseTrees();
      execution.walkAnnotationTree();
      execution.buildCodeParseTrees();
      execution.walkAmsmathTree();
    } catch (error) {
      console.error('An error has occured when computing translation.', error);
      throw error;
    }

    return execution.finalize();
  }
}

exports.CompilerExecutor = CompilerExecutor;