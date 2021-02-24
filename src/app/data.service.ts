import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //服務數據一次導入，之後就此取用
  //來源資料
  emp1:string[]=['name: emp1','id:123'];
  emp2:Array<any>=[{
    name: "name  is emp2", 
    empid:" id is  111"
  } ];
  emp3:string[]=['name: emp3','id:789'];

  constructor() { 

  }

  getemp1(){
    return this.emp1;
  }

  getemp2(){
    return this.emp2;
  }

  getemp3(){
    return this.emp3;
  }


  //接收來自 button 裡需要 push 的資料
  //info 可自己定義，格式為 any
  addinfo(info:any){
    //需push回原始資料區域，所以是 push 到資料來源  emp1 
    //當使用者有按下 button 指定呈現  emp 資料時，會連動帶出 emp1 及後面 push 的資料
    //但如果這單純按下更新，但並沒有 呈現 emp資料時，是因為沒有指定 hmtl 做資料呈現 
    this.emp1.push(info);
    //被呼叫，所以需要用return 回傳資訊；
    return this.emp1;

  }


}
