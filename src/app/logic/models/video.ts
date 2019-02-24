export interface Video {
  id: string;
  title: string;
  description: string;

  year?: number;
  duration?: number;
  rate?: number;

  imageUrl?: string;
  thumb_url?: string;
  video_url?: string;
}
