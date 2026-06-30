import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-modal-product-view',
  imports: [],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
   // INPUT : reçoit le produit à afficher 
  product = input<Product>(); 
  close = output<void>(); 
  
  // NOUVEAU output : ajout aux favoris 
  favoriteAdded = output<Product>(); 
  
  onAddToFavorites() { 
    const p = this.product(); 
    if (p) { 
      this.favoriteAdded.emit(p); 
    } 
  }
  // OUTPUT : signal au parent de fermer le modal   
  onCloseClick() { 
    this.close.emit();
  }
}
