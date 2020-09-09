import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class UtilityProvider {

  constructor(
      public http: HttpClient,
      private toastr: ToastrService
    ) {

    }

  showToast(type, text) {
    if (type == 'success') {
        this.toastr.success(text, 'Success!');
    } else if (type == 'warning') {
        this.toastr.warning(text, 'Alert!');
    } else if (type == 'danger') {
        this.toastr.error(text, 'Oops!');
    } else if (type == 'info') {
        this.toastr.info(text);
    }
  }

}
