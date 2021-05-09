import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DrinkDetailsI, DrinksFullI, DrinksShortI } from './interfaces/drinks';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly searchOptions = ['Name', 'Ingredient', 'Category'];
  searchInput = new FormControl('');
  searchBy = "Name";
  cocktails: DrinksFullI | null = undefined;

  constructor(private api: ApiService, private dialog: MatDialog) { }

  search() {
    switch (this.searchBy) {
      case 'Name':
        this.searchByName();
        break;
      case 'Ingredient':
        this.searchByIngredient();
        break;
      case 'Category':
        this.searchByCategory();
        break;
      default:
        throw Error("invalid search option: " + this.searchBy);
    }
  }

  private searchByCategory() {
    this.api.filterByCategory(this.searchInput.value).subscribe(response => {
      if (response == null || response.drinks.length == 0) {
        this.cocktails = { drinks: [] };
      } else {
        this.cocktails = this.getDrinksFull(response);
      }
    });
  }

  private searchByIngredient() {
    this.api.filterByIngredient(this.searchInput.value).subscribe(response => {
      if (response == null || response.drinks.length == 0) {
        this.cocktails = { drinks: [] };
      } else {
        this.cocktails = this.getDrinksFull(response);
      }
    });
  }

  private searchByName() {
    this.api.searchByName(this.searchInput.value).subscribe(response => {
      this.cocktails = response != null ? response : { drinks: [] };
    });
  }

  /** let api select 1 cocktail and populate page randomly */
  randomCocktail() {
    this.cocktails = {drinks:[]};
    const numRandomCocktails = 25;

    for(let i = 0; i < numRandomCocktails; ++i){
      this.api.getRandomCocktail().subscribe(response => {
        if(response?.drinks?.length == 1){
          this.cocktails.drinks.push(response.drinks[0]);
          if(i == 0){ 
            // show details for first random cocktail while the rest of page loads
            this.openDialog(response.drinks[0]);
          }
        }
      });
    }
  }

  openDialog(drink: DrinkDetailsI) {
    this.dialog.open(DrinkDetailsComponent, { data: drink });
  }

  private getDrinksFull(shortData: DrinksShortI): DrinksFullI {
    let cocktails: DrinksFullI = { drinks: [] };
    shortData.drinks.forEach(drink => {
      this.api.lookupById(drink.idDrink).subscribe(response => {
        cocktails.drinks.push(response.drinks[0]);
      })
    })
    return cocktails;
  }
}
