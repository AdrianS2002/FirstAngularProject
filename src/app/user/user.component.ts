import { ThisReceiver } from '@angular/compiler';
import { Component, Input, input, computed, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  @Output() select= new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {return 'users/' + this.avatar()});

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser(id: string) {
    this.select.emit(this.id);
   
  }
}
