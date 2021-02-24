import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-conent',
  templateUrl: './conent.component.html',
  styleUrls: ['./conent.component.css']
})
export class ConentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //需參考文檔，目前網路寫法 
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }



}
