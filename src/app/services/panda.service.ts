import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModelType } from '../enums/model-type';
import { Panda } from '../interfaces/panda';

@Injectable({
   providedIn: 'root',
})
export class PandaService {
   private readonly PANDA_DATA: Panda[] = [
      {
         id: 1,
         type: ModelType.PANDA,
         name: 'Bao Bao',
         sex: 'F',
         birthDate: new Date(2013, 8, 23),
         currentLocation: 'Wolong National Nature Reserve',
      },
      {
         id: 2,
         type: ModelType.PANDA,
         name: 'Bei Bei',
         sex: 'M',
         birthDate: new Date(2015, 8, 22),
         currentLocation: 'Bifengxia Panda Base',
      },
      {
         id: 3,
         type: ModelType.PANDA,
         name: 'Da Mao',
         sex: 'M',
         birthDate: new Date(2008, 9, 1),
         currentLocation: 'Calgary Zoo',
      },
      {
         id: 4,
         type: ModelType.PANDA,
         name: 'Er Shun',
         sex: 'F',
         birthDate: new Date(2007, 8, 10),
         currentLocation: 'Wolong National Nature Reserve',
      },
      {
         id: 5,
         type: ModelType.PANDA,
         name: 'Gu Gu',
         sex: 'M',
         birthDate: new Date(1999, 9, 25),
         currentLocation: 'Beijing Zoo',
      },
      {
         id: 6,
         type: ModelType.PANDA,
         name: 'Lun Lun',
         sex: 'F',
         birthDate: new Date(1997, 8, 25),
         currentLocation: 'Zoo Atlanta',
      },
      {
         id: 7,
         type: ModelType.PANDA,
         name: 'Mei Lan',
         sex: 'M',
         birthDate: new Date(2006, 9, 6),
         currentLocation: 'Chengdu Panda Base',
      },
      {
         id: 8,
         type: ModelType.PANDA,
         name: 'Mei Sheng',
         sex: 'M',
         birthDate: new Date(2003, 8, 3),
         currentLocation: 'Bifengxia Panda Base',
      },
   ];

   constructor() {}

   public getPandas(): Observable<Panda[]> {
      return of(this.PANDA_DATA);
   }
}
