import { Component } from '@angular/core';
import { Productlist } from "../productlist/productlist";

@Component({
  selector: 'app-container',
  imports: [Productlist],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
