import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserList } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public emitEvent = new EventEmitter();

  apiUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getListUsers(): Observable<UserList> {
    return this.http.get<UserList>(this.apiUrl).pipe(
      (res) => res,
      (error) => error
    );
  }

  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, { ...user } )
  }

  editUser(user: User): Observable<User> {
    const { id, nome, email } = user;
    return this.http.put<User>(`${this.apiUrl}/${id}`, { nome, email });
  }

  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }

  public addUserAlert(user: User){
    this.emitEvent.emit(user)
  }
}
