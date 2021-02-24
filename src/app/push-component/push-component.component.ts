import { Component, OnInit } from '@angular/core';

//1。滙入原始資料來源 ＝ 要 push回去的資料位置
import { DataService } from '../data.service'


@Component({
  selector: 'app-push-component',
  templateUrl: './push-component.component.html',
  styleUrls: ['./push-component.component.css'],
  //2。做為資料來源的提供者
  providers : [DataService]
})
export class PushComponentComponent implements OnInit {
  //3。因為是service 是 class  , 所以在 constructor 也需要 聲明
  //private dDatatService 的來源為 DataService
  constructor(private dDataService : DataService) { }

  ngOnInit(): void {
  }



  //4。定義接收dDataService的資料格式
  empInfo1:string []=[];

  //5.使用 empInfo1 的資料格式，來接收 取得 DataService  裡 定的  getemp1 資料 
  getEmpInfo1(){
    this.empInfo1 = this.dDataService.getemp1();
  }

  //6.ngModel 傳值到 DataService 進行 push
  submit(f:any){
    //console.log(" form login access ",login);
    //加入 html from 表單裡 value 為 location ，並透過 ngForm #f 進行資料push
    this.dDataService.addinfo(f.value.location);

  }





}
