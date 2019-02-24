import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageVideoListComponent } from "./components/page-video-list/page-video-list.component";
import { PageVideoNotFoundComponent } from "./components/page-video-not-found/page-video-not-found.component";
import { PageVideoProfileComponent } from "./components/page-video-profile/page-video-profile.component";
import { LogicRoutingModule } from "./logic-routing.module";
import { VideosService } from "./services/videos.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    PageVideoListComponent,
    PageVideoNotFoundComponent,
    PageVideoProfileComponent
  ],
  exports: [
    PageVideoListComponent,
    PageVideoNotFoundComponent,
    PageVideoProfileComponent
  ],
  imports: [CommonModule, LogicRoutingModule, HttpClientModule],
  providers: [VideosService]
})
export class LogicModule {}
