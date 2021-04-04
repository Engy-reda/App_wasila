import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component'

import { ConceptArtComponent } from './components/concept-art/concept-art.component';
import { LoginComponent } from './components/login/login.component';

import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';
import { ThreedArtComponent } from './components/threed-art/threed-art.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { VideoResourcesComponent } from './components/video-resources/video-resources.component';
import { SoundResourcesComponent } from './components/sound-resources/sound-resources.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { ArticleComponent } from './components/article//article.component';
import { MiniCoursesComponent } from './components/mini-courses/mini-courses.component';
import { EventsModuleModule } from './components/events-module/events-module.module';
import {NgxPayPalModule} from 'ngx-paypal';
import { NgxSpinnerModule} from 'ngx-spinner';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PrivacyComponent,
    ContactUsComponent,
    CoursesComponent,
    MotionGraphicComponent,
    ConceptArtComponent,
    LoginComponent,
    GraphicDesignComponent,
    ThreedArtComponent,
    AlumniComponent,
    HomeComponent,
    BlogComponent,
    QuestionsComponent,
    VideoResourcesComponent,
    SoundResourcesComponent,
    NotFoundComponent,
    ArticleComponent,
    MiniCoursesComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar', 
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }) ,
    ReactiveFormsModule ,
    NgxAudioPlayerModule,
    NgxPaginationModule,
    NgxPayPalModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    BrowserAnimationsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}