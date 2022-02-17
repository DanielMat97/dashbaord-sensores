import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmcabComponent } from './rmcab.component';

describe('RmcabComponent', () => {
  let component: RmcabComponent;
  let fixture: ComponentFixture<RmcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmcabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
