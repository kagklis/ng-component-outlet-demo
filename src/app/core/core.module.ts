import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { PandaComponent } from './panda/panda.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [DynamicComponent, MovieComponent, PandaComponent],
   imports: [SharedModule],
   exports: [MovieComponent, PandaComponent],
})
export class CoreModule {}
