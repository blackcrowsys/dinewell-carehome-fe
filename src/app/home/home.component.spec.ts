import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {NavbarComponent} from '../layouts/navbar/navbar.component';
import {FooterComponent} from '../layouts/footer/footer.component';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {UserService} from '../_services/user.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {User} from '../_models/user.model';



describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let componentUserService: UserService; // the actually injected service
    let userService: UserService; // the TestBed injected service
    let de: DebugElement;  // the DebugElement with the welcome message
    let el: HTMLElement; // the DOM element with the welcome message
    // stub UserService for test purposes
    let userServiceStub: {
        id: number;
        firstName: string;
        lastName: string;
        permissions: string[];
    };

    beforeEach(() => {
        // stub UserService for test purposes
        userServiceStub = {
            id: 1,
            firstName: 'Ramon',
            lastName: 'Singh',
            permissions: ['ADMIN']
        };

        TestBed.configureTestingModule({
            declarations: [HomeComponent,
                NavbarComponent,
                FooterComponent],
            providers: [
                {provide: UserService, useValue: userServiceStub}
            ],
            imports: [
                TranslateModule.forRoot({
                    loader : {
                        provide: TranslateLoader,
                        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
                        deps: [HttpClient]
                    }}),
                HttpClientModule]
        });

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        userService = fixture.debugElement.injector.get(UserService);
        componentUserService = userService;
        //  get the "welcome" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;
        fixture.detectChanges();
    });

    it('should welcome the user', () => {
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain('Welcome', '"Welcome..."');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
