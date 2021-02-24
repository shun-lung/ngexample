import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentComponent } from '../form-component/form-component.component';
import { LoginComponent } from '../component/login/login.component';

const routes: Routes = [
  {path:'', component: FormComponentComponent},
  {path:'Login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexComponentRoutingModule { }
