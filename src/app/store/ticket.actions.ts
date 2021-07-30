import {createAction, props} from "@ngrx/store";
import {Ticket} from "../interfaces/ticket.interface";

export const loadSearchId = createAction(
  '[Search id] Load search id'
)

export const getSearchId = createAction(
  '[Search id] Get search id',
  props<{searchId: any}>()
)

export const errorSearchId = createAction(
  '[Search id] Search id error'
)

export const loadTickets = createAction(
  '[TICKETS] Load tickets'
)

export const getTickets = createAction(
  '[TICKETS] Get tickets',
  props<{tickets: any}>()
)

export const errorTickets = createAction(
  '[TICKETS] Error tickets'
)
