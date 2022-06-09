import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, tap, map, filter } from "rxjs";

@Component({
  selector: "app-search",
  template: `
    <div class="search">
      <input
        type="text"
        class="search__input"
        placeholder="City..."
        [formControl]="inputSearch"
      />
    </div>
  `,
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl("");
  @Output() submitted = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.onChange();
  }
  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string) => search.trim()),
        debounceTime(850),
        distinctUntilChanged(),
        filter((search: string) => search !== ""),
        tap((search: string) => this.submitted.emit(search)),
      )
      .subscribe();
  }
}
