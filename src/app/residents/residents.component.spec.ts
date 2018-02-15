import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResidentsComponent} from './residents.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from 'app/layouts/footer/footer.component';
import {NavbarComponent} from '../layouts/navbar/navbar.component';
import {ResidentService} from '../_services/resident.service';
import {NgbPaginationModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResidentsComponent', () => {
    let component: ResidentsComponent;
    let fixture: ComponentFixture<ResidentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResidentsComponent, NavbarComponent,
                FooterComponent],
            providers: [ ResidentService],
            imports: [
                RouterTestingModule,
                NgbCollapseModule.forRoot(),
                NgbPaginationModule.forRoot(),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
                        deps: [HttpClient]
                    }
                }),
                HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResidentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
