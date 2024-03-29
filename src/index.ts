const TranslationExecution = require('execution/TranslationExecution').TranslationExecution;
const EmptyInputCodeError = require('errors/EmptyInputCodeError').EmptyInputCodeError;

const EMPTY = '';
const FILENAME_PREFIX = 'GeneratedAmsmath';

function getCurrentDate(date: Date) {
  return (`${String(date.getDate())}_${String(date.getMonth() + 1)}_${String(date.getFullYear())}_${String(date.getHours())}_${String(date.getMinutes())}_${String(date.getSeconds())}`);
}

function generateFileName() {
  return `${FILENAME_PREFIX}_${getCurrentDate(new Date())}`;
}

function validateCode(code: string) {
  if(code === EMPTY)
    throw new EmptyInputCodeError('Code input is empty.');
}

function startTranslationExecution(code: string) {
  const fileName = generateFileName();
  const execution = new TranslationExecution(code, fileName);
  
  execution.walkAnnotationTree();
  execution.walkAmsmathTree();

  return execution.finalize();
}

export function runTranslation(inputCode: string) {
  let translatedCode;

  try {
    validateCode(inputCode);
    translatedCode = startTranslationExecution(inputCode);
  } catch (error) {
    console.error('An error has occured when computing translation.', error);
    throw error;
  }
  return translatedCode;
} 