import { Injectable, Type } from '@angular/core';
import { MovieComponent } from '../core/movie/movie.component';
import { PandaComponent } from '../core/panda/panda.component';
import { DynamicComponent } from '../core/dynamic/dynamic.component';
import { ModelType } from '../enums/model-type';

@Injectable({
   providedIn: 'root',
})
export class ComponentMappingService {
   private readonly COMPONENT_MAP: { [key in ModelType]: Type<DynamicComponent> } = {
      [ModelType.PANDA]: PandaComponent,
      [ModelType.MOVIE]: MovieComponent,
   };

   constructor() {}

   resolveComponentByItem(itemType: ModelType) {
      return this.COMPONENT_MAP[itemType];
   }
}
