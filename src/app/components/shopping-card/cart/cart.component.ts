import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartSerivce: CartService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItem();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      // console.log('prod', product);
      // this.addProducToCart(product);
      this.loadCartItem();
    });
  }

  loadCartItem() {
    this.cartSerivce.getCartItems().subscribe((items: CartItem[]) => {
      // console.log('x', items);
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
