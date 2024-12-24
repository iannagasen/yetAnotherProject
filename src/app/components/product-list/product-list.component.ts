import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
  <div class="container mx-auto px-4 py-8 mt-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      @for (product of products; track product.id) {
        <app-product-card [product]="product"></app-product-card>
      }     
    </div>
  </div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
