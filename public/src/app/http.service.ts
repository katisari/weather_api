import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  showInfo(city) {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + ',us&appid=730f041a56f31e587a9e5ee335ae81f0&units=imperial');
  }
}
