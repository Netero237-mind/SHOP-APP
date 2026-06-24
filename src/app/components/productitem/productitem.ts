import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product!: Product; 
}
