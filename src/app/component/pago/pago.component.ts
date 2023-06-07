import { PagoService } from './../../services/pago.service';
import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interface/pago';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  formProduct: FormGroup;
  constructor(private router: Router,private pagoService:PagoService) {
    this.formProduct=new FormGroup({
      numero: new FormControl(),
      fechaVencimiento: new FormControl(),
      nombreTarjeta: new FormControl(),
      codigoSeguridad: new FormControl(),
      dni:new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formProduct.value);
    this.pagoService.registerPago(this.formProduct.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
  uploadImagen($event:any){
    const file= $event.target.files;

  }
}
