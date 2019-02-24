import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackgroundColorDirective } from "./shared/directives/background-color.directive";
import { SharedModule } from "./shared/shared.module";
import { LogicModule } from "./logic/logic.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, BackgroundColorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LogicModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
