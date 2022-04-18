import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'hours',
})
export class HoursPipe implements PipeTransform {
   transform(value: number): string {
      return `${Math.floor(value / 60)}h ${value % 60}m`;
   }
}
