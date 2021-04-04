import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Services/Login/login.service';
import { RegisterService } from 'src/app/Services/Register/register.service';
import { Register } from "src/app/ViewModels/Register/register";
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersList: Register[]=[];
  subscribtion: Subscription|null=null;
  loginFrm: FormGroup = new FormGroup({});
  NewUser:Register;
  y : number = 1;
  xx = false;
  users : any
  constructor(private prdService: RegisterService , private loginService : LoginService,private fb: FormBuilder
    , private router:Router,private titleService: Title ) { 
      this.NewUser={name:"", email:"",password:""}
    }
  ngOnInit(): void {
    this.titleService.setTitle('تسجيل الدخول');

    this.subscribtion= this.prdService.getAllUserRegister().subscribe(
      (response)=>{
        this.usersList=response;
      },
      (err)=>{}
    );
    this.loginFrm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', [Validators.required, Validators.email, Validators.minLength(7)]]
      , Password: ['', [Validators.required, Validators.minLength(6)]]
    });
    AOS.init();
  }
  checkLogin()
  {
    const resSomeSearch1 = this.usersList.some(item => (item.email == this.NewUser.email) && (item.password == this.NewUser.password));
    if (resSomeSearch1 == true)
    {
      this.router.navigate(['/home']);
      this.login();
    }
    else 
    {
      this.loginService.doLogin(this.NewUser)
        .then(res => {
          this.xx = true
          console.log(this.xx)
          this.router.navigate(['/home']);
          this.login();
        }, err => {
        }).then(res => {
          if( resSomeSearch1 == false && this.xx == false)
          {
            this.alertt()
          }
        })
    }
  }
  alertt(){ 
    alert("من فضلك لا يوجد لديك حساب . سجل الان ");
  }
  login(){
    this.loginService.login(this.NewUser.email);
  }
  Logout(){
    this.loginService.logout();
  }
}