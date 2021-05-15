import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTableComponent } from './banner-table.component';

describe('BannerTableComponent', () => {
  let component: BannerTableComponent;
  let fixture: ComponentFixture<BannerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
