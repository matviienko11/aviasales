import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  getSearchId() {
    return this.http.get<{ searchId: string }>(environment.ID_SEARCH_URL)
  }

  getTickets(id: string) {
    return this.http.get(environment.TICKET_SEARCH_URL + id)
  }
}
