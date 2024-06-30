import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>();
  private taskservice= inject(TasksService)
  // enterTitle=signal('');  using signal 
  enterTitle='';
  entersummary='';
  enterdate='';
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.taskservice.addtask({
      title:this.enterTitle,
      summary:this.entersummary,
      date:this.enterdate
    },this.userId);
    this.close.emit();
  }

}
