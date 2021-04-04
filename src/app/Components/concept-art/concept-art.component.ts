import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-concept-art',
  templateUrl: './concept-art.component.html',
  styleUrls: ['./concept-art.component.scss']
})
export class ConceptArtComponent implements OnInit {
  cart:Icart = {};
  constructor(private userCart: CartService, private router:Router,
    private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('دورة الكونسبت أرت');

    setTimeout(() => {
      this.router.navigate(['/concept'])
    }, 300); 
    if (!localStorage.getItem('foo2')) {
      localStorage.setItem('foo2', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo2')
    }

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

    AOS.init();
    
  }
  addToCart(id:number, image:string, name:string){
    let email = localStorage.getItem('UserToken')
  this.cart = {courseId:id, name:name, userEmail:email as string, image:image}
  this.userCart.postToCart(this.cart);
  }

  addToCartFromEasyCash(id:number, image:string, name:string){
    let email = localStorage.getItem('UserToken')
    this.cart = {courseId:id, name:name, userEmail:email as string, image:image}
    this.userCart.postToEasyCash(this.cart);
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
