import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import {UtilityProvider} from "../_providers/utility";



@Injectable()
export class httpRequestInterceptor implements HttpInterceptor {
    
    constructor(
        private authenticationService: AuthenticationService,
        private utility: UtilityProvider,
        ) { }

        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            // add authorization header with jwt token if available
            let currentUser = this.authenticationService.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: { 
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
    
            return next.handle(request);
        }
}