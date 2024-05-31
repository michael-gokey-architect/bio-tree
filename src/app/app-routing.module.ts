import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent} from './app.component';
import { WelcomeComponent } from './guest/1-welcome/welcome.component';
import { FooterComponent } from './guest/footer/footer.component';



const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'footer', component: FooterComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
