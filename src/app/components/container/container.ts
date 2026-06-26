import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Productlist } from "../productlist/productlist";

@Component({
  selector: 'app-container',
  imports: [Productlist, JsonPipe],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  product = signal({ 
  name: 'Robe pour femme', 
  price: 12.99 
}); 
}
