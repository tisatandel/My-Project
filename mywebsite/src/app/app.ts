import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { Footer } from "./footer/footer";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mywebsite');
}
