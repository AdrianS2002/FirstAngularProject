import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../../public/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  onSelect(id: string) {
    console.log('Selected user id:', id);

  }
}
