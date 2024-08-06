import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { LocalStoreService } from '../../services/local-store.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  private router = inject(Router)
  private authService = inject(AuthService)
  private localStoreService = inject(LocalStoreService)
  loadingText = Utils.loadingText;
  private fb =inject (FormBuilder)
  loading: boolean = false;
  signinForm! : FormGroup ;


 


  siginForm() {
    this.signinForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(1),

      ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(1),

      ]
      ],


    })
  }

  ngOnInit() {
   this.siginForm();
   this.checkAuth()
  }

 

  sigin() {
      this.loading = true
     this.localStoreService.clear();
      if (this.signinForm.valid) {
        const value = this.signinForm.value;
        this.authService.signin(value).subscribe({
          next: (resp) => {
        
            if (resp.status === 1) { 
               if (resp.data.mfa === true) {
                this.localStoreService.storeUsername(value.username);
                this.localStoreService.storeScan(resp.data.secretImageUri);
                this.router.navigateByUrl('/authentication');
              }
              
              else {
                this.localStoreService.storeAccessToken(resp.data.accessToken);
                this.localStoreService.storeRefreshToken(resp.data.refreshToken);
                this.router.navigateByUrl('/compte/home');
                sessionStorage.setItem('isConnected', 'true');
              }
              
  
              Swal.fire({
                icon: "success",
                text: resp.message,
                showConfirmButton: false,
                timer: 1500
              });
              
              
              this.loading = false
  
  
            }
  
  
  
          },
          error: (err) => {
            this.loading = false
            if (err.error.status === 0) {
              this.loading = false
              Swal.fire({
                icon: "error",
                text: err.error.message,
              });
  
            }
            else if (err.error.status === 2) {
              this.router.navigateByUrl('/activation');
            }
  
          }
  
        }
  
        )
      }
  
    }


    checkAuth() {
      if (!!this.localStoreService.isConnected) {
        this.router.navigate(['/compte/home'])      
       
       }
   
     }
}
