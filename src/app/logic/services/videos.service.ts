import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VideosService {
  constructor(private http: HttpClient) {}

  async fetchVideos() {
    return await this.http.get("/assets/data.json").toPromise();
  }
}
