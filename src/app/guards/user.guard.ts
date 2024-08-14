import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    try {
      const isUser = await this.authService.isUser();
      if (!isUser) {
        this.router.navigate(['/admin-dashboard']);
      }
      return isUser;
    } catch (error) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}