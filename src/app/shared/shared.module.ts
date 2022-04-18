import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './components/selection-list/selection-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HoursPipe } from './pipes/hours.pipe';
import { ItemInjectorPipe } from './pipes/item-injector.pipe';
import { ItemComponentPipe } from './pipes/item-component.pipe';

@NgModule({
   declarations: [
      SelectionListComponent,
      StarRatingComponent,
      HoursPipe,
      ItemInjectorPipe,
      ItemComponentPipe,
   ],
   imports: [CommonModule, ScrollingModule],
   exports: [
      CommonModule,
      SelectionListComponent,
      StarRatingComponent,
      HoursPipe,
   ],
})
export class SharedModule {}
