import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Video } from "../../models/video";
import { VideosService } from "../../services/videos.service";

@Component({
  selector: "app-page-video-profile",
  templateUrl: "./page-video-profile.component.html",
  styleUrls: ["./page-video-profile.component.css"]
})
export class PageVideoProfileComponent implements OnInit {
  video: Video = null;

  constructor(private activatedRoute: ActivatedRoute, private videosService: VideosService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.video = await this.videosService.fetchVideo(params.id);
    }
  }
}
