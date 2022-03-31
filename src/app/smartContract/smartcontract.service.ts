import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmartcontractService {

  constructor(private http:HttpClient) { }


  addTerrain(terrain:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/addTerrain",JSON.parse(terrain) )
  }


}
