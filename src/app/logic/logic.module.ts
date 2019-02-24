import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageHomeComponent } from "../page-home/page-home.component";
import { PageContactComponent } from "../page-contact/page-contact.component";

@NgModule({
  declarations: [PageHomeComponent, PageContactComponent],
  exports: [PageHomeComponent, PageContactComponent],
  imports: [CommonModule]
})
export class LogicModule {}
