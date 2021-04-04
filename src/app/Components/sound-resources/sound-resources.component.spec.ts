import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundResourcesComponent } from './sound-resources.component';

describe('SoundResourcesComponent', () => {
  let component: SoundResourcesComponent;
  let fixture: ComponentFixture<SoundResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
