import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<{}>();

  recipes: Recipe[] = [
    new Recipe(
      "Recipe 1",
      "Testing for recipe 1",
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398"
    ),
    new Recipe(
      "Recipe 2",
      "Testing for recipe 2",
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/IMG_1105.jpg?itok=l4727xCs&mtime=1375852398"
    )
  ];

  constructor() {}

  ngOnInit() {}

  //this method gets the recipe element data from the recipe-list component and sends it to the recipe component
  viewRecipe(recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
