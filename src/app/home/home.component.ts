import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";
import {User} from "../_models/user.model";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    ngOnInit(): void {
        this.user = this.getUser();
    }

    user: User;

    constructor(private userService: UserService) {
    }

    getUser(): User {
        console.log("User is: "+ JSON.stringify(this.userService.getUser()));
        return this.userService.getUser();
    }
}
