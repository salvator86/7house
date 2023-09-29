import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { AdminPageComponent } from './core/admin-page/admin-page.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireRemoteConfigModule} from "@angular/fire/compat/remote-config";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {provideFirebaseApp} from "@angular/fire/app";

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFireRemoteConfigModule,
    // AngularFireFunctionsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // AngularFirestoreModule,
    // provideAuth(() => getAuth())
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging())
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
