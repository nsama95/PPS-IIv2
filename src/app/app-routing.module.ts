import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { CanAdminGuard } from './guard/can-admin.guard';
import { ABMProductoComponent } from './component/abmproducto/abmproducto.component';
import { ListProductUserComponent } from './component/list-product-user/list-product-user.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { ListEmpleadoComponent } from './component/list-empleado/list-empleado.component';
import { AbmEmpleadoComponent } from './component/abm-empleado/abm-empleado.component';
import { ProductoComponent } from './component/producto/producto.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { PagoComponent } from './component/pago/pago.component';
import { EnvioComponent } from './component/envio/envio.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'main'},
  {
    path: 'main', component: HomeComponent,//canActivate:[CanAdminGuard],
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegisterComponent
  },
  {
    path: 'carrito', component: CarritoComponent
  },
  {
    path: 'productoUser', component: ProductoComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'producto', component: ABMProductoComponent
  },
  {
    path: 'listProducto', component: ListProductUserComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'listEmpleado', component: ListEmpleadoComponent
  },
  {
    path: 'empleado', component: AbmEmpleadoComponent
  },
  {
    path: 'pago', component: PagoComponent
  },
  {
    path: 'envio', component: EnvioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
