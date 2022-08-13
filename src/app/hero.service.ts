import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesURL = 'api/heroes'; //URL to web api
  
constructor(
  private http: HttpClient,
  private messageService: MessageService
     
){}
  // GET heroes from the server
   getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL)
  }

  getHero(id: number): Observable<Hero> {
    //No handling if Hero has id yet. Will be implemented
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  
}
