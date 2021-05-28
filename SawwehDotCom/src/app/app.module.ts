import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicationsComponent } from './post/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavBarComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
