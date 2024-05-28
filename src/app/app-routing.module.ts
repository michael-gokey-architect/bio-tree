import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent} from './app.component';
import { WelcomeComponent } from './guest/1-welcome/welcome.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
