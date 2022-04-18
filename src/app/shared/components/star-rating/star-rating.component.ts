import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-star-rating',
   templateUrl: './star-rating.component.html',
   styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
   @Input() starRating: number = 0;
   @Input() maxRating: number = 10;
}
