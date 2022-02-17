import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  date = moment().locale('es');
  dateNow: any = "";
  timeNow: any = "";

  constructor() {
    this.date = moment().locale('es');
    this.dateNow = this.date.format('MMMM Do YYYY');
    this.timeNow = this.date.format('h:mm:ss a')
  }

  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.addEventTime();
    });
  }

  addEventTime() {
    setInterval(() => {
      this.timeNow = moment(new Date()).locale('es').format('h:mm:ss a');
    }, 1000);
  }
}
