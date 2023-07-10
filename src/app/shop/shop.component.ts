import { Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
// import 'rxjs/add/observable/of';
import { AngularFireDatabase, AngularFireList} from '@angular/fire//database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
 export class ShopComponent {
  listProduct: AngularFireList<any>;
  productSubscription: Subscription;
  products: Array<any>;

constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.listProduct = this.db.list(environment.productTable.name);
//     this.fileCollection = this.dbStore.collection<AngularFirestoreCollection<any>>(environment.fileStore.name);
 }

  ngOnInit(): void {
    this.productSubscription = this.listProduct.valueChanges().subscribe(pList => {

      const filter = this.route.snapshot.queryParamMap.get('category');
      if (filter !== null) {
          this.products = pList.filter((r: any) => {
              return r.category.toLocaleLowerCase().indexOf(filter) !== -1
          });
      } else {
          this.products = pList as Array<any>;
      }

       console.log(this.products);
    });
    }

   ngOnDestroy(): void {
      this.productSubscription.unsubscribe();
//       if (this.fileSubscription) {
//         this.fileSubscription.unsubscribe();
//       }
      }
  }
