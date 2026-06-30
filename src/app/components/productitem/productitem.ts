import { Component, input, Input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  //@Input() product!: Product; 
  // Input OPTIONNEL (peut être undefined) 
  product = input.required<Product>(); 
  
  // Input OBLIGATOIRE (Angular plante si non fourni) 
  // product = input.required<Product>();
    // Output qui émet un objet Product 
  productClicked = output<Product>(); 
  // Output : signal vers le parent qu'on a cliqué 
  displayProductViewModal = output<Product>();
  // Méthode qui émet l'événement 

  onProductClick() {
  this.displayProductViewModal.emit(this.product());
}

}

