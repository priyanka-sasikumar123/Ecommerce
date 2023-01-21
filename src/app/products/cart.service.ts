import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[];
  cartlist=new BehaviorSubject([]) //stream of data(arrays-cart array)
  constructor() { }
  //add to cart
addcart(product:any){
  this.cartarray.push(product);
  this.cartlist.next(this.cartarray);
  console.log(  this.cartlist);

  //calling gettotal function m  
  let total=this.gettotal();
  console.log(total);
  
}
//total price
gettotal(){
  var grandsum=0;
  this.cartarray.map((item:any)=>{
    grandsum+=item.price
  })
  return grandsum;
}


//remove item from cart
 removecart(product:any){
  this.cartarray.map((item:any,index:any)=>{
    if(product.id==item.id){
      this.cartarray.splice(index,1);
    }
  })
  this.cartlist.next(this.cartarray)
 }

 //remove all items from cart empty button

 removeall(){
  this.cartarray=[];
  this.cartlist.next(this.cartarray);

 }
}
