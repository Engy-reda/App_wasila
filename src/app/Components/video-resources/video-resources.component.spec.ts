import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResourcesComponent } from './video-resources.component';

describe('VideoResourcesComponent', () => {
  let component: VideoResourcesComponent;
  let fixture: ComponentFixture<VideoResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
