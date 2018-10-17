import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-video-player',
  templateUrl: './ng-video-player.component.html',
  styleUrls: ['./ng-video-player.component.css']
})
export class NgVideoPlayerComponent {

  public src: string | undefined;
  public show: boolean;

  @Input('video')
  public set video(src: string | undefined) {
    if (!!this.src) { // already showing a video
      if (!!src) { // change video
        this.src = src;
        this.videoChange.emit(src);
      } else { // remove video
        this.src = undefined;
        this.videoChange.emit(undefined);
        this.show = false;
      }
    } else { // not already showing a video
      if (!!src) { // start video
        this.src = src;
        this.videoChange.emit(src);
        this.show = true;
      }
    }
  }

  @Output()
  public videoChange = new EventEmitter<string|undefined>();

  public set hide(hide: boolean) {
    if (hide === true) {
      this.video = undefined;
    }
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
  }

  constructor() { }

}
