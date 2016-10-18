import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBfFZObZikONBeJJFdOS_g9fwRKjfiTs4s",
  authDomain: "feedbacky-25e16.firebaseapp.com",
  databaseURL: "https://feedbacky-25e16.firebaseio.com",
  storageBucket: "feedbacky-25e16.appspot.com",
  messagingSenderId: "507912696819"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    LoginComponent,
    FeedbackComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: FeedbackComponent },
      { path: 'login', component: LoginComponent },
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
