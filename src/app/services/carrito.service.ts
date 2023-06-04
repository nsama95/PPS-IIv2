
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interface/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  baseUrl = 'https://api.escuelajs.co/api/v1/';
  //lista carrito
  private myList: Producto[] = [];
  //carrito observable
  private myCart = new BehaviorSubject<Producto[]>([])
  myCart$ = this.myCart.asObservable();


  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Producto[]> {

    
    const response = this.httpClient.get<Producto[]>(`${this.baseUrl}products`)
    return response;
  }

  addProduct(product:Producto){
    //ver si la lista esta vacia o no
    if (this.myList.length === 0){
      //producto nuevo o sea 1
      product.cantidad = 1;
      //añado un producto y lo emito
      this.myList.push(product);
      this.myCart.next(this.myList);
    }else{
      //buscar si este producto existe en mi carrito en caso de que ya haya productos
      const productMod = this.myList.find((element) =>{
        return element.id === product.id;
      })
      if(productMod){
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      }else{
        //si no estaba el producto por ende es uno nuevo
        product.cantidad = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);
      }
    }

  }

  deleteProduct(id:string){
    this.myList = this.myList.filter((product) =>{
      return product.id != id;
    })
    this.myCart.next(this.myList);
  }

  findProductById(id:string){
    return this.myList.find((elemento) => {
      return elemento.id === id;
    })
  }

  totalCarrito(){
    const total = this.myList.reduce(function(acc, product){
      return acc + (product.cantidad * product.price);
    },0)
    return total;
  }

  // getPromise(): Promise<any[]>
  // {
  //   return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}products`))
  // }*/
}
