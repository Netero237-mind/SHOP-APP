import { Component, signal } from '@angular/core';

import { Footer } from "./components/footer/footer";
import { Container } from "./components/container/container";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [Footer, Container, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-app');
}
