import { Component, output, signal } from '@angular/core';
import { Productitem } from "../productitem/productitem";
import { Product } from '../../models/product.model';
import { ModalProductView } from "../modal-product-view/modal-product-view";

@Component({
  selector: 'app-productlist',
  imports: [Productitem, ModalProductView],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  selectedProduct = signal<Product | undefined>(undefined);
onProductClicked(product: Product) {
   this.selectedProduct.set(product);
// throw new Error('Method not implemented.');
console.log('Produit cliquer :', product);
}

  private getRandomDate(): Date {
    const start = new Date(2020, 0, 1).getTime();
    const end = Date.now();
    const randomTime = start + Math.random() * (end - start);
    return new Date(randomTime);
  }

  products: Product[] = [
    
    {
    id: 1,
    name: "Kaba Ngondo",
    price: 12000,
    pricesold:6000,
    createdAt: this.getRandomDate(),
    image: "/assets/image/products/Produit1.jpeg",
    description: "Grande robe ample portée par les femmes Sawa, souvent lors du festival Ngondo.",
  },
  {
    id: 2,
    name: "Ndop",
    price: 20000,
    pricesold:6000,
    createdAt: this.getRandomDate(),
    image: "/assets/image/products/Produit2.jpeg",
    description: "Tissu bleu indigo brodé de motifs blancs, emblématique des peuples Bamiléké et Bamoun.",
  },
  {
    id: 3,
    name: "Toghu",
    price: 40000,
    pricesold:6000,
    createdAt: this.getRandomDate(),
    image: "/assets/image/products/Produit3.jpg",
    description: "Tenue royale brodée, portée dans la région du Nord-Ouest, souvent lors des cérémonies.",
  },
  {
    id: 4,
    name: "Sandja",
    price: 10000,
    pricesold:6000,
    createdAt: this.getRandomDate(),
    image: "/assets/image/products/Produit4.jpg",
    description: "Pagne noué à la taille, porté par les hommes Douala et d’autres peuples côtiers.",
  },
  {
    id: 5,
    name: "Boubou",
    price: 15000,
    pricesold:6000,
    createdAt: this.getRandomDate(),
    image: "/assets/image/products/Produit5.jpg",
    description: "Tenue ample et fluide, répandue dans le Grand Nord et adoptée dans tout le pays.",
  }
 ];

  // État du modal 
  isDisplayModal = signal(false); 
  modalProduct = signal<Product | undefined>(undefined); 
  
  // Méthode appelée quand un produit est cliqué 
  onDisplayProductViewModal(product: Product) {
    console.log('Produit reçu dans le modal :', product); 
    this.modalProduct.set(product); 
    this.isDisplayModal.set(true); 
  } 
  
  // Méthode appelée quand le modal demande à être fermé 
  onCloseModal() { 
    this.isDisplayModal.set(false); 
    this.modalProduct.set(undefined); 
  } 
   // NOUVEAU output : retransmet vers App 
  favoriteAdded = output<Product>(); 
  
  // Méthode appelée quand le modal ajoute aux favoris 
  onFavoriteAdded(product: Product) { 
    console.log('Favori ajouté :', product.name); 
    this.favoriteAdded.emit(product); 
  } 
 constructor() {
  console.log('composant ProducList cree !');
 }
 title = signal('My Shop'); 
  count = signal(0); 
  isActive = signal(true);

  afficherValeur() {
    console.log(this.title);
    console.log(this.count);
    console.log(this.isActive);
  }
  changerTitre() {
    this.title.set('My New Shop');
    this.count.set(10);
  }
  
}
