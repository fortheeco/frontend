import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * @description Thses are common validators that may be required in the application
 */
export class CommonValidator {

  /**
   * Confirms the value of this field and the field given in the parameter
   * @param field the field to compare with
   */
  static confirmation(field: string): ValidatorFn {
    return (c: AbstractControl) => {
      const parent = c.parent;
      if (!parent) {
          return null;
      }

      const originalField = parent.get(field).value ?  parent.get(field).value : null;
      if (originalField === c.value) {
          return null;
      }

      return { invalidConfirmation: true, message: `field must match ${field}` };
    };
  }

/**
 * @description verify password follows pattern, I know there is a pattern validator, I was just trying to be smart
 * @param pattern The pattern a password should follow
 * @param errorMessage Error message is pattern did not correspond
 */
  static ValidPassword(
    pattern: string = '^(?=.*[a-z])(?=.*[A-Z]).{6,20}$',
    errorMessage: string = `Min 6 chars with one lowercase and uppercase`
  ): ValidatorFn {
    return (c: AbstractControl) => {
      const reg  = new RegExp(pattern);

      const result = reg.test(c.value);

      if (result) {
          return null;
      }

      return {invalidPassword: true, message: errorMessage};

    };
  }

  /**
   * @description Validate a value is a number
   */
  static ValidNumber(): ValidatorFn {
    return (c: AbstractControl) => {

      if (isNaN(c.value)) {
        return {isNotANumber: true, message: 'Value is not a number'};
      }

      return null;

    };
  }

  /**
   * @description Validates that a value (number) falls under a number range
   * @param startingNumber The beginning of the number range
   * @param endingNumber The end of the number range
   */
  static ValidNumberRange(startingNumber: number, endingNumber: number): ValidatorFn {
    return (c: AbstractControl) => {

      const numb = +c.value;

      if (numb < startingNumber || numb > endingNumber) {
        return { invalidNumberRange: true, message: 'Value is out of range' };
      }

      return null;

    };
  }

  /**
   * @description application validation for gender
   */
  static ValidGender(c: AbstractControl): ValidationErrors {
    const gender = c.value;

    if (gender === 'm' || gender === 'f' || gender === 'o') { return null; }

    return { invalidGender: true, message: 'Gender is invalid' };
  }
}
