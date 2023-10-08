import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  orders:any;
    constructor(private api:ApiService){
      this.getAllOrders()
    }

    getAllOrders()
    {
      this.api.getOrders().subscribe((res:any)=>{
        console.log(res);
        this.orders=res.order_det;
      })
    }
}
