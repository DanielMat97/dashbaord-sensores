import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoReferenceSbcComponent } from './geo-reference-sbc.component';

describe('GeoReferenceSbcComponent', () => {
  let component: GeoReferenceSbcComponent;
  let fixture: ComponentFixture<GeoReferenceSbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoReferenceSbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoReferenceSbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
