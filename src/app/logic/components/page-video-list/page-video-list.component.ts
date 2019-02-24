import { Component, OnInit } from "@angular/core";
import { VideosService } from "../../services/videos.service";

@Component({
  selector: "app-page-video-list",
  templateUrl: "./page-video-list.component.html",
  styleUrls: ["./page-video-list.component.css"]
})
export class PageVideoListComponent implements OnInit {
  constructor(private videosService: VideosService) {}

  async fetchMovies() {
    const response = await this.videosService.fetchVideos();
    console.log(response);
  }

  ngOnInit() {}
}
