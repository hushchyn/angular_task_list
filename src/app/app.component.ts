import { Component } from '@angular/core';
import { ITask } from './task-list.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public arrTask: Array<ITask>=[  
    { item: 'Angular', status: false },
    { item: 'HTML/CSS', status: true },
    { item: 'React', status: false }
];

  public taskCount = this.arrTask.length

  title = 'homework3';
  public task!: string; 

  addTask():void{
    if(this.task){
    let sts = false
    let task = new TasksList(this.task, sts)
    this.arrTask.push(task)
    this.taskCount = this.arrTask.length
    this.task = ''
    }
  }

  getNewCount(count:number):void{
    this.taskCount = count
  }
}

export class TasksList implements ITask{
  item:string;
  status: false;
  constructor ( uTask: string, uStatus: false ){
    this.item = uTask
    this.status = uStatus;
  }
}


