import { Injectable } from '@angular/core';
import { Envio } from '../interface/envio.interfaces';
import { Localidad } from '../interface/localidad.interfaces';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  constructor(  private db: AngularFirestore,
    ){}

  async registerEnvio({direccion, localidad, codigopostal}: any){
    return this.db.collection('Envio').add({direccion, localidad, codigopostal});

    }

    getLocalidad():Observable<Localidad[]> {
      return this.db
        .collection('Localidades')
        .valueChanges({ idField: 'id' })  as Observable<Localidad[]>;

    }

    getDatos(): Observable<any> {
      return this.db
      .collection('Localidades')
      .valueChanges({
        id: 'id'
      }) as Observable<Localidad[]>;
    }
  // deletePago(p:Pago){
  //   console.log(p);
  //   return this.db.collection('Pago').doc(p.nombreTarjeta).delete();

  // }

  // editPago(pago:Pago,id){
  //   return this.db.collection('Pago').doc(id).set(pago, { merge: true });

  // }
  // get(pagoDni): Observable<Pago> {
  //   return this.db
  //     .collection('Pago')
  //     .doc(pagoDni)
  //     .valueChanges() as Observable<Pago>;
  // }
}
