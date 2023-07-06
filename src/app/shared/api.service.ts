import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http: HttpClient) { }
  // Now here i will define the post, get, edit, delete
  // create restaurant using post method
  postRestaurant(data: any) {
    return this._http.post<any>("http://localhost:3000/posts ", data).pipe(map((res: any) => {
      return res;
    }))
  }

  //Get Restaurant Data Using Get Method
  getRestaurant() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }
  //Update Restaurant Data Using Update Method
  updateRestaurant(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  //Delete Restaurant Data Using Update Method
  deleteRestaurant(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
