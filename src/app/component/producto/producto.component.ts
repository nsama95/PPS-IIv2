import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/interface/ShoppingCart';
import { IProducto } from 'src/app/interface/iproducto.interfaces';
import { Producto } from 'src/app/interface/producto.interfaces';
import { ProductService } from 'src/app/services/product.services';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent implements OnInit {
  listProduct:IProducto[];
  formProductEdit: FormGroup;
  flat:boolean=false;
  category: any = ['Anillo', 'Cadena', 'Pulsera', 'Scrunch']
  //objectKeys= Object.keys({IProducto:Object});
  productEdit:IProducto={id:'',name:'',precio:0,stock:'',minStock:'',category:'', cantidad:0};
  titulosColumnas = ['nombre', 'precio','categoria','Acciones'];

  viewCart:boolean=false;
  products:Producto[]=[];

  constructor(private productServices: ProductService, private carritoService: CarritoService) {
    this.listProduct=[{id:'',name:'',precio:0,stock:'',minStock:'',category:'', cantidad:0}];
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

    this.getProducts();
  }


  getProducts(){
    this.carritoService.getAllProducts().subscribe((data)=>{
      this.listProduct = data;
      console.log(this.listProduct);
    })}

    addToCart(fila:IProducto){
      this.carritoService.addProduct(fila);
      console.log(this.carritoService.addProduct(fila));

    }

    onToggleCart(){
      this.viewCart = !this.viewCart;
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
  // products$: Observable<IProducto[]>;
  // viewCart:boolean=false;
  // products:IProducto[];
  // filteredProducts: IProducto[];
  // currentCategory: string;
  // cardsPerRow: number;
  // cart: any;
  // cart$: Observable<ShoppingCart>;

  // constructor(private productService:ProductService,private route: ActivatedRoute,
  //   private shoppingCart: ShoppingCartService

  //   ) { }

  // ngOnInit(): void {
  // // this.getProducts();
  // this.populateProducts();
  // }


  // private populateProducts() {
  //   this.productService.getCollection().pipe(
  //       switchMap((p) => {
  //         this.products = p;
  //         return this.route.queryParamMap;
  //       })
  //     )//AGREGA LAS CATEGORIAS
  //     /*.subscribe((p) => {
  //      /* this.currentCategory = p.get('category');
  //       this.applyFilter();*
  //     });*/
  // }
//FILTRA POR Categoria
  // private applyFilter() {
  //   this.filteredProducts = this.currentCategory
  //     ? this.products.filter((p) => {
  //         return p.category === this.currentCategory;
  //       })
  //     : this.products;
  // }

 /* getProducts(){
  this.carritoService.getAllProducts().subscribe((data)=>{
    this.products = data;
    console.log(this.products);
  })}

  addToCart(product:Producto){
    return this.carritoService.addProduct(product);
  }

  onToggleCart(){
    this.viewCart = !this.viewCart;
  }*/

  // @HostListener('window:resize', ['$event.target.innerWidth'])
  // private CardsPerRow(width) {
  //   this.calculateRows(width);
  // }

  // private calculateRows(width) {
  //   if (width >= 1700) {
  //     this.cardsPerRow = 4;
  //   } else if (width >= 770 && width < 1700) {
  //     this.cardsPerRow = 3;
  //   } else if (width < 770 && width >= 520) {
  //     this.cardsPerRow = 2;
  //   } else {
  //     this.cardsPerRow = 1;
  //   }
  // }

}
