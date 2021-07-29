import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenStylesSectionComponent } from './gen-styles-section.component';

describe('GenStylesSectionComponent', () => {
  let component: GenStylesSectionComponent;
  let fixture: ComponentFixture<GenStylesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenStylesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenStylesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
