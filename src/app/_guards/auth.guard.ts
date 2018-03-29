import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {NgxPermissionsService} from "ngx-permissions";
import {User} from '../_models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private permissionsService: NgxPermissionsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // Check Permissions
            const currentUser: User = JSON.parse(localStorage['currentUser'] || null);
            this.permissionsService.loadPermissions(currentUser.permissions);
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
