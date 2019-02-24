import { Component, OnInit } from "@angular/core";
import { VideosService } from "../../services/videos.service";
import { Video } from "../../models/video";

@Component({
  selector: "app-page-video-list",
  templateUrl: "./page-video-list.component.html",
  styleUrls: ["./page-video-list.component.css"]
})
export class PageVideoListComponent implements OnInit {
  public videos: Video[] = null;

  constructor(private videosService: VideosService) {}

  async fetchMovies() {
    this.videos = await this.videosService.fetchVideos();
  }

  ngOnInit() {
    this.fetchMovies();
  }
}
