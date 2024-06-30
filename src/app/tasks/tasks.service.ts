import { Injectable } from "@angular/core";
import { type newTask } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary: 'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];
      constructor() {
        const Tasks = localStorage.getItem('Tasks');
    
        if (Tasks) {
          this.Tasks = JSON.parse(Tasks);
        }
      }
      getUsertask(userId:string){
        return this.Tasks.filter((task)=>task.userId === userId);
      }
      addtask(taskdata:newTask,userId:string){
        this.Tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskdata.title,
            summary: taskdata.summary,
            dueDate:taskdata.date
          });
          this.saveTasks();
      }
      removetask(id:string){
        this.Tasks = this.Tasks.filter((task)=>task.id !== id);
        this.saveTasks();
      }
      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.Tasks));
      }
}