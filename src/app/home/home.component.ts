import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user.model';

@Component({
    selector: 'dinewell-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: User;

    ngOnInit(): void {
        this.user = this.getUser();
    }


    constructor(private userService: UserService) {
    }

    getUser(): User {
        return this.userService.getUser();
    }
}
