import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../task-list.interface';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() listOftask!: Array<ITask>
  @Output() newTaskCount = new EventEmitter<number>()


  public taskCount!: number;
  public visible = false
  public value!: string;
  public index!: number;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(task:ITask):void{
    task.status = !task.status
  }

  deleteUser(index:number):void{
    this.listOftask.splice(index,1)
    this.taskCount = this.listOftask.length
    this.newTaskCount.emit(this.taskCount)
  }

  editTask(index:number):void{
    this.visible = !this.visible
    this.value = this.listOftask[index].item
    this.index = index 
  }

  saveTask():void{
    this.listOftask[this.index].item = this.value
    this.value = ''
    this.visible = false
  }

}


