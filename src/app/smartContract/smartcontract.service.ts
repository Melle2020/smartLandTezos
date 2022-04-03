import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmartcontractService {

  constructor(private http:HttpClient) { }


  addTerrain(terrain:any):Observable<any>{
    console.log('terrain',terrain)
    return this.http.post<any>("https://smartland-server.herokuapp.com/addTerrain",terrain)
  }

  getAllTerrain():Observable<any>{
    return this.http.get<any>("https://api.ithacanet.tzkt.io/v1/operations/transactions?target=KT1LmvMf9iki8J4u7rdQDEFYBkAh9onuThAX")
  }


}
