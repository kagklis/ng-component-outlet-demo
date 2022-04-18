import { Component } from '@angular/core';
import { DynamicComponent } from 'src/app/core/dynamic/dynamic.component';

@Component({
   selector: 'app-panda',
   templateUrl: './panda.component.html',
   styleUrls: ['./panda.component.scss'],
})
export class PandaComponent extends DynamicComponent {}
