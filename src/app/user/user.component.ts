import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../public/dummy-users';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
console.log(randomIndex);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `./users/` + this.selectedUser.avatar ;
  }

  onSelectUser(){
    this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }
}
