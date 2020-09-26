import { Component, OnInit } from '@angular/core';
import { Boxes } from '../box';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
     hero: Boxes = {
    id: 1,
    name: 'Windstorm'
  };  

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}