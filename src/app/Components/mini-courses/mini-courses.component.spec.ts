import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCoursesComponent } from './mini-courses.component';

describe('MiniCoursesComponent', () => {
  let component: MiniCoursesComponent;
  let fixture: ComponentFixture<MiniCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
