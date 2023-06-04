import { IProducto } from "./iproducto.interfaces";


export class ShoppingCartItem {
  constructor(public product: IProducto, public quantity: number) {}

  get totalPrice() {
    return this.product.precio * this.quantity;
  }
}
