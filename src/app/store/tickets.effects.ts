import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {TicketsService} from "../services/tickets.service";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {of, pipe} from "rxjs";
import {errorSearchId, errorTickets, getSearchId, getTickets, loadSearchId, loadTickets} from "./ticket.actions";
import {Store} from "@ngrx/store";
import * as fromRoot from "./ticket.reducer";

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
      concatLatestFrom(() => {
        return this.store.select(state => {
          console.log(state)
          return state.searchId
        })
      }),
      switchMap((data) => {
        console.log(data)
          return this.ticketService.getTickets('98oi').pipe(
            map(tickets => (getTickets({tickets})),
              catchError(() => of(errorTickets())))
          )
        }
      )
    )
  })



  constructor(
    private actions$: Actions,
    private ticketService: TicketsService,
    private store: Store<any>
  ) {
  }
}
