import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'stops'
})
export class stopsFormatPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if(value === 0) {
      return `${value} ПЕРЕСАДОК`
    } else if(value === 1) {
      return `${value} ПЕРЕСАДКА`
    } else {
      return `${value} ПЕРЕСАДКИ`
    }
  }
}
