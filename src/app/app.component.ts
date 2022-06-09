import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "weather-angular-app";

  public weather$!: Observable<any>;

  public onSearch(search: string): void {
    console.log(search);
  }
}
