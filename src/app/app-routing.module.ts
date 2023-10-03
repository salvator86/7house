import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./core/home-page/home-page.component";
import {AdminPageComponent} from "./core/admin-page/admin-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: "full" },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
