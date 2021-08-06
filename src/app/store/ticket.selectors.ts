import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";
import { Ticket } from "src/shared/models/ticket";
import {Filters, Sorting} from "../utils/enums";

const feature = createFeatureSelector<any>('tickets');

export const selectError = (state: AppState) => state.error;

export const selectTickets = createSelector(
  feature,
  ({ data = [], sorting, filters = [] }) => {
    return data
      .map((ticket: any) => new Ticket(ticket))
      .sort(getSortFn(sorting))
      .filter(getFilterFn(data, filters))
      .slice(0, 5)
  }
)

const getSortFn = (sorting: string) => {
  switch (sorting) {
    case Sorting.CHEAPEST:
      return (a: any,b: any) => a.price - b.price;
    case Sorting.QUICKEST:
    return (a:any, b: any) => {
      const one = a.segments[0].duration + a.segments[1].duration;
      const two = b.segments[0].duration + b.segments[1].duration;
      return one - two;
    }
    default:
      return (a: any,b: any) => a.price - b.price;
  }
}

const createFilterFn = (data: any, filterType: Filters) => {
  switch (filterType) {
    case Filters.ALL:
      return () => data;
    case Filters.NONE:
      return (item: Ticket) => item.stopsLength === 0;
    case Filters.ONE:
      return (item: Ticket) => item.stopsLength === 1;
    case Filters.TWO:
      return (item: Ticket) => item.stopsLength === 2;
    case Filters.THREE:
      return (item: Ticket) => item.stopsLength === 3;
    default:
      return () => data;
  }
}

const getFilterFn = (data:any [], filters: any[] = []) => {
  const filtersArr = filters.map(filter => createFilterFn(data, filter));
  return (item: any) => {
    return filtersArr.some((fn: any) => fn(item));
  }
}
