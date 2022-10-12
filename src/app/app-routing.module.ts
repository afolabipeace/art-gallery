import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { ApiComponent } from './api/api.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', redirectTo:'api', pathMatch:'full'},
  {path: 'api', component:ApiComponent},
  {path: 'api/:id', component: ViewComponent},
  // {path: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class AppRoutingModule { }
