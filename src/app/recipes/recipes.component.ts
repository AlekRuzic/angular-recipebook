import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  ngOnInit() {

  }

  viewRecipe(recipe) {
    let recipeName = recipe.querySelector("div h4").innerText;
    let recipeDescription = recipe.querySelector("div p").innerText;
    let recipeImagePath = recipe.querySelector("span img").src;
    //let recipeImagePath = recipe.querySelector("")

    this.selectedRecipe = new Recipe(recipeName, recipeDescription, recipeImagePath);
  }

}
