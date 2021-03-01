import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService{
   private users: User[] = [
     {
       firstName: 'Cheikh',
       lastName: 'SOW',
       email: 'saadbouh.code@gmail.com',
       drinkPreference: 'Coca Cola',
       hobbies: [
         'code',
         'Learn',
         'training'
       ]
     }
   ];
  UserSubject = new Subject<User[]>();

  emitUsers(){
    this.UserSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

}
