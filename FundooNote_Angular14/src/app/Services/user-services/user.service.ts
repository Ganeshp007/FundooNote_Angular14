import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http-services/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) {  }

  registration(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

    return this.httpService.postservice('/User/AddUser',reqdata,false,header)
  }
}
