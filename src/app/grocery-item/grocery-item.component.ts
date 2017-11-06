import { Component } from '@angular/core';

@Component({
    selector : 'grocery-item',
    template: '<p >{{itemName}}</p>',
    styles: ['p {color: blue}']
    
})
export class GroceryItemComponent{
    itemName: string = "Apple";
}