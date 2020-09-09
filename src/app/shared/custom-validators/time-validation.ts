import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';


/**
 * @description Thses are Validations that are focused on time
 */
export class TimeValidator {

  /**
   * @description Valids a string is a valid date
   * @param fieldName The field name to attached the error message to
   */
  static CustomValidDate(fieldName: string): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.parent) { return null; }

      if (moment.isDate(c.parent.get(fieldName).value)) { return null; }

      return { message: `Date is invalid`};
    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomAfter(
    fieldName: string, value: number
    ): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = (moment(c.value));

      if (dob.isBefore(moment().subtract(value, 'year'))) {
        return { message: `Must be after ${value} year(s) from now`};
      }

      return null;

    };
  }

  /**
   * @description Valid the date falls after specified timeframe
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomBefore(
    fieldName: string, value: number
    ): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = (moment(c.value));

      if (dob.isAfter(moment().subtract(value, 'year'))) {
        return { message: `Must be before ${value} year(s) from now`};
      }

      return null;

    };
  }

  /**
   * @deprecated Please dont use this code, it has some serious bug (uder maintenance)
   * @description Valid the date fall within a certain range
   * @param fieldName The field name to attached the error message to
   * @param minDate The minimum date
   * @param maxDate The maximum date
   */
  static CustomValidDateRange(
    fieldName: string, minAge: number, maxAge: number
    ): ValidatorFn {
    return (c: AbstractControl) => {

      const validDate = TimeValidator.CustomValidDate(fieldName)(c);

      if (validDate) { return { ...validDate }; }

      const dob = (moment(c.value));

      if (dob.isAfter(moment().subtract(maxAge, 'year')) || dob.isBefore(moment().subtract(minAge, 'year'))) {
        return { message: `Must be  between ${minAge} and ${maxAge} years from now`};
      }

      return null;

    };
  }


}

