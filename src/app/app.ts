import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Container } from "./components/container/container";
import { Header } from "./components/header/header";
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [Footer, Container, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  favoritesCount = signal(0); 
  
  onFavoriteAdded(product: Product) { 
    this.favoritesCount.update(count => count + 1); 
    console.log('Total favoris :', this.favoritesCount()); 
  }
  protected readonly title = signal('shop-app');
}
