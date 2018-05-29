import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import {RouterModule} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DetailsComponent } from './student/details.component';
import { SectionComponent } from './section.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    DetailsComponent,
    ContactComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([{
      path:'',
      component:HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'student',
      component:StudentComponent
    },
    {
      path:'student/:id',
      component:DetailsComponent
    },{
      path:'contact',
      component:ContactComponent
    }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
