import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  async login (credentials: any) {
    console.log(credentials);
  }
  async logout (user: any) {}
}
