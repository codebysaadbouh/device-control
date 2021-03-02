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
  // emmettre des array de type user
  userSubject = new Subject<User[]>();

  emitUsers(){
    //il va appelé la méthode next sur UserSubject et qui va emettre une copie de l'array user
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

}
