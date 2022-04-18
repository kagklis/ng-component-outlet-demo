import { IdOwner } from './id-owner';
import { TypeOwner } from './type-owner';

export interface Movie extends IdOwner, TypeOwner {
   title: string;
   description: string;
   durationInMinutes: number;
   releaseYear: number;
   starRating: number;
}
