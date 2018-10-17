import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgVideoPlayerService {

  public set play(url: string | undefined | null) {
    this.playing.next(url);
  }
  public playing: Subject<string> = new BehaviorSubject<string>(undefined);
  constructor() { }
}
