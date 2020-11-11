import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from '@services/authenticate/authenticate.service';
import {Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor(public authenticateService: AuthenticateService, private router: Router) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      console.log("status");
      //navigate /delete cookies or whatever
      this.router.navigate(['/login']);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(); // or EMPTY may be appropriate here
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = this.authenticateService.getToken();

    if (idToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });
    }

    return next.handle(request).pipe(catchError(x=> this.handleAuthError(x)));
  }
}
