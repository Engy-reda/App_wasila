import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { SoundResourcesServiceService } from 'src/app/Services/SoundResources/sound-resources-service.service';
import { SoundResourcesInterface } from 'src/app/ViewModels/SoundResources/sound-resources-interface';
import { Track } from 'ngx-audio-player'; 
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sound-resources',
  templateUrl: './sound-resources.component.html',
  styleUrls: ['./sound-resources.component.scss']
})
export class SoundResourcesComponent implements OnInit {

  msaapDisplayTitle = true;
msaapDisplayPlayList = false;
msaapPageSizeOptions = [2,4,2];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = true;
msaapDisplayDuration = true;
msaapDisablePositionSlider = true;

msaapPlaylist: Track[] = [
  {
    title: 'Graphic Design- Part1',
    link: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    artist: 'احمد محمد',
    duration: 1
  },
  {
    title: 'Graphic Design- Part2',
    link: 'https://www.kozco.com/tech/piano2.wav',
    artist: 'احمد محمد',
    duration: 1
  },
  {
    title: 'Graphic Design- Part3',
    link: 'https://www.kozco.com/tech/organfinale.mp3',
    artist: 'احمد محمد',
    duration: 1
  },
];

  sounds : SoundResourcesInterface[] = []
  subscription : Subscription | null = null;
  subscription2 : Subscription | null = null;
  constructor(private album : SoundResourcesServiceService,
    private sound : SoundResourcesServiceService, private router : Router,private titleService: Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('تسجيلات صوتية');

    setTimeout(() => {
      this.router.navigate(['/soundres'])
    }, 300);
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }


    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');
    if(menu && menuLinks){
      menu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    }

      this.subscription = this.sound.getAllSoundResources().subscribe(
        (response)=>{
          this.sounds = response;
          console.log(this.sounds)
          
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
