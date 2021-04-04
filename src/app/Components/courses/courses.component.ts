import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/Courses/courses.service';
import { Icourses } from 'src/app/ViewModels/icourses';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Icourses[]=[]
  constructor(private coursesService: CoursesService,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('الدورات');

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
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
