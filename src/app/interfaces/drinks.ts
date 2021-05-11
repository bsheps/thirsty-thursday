export interface DrinksFullI {
    drinks: DrinkDetailsI[];
}

export interface DrinksShortI {
    drinks: DrinksSummaryI[];
}

export interface DrinksSummaryI {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export interface DrinkDetailsI {
    dateModified: string;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: string;
    strDrink: string;
    strDrinkAlternate: string;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strImageAttribution: string;
    strImageSource: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsES: string;
    strInstructionsFR: string;
    strInstructionsIT: string;
    strInstructionsZHHANS: string;
    strInstructionsZHHANT: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strTags: string;
    strVideo: string;
}

export const byNameAsc = (a: DrinkDetailsI | DrinksSummaryI, b: DrinkDetailsI | DrinksSummaryI): number => {
    return a.strDrink.localeCompare(b.strDrink);
};

export const byNameDsc = (a: DrinkDetailsI | DrinksSummaryI, b: DrinkDetailsI | DrinksSummaryI): number => {
    return b.strDrink.localeCompare(a.strDrink);
};
