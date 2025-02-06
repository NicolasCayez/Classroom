import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    console.log("Tentative de connexion avec:", this.email);

    // Simulated authentication (replace with API call)
    if (this.email === 'user@example.com' && this.password === 'password123') {
      localStorage.setItem('authToken', 'fake-jwt-token'); // Store authentication token
      this.router.navigate(['/tests']); // Redirect to tests
    } else {
      this.errorMessage = "Email ou mot de passe incorrect";
    }
  }
}