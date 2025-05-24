import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  apiKey = 'd0397d6b22f0e79cd9ef50458a6158ee';
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  getForecast(city: string): Observable<any> {
    const cordinates = this.getWeatherByCoordinates(city);
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall`;
    return cordinates.pipe(
      // cordinates is an Observable, so we need to use switchMap to chain the API calls
      // The API returns an array, so we take the first result
      // We then use those coordinates to call the forecast API
      // Import switchMap and map from 'rxjs/operators' at the top if not already imported
      // import { switchMap, map } from 'rxjs/operators';
      map((res: any[]) => res[0]), // get the first result
      switchMap((coord: any) => {
      const url = `${apiUrl}?lat=${coord.lat}&lon=${coord.lon}&appid=${this.apiKey}&exclude=hourly,minutely&units=metric`;
      return this.http.get(url);
      })
    );
   
  }

  getWeatherByCoordinates(city: String): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?`;
    const url = `${apiUrl}?q=${city}&limit={LIMIT}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}