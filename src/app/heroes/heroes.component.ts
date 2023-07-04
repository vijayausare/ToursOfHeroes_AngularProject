import { Component } from '@angular/core';  //  always import from core angular library
import { Hero } from './hero';

@Component({   // decorator function 
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id : 1, 
    name : "Hero1"
  } 
}
