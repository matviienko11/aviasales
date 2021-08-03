import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";
import { Ticket } from "src/shared/models/ticket";

// export const selectSearchId = createSelector(
//   (state: AppState) => state.searchId,
//   ({searchId}: any) => searchId
// )
//
// export const selectTicket = createSelector(
//   (state: AppState) => state.ticket,
//   (tickets: Array<Ticket>) => {
//     return tickets;
//   }
// )

const feature = createFeatureSelector<any>('tickets');

export const selectTickets = createSelector(
  feature,
  ({ data = [], sorting }) => {
    // console.log('Tickets: ', data);
    // console.log('Sorting: ', sorting);
    return data
      .map((ticket: any) => new Ticket(ticket))
      .sort(getSortFn(sorting))
      // .filter
    // return data; // TODO: map through an array and create an instance. Use Ticket class
  }
)

const getSortFn = (sorting: string) => {
  if(sorting === 'Самый дешевый') {
    return (a: any,b: any) => a.price - b.price;
  }
  return (a:any, b: any) => {
    const one = a.segments[0].duration + a.segments[1].duration;
    const two = b.segments[0].duration + b.segments[1].duration;
    return one - two;
  }
}
