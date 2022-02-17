import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSbcComponent } from './table-sbc.component';

describe('TableSbcComponent', () => {
  let component: TableSbcComponent;
  let fixture: ComponentFixture<TableSbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
