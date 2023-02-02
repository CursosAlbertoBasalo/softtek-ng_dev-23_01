import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./routes/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "contact",
    loadChildren: () => import("./routes/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "auth/register",
    loadChildren: () =>
      import("./routes/auth/register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "activities",
    loadChildren: () =>
      import("./routes/activities/activities.module").then((m) => m.ActivitiesModule),
  },
  {
    path: "about",
    loadChildren: () => import("./routes/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
