import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 myCart$ = this.carritoService.myCart$;
  constructor(private carritoService:CarritoService) { }

  ngOnInit(): void {
  }

  totalProduct(price:number, units:number){
    return price * units;
  }

  deleteProduct(id:string){
    this.carritoService.deleteProduct(id);
  }

  updateUnits(operation:string, id:string){
    const product = this.carritoService.findProductById(id);
    if(product){
      if(operation === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.deleteProduct(id);
      }
    }
  }

  totalCarrito(){
    const result = this.carritoService.totalCarrito();
    return result;
  }

}
