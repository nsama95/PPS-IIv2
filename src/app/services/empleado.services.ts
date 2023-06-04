
import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
//import { Auth } from "@angular/fire/auth"; 
//import { Firestore, collection, collectionData, updateDoc,deleteDoc,doc,addDoc} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import Empleado from "../interface/empleado.interfaces";


@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {
    constructor( private db: AngularFirestore,){}

    async registerProduct({name,email,role,password}: any){
      return this.db.collection('Empleados').add({name,email,role,password});
      }

      getCollection():Observable<Empleado[]> {
        return this.db
        .collection('Empleados')
        .valueChanges({ idField: 'id' }) as Observable<Empleado[]>;
   
      }
    deleteProduct(p:Empleado){
      console.log(p);
      return this.db.collection('Empleados').doc(p.id).delete();
    }

    editProduct(product:Empleado,id){
      return this.db.collection('Empleados').doc(id).set(product, { merge: true }); ;
  
    }
    get(productId): Observable<Empleado> {
      return this.db
        .collection('Empleados')
        .doc(productId)
        .valueChanges() as Observable<Empleado>;
    }
 
}

       
          
 
