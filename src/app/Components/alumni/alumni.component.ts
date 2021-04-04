import { Component, OnInit,  } from '@angular/core';
import { AlumniModel } from 'src/app/ViewModels/alumni-model';
import { AlumniService } from 'src/app/Services/alumni.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  alumniList: AlumniModel[]=[];
  subscribtion: Subscription| null =null;

  constructor(private alumService: AlumniService
     , private router: Router, private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('الخريجون');
    
    setTimeout(() => {
      this.router.navigate(['/alumni'])
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

      this.subscribtion= this.alumService.getAllAlumni().subscribe(
        (response)=>{
          console.log("in subscribe");
          this.alumniList=response;
          console.log(this.alumniList[1].name);
        },
        (err)=>{console.log(err)}
      );
  
      console.log("After subscribe");

      AOS.init();
   }
   auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }

}

