import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allproducts:any=[];  //array of all product details
  searchterm:string='';
  constructor(private api:ApiService,private cart:CartService){}
  ngOnInit(): void 
  {
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        //server to client ,if the product is added to database(wishlist-collection) the result will be return as added successfully
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  addcart(product:any){
    this.cart.addcart(product)
  }
}
