import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MotionGraphicComponent } from './components/motion-graphic/motion-graphic.component';
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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import {ArticleComponent} from './components/article/article.component'
import {MiniCoursesComponent} from './components/mini-courses/mini-courses.component'
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileGuard } from './guards/profile.guard';


const routes: Routes = [
  {path:'events', loadChildren: () => import('./components/events-module/events-module.module').then(m => m.EventsModuleModule)},
  {path: 'register', component: RegisterComponent, canActivate:[AuthGuard]},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'motion', component: MotionGraphicComponent},
  {path: 'concept', component: ConceptArtComponent},
  {path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
  {path: 'graphic', component: GraphicDesignComponent},
  {path: '3d-art', component: ThreedArtComponent},
  {path : 'alumni', component: AlumniComponent},
  {path : 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'questions', component: QuestionsComponent},
  {path : 'videores', component : VideoResourcesComponent},
  {path : 'soundres', component: SoundResourcesComponent},
  {path:'admin', component:NotFoundComponent, canActivate:[AdminGuard]},
  {path : 'article', component: ArticleComponent},
  {path : 'minicourses', component: MiniCoursesComponent},
  {path: 'userprofile', component: UserProfileComponent, canActivate:[ProfileGuard]},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: "**", component: NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }