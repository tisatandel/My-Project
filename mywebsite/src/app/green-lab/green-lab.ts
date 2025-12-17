import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-green-lab',
  imports: [FormsModule, RouterModule],
  templateUrl: './green-lab.html',
  styleUrls: ['./green-lab.css']
})
export class GreenLab {

  // Two-way binding
  customerName: string = '';

  // Property binding
  logoUrl = 'images/logo.png';

  // Event binding
  cartCount: number = 0;
  addToCart() {
    this.cartCount++;
  }

  // Signal (real use: support email / price / contact)
  supportEmail = signal('support@greenbasket.com');

}
