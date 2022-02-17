import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSbcComponent } from './menu-sbc.component';

describe('MenuSbcComponent', () => {
  let component: MenuSbcComponent;
  let fixture: ComponentFixture<MenuSbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
