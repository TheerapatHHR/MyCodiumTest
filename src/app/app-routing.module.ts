import { FirstpageComponent } from './firstpage/firstpage.component';
import { MediumComponent } from './medium/medium.component';
import { EasyComponent } from './easy/easy.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/firstpage', pathMatch:'full' },
  { path: 'firstpage', component: FirstpageComponent },
  { path:'todo', component: TodoComponent},
  { path:'easy', component: EasyComponent},
  { path:'medium', component: MediumComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
