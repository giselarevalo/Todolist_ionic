import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'leal@gmail.com', password: '123456' },
    
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    return !!user; // Devuelve true si el usuario es encontrado, false si no.
  }
}
