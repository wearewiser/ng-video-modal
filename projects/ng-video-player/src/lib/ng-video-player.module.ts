import { NgModule } from '@angular/core';
import { NgVideoPlayerComponent } from './ng-video-player.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgVideoPlayerComponent],
  exports: [NgVideoPlayerComponent]
})
export class NgVideoPlayerModule { }
