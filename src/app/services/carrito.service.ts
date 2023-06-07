
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interface/producto.interfaces';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { IProducto } from "../interface/iproducto.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //lista carrito
  private myList: IProducto[] = [];
  //carrito observable
  private myCart = new BehaviorSubject<IProducto[]>([])
  myCart$ = this.myCart.asObservable();


  constructor(private httpClient: HttpClient, private db: AngularFirestore) {

  }



  getAllProducts(): Observable<IProducto[]> {

    return this.db
      .collection('Productos')
      .valueChanges({ idField: 'id' }) as Observable<IProducto[]>;
  }


  addProduct(product: IProducto) {
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
    } else {
      const productMod = this.myList.find((element) => element.id === product.id);
      if (productMod) {
        productMod.stock += 1;
      } else {
        product.cantidad = 1;
        this.myList.push(product);
      }
    }

    this.myCart.next(this.myList);
  }


  completePurchase() {
    this.db.collection('Carrito').add({ products: this.myList });
    // Limpiar el carrito después de completar la compra
    this.myList = [];
    this.myCart.next([]);
  }

  deleteProduct(id: string) {
    this.myList = this.myList.filter((product) => {
      return product.id != id;
    })
    this.myCart.next(this.myList);
  }

  findProductById(id: string) {
    return this.myList.find((elemento) => {
      return elemento.id === id;
    })
  }

  totalCarrito() {
    const total = this.myList.reduce(function (acc, product) {
      return acc + (product.cantidad * product.precio);
    }, 0)
    return total;
  }

  // getPromise(): Promise<any[]>
  // {
  //   return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}products`))
  // }*/
}
