// src/models/Meme.ts
export interface Meme {
  id?: number;
  name: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}
