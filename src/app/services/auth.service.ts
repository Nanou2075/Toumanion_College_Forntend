import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { Password } from "../modules/password.module";
import { Login } from "../modules/login.module";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class AuthService { 

  constructor(private store: LocalStoreService, private router: Router, private http: HttpClient) {
  }



  signin(login: Login): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'signIn', login)

  }


  doubleAuhhentication(etat: boolean): Observable<any> {
    return this.http.post<any>(environment.apiUrl + "taf", { "etat": etat })
  }


  changePassword(password: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'changePassword', password);
  }


  sendActivationCompte(email: Password): Observable<any> {
    return this.http.post<any>(environment.apiUrl +'verification', {"email":email});

  }


  forgetPassword(password: Password): Observable<any> {
    return this.http.post<Response>(environment.apiUrl +'forgetPassword', password);
  }


  activationCompte(code: Password) : Observable<any> {
    return this.http.post<any>(environment.apiUrl +'activation',code);

  }


  refreshToken(token: any): Observable<any> {
    console.log("le refreshtoken",token.refreshToken)
    var body={
     "refreshToken" :token.refreshToken
    }
    return this.http.post<any>(environment.apiUrl + 'refreshToken', body)
  }



  signout(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'signOut')
  }
  

  verification(body:any) : Observable<any> {
  
    return this.http.post<any>(environment.apiUrl +'verification/tfa', body);
  }



}


