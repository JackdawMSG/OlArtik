import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  Email_Signup: string = '';
  Password_Signup: string = '';
  Password_Signup_Confirm: string = '';

  constructor() {}

  print_password_signup() {
    console.log('Üye Olundu! Şifre: ' + this.Password_Signup);
  }
  print_email_signup() {
    console.log('Üye Olundu!EMail: ' + this.Email_Signup);
  }
}
