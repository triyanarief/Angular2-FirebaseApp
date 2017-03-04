import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA3XsZ_LK1GMABEinul_PGV95Zf1n1k-74",
  authDomain: "iklanproperti-e4ea0.firebaseapp.com",
  databaseURL: "https://iklanproperti-e4ea0.firebaseio.com",
  storageBucket: "iklanproperti-e4ea0.appspot.com",
  messagingSenderId: "252503479977"
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'add-listing', component:AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
