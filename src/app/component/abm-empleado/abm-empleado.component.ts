import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.services';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-abm-empleado',
  templateUrl: './abm-empleado.component.html',
  styleUrls: ['./abm-empleado.component.css']
})
export class AbmEmpleadoComponent implements OnInit {
  formEmpleado: FormGroup;
  roles: any = ['Empleado', 'Administrador'];
  constructor(private router: Router,private emService:EmpleadoService) {
    this.formEmpleado=new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      role: new FormControl(),
      password: new FormControl(),
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('PRODUCT');
    console.log(this.formEmpleado.value);
    this.emService.registerProduct(this.formEmpleado.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}
