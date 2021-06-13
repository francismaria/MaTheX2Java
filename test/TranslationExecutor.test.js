const TranslationExecutor = require('TranslationExecutor');
const TranslationExecution = require('TranslationExecution').TranslationExecution;
const EmptyInputCodeError = require('errors/EmptyInputCodeError').EmptyInputCodeError;

jest.mock('TranslationExecution');

const CLASSNAME_PREFIX = `GeneratedAmsmath`;

describe('TranslationExecutor test', () => {
  beforeEach(() => {
    TranslationExecution.mockClear();
  });

  test('when input is empty, exception is thrown', () => {
    expect(() => TranslationExecutor.run("")).toThrow(EmptyInputCodeError);
    expect(TranslationExecution).not.toHaveBeenCalled();
  });

  test('when valid input, TranslationExecution is called with correct values', () => {
    const date = new Date();
    const expectedClassNameGenerated = `${CLASSNAME_PREFIX}_${String(date.getDate())}_${String(date.getMonth() + 1)}_${String(date.getFullYear())}_${String(date.getHours())}`;
    const classNameGeneratedRegex = new RegExp(`^${expectedClassNameGenerated}`, 'i');
    
    TranslationExecutor.run("input");

    expect(TranslationExecution).toHaveBeenCalledWith("input", expect.stringMatching(classNameGeneratedRegex));
    expect(TranslationExecution).toHaveBeenCalledTimes(1);
  });

  test('when exception occurs in translation, throws exception', () => {
    TranslationExecution.mockImplementationOnce(() => {
      return {
        walkAnnotationTree: () => {},
        walkAmsmathTree: () => {},
        finalize: () => {
          throw new Error();
        },
      };
    });

    expect(() => TranslationExecutor.run("input")).toThrow(Error);
    expect(TranslationExecution).toHaveBeenCalledTimes(1);
  });
});