import { Component } from '@angular/core';
import { Productitem } from "../productitem/productitem";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productlist',
  imports: [Productitem],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  products: Product[] = [
    { id: 1, name: 'Kaba Ngondo',   price: 12000,  image: '/assets/image/products/Produit1.jpeg',  description: 'Grande robe ample portée par les femmes Sawa, souvent lors du festival Ngondo.' },
    { id: 2, name: 'Ndop', price: 20000 ,  image: '/assets/image/products/Produit2.jpeg', description: 'Tissu bleu indigo brodé de motifs blancs, emblématique des peuples Bamiléké et Bamoun.' },
    { id: 3, name: 'Toghu', price: 40000 , image: '/assets/image/products/Produit3.jpg',     description: 'Tenue royale brodée, portée dans la région du Nord-Ouest, souvent lors des cérémonies.' },
    { id: 4, name: 'Sandja', price: 10000, image: '/assets/image/products/Produit4.jpg',    description: 'Pagne noué à la taille, porté par les hommes Douala et d’autres peuples côtiers.' },
    { id: 5, name: 'Boubou', price: 15000 , image: '/assets/image/products/Produit5.jpg',  description: 'Tenue ample et fluide, répandue dans le Grand Nord et adoptée dans tout le pays.' }
  ];
}
