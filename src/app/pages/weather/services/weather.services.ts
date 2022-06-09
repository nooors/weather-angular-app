import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { WeatherData } from "src/app/shared/interfaces/weather.interface";
import { Coord } from "src/app/shared/interfaces/weather.interface";

@Injectable({ providedIn: "root" })
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams().set("q", city);

    // Refactor with an interceptor because units and appid properties exit in both of the requests

    // .set("units", "metric")
    // .set("appid", environment.openWeather.key);
    return this.http.get<WeatherData>(`${this.API_URL}weather`, { params });
  }
  public getWeatherByCoords(coord: Coord): Observable<WeatherData> {
    const params = new HttpParams()
      .set("lat", coord.lat)
      .set("long", coord.long);
    // .set("units", "metric")
    // .set("appid", environment.openWeather.key);

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params });
  }
}

// Interceptor created at src/app//pages/weather/interceptors
// We need to register the interceptor in order to works
// We can register at app.module but we have a weather.module and this is the best place to do that
