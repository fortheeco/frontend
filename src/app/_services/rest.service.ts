import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';    
import {BASE_URL} from "../_providers/config/config";
import { AuthenticationService } from '../_services';

@Injectable({
  providedIn: 'root'
})
export class RestService {

private BASE_URL = BASE_URL;
private headers: Headers = new Headers({'Content-Type': 'application/json'});
private headers_formdata: Headers = new Headers({'Content-Type': undefined});

  constructor(
		private httpc:Http,
		private authenticationService: AuthenticationService
		) { }




}
