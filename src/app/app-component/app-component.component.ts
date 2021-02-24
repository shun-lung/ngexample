import { Component, OnInit } from '@angular/core';

//只有這個componet 元件需要，只需要在該元件滙入 DataService
import { DataService} from '../data.service';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css'],

  //需引用 DataServer為提供者
  providers: [DataService]
})
export class AppComponentComponent implements OnInit {

  //因service 屬class , 所以雖然 import 進來, 也在  Component指定為資料來源提供者,
  //但仍需要在 contstructor 聲明 private dDataService 來源者為 DataService
  constructor(private dDataService : DataService) { }

  ngOnInit(): void {
  }

  //定義接收dataService的格式
  empinfo1:string[]=[];
  empinfo2:string[]=[];
  empinfo3:string[]=[];

  //格式接收DataService的資料，再到html呈現
  getempinfo1(){
    this.empinfo1 = this.dDataService.getemp1();  //getemp1 是全部帶入，在 html則不指定屬性
 
  }
  getempinfo2(){
    this.empinfo2 = this.dDataService.getemp2();
  }
  getempinfo3(){
    this.empinfo3 = this.dDataService.getemp3();
  }
  



}
