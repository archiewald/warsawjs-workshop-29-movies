import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageContactComponent } from "./components/page-contact/page-contact.component";
import { PageVideoListComponent } from "./components/page-video-list/page-video-list.component";
import { PageVideoNotFoundComponent } from "./components/page-video-not-found/page-video-not-found.component";
import { PageVideoProfileComponent } from "./components/page-video-profile/page-video-profile.component";

@NgModule({
  declarations: [
    PageHomeComponent,
    PageContactComponent,
    PageVideoListComponent,
    PageVideoNotFoundComponent,
    PageVideoProfileComponent
  ],
  exports: [PageHomeComponent, PageContactComponent],
  imports: [CommonModule]
})
export class LogicModule {}
