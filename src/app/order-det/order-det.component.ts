import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-det',
  templateUrl: './order-det.component.html',
  styleUrls: ['./order-det.component.css']
})
export class OrderDetComponent implements OnInit{

  order_info:any;
  order_product:any;

  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit()
  {
    this.activatedroute.params.subscribe((res:any)=>{
      console.log(res.order_id)
      this.api.getOrderDetails(res.order_id).subscribe((res1:any)=>{
        console.log(res1)
        this.order_info=res1.order_det[0];
        this.order_product=res1.order_products;
      })
    })
  }

}
