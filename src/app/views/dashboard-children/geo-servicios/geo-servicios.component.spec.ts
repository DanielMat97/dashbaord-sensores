import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoServiciosComponent } from './geo-servicios.component';

describe('GeoServiciosComponent', () => {
  let component: GeoServiciosComponent;
  let fixture: ComponentFixture<GeoServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
