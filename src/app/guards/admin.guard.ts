import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    try {
      const isAdmin = await this.authService.isAdmin();
      if (!isAdmin) {
        this.router.navigate(['/user-dashboard']);
      }
      return isAdmin;
    } catch (error) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}