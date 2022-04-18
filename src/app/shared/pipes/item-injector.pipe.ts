import { InjectionToken, Injector, Pipe, PipeTransform } from '@angular/core';
import { IdOwner } from '../../interfaces/id-owner';

export const token = new InjectionToken<IdOwner>('passedItem');

@Pipe({
   name: 'itemInjector',
})
export class ItemInjectorPipe implements PipeTransform {
   constructor(private injector: Injector) {}

   transform(item: IdOwner): Injector {
      return Injector.create({
         providers: [
            {
               provide: token,
               useValue: item,
            },
         ],
         parent: this.injector,
      });
   }
}
