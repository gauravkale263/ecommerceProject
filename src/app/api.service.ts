import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint="http://a2zithub.org/dairy/abi/";
  constructor(private http:HttpClient) { }
  getCatList()
  {
    return this.http.get(this.endpoint+'product_cat_details')
  }
  register(data:any)
  {
    return this.http.post(this.endpoint+'user_register',data);
  }
  login(data:any)
  {
    return this.http.post(this.endpoint+'user_login',data);
  }
  getSlider()
  {
    return this.http.get(this.endpoint+'slider_det');
  }
  getProducts()
  {
    return this.http.get(this.endpoint+'product_det');
  }
  productById(cat_id:any)
  {
    let obj={"cat_id":cat_id}
    return this.http.post(this.endpoint+'products_by_cat',obj);
  }
  product_by_id(id:any)
  {
    let obj={"product_id":id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'product_by_id',obj);
  }
  add_to_cart(id:any)
  {
    let obj={"product_id":id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'addtocart',obj);
  }
  cart_list()
  {
    let obj={"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'cart_list',obj);
  }
  inc_cart_qty(product_econ_cart_id:any)
  {
    let obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'inc_cart_qty',obj);
  }
  dec_cart_qty(product_econ_cart_id:any)
  {
    let obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'dec_cart_qty',obj);
  }
  remove_cart_qty(product_econ_cart_id:any)
  {
    let obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'remove_cart_qty',obj);
  }
  postAddress(data:any)
  {
    data.token=localStorage.getItem("token");
    return this.http.post(this.endpoint+'place_order',data);
  }
  getOrderDetails(ord_id:any)
  {
    let obj={"order_id":ord_id,"token":localStorage.getItem("token")}
    return this.http.post(this.endpoint+'order_det',obj);
  }
  getOrders()
  {
    let obj={"token":localStorage.getItem("token")}
    return this.http.post(this.endpoint+'order_list',obj)
  }
}
