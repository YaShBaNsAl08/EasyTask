import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  title = 'Demo-app';
  users=DUMMY_USERS
  selectuserid?:string;
  get onSelectuser(){
    return this.users.find((user)=>user.id === this.selectuserid);
  }
  onSelect(id: string){
    this.selectuserid = id;
  }
}
