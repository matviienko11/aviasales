import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";
import { Ticket } from "src/shared/models/ticket";

const feature = createFeatureSelector<any>('tickets');

export const selectTickets = createSelector(
  feature,
  ({ data = [], sorting, filters = [] }) => {
    // console.log('Tickets: ', data);
    // console.log('Sorting: ', sorting);
    // console.log('Filters: ', filters);
    return data
      .map((ticket: any) => new Ticket(ticket))
      .sort(getSortFn(sorting))
      .filter(getFilterFn(filters))
      .slice(0, 5)
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

enum Filters {
  NONE = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3
}

const createFilterFn = (filterType: Filters) => {
  switch (filterType) {
    case Filters.NONE:
      return (item: Ticket) => (item.segments[0].stops.length + item.segments[1].stops.length) === 0;
    case Filters.ONE:
      return (item: Ticket) => (item.segments[0].stops.length + item.segments[1].stops.length) === 1;
    case Filters.TWO:
      return (item: Ticket) => (item.segments[0].stops.length + item.segments[1].stops.length) === 2;
    case Filters.THREE:
      return (item: Ticket) => (item.segments[0].stops.length + item.segments[1].stops.length) === 3;
    default:
      console.log("default")
      return (item: Ticket) => true;
  }
}

const getFilterFn = (filters: any[] = []) => {
  const filtersArr = filters.map(filter => createFilterFn(filter));
  return (item: any) => {
    return filtersArr.some((fn: any) => fn(item));
  }
}
