import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LocalStoreService } from './local-store.service';
import { TokenApiModel } from '../modules/TokenApiModel';


@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {
  refresh = false;
  private authService = inject(AuthService)
  private localStoreService = inject(LocalStoreService)
  private router = inject(Router)

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = this.localStoreService.getAccessToken();
    
    if (myToken) {
       request = request.clone({ 
        setHeaders: { Authorization: `Bearer ${myToken}` }
      })

    }
    
    return next.handle(request).pipe(

      catchError((error :HttpErrorResponse ) => {
        if (error.status == 401 && !this.refresh) {
          this.refresh = true;
          return this.handleUnAuthorizedError(request, next);
        }else
        return throwError(() => error);

      })
    );
  }


  handleUnAuthorizedError(request: HttpRequest<any>, next: HttpHandler) {
    let tokeApiModel = new TokenApiModel();
    tokeApiModel.accessToken = this.localStoreService.getAccessToken();
    tokeApiModel.refreshToken = this.localStoreService.getRefreshToken();
    return this.authService.refreshToken(tokeApiModel.refreshToken)
      .pipe(switchMap((data) => {
        if(data){
          this.localStoreService.storeRefreshToken(data.refreshToken);
          this.localStoreService.storeAccessToken(data.accessToken);

        }
          
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.localStoreService.getAccessToken()}` }
          })
          this.refresh = false;
          return next.handle(request);
        }),
        catchError((error) => {
          if (error) {
            localStorage.clear();
            sessionStorage.setItem('isConnected', 'false');
            this.router.navigateByUrl('/login')
          }
          return throwError(() => {

          })
        })
      )
  }
}