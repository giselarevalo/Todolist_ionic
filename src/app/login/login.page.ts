import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'top', 
    });
    toast.present();
  }

  login() {

    this.submitted = true;

    if (!this.email || !this.password) {
      this.presentToast('Por favor, ingresa un correo electrónico o una contraseña válidos.');
      return;
    }


    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      this.presentToast('¡Bienvenido Crack!');
      this.router.navigate(['/task-list']); 
    } else {
      this.presentToast('Las credenciales son invalidas');
      
    }
  }
}
