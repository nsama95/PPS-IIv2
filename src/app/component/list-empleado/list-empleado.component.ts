import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Empleado from 'src/app/interface/empleado.interfaces';

import { EmpleadoService } from 'src/app/services/empleado.services';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  listProduct:Empleado[];
  formProductEdit: FormGroup;
  flat:boolean=false;

  //objectKeys= Object.keys({IProducto:Object});
  productEdit:Empleado={id:'',name:'',email:'',password:'',role:''};
  titulosColumnas = ['nombre', 'email', 'rol','Acciones'];
  constructor(private productServices: EmpleadoService) { 
    this.listProduct=[{id:'',name:'',email:'',password:'',role:''}];
    this.formProductEdit=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),

    })}

  ngOnInit(): void {
    this.productServices.getCollection().subscribe(products=>{
      console.log(products);

      this.listProduct=products;
      
    })
  }
  async eliminar(p:Empleado){
    console.log(p);
    const response= await this.productServices.deleteProduct(p);
    console.log(response);
   }
}
