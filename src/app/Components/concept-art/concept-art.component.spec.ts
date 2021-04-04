import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptArtComponent } from './concept-art.component';

describe('ConceptArtComponent', () => {
  let component: ConceptArtComponent;
  let fixture: ComponentFixture<ConceptArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
