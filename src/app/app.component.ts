import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { byNameAsc, byNameDsc, DrinkDetailsI, DrinksFullI, DrinksShortI } from './interfaces/drinks';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly searchOptions = ['Name', 'Ingredient', 'Category'];
  readonly sortOptions = [
    { label: 'Name: A to Z', function: byNameAsc },
    { label: 'Name: Z to A', function: byNameDsc }
  ];
  sortBy: { label: string, function: any; };
  searchInput = new FormControl('');
  searchBy = this.searchOptions[0];
  cocktails: DrinksFullI | null = undefined;

  constructor(private api: ApiService, private dialog: MatDialog) { }

  search(): void {
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
        throw Error('invalid search option: ' + this.searchBy);
    }
    this.sortBy = undefined;
  }

  private searchByCategory(): void {
    this.api.filterByCategory(this.searchInput.value).subscribe(response => {
      this.cocktails = response?.drinks?.length > 0 ? this.getDrinksFull(response) : { drinks: [] };
    });
  }

  private searchByIngredient(): void {
    this.api.filterByIngredient(this.searchInput.value).subscribe(response => {
      this.cocktails = response?.drinks?.length > 0 ? this.getDrinksFull(response) : { drinks: [] };
    });
  }

  private searchByName(): void {
    this.api.searchByName(this.searchInput.value).subscribe(response => {
      this.cocktails = response?.drinks?.length > 0 ? response : { drinks: [] };
    });
  }

  sortDrinks(): void {
    this.cocktails?.drinks?.sort(this.sortBy.function);
  }

  randomCocktail(): void {
    this.api.getRandomCocktail().subscribe(response => {
      if (response?.drinks?.length === 1) {
        this.openDialog(response.drinks[0]);
      }
    });
  }

  openDialog(drink: DrinkDetailsI): void {
    this.dialog.open(DrinkDetailsComponent, { data: drink });
  }

  private getDrinksFull(shortData: DrinksShortI): DrinksFullI {
    const cocktails: DrinksFullI = { drinks: [] };
    shortData.drinks.forEach(drink => {
      this.api.lookupById(drink.idDrink).subscribe(response => {
        cocktails.drinks.push(response.drinks[0]);
      });
    });
    return cocktails;
  }
}
