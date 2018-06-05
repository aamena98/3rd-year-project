import { Component, OnInit } from '@angular/core';
import {product} from './productfile';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
pid:number;
pname:string;
pprice:number;
pmfg:string;
pimg:string;
pstatus:string='yes';

arr:product[]=[
  new product(1,'soap',10,'abc','../../assets/images/f4.jpg','yes'),
  new product(2,'shampoo',50,'xyz','../../assets/images/f5.jpg','no')
];
  constructor() { }

  ngOnInit() {
  }
  delete(item:product)
  {
    this.arr.splice(this.arr.indexOf(item),1)
  }
  update(item:product)
  {
    if(item.p_status=='yes')
    {
      item.p_status='no';
    }
    else
    {
      item.p_status='yes';
    }
  }
  add()
  {
    this.arr.push(new product(this.pid,this.pname,this.pprice,this.pmfg,this.pimg,this.pstatus))
  }

}
