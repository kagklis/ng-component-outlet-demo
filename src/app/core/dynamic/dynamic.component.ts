import { Component, Injector, Input } from '@angular/core';
import { token } from '../../shared/pipes/item-injector.pipe';

@Component({
   selector: 'app-dynamic',
   templateUrl: './dynamic.component.html',
   styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent {
   @Input() item!: any;

   constructor(private inject: Injector) {
      this.item ??= this.inject.get(token);
   }
}
