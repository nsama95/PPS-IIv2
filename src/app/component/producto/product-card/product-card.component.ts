import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'src/app/interface/ShoppingCart';

import { IProducto } from 'src/app/interface/iproducto.interfaces';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
//import { Product } from 'shared/models/product';
//import { ShoppingCart } from 'shared/models/ShoppingCart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProducto;
  @Input() showActions;
  @Input() shoppingCart: ShoppingCart;

  constructor(
   private shoppingCartService: ShoppingCartService
    ) {}

  ngOnInit(): void {}

  addToCart() {
   this.shoppingCartService.addToCart(this.product);
  }
}
