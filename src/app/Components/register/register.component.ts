import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService } from 'src/app/Services/Register/register.service';
import { Register } from 'src/app/ViewModels/Register/register';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  NewUser:Register;
  usersList: Register[]=[];
  subscribtion: Subscription|null=null;
  y : number = 1;
  xx = false;
  users : any
 
  constructor(private router: Router , private userRegisterserve:RegisterService , private loginService:LoginService) { 
    this.NewUser={name:"", email:"",password:""} }
  ngOnInit(): void {
    this.subscribtion= this.userRegisterserve.getAllUserRegister().subscribe(
      (response)=>{
        this.usersList=response;
        console.log(this.usersList);
      },
      (err)=>{}
    );
    AOS.init();
  }
  
  addUsersReg(){
 
    console.log(this.NewUser)
    const resSomeSearch1 = this.usersList.some(item => ( (item.email == this.NewUser.email)));
    this.loginService.doLogin(this.NewUser)
    .then(res => {
      this.xx = true
      console.log(this.xx)
    }, err => {
    }).then(res => {
      if (resSomeSearch1 == false && this.xx == false)
      {
        console.log(this.NewUser)
        this.userRegisterserve.addUserRegister(this.NewUser).subscribe(
          res => {
            this.router.navigateByUrl('/home'); console.log(this.NewUser);
            this.login();
        },
          err => {console.log(err); }
        );
        
        this.userRegisterserve.doRegister(this.NewUser)
        .then(res => {
          this.router.navigate(['/home']);
          this.login();
        }, err => {
        
        })
      }
      else 
      {
       this.alertt();
       window.location.reload();      }
 
     
    })
}
   
   
    // const prd: IProduct = {ID: 0, Name: 'Assiut PD-40 Test', Quantity: 37, Price: 100};
    // console.log(this.NewUser);
    // this.userRegisterserve.addUserRegister(this.NewUser).subscribe(
    //     res => {
    //       this.router.navigateByUrl('/home'); console.log(this.NewUser);
    //       this.login();
    //   },
        
    //     err => {console.log(err); }
    //   );
 
    //   this.userRegisterserve.doRegister(this.NewUser)
    //   .then(res => {
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   })
  
  login(){
    // alert("In Login")
    this.userRegisterserve.login('TestToken');
    // this.userloginserve.login(this.NewUser.Email)
  }
 
  Logout(){
    // alert("logout");
    this.userRegisterserve.logout();
  }
  alertt(){ 
    alert("من فضلك انت بالفعل قمت بالتسجل بهذا الحساب لا يمنكنك التسجيل به مره اخرى ");
  }
 
}