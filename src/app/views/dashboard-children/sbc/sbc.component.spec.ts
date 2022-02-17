import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbcComponent } from './sbc.component';

describe('SbcComponent', () => {
  let component: SbcComponent;
  let fixture: ComponentFixture<SbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
