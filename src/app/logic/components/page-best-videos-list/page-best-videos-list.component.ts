import { Component, OnInit } from "@angular/core";
import { VideosService } from "../../services/videos.service";
import { Video } from "../../models/video";

@Component({
  selector: "app-page-best-videos-list",
  templateUrl: "./page-best-videos-list.component.html",
  styleUrls: ["./page-best-videos-list.component.css"]
})
export class PageBestVideosListComponent implements OnInit {
  public videos: Video[] = null;

  constructor(private videosService: VideosService) {}

  async fetchMovies() {
    this.videos = await this.videosService.fetchBestVideos();
  }

  ngOnInit() {
    this.fetchMovies();
  }
}
