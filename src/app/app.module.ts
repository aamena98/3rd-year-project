import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { Demo1Component } from './demo1/demo1.component';
import { TaskComponent } from './task/task.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    Demo1Component,
    TaskComponent,
    StudentinfoComponent,
    ProductinfoComponent,
    EmpinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
