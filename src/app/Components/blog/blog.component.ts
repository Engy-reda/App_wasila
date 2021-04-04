import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogServiceService } from 'src/app/Services/Blog/blog-service.service';
import { BlogInterface, CommentsInterface, CoursesInterface } from 'src/app/ViewModels/blog/blog-interface';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs : BlogInterface[] = []
  courses : CoursesInterface[] = []
  comments : CommentsInterface[] = []
  subscription : Subscription | null = null;
  subscription2 : Subscription | null = null;
  subscription3 : Subscription | null =null;
  
  constructor(private blog : BlogServiceService,
    private course : BlogServiceService,
    private comment : BlogServiceService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('المدونة');

    setTimeout(() => {
      this.router.navigate(['/blog'])
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
    this.subscription = this.blog.getAllBlogs().subscribe(
      (response)=>{
        this.blogs = response;
        
      },
      (err)=>{console.log(err)}
    )
    this.subscription2 = this.course.getAllCourses().subscribe(
      (response)=>{
        this.courses = response;
        
        
      },
      (err)=>{console.log(err)}
    )
    this.subscription3 = this.comment.getAllComments().subscribe(
      (response)=>{
        this.comments = response;
        
        
      },
      (err)=>{console.log(err)}
    )
   
    AOS.init();
  }
    
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }




}
