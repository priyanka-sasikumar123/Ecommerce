import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
grand:number=0;
cartitems:any=[]//cartitems are here  
updatetotal:any;
roundvalue:any;
constructor(private cart:CartService,private router:Router){}
  
ngOnInit(): void {
   this.cart.cartlist.subscribe
   (
    (data:any)=>{
      this.cartitems=data
    }
   )
   this.grand=this.cart.gettotal();
  }
  removeitem(products:any){
    this.cart.removecart(products)
    this.cart.gettotal()
  }

  removeall(){
    this.cart.removeall()
  }
  discount3per(){
    let discount=(this.grand*3)/100
    this.updatetotal=this.grand-discount
    this.roundvalue= Math.round(this.updatetotal);
   
  
    
  }
  discount10per(){
    let discount=(this.grand*10)/100
    this.updatetotal=this.grand-discount
   
  }
  discount30per(){
    let discount=(this.grand*30)/100
    this.updatetotal=this.grand-discount
  }
  discount50per(){
    let discount=(this.grand*50)/100
    this.updatetotal=this.grand-discount
  }
  proceed(){
    alert('Your Order is placed')
    this.router.navigateByUrl('')
    this.removeall()
  }
}
