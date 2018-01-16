import { Injectable } from '@angular/core';
import {User} from "../_models/user.model";

@Injectable()
export class UserService {

  constructor() { }

  getUser(): User {
      return JSON.parse(localStorage['currentUser'] || null);
  }

}
