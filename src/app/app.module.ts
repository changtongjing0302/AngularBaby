import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderModule} from './common/header/header.module';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
