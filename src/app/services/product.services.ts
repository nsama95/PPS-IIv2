
import { Injectable } from "@angular/core";
//import { Auth } from "@angular/fire/auth";
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
//import { Firestore, collection, collectionData, updateDoc,deleteDoc,doc,addDoc} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { IProducto } from "../interface/iproducto.interfaces";


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(  private db: AngularFirestore,
      ){}

    async registerProduct({name,precio,stock,minStock,category}: any){
      return this.db.collection('Productos').add({name,precio,stock,minStock,category});

      }

      getCollection():Observable<IProducto[]> {
        return this.db
        .collection('Productos')
        .valueChanges({ idField: 'id' }) as Observable<IProducto[]>;

      }
    deleteProduct(p:IProducto){
      console.log(p);
      return this.db.collection('Productos').doc(p.id).delete();

    }

    editProduct(product:IProducto,id){
      return this.db.collection('Productos').doc(id).set(product, { merge: true });

    }
    get(productId): Observable<IProducto> {
      return this.db
        .collection('Productos')
        .doc(productId)
        .valueChanges() as Observable<IProducto>;
    }

}




