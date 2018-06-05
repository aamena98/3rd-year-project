import { Component, OnInit } from '@angular/core';
import {emp} from './empfile';
import { INSPECT_MAX_BYTES } from 'buffer';
@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  arr:emp[]=[
    new emp(1,'Aamena',9000,'Sales Manager','Female','Yes','../../assets/images/i6.jpg'),
    new emp(2,'Asad',8000,'Purchase Manager','Female','Yes','../../assets/images/i5.jpg'),
    new emp(3,'Aqsa',7000,'Clerk','Female','No','../../assets/images/i3.jpg')
  ];
  eid:number;
  ename:string;
  esalary:number;
  edesig:string='Sales Manager';
  gender:string='Male';
  estatus:string='Yes';
  epic:string='../../assets/images/i1.jpg';
flag:boolean=false;

  add(item:emp)
  {
    this.arr.push(new emp(this.eid,this.ename,this.esalary,this.edesig,this.gender,this.estatus,this.epic))
    this.flag=false
    ;
  }
 onupdate()
 {
   if(this.flag==true)
   {
     this.flag=false;
   }
   else{
     this.flag=true;
   }
 }
  delete(item:emp)
  {
    this.arr.splice(this.arr.indexOf(item),1)
  }
  update(item:emp)
  {
    if (item.e_status=='Yes')
    {
      item.e_status='No';
    }
    else
    {
      item.e_status='Yes';
    }

  }
}
