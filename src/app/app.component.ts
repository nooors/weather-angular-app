import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherService } from "./pages/weather/services/weather.services";
import { WeatherData } from "./shared/interfaces/weather.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "weather-angular-app";

  public weather$!: Observable<WeatherData>;
  constructor(private readonly weatherSvr: WeatherService) {}

  public onSearch(city: string): void {
    this.weather$ = this.weatherSvr.getWeatherByName(city);
  }
}

// const apiWeather =
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API key}";
// const apiWeather =
//   "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

// const API_KEY = "d21cf593dc1a1c4dd916088038d78729";
