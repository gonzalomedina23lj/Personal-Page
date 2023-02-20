import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch:'full'},

  {path: 'home', component: HeaderComponent},

  {path: 'about', component: AboutComponent},
  
  {path: 'projects', component: ProjectsComponent},

  {path: 'contact', component: FooterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
