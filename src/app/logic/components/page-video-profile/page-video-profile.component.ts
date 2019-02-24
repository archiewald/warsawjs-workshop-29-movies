import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";
import { Video } from "../../models/video";
import { VideosService } from "../../services/videos.service";

@Component({
  selector: "app-page-video-profile",
  templateUrl: "./page-video-profile.component.html",
  styleUrls: ["./page-video-profile.component.css"]
})
export class PageVideoProfileComponent implements OnInit {
  video: Video = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videosService: VideosService,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.video = await this.videosService.fetchVideo(id);
    if (this.video === undefined) {
      this.router.navigateByUrl("/videos/not-found");
    }
  }
}
