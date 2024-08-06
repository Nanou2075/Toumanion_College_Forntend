import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {


  storeAccessToken(tokenValue: string) {
    localStorage.setItem('accessToken', tokenValue)
  }


  
  storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue)
  }



  storeScan(tokenValue: string) {
    localStorage.setItem('scan', tokenValue)
  }



  storeUsername(tokenValue: string) {
    localStorage.setItem('username', tokenValue)
  }



  storemfaEnabled(tokenValue: string) {
    localStorage.setItem('mfaEnabled', tokenValue)
  }




  storeTfa(tokenValue: string) {
    localStorage.setItem('istfa', tokenValue)
  }


  storeType(type: string) {
    localStorage.setItem('type', type)
  }



  getAccessToken() {
    return localStorage.getItem('accessToken')
  }


  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }


  getScanImage() {
    return localStorage.getItem('scan')
  }


  isLoggedIn(): boolean {
    return !localStorage.getItem('accessToken')
  }

  isConnected():boolean {
    return!! localStorage.getItem('isConnected')
  }



  getUsername() {
    return localStorage.getItem('username')
  }



  getScan() {
    return localStorage.getItem('scan')
  }



  clear() {
    return localStorage.clear();
  }


}
