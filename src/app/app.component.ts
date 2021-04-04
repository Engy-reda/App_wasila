import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
 
})
export class AppComponent  implements OnInit{
  title = 'wasila-angular';

  constructor(public translate: TranslateService, private router : Router, private spinnerService: NgxSpinnerService,
    private titleService: Title){

  }

  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }

 logout(){
   localStorage.removeItem('UserToken');
   console.log('logout')
    this.router.navigate(['/login'])
 }

 ngOnInit() {
  this.titleService.setTitle('وسيلة أون لاين');
  
  this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 4000);
  }

}
