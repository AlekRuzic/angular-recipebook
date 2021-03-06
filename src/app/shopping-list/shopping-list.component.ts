import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredients(item) {
    console.log(item.name);
    console.log(item.amount);
    this.ingredients.push(new Ingredient(item.name, item.amount));
  }

}
