import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;

  constructor(private http: HttpClient) { }

  userAuthentication(user: User) {
    var body = JSON.stringify(user);

    var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post('https://13.229.139.61:5000/api/Users/Authenticate', body, {headers : headerOptions});
  }
}
