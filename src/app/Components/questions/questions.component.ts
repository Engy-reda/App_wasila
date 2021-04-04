import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private router: Router,private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('الاسئلة الشائعة');

    setTimeout(() => {
      this.router.navigate(['/questions'])
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
