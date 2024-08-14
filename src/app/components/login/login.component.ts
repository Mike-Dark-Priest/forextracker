import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSignIn() {
    try {
      await this.authService.signIn(this.username, this.password);

      const isAdmin = await this.authService.isAdmin();
      if (isAdmin) {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/user-dashboard']);
      }
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  }
}