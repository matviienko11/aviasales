import {createReducer, on, Action} from "@ngrx/store";
import {filterTickets, getSearchId, getTickets, sortingTickets} from "./ticket.actions";
import {Ticket} from "../../shared/models/ticket";

export const initialSearchState: string = '';
export const initialTicketState: Ticket[] = [];

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
