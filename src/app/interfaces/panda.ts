import { IdOwner } from './id-owner';
import { TypeOwner } from './type-owner';

export interface Panda extends IdOwner, TypeOwner {
   name: string;
   sex: 'F' | 'M';
   birthDate: Date;
   currentLocation: string;
}
