var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
export var firebaseConfig = {
    apiKey: "AIzaSyA3XsZ_LK1GMABEinul_PGV95Zf1n1k-74",
    authDomain: "iklanproperti-e4ea0.firebaseapp.com",
    databaseURL: "https://iklanproperti-e4ea0.firebaseio.com",
    storageBucket: "iklanproperti-e4ea0.appspot.com",
    messagingSenderId: "252503479977"
};
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'listings', component: ListingsComponent },
    { path: 'add-listing', component: AddListingComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        providers: [FirebaseService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map