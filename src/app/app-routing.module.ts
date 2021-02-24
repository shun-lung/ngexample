import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';



//routes 指定的位置在此加入 
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: IndexComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
