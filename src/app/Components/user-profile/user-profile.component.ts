import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

import { Title } from '@angular/platform-browser';

declare var paypal:any ;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  carts:Icart[] = []
  cartsLoaded$?:Promise<boolean>;
  render:boolean = false
  @ViewChild('payPalRef', {static : true}) private payPalRef? : ElementRef;
  constructor(private router: Router, private userCart: CartService, private translate : TranslateService,
    private titleService: Title) {
    this.cartsLoaded$ = Promise.resolve(false);

   }
   
  
  

  ngOnInit() { 

    this.titleService.setTitle('الحساب الشخصي');

    paypal.Buttons({ 
      style:{ 
        layout:'horizontal',
        color:'blue',
        label:'paypal',
        shape:'pill',
        size:'responsive',
        tagline:'false'
      },
      createOrder : (data:any, action:any)=>{
        return action.order.create({
          purchase_units: [{
            
            amount: {
              value: '9.99',
              currency_code:'USD',
            }
          }]
        })
      },
      onApprove: function(data:any, actions:any) {
        return actions.order.capture().then(function(details:any) {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }

    }).render(this.payPalRef?.nativeElement) 
    
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    setTimeout(() => {
      this.router.navigate(['/userprofile'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

    this.fetchData();
    // console.log(this.render)
    // this.filterData()
  }
   fetchData(){
     this.userCart.getUserCart().subscribe((response)=>{
      this.carts = response
      this.cartsLoaded$ = Promise.resolve(true);
      this.render = true;
      // console.log(this.carts)
    })
  }
  removeFromCart(id:number | undefined){
    this.userCart.removeCart(id as number);
  }
  filterData(){
    this.userCart.getAllCart().subscribe((response)=>{
      this.render = true;
      this.carts = response.filter((cart)=>{ 
        return cart.userEmail = localStorage.getItem('UserToken') as string
      })
    })
  }

  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }
}
