import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      this.router.navigate(['/task-list']); 
    } else {
      console.error('Error de inicio de sesión');
      
    }
  }
}
