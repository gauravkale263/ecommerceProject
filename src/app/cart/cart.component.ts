import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart_products:any;
  total=0;
  constructor(private api:ApiService){ }
  ngOnInit()
  {
    this.api.cart_list().subscribe((res:any)=>{
       
      this.total=0;
      this.cart_products=res;
      for(let i=0;i<this.cart_products.length;i++)
      {
        this.total+=(this.cart_products[i].qty*this.cart_products[i].price);
      }
      console.log(this.total)
    })
  }
  incQty(product_econ_cart_id:any)
  {
    this.api.inc_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit()
    })
  }
  decQty(product_econ_cart_id:any)
  {
    this.api.dec_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit()
    })
  }
  removeProd(product_econ_cart_id:any)
  {
    this.api.remove_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit()
    })
    this.ngOnInit()
  }
}
