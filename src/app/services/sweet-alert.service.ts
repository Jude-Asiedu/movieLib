import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private router: Router) { }


  showSuccessMessage(
    title: string,
    message: string,
  ) {
    return this.showAlert({
      title,
      message,
      type: 'success',
    });
  }

  
  showAlert(config: any) {
    return Swal.fire({
      title: config.title,
      text: config.message,
      html: config.html,
      type:config.type,
      timer: config.timer,
      confirmButtonText: config.confirmBtnText || "OK",
      showCancelButton: config.showCancel,
      cancelButtonText: config.cancelBtnText || "Cancel",
      confirmButtonColor: config.confirmBtnColor,
      cancelButtonColor: config.cancelBtnColor,
    });
  }

}
