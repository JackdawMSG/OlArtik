import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  Email_Login: string = '';
  Password_Login: string = '';

  constructor() {}

  print_email_login() {
    console.log('Giriş Yapıldı! EMail:' + this.Email_Login);
  }
  print_password_login() {
    console.log('Giriş Yapıldı! Şifre: ' + this.Password_Login);
  }
}
