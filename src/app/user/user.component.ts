import { ThisReceiver } from '@angular/compiler';
import { Component, Input, input, computed, Output,EventEmitter,output } from '@angular/core';
import { type User } from './user.model';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Output() select= new EventEmitter<string>();
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {return 'users/' + this.avatar()});

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser(id: string) {
    this.select.emit(this.user.id);
   
  }
}
