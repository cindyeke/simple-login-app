import { Injectable } from '@angular/core';
import { Users } from './users.model';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  getUsers() {
    const users: Users[] = [
      {
        id: '0001',
        firstname: 'Celine',
        lastname: 'Buckhead',
        username: 'celineb',
        password: 'admin'
      },
      {
        id: '0002',
        firstname: 'Mark',
        lastname: 'Tyson',
        username: 'markt',
        password: 'admin'
      }
    ];

    return users;
  }

  constructor() { }

}
