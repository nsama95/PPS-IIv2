import { PagoService } from 'src/app/services/pago.service';
import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/interface/envio.interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvioService } from 'src/app/services/envio.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  selectedLocalidad: string;
  envio: number;
  datos: any;
  formProduct: FormGroup;
  constructor(private router: Router,private envioService:PagoService) {
    this.formProduct=new FormGroup({
      direccion: new FormControl(),
      localidad: new FormControl(),
      codigopostal: new FormControl(),
    })
  }

  ngOnInit(): void {

    console.log(this.envioService.getDatos().subscribe((response) => {
      this.datos = response;
    }, (error) => {
      console.error(error);
    }))
  }

  onSubmit() {
    console.log(this.formProduct.value);
    this.envioService.registerEnvio(this.formProduct.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  seleccionarLocalidad() {
    this.selectedLocalidad = this.formProduct.get('localidad').value;

    // Lógica para actualizar el valor del envío
    if (this.selectedLocalidad === 'Localidad A') {
      this.envio = 10;
    } else if (this.selectedLocalidad === 'Localidad B') {
      this.envio = 15;
    } else if (this.selectedLocalidad === 'Localidad C') {
      this.envio = 20;
    } else {
      this.envio = 0;
    }
  }

}
