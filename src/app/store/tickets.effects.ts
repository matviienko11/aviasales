import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TicketsService} from "../services/tickets.service";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {errorTickets, getTickets, loadTickets} from "./ticket.actions";



@Injectable()
export class TicketsEffects {

  loadTickets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTickets),
      switchMap(() => {
        return this.ticketService.getSearchId()
      }),
      switchMap(({searchId}) => {
          return this.ticketService.getTickets(searchId).pipe(
            map(tickets => getTickets({tickets})))
        }
      ),
      catchError(err => of(errorTickets(err)))
    )
  })

  constructor(
    private actions$: Actions,
    private ticketService: TicketsService,
  ) {
  }
}
