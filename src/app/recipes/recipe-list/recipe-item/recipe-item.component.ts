import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  //when a recipe item element is clicked, this method is triggered
  //this method emits an event which sends the recipe element data to the recipe-list component
  selectRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
