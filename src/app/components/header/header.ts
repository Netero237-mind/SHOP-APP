import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = signal(false);
  favoritesCount = input(0); 
  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
  hello() :void{
    console.log('Bonjour !');
    //void ne retourne rien
  }
  getMessage(): string { 
    return 'Bonjour le monde';
  }
  getCount(): number{
    return 42;
  }
}
