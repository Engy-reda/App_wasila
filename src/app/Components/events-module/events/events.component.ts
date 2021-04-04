import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventServiceService } from 'src/app/Services/Events/event-service.service';
import { IEvent } from 'src/app/ViewModels/ievent';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:IEvent[] = []
  constructor(private eventService : EventServiceService, private translate: TranslateService,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('الفعاليات');

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    this.eventService.getEvents().subscribe((response)=>{
      this.events = response
      console.log('events', response)
      // console.log('data', this.events[0].data)
    },
    (error)=>{
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
