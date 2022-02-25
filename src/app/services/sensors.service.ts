import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SensorsModel } from '../models/sensors/sensors.module';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private base_url = environment.host_sensors;
  
  constructor(private http: HttpClient) { }

  getAllSensors(page?: number): Observable<SensorsModel> {
    return this.http.get<SensorsModel>(this.base_url);
  }
}
