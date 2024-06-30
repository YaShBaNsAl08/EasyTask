import { Component,computed,Input,signal,input, Output, EventEmitter,output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected! : boolean;
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  @Output() select= new EventEmitter<string>();
  // select= output<string>();
  // avatar=input.required<string>();
  // name=input.required<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imgPath= computed(()=> 'assets/users/'+ this.avatar() )
  get imgPath(){
    return 'assets/users/'+ this.user.avatar
  }
  OnselecUser(){
    this.select.emit(this.user.id);
  }

}
