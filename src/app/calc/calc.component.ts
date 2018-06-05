import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  a="";
  no1:number=0;
  no2:number=0;
  flag:number=0;
  constructor() { }

  ngOnInit() {
  }
onclick(m)
{
  this.a+=m;
}
onplus()
{
  this.no1=parseInt(this.a);
  this.flag=1;
  this.a="";
}

onminus()
{
  this.no1=parseInt(this.a);
  this.flag=2;
  this.a="";
}
onmulti()
{
  this.no1=parseInt(this.a);
  this.flag=3;
  this.a="";
}

ondiv()
{
  this.no1=parseInt(this.a);
  this.flag=4;
  this.a="";
}
oneq()
{
  this.no2=parseInt(this.a)
  if(this.flag==1)
  {
    this.a=(this.no1+this.no2)+"";
  }

  if(this.flag==2)
  {
    this.a=(this.no1-this.no2)+"";
  }

  if(this.flag==3)
  {
    this.a=(this.no1*this.no2)+"";
  }

  if(this.flag==4)
  {
    this.a=(this.no1/this.no2)+"";
  }
}


}
