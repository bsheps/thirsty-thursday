import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksFullI, DrinksShortI } from '../interfaces/drinks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<DrinksFullI | null> {
    const url = `${this.base}/search.php?s=${name}`;
    return this.http.get<DrinksFullI | null>(url);
  }

  searchByFirstLetter(letter: string): Observable<DrinksFullI | null> {
    const url = `${this.base}/search.php?f=${letter}`;
    return this.http.get<DrinksFullI | null>(url);
  }

  lookupById(id: string): Observable<DrinksFullI | null> {
    const url = `${this.base}/lookup.php?i=${id}`;
    return this.http.get<DrinksFullI | null>(url);
  }

  filterByCategory(category: string): Observable<DrinksShortI | null> {
    const url = `${this.base}/filter.php?c=${category}`;
    return this.http.get<DrinksShortI | null>(url);
  }

  filterByIngredient(ingredient: string): Observable<DrinksShortI | null> {
    const url = `${this.base}/filter.php?i=${ingredient}`;
    return this.http.get<DrinksShortI | null>(url);
  }
  getRandomCocktail(): Observable<DrinksFullI | null> {
    const url = `${this.base}/random.php`;
    return this.http.get<DrinksFullI | null>(url);
  }
}
