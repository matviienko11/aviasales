import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'price'
})
export class priceFormatPipe implements PipeTransform {
  transform(value: number): any {
    const v1 = value.toString().slice(0, 2)
    const v2 = value.toString().slice(2, 6)
    return `${v1} ${v2} P`
    }
}
