import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgVideoPlayerService } from './ng-video-player.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-video-player',
  templateUrl: './ng-video-player.component.html',
  styleUrls: ['./ng-video-player.component.css']
})
export class NgVideoPlayerComponent implements OnInit {

  public src: string | undefined;
  public show: boolean;


  @Input('video')
  public set video(src: string | undefined) {
    this.video_service.play = src;
  }

  @Output()
  public videoChange = new EventEmitter<string|undefined>();

  constructor(private video_service: NgVideoPlayerService) { }

  public ngOnInit(): void {
    this.video_service.playing.subscribe(
      src => this.playVideo(src),
    );
  }

  public set hide(hide: boolean) {
    if (hide === true) {
      this.video = undefined;
    }
  }

  public stopPropagation($event: Event): void {
    $event.stopPropagation();
  }

  protected playVideo(src: string | undefined | null): void {
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
}
