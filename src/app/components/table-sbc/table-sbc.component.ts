import { Component, Input, OnInit } from '@angular/core';
import { DataSensors } from 'src/app/models/sensors/sensors.module';

@Component({
  selector: 'app-table-sbc',
  templateUrl: './table-sbc.component.html',
  styleUrls: ['./table-sbc.component.css']
})
export class TableSbcComponent implements OnInit {
  @Input() data: DataSensors = {
    count: 0,
    next: '',
    previous: '',
    results: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
