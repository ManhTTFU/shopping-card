import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //List product for API
  products: Product[] = [
    new Product(
      1,
      'Product1',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      100,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      2,
      'Product2',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      200,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      3,
      'Product3',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      300,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      4,
      'Product4',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      400,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      5,
      'Product5',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      500,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      6,
      'Product6',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      600,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
    new Product(
      7,
      'Product7',
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      700,
      'https://vn-test-11.slatic.net/p/6fb9abc6457b059a0b8854d3021dec0c.jpg_720x720q80.jpg_.webp'
    ),
  ];
  constructor() {}

  getProduct(): Product[] {
    return this.products;
  }
}
