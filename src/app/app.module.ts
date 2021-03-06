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
import {errorReducer, ticketReducer} from "./store/ticket.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {TicketsEffects} from "./store/tickets.effects";
import {stopsFormatPipe} from "./utils/pipes/stops-format.pipe";
import {priceFormatPipe} from "./utils/pipes/price-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketItemComponent,
    FilterBarComponent,
    StopsCountFilterComponent,
    stopsFormatPipe,
    priceFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    StoreModule.forRoot({tickets: ticketReducer, error: errorReducer}),
    EffectsModule.forRoot([TicketsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
