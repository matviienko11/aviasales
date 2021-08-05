import {createReducer, on, Action} from "@ngrx/store";
import {errorTickets, filterTickets, getTickets, sortingTickets} from "./ticket.actions";
import {Ticket} from "../../shared/models/ticket";

export const initialTicketState: Ticket[] = [];
export const initialErrorState: string = '';

export const ticketReducer = createReducer(
  initialTicketState,
  on(getTickets, (state, {tickets}) => {
    return {
      ...state,
      data: tickets.tickets
    }
  }),
  on(sortingTickets, (state, {sorting}) => {
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

export const errorReducer = createReducer(
  initialErrorState,
  on(errorTickets, (state, {error}) => {
    return error
  })
)
