export interface SensorsModel {
  code_transaction: string;
  data:             DataSensors;
}

export interface DataSensors {
  count:    number;
  next:     string;
  previous: string;
  results:  ResultSensors[];
}

export interface ResultSensors {
  estacion:       Estacion;
  medicion_fecha: Date;
  sensor_codigo:  string;
  sensor_marca:   string;
  hum_s:          number;
  tmp_s:          number;
  pm1:            number;
  pm10:           number;
  pm25:           number;
}

export interface Estacion {
  id:              number;
  estacion_nombre: string;
  latitud:         number;
  longitud:        number;
}
