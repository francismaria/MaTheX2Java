const TranslationExecutor = require('TranslationExecutor');
const TranslationExecution = require('TranslationExecution').TranslationExecution;
const EmptyInputCodeError = require('errors/EmptyInputCodeError').EmptyInputCodeError;

jest.mock('TranslationExecution');

const EMPTY_TEXT = "";
const INPUT = "input";

describe('TranslationExecutor test', () => {
  beforeEach(() => {
    TranslationExecution.mockClear();
  });

  test('when input is empty, exception is thrown', () => {
    expect(() => TranslationExecutor.run(EMPTY_TEXT)).toThrow(EmptyInputCodeError);
    expect(TranslationExecution).not.toHaveBeenCalled();
  });

  test('when valid input, TranslationExecution is called with correct values', () => {
    const expectedClassNameRegex = buildExpectedGeneratedClassNamePrefixRegex();
    
    TranslationExecutor.run(INPUT);

    expect(TranslationExecution).toHaveBeenCalledWith(INPUT, expect.stringMatching(expectedClassNameRegex));
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

    expect(() => TranslationExecutor.run(INPUT)).toThrow(Error);
    expect(TranslationExecution).toHaveBeenCalledTimes(1);
  });
});

/**
 * Builds expected generated classname prefix taking only into consideration
 * @returns regex object
 */
function buildExpectedGeneratedClassNamePrefixRegex() {
    const expectedClassNameGenerated = /^GeneratedAmsmath(_\d{1,2}){2}_\d{4}(_\d{1,2}){3}$/;
    return new RegExp(expectedClassNameGenerated, 'g');
}