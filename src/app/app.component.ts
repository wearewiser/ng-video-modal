import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'NG Video Player';
  public video: string;
  public playVideo(): void {
    this.video = 'https://www.w3schools.com/html/mov_bbb.mp4';
  }
}
