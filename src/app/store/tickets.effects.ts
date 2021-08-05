import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {TicketsService} from "../services/tickets.service";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {of, pipe, throwError} from "rxjs";
import {errorSearchId, errorTickets, getSearchId, getTickets, loadSearchId, loadTickets} from "./ticket.actions";
import {Store} from "@ngrx/store";
import * as fromRoot from "./ticket.reducer";
import {searchIdReducer} from "./ticket.reducer";

@Injectable()
export class TicketsEffects {

  loadSearchId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSearchId),
      switchMap(() => this.ticketService.getSearchId().pipe(
        map(searchId => getSearchId({searchId})),
        catchError(() => of(errorSearchId()))
      ))
    )
  })

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
    private store: Store<any>
  ) {
  }
}
