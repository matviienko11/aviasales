import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'timeDiff'
})
export class timeFormat implements PipeTransform {
  transform(startTime: any, duration: any): any {
    const formattedStartTime = Date.parse(startTime);
    const durInMls = duration * 60000;
    return new Date(formattedStartTime + durInMls)
  }
}
