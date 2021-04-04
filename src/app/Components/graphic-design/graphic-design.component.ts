import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/Courses/courses.service'
import { Icourses } from 'src/app/ViewModels/icourses';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { Icart } from 'src/app/ViewModels/icart';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  courses:Icourses[]=[]
  cart:Icart = {};
  constructor(private coursesService: CoursesService, private userCart: CartService, private router: Router,private titleService: Title) {}

  ngOnInit(): void {

    this.titleService.setTitle('دورة الجرافيك ديزاين');

    setTimeout(() => {
      this.router.navigate(['/graphic'])
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
    
    this.coursesService.getCourses().subscribe((response) => {
      this.courses = response
      console.log('courses', response)
    },
    (error)=> {
      console.log(error)
    })
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
