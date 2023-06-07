import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
/**formulario */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*material*/
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from'@angular/material/menu';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
/**firebase */
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { ProductoComponent } from './component/producto/producto.component';
import { ABMProductoComponent } from './component/abmproducto/abmproducto.component';
import { ListProductUserComponent } from './component/list-product-user/list-product-user.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { AbmEmpleadoComponent } from './component/abm-empleado/abm-empleado.component';
import { ListEmpleadoComponent } from './component/list-empleado/list-empleado.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductCardComponent } from './component/producto/product-card/product-card.component';
import { ProductQuantityComponent } from './component/producto/product-quantity/product-quantity.component';
import { HttpClientModule } from '@angular/common/http';
import { PagoComponent } from './component/pago/pago.component';
import { EnvioComponent } from './component/envio/envio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    ABMProductoComponent,
    ListProductUserComponent,
    ContactoComponent,
    AbmEmpleadoComponent,
    ListEmpleadoComponent,
    CarritoComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    PagoComponent,
    EnvioComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
   // MatTableModule,
    //MatSelectModule,
    MatInputModule,
    MatButtonModule,
    //MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
MatCardModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
