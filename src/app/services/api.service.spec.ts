import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { DrinksFullI } from '../interfaces/drinks';

const DUMMY_DATA: DrinksFullI = {
  drinks: [
    {
      idDrink: "13501",
      strDrink: "ABC",
      strDrinkAlternate: "null",
      strTags: "null",
      strVideo: "null",
      strCategory: "Shot",
      strIBA: "null",
      strAlcoholic: "Alcoholic",
      strGlass: "Shot glass",
      strInstructions: "Layered in a shot glass.",
      strInstructionsES: "null",
      strInstructionsDE: "Schichtaufbau in einem Schnapsglas.",
      strInstructionsFR: "null",
      strInstructionsIT: "Versa in ordine di lettera i vari ingredienti. 1\/3 del bicchiere va riempito con l'Amaretto, 1\/3 di Baileys e il restante di Cognac.",
      strInstructionsZHHANS: "null",
      strInstructionsZHHANT: "null",
      strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqpvqp1472668328.jpg",
      strIngredient1: "Amaretto",
      strIngredient2: "Baileys irish cream",
      strIngredient3: "Cognac",
      strIngredient4: "null",
      strIngredient5: "null",
      strIngredient6: "null",
      strIngredient7: "null",
      strIngredient8: "null",
      strIngredient9: "null",
      strIngredient10: "null",
      strIngredient11: "null",
      strIngredient12: "null",
      strIngredient13: "null",
      strIngredient14: "null",
      strIngredient15: "null",
      strMeasure1: "1\/3 ",
      strMeasure2: "1\/3 ",
      strMeasure3: "1\/3 ",
      strMeasure4: "null",
      strMeasure5: "null",
      strMeasure6: "null",
      strMeasure7: "null",
      strMeasure8: "null",
      strMeasure9: "null",
      strMeasure10: "null",
      strMeasure11: "null",
      strMeasure12: "null",
      strMeasure13: "null",
      strMeasure14: "null",
      strMeasure15: "null",
      strImageSource: "null",
      strImageAttribution: "null",
      strCreativeCommonsConfirmed: "No",
      dateModified: "2016-08-31 19:32:08"
    },
    {
      idDrink: "17835",
      strDrink: "Abilene",
      strDrinkAlternate: "null",
      strTags: "null",
      strVideo: "null",
      strCategory: "Ordinary Drink",
      strIBA: "null",
      strAlcoholic: "Alcoholic",
      strGlass: "Highball glass",
      strInstructions: "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
      strInstructionsES: "null",
      strInstructionsDE: "null",
      strInstructionsFR: "null",
      strInstructionsIT: "Versare tutti gli ingredienti in un bicchiere highball riempito di cubetti di ghiaccio. Mescolare bene.",
      strInstructionsZHHANS: "null",
      strInstructionsZHHANT: "null",
      strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/smb2oe1582479072.jpg",
      strIngredient1: "Dark rum",
      strIngredient2: "Peach nectar",
      strIngredient3: "Orange juice",
      strIngredient4: "null",
      strIngredient5: "null",
      strIngredient6: "null",
      strIngredient7: "null",
      strIngredient8: "null",
      strIngredient9: "null",
      strIngredient10: "null",
      strIngredient11: "null",
      strIngredient12: "null",
      strIngredient13: "null",
      strIngredient14: "null",
      strIngredient15: "null",
      strMeasure1: "1 1\/2 oz ",
      strMeasure2: "2 oz ",
      strMeasure3: "3 oz ",
      strMeasure4: "null",
      strMeasure5: "null",
      strMeasure6: "null",
      strMeasure7: "null",
      strMeasure8: "null",
      strMeasure9: "null",
      strMeasure10: "null",
      strMeasure11: "null",
      strMeasure12: "null",
      strMeasure13: "null",
      strMeasure14: "null",
      strMeasure15: "null",
      strImageSource: "null",
      strImageAttribution: "null",
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2016-04-29 09:44:25"
    },
    {
      idDrink: "12790",
      strDrink: "Absinthe #2",
      strDrinkAlternate: "null",
      strTags: "null",
      strVideo: "null",
      strCategory: "Homemade Liqueur",
      strIBA: "null",
      strAlcoholic: "Alcoholic",
      strGlass: "Jar",
      strInstructions: "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
      strInstructionsES: "null",
      strInstructionsDE: "Zusammen mischen und ein paar Tage ruhen lassen. Durch einen Kaffeefilter abseihen. Zum Servieren 1 Teil Absinth mit 4 Teilen Wasser mischen, Eis hinzuf\u00fcgen, genie\u00dfen.",
      strInstructionsFR: "null",
      strInstructionsIT: "Mescolate insieme e lasciate riposare qualche giorno.Per servire mescolare 1 parte di assenzio a 4 parti di acqua, aggiungere il ghiaccio e gustare.Filtrare attraverso un filtro da caff\u00e8.",
      strInstructionsZHHANS: "null",
      strInstructionsZHHANT: "null",
      strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uxxtrt1472667197.jpg",
      strIngredient1: "Vodka",
      strIngredient2: "Sugar",
      strIngredient3: "Anise",
      strIngredient4: "Licorice root",
      strIngredient5: "Wormwood",
      strIngredient6: "null",
      strIngredient7: "null",
      strIngredient8: "null",
      strIngredient9: "null",
      strIngredient10: "null",
      strIngredient11: "null",
      strIngredient12: "null",
      strIngredient13: "null",
      strIngredient14: "null",
      strIngredient15: "null",
      strMeasure1: "1 bottle ",
      strMeasure2: "50 gr ",
      strMeasure3: "50 ml pure ",
      strMeasure4: "1 tblsp ",
      strMeasure5: "1 ",
      strMeasure6: "null",
      strMeasure7: "null",
      strMeasure8: "null",
      strMeasure9: "null",
      strMeasure10: "null",
      strMeasure11: "null",
      strMeasure12: "null",
      strMeasure13: "null",
      strMeasure14: "null",
      strMeasure15: "null",
      strImageSource: "null",
      strImageAttribution: "null",
      strCreativeCommonsConfirmed: "No",
      dateModified: "2016-08-31 19:13:17"
    }
  ]
};

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    }).compileComponents();

    injector = getTestBed();
    service = injector.inject(ApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const apiService = TestBed.inject(ApiService);
    expect(apiService).toBeTruthy();
  });

  it('getUserList() should return data', () => {
    service.searchByName('ab').subscribe((res) => {
      expect(res).toEqual(DUMMY_DATA);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ab');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_DATA);
  });

  it('getRandomCocktail() should return data', () => {
    service.getRandomCocktail().subscribe(res => {
      expect(res).toEqual(DUMMY_DATA);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_DATA);
  });

  it('filterByIngredient() should return data', () => {
    service.filterByIngredient('vodka').subscribe(res => {
      expect(res).toEqual(DUMMY_DATA);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_DATA);
  });

  it('filterByCategory() should return data', () => {
    service.filterByCategory('cocktail').subscribe(res => {
      expect(res).toEqual(DUMMY_DATA);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_DATA);
  });

  it('lookupById() should return data', () => {
    service.lookupById('123').subscribe(res => {
      expect(res).toEqual(DUMMY_DATA);
    });

    const req = httpMock.expectOne('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=123');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_DATA);
  });
});
