import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IServerError } from 'src/app/_models/server-error';
import { UtilityProvider } from 'src/app/_providers/utility';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  public genericError;

  constructor(
    private utility: UtilityProvider
  ) { }

  /**
   * @description validates all the form fields manually
   * @param formGroup
   */
  validateAllFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {

        const control = formGroup.get(field);

        if (control instanceof FormControl) {

            control.markAsTouched({ onlySelf: true });

        } else if (control instanceof FormGroup) {

            this.validateAllFields(control);

        }
    });
  }

  /**
   * @description get the errors sent from the server and place them in the right control of the form
   * @param error Error from the server
   * @param reactiveForm Form to place error message
   */
  setFormErrors(error: any, reactiveForm: FormGroup = null) {

    // Get the error part
    const appError = error as IServerError;

    console.log(error);

    // Display and set single error if available
    if (appError.error) { this.displayGenericError(appError.error); }

    // Check if there are actually errors
    if (!appError.errors || Object.entries(appError.errors).length === 0) { return; }

    // Return the updated form
    return this.populateForm(appError, reactiveForm);
  }

  private populateForm(appError: IServerError, reactiveForm: FormGroup) {
    // For developers only to see error that dont follow the normal convention
    const developerError: string[] = [];

    // Get the first onces and place in the form control
    Object.keys(appError.errors).forEach((props: string) => {

      // Check if props actually exists in form all neccessaries should be include
      if (reactiveForm && props in reactiveForm.controls) {
        reactiveForm.controls[props].setErrors( { message: appError.errors[props][0], serverError: true  } );
      } else {
        // Store the last one in the variable only for developers to see
        developerError.push(appError.errors[props]);
      }

    });

    if (developerError.length > 0) {
      this.displayGenericError(developerError[0][0]);
    }

    // Make a notification if in development stage
    // this.notifyDevelopersOnly(appError, developerError);

    return reactiveForm;
  }

  isInvalid(form: FormGroup, field: string) {
    return form && form.get(field) && (form.get(field).touched && form.get(field).invalid);
  }

  private displayGenericError(errorMessage: string) {
    this.genericError = errorMessage;
    this.utility.showToast('danger', this.genericError);
  }


}
