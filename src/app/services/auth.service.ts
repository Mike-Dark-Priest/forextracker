import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async signUp(username: string, password: string, attributes: object) {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      throw error;
    }
  }

  async currentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserRole() {
    try {
      const user = await this.currentUser();
      const groups = user.signInUserSession.accessToken.payload['cognito:groups'];
      return groups ? groups[0] : null;
    } catch (error) {
      throw error;
    }
  }

  async isAdmin() {
    const role = await this.getUserRole();
    return role === 'admin';
  }

  async isUser() {
    const role = await this.getUserRole();
    return role === 'user';
  }
}