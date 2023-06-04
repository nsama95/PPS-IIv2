import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';

import { FormControl, FormGroup } from '@angular/forms';
import { IProducto } from 'src/app/interface/iproducto.interfaces';
@Component({
  selector: 'app-list-product-user',
  templateUrl: './list-product-user.component.html',
  styleUrls: ['./list-product-user.component.css']
})
export class ListProductUserComponent implements OnInit {
  listProduct:IProducto[];
  formProductEdit: FormGroup;
  flat:boolean=false;
  category: any = ['Anillo', 'Cadena', 'Pulsera', 'Scrunch']
  //objectKeys= Object.keys({IProducto:Object});
  productEdit:IProducto={id:'',name:'',precio:0,stock:'',minStock:'',category:''};
  titulosColumnas = ['nombre', 'precio', 'stock', 'stock minimo','categoria','Acciones'];
  constructor(private productServices: ProductService) { 
    this.listProduct=[{id:'',name:'',precio:0,stock:'',minStock:'',category:''}];
    this.formProductEdit=new FormGroup({
      name: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
      minStock: new FormControl(),
      category:new FormControl(),
    })}

  ngOnInit(): void {
    this.productServices.getCollection().subscribe(products=>{
      console.log(products);
      this.listProduct=products;
    })
  }
  modificar(produc :IProducto){
    console.log('modifi'+JSON.stringify( produc));
    this.productEdit.name=produc.name;
    this.productEdit.precio=produc.precio;
    this.productEdit.stock=produc.stock;
    this.productEdit.minStock=produc.minStock;
    this.productEdit.category=produc.category;
    this.productEdit.id=produc.id;
    this.flat=true;
  }
 async eliminar(p:IProducto){
   const response= await this.productServices.deleteProduct(p);
   console.log(response);
  }
  async publicar(p:IProducto){
    const response= await this.productServices.deleteProduct(p);
    console.log(response);
   }
   onSubmit() {
    console.log('PRODUCT');
    console.log(this.formProductEdit.value);
    this.flat=false;
  }
}
