import { Component, output, signal } from '@angular/core';
import {  DatePipe } from '@angular/common';
import { Productlist } from "../productlist/productlist";
import { ModalProductView } from "../modal-product-view/modal-product-view";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-container',
  standalone:true,
  imports: [Productlist, DatePipe, ModalProductView],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  currentDate = signal(new Date()); 
   title = signal('My Shop'); 
  count = signal(0); 
  isActive = signal(true);

  afficherValeur() {
    console.log(this.title);
    console.log(this.count);
    console.log(this.isActive);
  }
   favoriteAdded = output<Product>(); 
  
  onFavoriteAdded(product: Product) { 
    this.favoriteAdded.emit(product); 
  }
  changerTitre() {
    this.title.set('My New Shop');
    this.count.set(10);
  }
}
