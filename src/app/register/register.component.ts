import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private api:ApiService,private router:Router){}

  registerUser=new FormGroup({
    user_name:new FormControl(''),
    user_mobile:new FormControl(''),
    user_email:new FormControl(''),
    user_password:new FormControl(''),
  });
  
  registerNow()
  {
    this.api.register(this.registerUser.value).subscribe((res:any)=>{
      this.userLogin(this.registerUser.value.user_mobile,this.registerUser.value.user_password)
    })
  }
  userLogin(user_mobile:any,user_password:any)
  {
    let obj={"user_mobile":user_mobile,"user_password":user_password}
    this.api.login(obj).subscribe((res:any)=>{
      console.log(res)
      if(res.status=='success')
      {
        localStorage.setItem("token",res.token);
        this.router.navigate(['/'])
      }
    })
  }
}
