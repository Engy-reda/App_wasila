import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from '././events/events.component';
import { SingleEventsComponent } from '././single-events/single-events.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes : Routes = [
  {path: 'allevents', component:EventsComponent},
  {path: 'singleevent/:id', component:SingleEventsComponent}
]

@NgModule({
  declarations: [EventsComponent, SingleEventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      defaultLanguage: 'ar', 
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }) ,
    
  ],
  
})
export class EventsModuleModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
