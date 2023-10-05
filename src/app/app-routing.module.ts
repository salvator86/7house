import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./core/home-page/home-page.component";
import {AdminPageComponent} from "./core/admin-page/admin-page.component";
import {LoginPageComponent} from "./features/login-page/login-page.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: "full"},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
