import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    user: User;

    constructor(private http: HttpClient, private injector: Injector) {
    }

    ngOnInit() {
    }

    submitLogin(url: string) {
        const router = this.injector.get(Router);
        console.log("url is "+ url);
        localStorage.setItem('url', JSON.stringify(url));

        this.http.get<User>('http://localhost:3000/api-login').subscribe(data => {
            // Read the result field from the JSON response.
            this.user = data;
            console.log('user is:' + JSON.stringify(this.user));
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            router.navigate(['']);
        });
    }
}
