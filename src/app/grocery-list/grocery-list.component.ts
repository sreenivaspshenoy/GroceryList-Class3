import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styles: ['.noItem { color: red}']
})
export class GroceryListComponent implements OnInit {

  display : boolean = true;
  allowNewItem : boolean = true;
  addedItem : string = 'Rice';
  itemAdded: string = 'No item added';
  newItemAdded: boolean = false;

  items: string[] = ['mangoes', 'oranges', 'cabbages'];

  constructor() { 

    setTimeout(() => {
      this.allowNewItem = false;

    }, 2000);

  }

  //Event handler when item is added
  onItemAdded() {
    this.itemAdded = 'New item added';
    this.newItemAdded = true;
    this.display = false;

  }

  shouldClassBeAdded() {
    return this.display;
  }

 onInputChanged(event: any) {
   //console.log(event.target.value);
   this.addedItem = event.target.value;
 }
  

  ngOnInit() {
  }

}
