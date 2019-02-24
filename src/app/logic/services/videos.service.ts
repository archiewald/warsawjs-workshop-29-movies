import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { Video } from "../models/video";

@Injectable({
  providedIn: "root"
})
export class VideosService {
  constructor(private http: HttpClient) {}

  fetchVideos() {
    return this.http
      .get<Video[]>(`${environment.backendURL}/assets/all.json`)
      .toPromise();
  }

  fetchBestVideos() {
    return this.http
      .get<Video[]>(`${environment.backendURL}/assets/best.json`)
      .toPromise();
  }

  async fetchVideo(id: string) {
    return (await this.fetchVideos()).find(video => video.id === id);
  }
}
