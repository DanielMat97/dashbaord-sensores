import { Component, OnInit } from '@angular/core';
import { SensorsModel } from 'src/app/models/sensors/sensors.module';
import { SensorsService } from 'src/app/services/sensors.service';

@Component({
  selector: 'app-sbc',
  templateUrl: './sbc.component.html',
  styleUrls: ['./sbc.component.css']
})
export class SbcComponent implements OnInit {
  sensorsData: SensorsModel = {
    code_transaction: '',
    data: {
      count:    0,
      next:     '',
      previous: '',
      results:  []
    }
  };
  pages: number = 0;

  constructor(private sensorsService: SensorsService) { }

  ngOnInit(): void {
    this.handlerSensorsData();
  }

  handlerSensorsData(page?: number): void {
    this.sensorsService.getAllSensors(page).subscribe(data => {
      this.sensorsData = data;
      this.pages = Math.ceil(this.sensorsData.data.count / 10);
    }, this.handlerError)
  }

  handlerError(err: any){
    console.error(err);
  }
}
