import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p [appBackgroundColor]="'red'">
      hello world!
    </p>
  `,
  styles: []
})
export class AppComponent {
  title = "movies";
}
