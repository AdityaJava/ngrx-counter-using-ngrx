import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter/state/counter.reducer";

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }) // Use a meaningful key like 'counter'
  ],
  providers: [],
  bootstrap: [CounterComponent] // Bootstrap the main component, not AppModule
})
export class AppModule { }