import { Component } from '@angular/core';
import { DynamicComponent } from 'src/app/core/dynamic/dynamic.component';

@Component({
   selector: 'app-movie',
   templateUrl: './movie.component.html',
   styleUrls: ['./movie.component.scss'],
})
export class MovieComponent extends DynamicComponent {}
