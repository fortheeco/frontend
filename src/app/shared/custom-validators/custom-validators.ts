import { AbstractControl, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { CustomApplicationConstant } from 'src/app/_models/app-constant';


/**
 * @description The purpose of custom validator is mainly to add custom message here rather than in the html
 * Along the line I found out more interesting things I could do with this
 * Simply visit the file to find out more
 */
export class CustomValidator {

  /**
   * @description — Validator that requires the control have a non-empty value.
   * @param visibleFieldName The field name to attached the error message to
   */
  static CustomRequired(visibleFieldName: string): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.required(c);

      if (!result) {
          return null;
      }

      return {...result, message: `${visibleFieldName} is required`};
    };
  }

  /**
   * @description Validator that requires the control's value be true. This validator is commonly used for required checkboxes.
   * @param visibleFieldName The field name to attached the error message to
   */
  static CustomRequiredTrue(visibleFieldName: string): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.requiredTrue(c);

      if (!result) {
          return null;
      }

      return {...result, message: `${visibleFieldName} must be selected`};
    };
  }

  /**
   * @description Validator that requires the control's value pass an email validation test.
   */
  static CustomEmail(): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.email(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Email is invalid`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be less than or equal to the provided maximum length.
   * This validator is also provided by default if you use the the HTML5 maxlength attribute.
   * @param maxLength The maximum length of the string
   */
  static MaxLength(maxLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.maxLength(maxLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not more than ${maxLength} characters`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be greater than or equal to the provided minimum length.
   * This validator is also provided by default if you use the the HTML5 minlength attribute.
   * @param minLength The minimum length of the string
   */
  static MinLength(minLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.minLength(minLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not less than ${minLength} characters`};
    };
  }

  static customValidContactype(): ValidatorFn {
      return (c: AbstractControl) => {

        if (!c.parent) { return null; }

        const type = c.parent.get('contactType').value;

        if (type === 'emailAddress') {
          const result  = Validators.email(c);

          if (!result) {
              return null;
          }

          return {...result, message: `Email is invalid`};
        }

        return null;

      };
  }

  /**
   * @description Valids a string if it is a type of gender
   * @param fieldName The field name to attached the error message to
   */
  static CustomValidGender(fieldName: string): ValidatorFn {
    return (c: AbstractControl) => {

      if (!c.parent) { return null; }

      const gender = c.parent.get(fieldName).value;

      if (gender === 'm' || gender === 'f' || gender === 'o') { return null; }

      return { message: `Gender is invalid`};
    };
  }

  /**
   * @description check if string is a valid url
   */
  static ValidaUrl(c: AbstractControl): ValidationErrors {
    const stringUrl = c.value;
    let url: URL;

    try {
      url = new URL(stringUrl);
    } catch (_) {
      return { invalidUrl: true, message: 'url is invalid' };
    }

    const isHttpProtocol =  url.protocol === 'http:' || url.protocol === 'https:';

    if (!isHttpProtocol) { return { invalidUrl: true, message: 'url is invalid' }; }

    return null;
  }

  /**
   * @description check if string is a valid url
   */
  static OrganizationType(c: AbstractControl): ValidationErrors {
    const type = c.value;

    const correctType = CustomApplicationConstant.organizationType.find(x => x.key === type);

    if (type) { return null; }

    return { invalidOrganizationType: true, message: 'Invalid Type of Organization selected' };
  }

}
