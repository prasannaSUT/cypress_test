import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emaillogin',
  templateUrl: './emaillogin.component.html',
  styleUrls: ['./emaillogin.component.css']
})
export class EmailloginComponent {
  // sucessmessage variable
  loginSuccess = false;

  form = {
    email: '',
    password: '',
  };

  onSubmit(): void {
    if (this.form.email && this.form.password) {
      this.loginSuccess = true;
    } else {
      this.loginSuccess = false;
    }

  }
}
