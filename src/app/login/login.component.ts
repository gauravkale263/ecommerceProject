import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api:ApiService,private router:Router){}
  loginForm=new FormGroup({
    user_mobile:new FormControl(''),
    user_password:new FormControl(''),
  })



  userLogin()
  {
   
    this.api.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res.status=='success')
      {
        localStorage.setItem("token",res.token);
        this.router.navigate(['/'])
      }
    })
  }
}
