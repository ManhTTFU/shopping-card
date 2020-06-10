import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // {
    //   id: 1,
    //   productId: 1,
    //   productName: 'Scoopy Doo 1',
    //   qty: 1,
    //   price: 100,
    // },
    // {
    //   id: 2,
    //   productId: 2,
    //   productName: 'Scoopy Doo 2',
    //   qty: 2,
    //   price: 200,
    // },
    // {
    //   id: 3,
    //   productId: 3,
    //   productName: 'Scoopy Doo 3',
    //   qty: 3,
    //   price: 300,
    // },
    // {
    //   id: 4,
    //   productId: 4,
    //   productName: 'Scoopy Doo 4',
    //   qty: 4,
    //   price: 400,
    // },
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      // console.log('prod', product);
      this.addProducToCart(product);
    });
  }

  addProducToCart(product: Product) {
    let productExists = false; // product is not exists

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
      });
    }
    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price,
    //   });
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++;
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price,
    //       });
    //     }
    //   }
    // }
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
