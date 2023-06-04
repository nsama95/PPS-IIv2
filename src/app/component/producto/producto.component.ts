import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/interface/ShoppingCart';
import { IProducto } from 'src/app/interface/iproducto.interfaces';
import { Producto } from 'src/app/interface/producto.interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductService } from 'src/app/services/product.services';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  products$: Observable<IProducto[]>;
  viewCart:boolean=false;
  products:IProducto[];
  filteredProducts: IProducto[];
  currentCategory: string;
  cardsPerRow: number;
  cart: any;
  cart$: Observable<ShoppingCart>;

  constructor(private productService:ProductService,private route: ActivatedRoute,
    private shoppingCart: ShoppingCartService
   
    ) { }

  ngOnInit(): void {
  // this.getProducts();
  this.populateProducts();
  }


  private populateProducts() {
    this.productService.getCollection().pipe(
        switchMap((p) => {
          this.products = p;
          return this.route.queryParamMap;
        })
      )//AGREGA LAS CATEGORIAS
      /*.subscribe((p) => {
       /* this.currentCategory = p.get('category');
        this.applyFilter();*
      });*/
  }
//FILTRA POR Categoria
  private applyFilter() {
    this.filteredProducts = this.currentCategory
      ? this.products.filter((p) => {
          return p.category === this.currentCategory;
        })
      : this.products;
  }

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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  private CardsPerRow(width) {
    this.calculateRows(width);
  }

  private calculateRows(width) {
    if (width >= 1700) {
      this.cardsPerRow = 4;
    } else if (width >= 770 && width < 1700) {
      this.cardsPerRow = 3;
    } else if (width < 770 && width >= 520) {
      this.cardsPerRow = 2;
    } else {
      this.cardsPerRow = 1;
    }
  }

}
