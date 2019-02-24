import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogicModule } from "./logic/logic.module";
import { PageHomeComponent } from "./logic/components/page-home/page-home.component";
import { PageContactComponent } from "./logic/components/page-contact/page-contact.component";

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
