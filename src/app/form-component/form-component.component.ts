import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'selectfrom',  //router 可以是一樣的app-form-component , 也可以自定義名字。在 html < > 把它routing  呈現
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent  {


  submit(login:any){
    console.log(" form login access ",login);
  }


}
