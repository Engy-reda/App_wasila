import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EventServiceService } from 'src/app/Services/Events/event-service.service';
import { IEvent } from 'src/app/ViewModels/ievent';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-events',
  templateUrl: './single-events.component.html',
  styleUrls: ['./single-events.component.scss']
})
export class SingleEventsComponent implements OnInit {
  event:IEvent={ year:'',location:'',date:'',title:'',cover:'',description:'',speakers:[{name:'', cover:'', bio:''}]}
  constructor(private eventService : EventServiceService, private activatedRoute : ActivatedRoute,
    private translate: TranslateService,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('تفاصيل الفعالية');

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let eid:string | null = params.get('id')
      let eventId = eid? parseInt(eid):0
      this.eventService.getEvent(eventId).subscribe((response)=>{
        this.event = response
        console.log(response)
      },
      (error)=>{
        console.log(error)
      })
    })

    }
  }
  auth():boolean{
    let value =  localStorage.getItem('UserToken')? true :false;
   return value;
 }


}
