import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./modules/pages/login/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "devices",
    loadChildren: () =>
      import("./modules/pages/devices/devices.module").then(m => m.DevicesModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
