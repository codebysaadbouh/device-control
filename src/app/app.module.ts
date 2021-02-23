import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuard],  component: AppareilViewComponent },
  { path: 'editappareil', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo : '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilsComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
