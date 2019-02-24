import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageContactComponent } from "./components/page-contact/page-contact.component";

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "contact",
    component: PageContactComponent
  },
  {
    path: "videos",
    loadChildren: "./logic/logic.module#LogicModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
