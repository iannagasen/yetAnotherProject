import { Injectable } from "@angular/core";
import { Product } from "../models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Classic White Sneakers',
      description: 'Comfortable everyday sneakers',
      price: 79.99,
      image: 'https://via.placeholder.com/200',
      category: 'Shoes'
    },
    {
      id: 2,
      name: 'Leather Backpack',
      description: 'Stylish and durable backpack',
      price: 129.99,
      image: 'https://via.placeholder.com/200',
      category: 'Accessories'
    },
    // Add more dummy products here
  ];

  getProducts(): Product[] {
    return this.products;
  }
}