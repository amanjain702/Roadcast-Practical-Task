import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServicefileService {

  constructor(public http:HttpClient) { }
  

  getList():Observable<any>{
   let Url ="http://recruitment.roadcast.net/node_js_api";

  return this.http.get(Url).pipe(map((res:any)=>{
    if(res)
    {
      return res;
    }
  }))
  }
}
