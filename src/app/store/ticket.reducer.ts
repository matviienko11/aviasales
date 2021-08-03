import {createReducer, on, Action} from "@ngrx/store";
import {filterTickets, getSearchId, getTickets, sortingTickets} from "./ticket.actions";
import {TicketInterface} from "../interfaces/ticket.interface";

export const initialSearchState: string = '';
export const initialTicketState: TicketInterface[] = [];

export const searchIdReducer = createReducer(
    initialSearchState,
  on(getSearchId, (state, {searchId}) => {
    return searchId
  })
)

export const ticketReducer = createReducer(
  initialTicketState,
  on(getTickets, (state, {tickets}) => {
    return {
      ...state,
      data: tickets.tickets
    }
  }),
  on(sortingTickets, (state, { sorting }) => {
    return {
      ...state,
      sorting
    }
  }),
  on(filterTickets, (state, {filters}) => {
    return {
      ...state,
      filters
    }
  })
)
