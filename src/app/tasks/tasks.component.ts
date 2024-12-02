import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, ],
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
