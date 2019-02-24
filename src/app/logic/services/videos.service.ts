import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VideosService {
  constructor(private http: HttpClient) {}

  fetchVideos() {
    return this.http.get(environment.backendURL).toPromise();
  }
}
