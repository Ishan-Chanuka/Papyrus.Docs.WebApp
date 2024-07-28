import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { LoginDto } from '../../models/logindto';
import { ApiResponse } from '../../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public login(request: LoginDto){
    return this.http.post<ApiResponse>(`${this.baseUrl}/auth/api/Auth/login`, request)
  }
}
