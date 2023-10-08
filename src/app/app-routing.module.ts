import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { homepageGuard } from './auth/homepage.guard';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderDetComponent } from './order-det/order-det.component';
import { MyOrderComponent } from './my-order/my-order.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent 
  },
  {
    path:'cat-products/:id/:name',
    component:CategoryProductsComponent
  },
  {
    path:'cat-info/:cat_id',
    component:ProductInfoComponent,
    canActivate:[homepageGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[homepageGuard]
  },
  {
    path:'placeorder',
    component:PlaceOrderComponent,
    canActivate:[homepageGuard]
  },
  {
    path:'order-det/:order_id',
    component:OrderDetComponent,
    canActivate:[homepageGuard]
  },
  {
    path:'myorder',
    component:MyOrderComponent,
    canActivate:[homepageGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
