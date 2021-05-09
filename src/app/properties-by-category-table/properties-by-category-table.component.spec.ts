import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesByCategoryTableComponent } from './properties-by-category-table.component';

describe('PropertiesByCategoryTableComponent', () => {
  let component: PropertiesByCategoryTableComponent;
  let fixture: ComponentFixture<PropertiesByCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesByCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesByCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
