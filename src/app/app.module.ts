import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//增加formModel -針對表單
import { FormsModule } from '@angular/forms' 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//加入新增的component 
import { FormComponentComponent } from './form-component/form-component.component';
import { AppComponentComponent} from './app-component/app-component.component';
import { PushComponentComponent } from './push-component/push-component.component';

import { ConentComponent } from './component/conent/conent.component';
import { HeadComponent } from './component/head/head.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';

//
import { YouTubePlayerModule } from "@angular/youtube-player";
import { LoginComponent } from './component/login/login.component';
import { IndexComponentComponent } from './index-component/index-component.component';



@NgModule({
  declarations: [
    AppComponent,
    // 加入新增的 component
    FormComponentComponent,
    AppComponentComponent,
    PushComponentComponent,
    ConentComponent,
    HeadComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    IndexComponentComponent

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //增加formModel
    FormsModule,
    YouTubePlayerModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
