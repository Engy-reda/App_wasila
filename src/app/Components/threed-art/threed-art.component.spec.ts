import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedArtComponent } from './threed-art.component';

describe('ThreedArtComponent', () => {
  let component: ThreedArtComponent;
  let fixture: ComponentFixture<ThreedArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
