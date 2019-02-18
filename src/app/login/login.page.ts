import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', './login.page.css' ]
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private authentication: AuthenticationService,
              private router: Router,
              private loadingController: LoadingController,
              private toastController: ToastController) {}

  ngOnInit() {}

    async login() {
    console.log('login' + this.loginForm.get('username').value);
    try {
      const loading = await this.presentLoading();
      const res = await this.authentication.login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      });
      console.log(res);
      this.router.navigate(['/home']);
      this.loadingController.dismiss();
    } catch (error) {
      this.loadingController.dismiss();
      console.log(error);
        this.presentToast(error.message);
    }
  }

  gotoSignup() {
    console.log('going to signup page');
    this.router.navigateByUrl('/signup');
  }

  onForgotPass() {
    this.router.navigateByUrl('/forgot-pass');
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingController.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Logging you in, Please Wait'
    });
    return await loading.present();
  }
  async presentToast(tMessage: string) {
    const toast = await this.toastController.create({
      message: tMessage,
      position: 'top',
      duration: 5000
    });
    toast.present();
  }

}
