import { Component, OnInit } from '@angular/core';
import {task} from './Taskfile';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
arr: task[]=[
  new task(1,'Email to your manager','pending'),
  new task(2,'Push your code to github','done'),
  new task(3,'Watch movie','done')
];
stu:string[]=['Aamena','kavisha','sangeeta'];
statusarr:string[]=[
  'done',
  'pending'
];
constructor() {

  }

  ngOnInit() {
  }
 onUpdate(item:task)
 {
  if(item.status=="done")
  {
    item.status="pending";
  }
  else
  {
    item.status="done";
  }
 }
 onDelete(i)
 {
 this.arr.splice(i,1);
 }
 onAdd(x,y,z)
 {
 this.arr.push(new task(x,y,z));
 }
}
