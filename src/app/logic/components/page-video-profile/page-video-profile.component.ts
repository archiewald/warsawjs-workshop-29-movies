import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Video } from "../../models/video";

@Component({
  selector: "app-page-video-profile",
  templateUrl: "./page-video-profile.component.html",
  styleUrls: ["./page-video-profile.component.css"]
})
export class PageVideoProfileComponent implements OnInit {
  video: Video = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.toPromise().then(params => {
      console.log({ params });
    });
    debugger;
  }
}
