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

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req).catch(event => {
//       if (event instanceof HttpErrorResponse) {
//         const response = event as HttpErrorResponse;
//         if (response.headers.get('content-type') === 'application/json') {
//           return Observable.throw(new HttpErrorResponse({
//             error: JSON.parse(response.error),
//             headers: response.headers,
//             status: response.status,
//             statusText: response.statusText,
//             url: response.url,
//           }));
//         }
//       }
//       return Observable.throw(event);
//     })
// }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
 
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
 
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
 
        // request = request.clone({ headers: request.headers.set('Freaky', 'Jolly') });
 
        // return next.handle(request).pipe(
        //     map((event: HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
        //         }
        //         return event;
        //     }),
        //     catchError((error: HttpErrorResponse) => {
        //         if (error.status === 401) {
        //             console.log('error')
        //             // auto logout if 401 response returned from api
        //             this.authenticationService.logout();
        //             this.utility.showToast('primary', 'session timeout, please login')
        //             // location.reload(true);
        //         }
        //         let data = {};
        //         data = {
        //             message: error.message,
        //         };
        //         return throwError(error);
        //     }));
        console.log('dw')

            return next.handle(request).pipe(catchError(err => {
                if (err.status === 401) {
                                        console.log('error')

                    // auto logout if 401 response returned from api
                    this.authenticationService.logout();
                    this.utility.showToast('primary', 'session timeout, please login')
                    // location.reload(true);
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            }));
    }
}