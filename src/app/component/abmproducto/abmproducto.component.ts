import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-abmproducto',
  templateUrl: './abmproducto.component.html',
  styleUrls: ['./abmproducto.component.css']
})
export class ABMProductoComponent implements OnInit {
  formProduct: FormGroup;
  category: any = ['Anillo', 'Cadena', 'Pulsera', 'Scrunch']
  constructor(private router: Router,private ProductService:ProductService) { 
    this.formProduct=new FormGroup({
      name: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
      minStock: new FormControl(),
      category:new FormControl(),
    })
  }

  ngOnInit(): void { 
  }
  onSubmit() {
    console.log('PRODUCT');
    console.log(this.formProduct.value);
    this.ProductService.registerProduct(this.formProduct.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
  uploadImagen($event:any){
    const file= $event.target.files;

  }
}
