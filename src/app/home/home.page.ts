import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any;
  user: any = {username: '', password: ''};

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }


  prepareLogin() {
    const username = this.user.username;
    const password = this.user.password;

    if (username === '' || password === '' ) {
      document.getElementById('message').innerHTML = 'Please fill in username and password';
    } else {
      document.getElementById('message').innerHTML = ' ';
    }
  }

}
