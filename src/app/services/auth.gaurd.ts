import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';


export const AuthGaurd : CanActivateFn =(route, state)=> {
  const router = inject (Router);
    const isConnected = sessionStorage.getItem('isConnected') === 'true';
    if(!isConnected){
       return  router.navigateByUrl('login');
    }
    return isConnected;
}
