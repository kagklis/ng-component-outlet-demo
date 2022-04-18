import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelType } from './enums/model-type';
import { IdOwner } from './interfaces/id-owner';
import { SelectedItems } from './interfaces/selected-items';
import { MovieService } from './services/movie.service';
import { PandaService } from './services/panda.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   public selectedValue!: ModelType;
   public selection: string[] = [];
   public data$!: Observable<IdOwner[]>;
   public readonly ModelType = ModelType;

   constructor(
      private movieService: MovieService,
      private pandaService: PandaService
   ) {
      this.updateStream(ModelType.PANDA);
   }

   updateStream(value: ModelType) {
      this.selectedValue = value;
      this.data$ =
         this.selectedValue === ModelType.PANDA
            ? this.pandaService.getPandas()
            : this.movieService.getMovies();
   }

   updateSelection(selection: SelectedItems) {
      this.selection = Object.keys(selection);
   }
}
