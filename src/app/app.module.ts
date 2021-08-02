import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { StopsCountFilterComponent } from './components/stops-count-filter/stops-count-filter.component';
import {FormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {searchIdReducer, ticketReducer} from "./store/ticket.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {TicketsEffects} from "./store/tickets.effects";
import {toHoursPipe} from "./utils/pipes/toHours.pipe";
import {timeFormat} from "./utils/pipes/date-format.pipe";
import {stopsFormatPipe} from "./utils/pipes/stops-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketItemComponent,
    FilterBarComponent,
    StopsCountFilterComponent,
    toHoursPipe,
    timeFormat,
    stopsFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    StoreModule.forRoot({searchId: searchIdReducer, tickets: ticketReducer}),
    EffectsModule.forRoot([TicketsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
