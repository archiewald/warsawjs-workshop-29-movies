import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageContactComponent } from "./page-contact/page-contact.component";
import { LogicModule } from "./logic/logic.module";

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent
  },
  {
    path: "contact",
    component: PageContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LogicModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
