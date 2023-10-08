import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  
  cat_id:any;
  products:any;
  name:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.cat_id=res.id;
     // console.log(this.cat_id)
     this.name=res.name;
      this.ngOnInit();
    })
  }
  ngOnInit() 
  {
    this.api.productById(this.cat_id).subscribe((res:any)=>{
      this.products=res;
    })
  }

}
