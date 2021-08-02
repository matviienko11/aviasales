import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'hours'
})
export class toHoursPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    let hours = (value / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  }
}
