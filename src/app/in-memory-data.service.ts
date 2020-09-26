import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr A.D' },
      { id: 2, name: 'Nadir  Ali' },
      { id: 3, name: 'Babar Khan' },
      { id: 4, name: 'Dr Sueleman' },
      { id: 5, name: 'M. Majid' },
      { id: 6, name: 'Rubeel' },
      { id: 7, name: 'Damya' },
      { id: 8, name: 'Dr AQ' },
      { id: 9, name: 'Magma' },
      { id: 0, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}