import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img [src]="product.image" [alt]="product.name" class="w-full h-48 object-cover">
      <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{product.name}}</h3>
          <p class="text-gray-600 dark:text-gray-300 mt-2">{{product.description}}</p>
          <div class="mt-4 flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900 dark:text-white">{{product.price}}</span>
              <button (click)="onAddToCart()" 
                      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
              </button>
          </div>
      </div>
  </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;

  onAddToCart() {
    // Implement cart functionality
    console.log('Added to cart:', this.product);
  }
}
