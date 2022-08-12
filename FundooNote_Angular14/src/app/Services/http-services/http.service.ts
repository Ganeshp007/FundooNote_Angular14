import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl;

  constructor(private httpClient: HttpClient) { }

    postservice(url: String, reqdata: any, token: boolean=false, httpOptions: any={})
    {
        return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions);
    }
}
