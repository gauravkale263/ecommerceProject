import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{
  prod_info:any;
  prod_id:any;
  constructor(private activatedroute:ActivatedRoute,private api:ApiService)
  {
    this.activatedroute.params.subscribe((res:any)=>{
      this.prod_id=res.cat_id;
      this.ngOnInit()
   })
  }
  ngOnInit() {
    this.api.product_by_id(this.prod_id).subscribe((res:any)=>{
     // console.log(res)
      this.prod_info=res;
   })
  }

  addProduct()
  {
    this.api.add_to_cart(this.prod_id).subscribe((res:any)=>{
     // console.log(res)
      this.ngOnInit()
    })
  }
  
}
