import { Pago } from './../interface/pago';
import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Localidad } from '../interface/localidad.interfaces';
import { Envio } from '../interface/envio.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  pago: Pago[] = [];
  envio: number = 0;


  constructor(private db: AngularFirestore,) { }

  async registerPago({ numero, fechaVencimiento, nombreTarjeta, codigoSeguridad, dni }: any) {
    return this.db.collection('Pago').add({ numero, fechaVencimiento, nombreTarjeta, codigoSeguridad, dni });

  }

  getCollection(): Observable<Pago[]> {
    return this.db
      .collection('Pago')
      .valueChanges({ idField: 'id' }) as unknown as Observable<Pago[]>;

  }
  deletePago(p: Pago) {
    console.log(p);
    return this.db.collection('Pago').doc(p.nombreTarjeta).delete();

  }

  editPago(pago: Pago, id) {
    return this.db.collection('Pago').doc(id).set(pago, { merge: true });

  }
  get(pagoDni): Observable<Pago> {
    return this.db
      .collection('Pago')
      .doc(pagoDni)
      .valueChanges() as Observable<Pago>;
  }




  //////ENVIO
  async registerEnvio({ direccion, localidad, codigopostal }: any) {
    return this.db.collection('Envio').add({ direccion, localidad, codigopostal });

  }

  getLocalidad(): Observable<Localidad[]> {
    return this.db
      .collection('Localidades')
      .valueChanges({ idField: 'id' }) as Observable<Localidad[]>;

  }

  getDatos(): Observable<any> {
    return this.db
      .collection('Localidades')
      .valueChanges({
        id: 'id'
      }) as Observable<Localidad[]>;
  }



  // obtenerTotal(): number {
  //   const totalProductos = this.productos.reduce((acumulador, producto) => {
  //     return acumulador + producto.precio;
  //   }, 0);
  //   return totalProductos + this.envio;
  // }

}
