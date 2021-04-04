import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router,private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('تواصل معنا');

    setTimeout(() => {
      this.router.navigate(['/contact'])
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
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
