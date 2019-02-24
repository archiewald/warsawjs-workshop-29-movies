import { of } from "rxjs";
import { Video } from "../models/video";

const video: Video = {
  id: "2",
  title: "Terminator",
  description: "fake description",

  year: 2001,
  duration: 10,
  rate: 4,

  thumb_url: "https://ssl-gfx.filmweb.pl/po/09/95/995/7299005.6.jpg",
  video_url: "https://www.youtube.com/watch?v=yti8UPPC0JE"
};

const videos = [video, video, video];

export class FakeVideosService {
  fetchVideos() {
    return of(videos);
  }
  async fetchVideoById(id) {
    return video;
  }
  async fetchVideoByTitle() {
    return video;
  }
}
