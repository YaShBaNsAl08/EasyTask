import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type newTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
@Input({required:true}) userId!: string;
@Input({required:true}) name!: string;
addingTask = false;
constructor(private taskservice: TasksService){}
get userTasks(){
  return this.taskservice.getUsertask(this.userId)
}
onStartTask(){
  this.addingTask=true;
}
onCancelTask(){
  this.addingTask=false;
}
}
