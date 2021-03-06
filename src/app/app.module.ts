import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {FooterComponent} from './layouts/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from 'app/app-routing.module';
import {AuthGuard} from './_guards/auth.guard';
import {NgxPermissionsModule} from 'ngx-permissions';
import {UserService} from './_services/user.service';
import { ResidentService } from './_services/resident.service';
import { ResidentsComponent } from './residents/residents.component';

// for AoT,  returns a Object that can load Translations using Http and .json
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        LoginComponent,
        NavbarComponent,
        HomeComponent,
        ResidentsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxPermissionsModule.forRoot(),
        AppRoutingModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [AuthGuard, UserService, ResidentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
