import { Component,Input } from '@angular/core';

import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input() name?: string;
  @Input({required:true}) name!: string ;
  @Input({required:true}) userId!: string;
  isAddingTask = false;

  constructor(public  tasksService: TasksService) {
  }
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
    console.log('start add task');
  }
  onCloseAddTask(){
    this.isAddingTask = false;
    console.log('cancel add task');
  }


}
