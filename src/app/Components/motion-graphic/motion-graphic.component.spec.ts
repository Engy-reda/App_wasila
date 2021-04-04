import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionGraphicComponent } from './motion-graphic.component';

describe('MotionGraphicComponent', () => {
  let component: MotionGraphicComponent;
  let fixture: ComponentFixture<MotionGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
