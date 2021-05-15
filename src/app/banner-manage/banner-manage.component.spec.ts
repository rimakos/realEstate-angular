import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerManageComponent } from './banner-manage.component';

describe('BannerManageComponent', () => {
  let component: BannerManageComponent;
  let fixture: ComponentFixture<BannerManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
