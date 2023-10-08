import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sliderData:any;
  products:any;
  constructor(private api:ApiService){
    this.getSliderapi();
  }
  getSliderapi()
  {
    this.api.getSlider().subscribe((res)=>{
      this.sliderData=res;
      console.log(res)
    })
    this.api.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }
}
