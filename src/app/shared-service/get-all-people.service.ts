import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class GetAllPeopleService {
    private baseUrl:string='http://localhost:8080/service/v1';
    private headers = new Headers({'Content-type':'application/json'});
    private options = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }
      getPeople(){          
          return this._http.get(this.baseUrl+'/getAllPeople',this.options).map((response:Response)=>response.json())
          .catch(this.errorHandler);
      }   

      deletePeople(){          
        return this._http.delete(this.baseUrl,this.options).map((response:Response)=>response.json())
        .catch(this.errorHandler);
      }
      
      errorHandler(error:Response){
          return Observable.throw(error||"SERVER ERROR");
      }
}
