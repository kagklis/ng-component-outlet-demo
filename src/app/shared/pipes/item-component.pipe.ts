import { Pipe, PipeTransform, Type } from '@angular/core';
import { TypeOwner } from 'src/app/interfaces/type-owner';
import { ComponentMappingService } from 'src/app/services/component-mapping.service';

@Pipe({
   name: 'itemComponent',
})
export class ItemComponentPipe implements PipeTransform {
   constructor(private mappingService: ComponentMappingService) {}

   transform(item: TypeOwner): Type<any> {
      return this.mappingService.resolveComponentByItem(item.type);
   }
}
