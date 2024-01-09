import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLoginDto } from '../dtos/user-for-login-dto';
import { Observable } from 'rxjs';
import { DataResponse } from '../models/responses';
import { User } from '../models/user';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}
  // getAuth() {
  //   let token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });
  //   return this.httpClient.post(
  //     'https://api.bysalon.com.tr/auth/set-all-credentials',
  //     headers
  //   );
  // }
  getAll(): Observable<DataResponse<User[]>> {
    return this.httpClient.get<DataResponse<User[]>>(
      'http://api.bysalon.com.tr/users/get-all'
    );
  }
  getById(id: number): Observable<DataResponse<User[]>> {
    return this.httpClient.get<DataResponse<User[]>>(
      'http://api.bysalon.com.tr/users/get-by-id' + id
    );
  }
  createUser(userData: User): Observable<DataResponse<User>> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.post<DataResponse<User>>(
      'http://api.bysalon.com.tr/users/create',
      userData,
      { headers }
    );
  }
}
