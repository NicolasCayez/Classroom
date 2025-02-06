import { Component } from '@angular/core';
import { RouterModule,RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [ RouterModule,RouterLink,RouterLinkActive ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('authToken'); // Remove authentication token
    this.router.navigate(['/login']); // Redirect to login page
  }

}
