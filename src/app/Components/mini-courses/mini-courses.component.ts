import { Component, OnInit } from '@angular/core';
import {Minicourse} from 'src/app/ViewModels/minicourse'
import {MiniCoursesService} from 'src/app/Services/mini-courses.service'
import { Subscription } from 'rxjs';
import * as AOS from 'aos';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mini-courses',
  templateUrl: './mini-courses.component.html',
  styleUrls: ['./mini-courses.component.scss']
}) 
export class MiniCoursesComponent implements OnInit {

  miniCourses : Minicourse[] = []
  subscription : Subscription | null = null;
  p: number = 1;
  cart:Icart = {};

  constructor(private course : MiniCoursesService, private addCart: CartService,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('الدورات القصيرة');

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    } 
    this.subscription = this.course.getAllCourses().subscribe(
      (response)=>{
        this.miniCourses = response;
        
      },
      (err)=>{console.log(err)}
    )

    AOS.init();
    
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }

 addToCart(id:number, name:string, image:string){
   let email = localStorage.getItem('UserToken')
  this.cart = {courseId:id, name:name, userEmail:email as string, image:image}
  this.addCart.postToCart(this.cart);
 }

}
