import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class WeatherInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.appendAll({
        units: "metric",
        appId: environment.openWeather.key,
      }),
    });

    return next.handle(cloneReq);
  }
}
