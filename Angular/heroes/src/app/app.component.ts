import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero';  // <-- doesnt need
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
