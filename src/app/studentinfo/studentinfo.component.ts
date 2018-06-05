import { Component, OnInit } from '@angular/core';
import { student } from "./stufile";
@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  arr:student[]=[
    new student(1,'aamena','Female',123456,'Ahmedabad','yes'),
    new student(2,'darshita','Female',1289566,'Vadodara','no'),
    new student(3,'sangeeta','Female',123456,'Jammu','yes')
  ];
  rno:number;
  sname:string;
  gen:string='Male';
  mobno:number;
  scity:string='Ahmedabad';
  saction:string='yes';
  constructor() { }
actionarr:string[]=[
  'yes',
  'no'
];
  ngOnInit() {
  }
  add()
  {
    this.arr.push(new student(this.rno,this.sname,this.gen,this.mobno,this.scity,this.saction))
  }
  onDelete(i)
  {
    this.arr.splice(i,1)
  }
  onaction(item:student)
  {
    if (item.action=='yes')
    {
      item.action='no';
    }
    else
    {
      item.action='yes';
    }
  }
}
