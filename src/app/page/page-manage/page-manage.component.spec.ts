import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageComponent } from './page-manage.component';

describe('PageManageComponent', () => {
  let component: PageManageComponent;
  let fixture: ComponentFixture<PageManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
