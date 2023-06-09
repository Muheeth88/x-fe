import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" }, 
  { path: "home", loadChildren: () => import("./modules/main/main.module").then((m) => m.MainModule)},
  { path: "profile", loadChildren: () => import("./modules/profile/profile.module").then((m) => m.ProfileModule)},
  { path: "auth", loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule)},
  { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then((m) => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
