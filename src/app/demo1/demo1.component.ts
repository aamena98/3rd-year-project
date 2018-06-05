import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Aamena';
  ans:number;

  add(m,n)
  {
    this.ans=parseInt(m)+parseInt(n);
  }
  sub(m,n)
  {
    this.ans=parseInt(m)-parseInt(n);
  }
  mul(m,n)
  {
    this.ans=parseInt(m)*parseInt(n);
  }
  div(m,n)
  {
    this.ans=parseInt(m)/parseInt(n);
  }


}
