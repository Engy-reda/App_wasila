import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEventsComponent } from './single-events.component';

describe('SingleEventsComponent', () => {
  let component: SingleEventsComponent;
  let fixture: ComponentFixture<SingleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
