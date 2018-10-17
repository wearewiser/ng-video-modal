import { Component } from '@angular/core';
import { NgVideoPlayerService } from 'ng-video-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'NG Video Player';
  public video: string;
  constructor(private player: NgVideoPlayerService) { }
  public playVideo1(): void {
    this.video = 'https://www.w3schools.com/html/mov_bbb.mp4';
  }
  public playVideo2(): void {
    this.player.play = 'https://www.w3schools.com/tags/movie.mp4';
  }
}
