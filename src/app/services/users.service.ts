import { Injectable } from '@angular/core';
import { User } from '../components/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): User[] {
    return [
      new User('Alex' , 33),
      new User('Sanya' , 22),
      new User('Jim' , 44),
      new User('Bill' , 66),
      new User('Pavel' , 55),
    ]
  }

  constructor() { }
}
