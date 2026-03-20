import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      }
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        return throwError(() => error);
      })
    );
  }
}
