import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://randomuser.me/api/'; //Api url

  constructor(private http: HttpClient) { }


  getUsers(numberOfUsers : number) : Observable <User[]>{
    return this.http.get<any>(`${this.api}?results=${numberOfUsers}`).pipe(map(response=>response.results));
  }
  getUsersByGender(gender: string): Observable<User[]> {
    return this.http
      .get<{ results: User[] }>(`https://randomuser.me/api/?results=20&gender=${gender}`)
      .pipe(map((res) => res.results));
  }

}
