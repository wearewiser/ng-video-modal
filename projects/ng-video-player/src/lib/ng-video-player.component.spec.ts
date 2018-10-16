import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVideoPlayerComponent } from './ng-video-player.component';

describe('NgVideoPlayerComponent', () => {
  let component: NgVideoPlayerComponent;
  let fixture: ComponentFixture<NgVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
