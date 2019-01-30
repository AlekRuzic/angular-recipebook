import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() updateShoppingList = new EventEmitter<{name:string, amount:number}>();
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredients() {
    let name = this.ingredientName.nativeElement.value;
    let amount = this.ingredientAmount.nativeElement.value;
    this.updateShoppingList.emit({name, amount});
  }

}
