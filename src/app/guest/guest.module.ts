import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WelcomeComponent } from './1-welcome/welcome.component';
import { AboutComponent } from './2-about/about.component';
import { SocialComponent } from './3-social/social.component';
import { WebComponent } from './4-web/web.component';
import { WelcomeBackComponent } from './welcome-back/welcome-back.component';
import { GuestComponent } from './guest/guest.component';
import { GuestViewComponent } from './guest-view/guest-view.component';




@NgModule({
  declarations: [
    AboutComponent,
    SocialComponent,
    WebComponent,
    WelcomeComponent,
    GuestViewComponent,
    GuestComponent,
    WelcomeBackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
