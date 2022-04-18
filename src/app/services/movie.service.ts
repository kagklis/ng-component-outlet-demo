import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModelType } from '../enums/model-type';
import { IdOwner } from '../interfaces/id-owner';
import { Movie } from '../interfaces/movie';

@Injectable({
   providedIn: 'root',
})
export class MovieService {
   private readonly MOVIE_DATA: any[] = [
      {
         id: 1,
         type: ModelType.MOVIE,
         title: 'Dune',
         description:
            "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its scion becomes troubled by visions of a dark future.",
         releaseYear: 2021,
         durationInMinutes: 155,
         starRating: 8.1,
      },
      {
         id: 2,
         type: ModelType.MOVIE,
         title: 'Harry Potter and the Goblet of Fire',
         description:
            'Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.',
         releaseYear: 2005,
         durationInMinutes: 157,
         starRating: 7.7,
      },
      {
         id: 3,
         type: ModelType.MOVIE,
         title: 'Star Wars: Episode IX - The Rise of Skywalker',
         description:
            'In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.',
         releaseYear: 2019,
         durationInMinutes: 141,
         starRating: 6.5,
      },
      {
         id: 4,
         type: ModelType.MOVIE,
         title: 'The Lord of the Rings: The Fellowship of the Ring',
         description:
            'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
         releaseYear: 2001,
         durationInMinutes: 178,
         starRating: 8.9,
      },
      {
         id: 5,
         type: ModelType.MOVIE,
         title: 'The Matrix',
         description:
            'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
         releaseYear: 1999,
         durationInMinutes: 136,
         starRating: 8.7,
      },
      {
         id: 6,
         type: ModelType.MOVIE,
         title: 'X-Men: Apocalypse',
         description:
            'In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world.',
         releaseYear: 2016,
         durationInMinutes: 144,
         starRating: 6.9,
      },
      {
         id: 7,
         type: ModelType.MOVIE,
         title: 'Star Trek',
         description:
            "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
         releaseYear: 2009,
         durationInMinutes: 127,
         starRating: 8.4,
      },
      {
         id: 8,
         type: ModelType.MOVIE,
         title: 'Avengers: Infinity War',
         description:
            'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
         releaseYear: 2018,
         durationInMinutes: 149,
         starRating: 8.5,
      },
   ];

   constructor() {}

   public getMovies(): Observable<Movie[]> {
      return of(this.MOVIE_DATA);
   }
}
