import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepolistService {

  constructor(private http: HttpClient) { }
 
  getRepList () {
    return this.http.get(environment.githubapi)
  }
  
}
