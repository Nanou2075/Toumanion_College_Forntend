import { Component, inject } from '@angular/core';
import { Utils } from '../../utils/utils';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalStoreService } from '../../services/local-store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  loading: boolean = false;
  loadingTextShow: boolean = true;
  loadingText = Utils.loadingText;
  authenticationForm!: FormGroup;
  password: boolean = false;
  qrcode:any ;




  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)
  private localStoreService = inject(LocalStoreService)


 createForm() {
    this.authenticationForm = this.fb.group({
      username: [this.localStoreService.getUsername(), [
        Validators.required,
        Validators.minLength(1),

      ]
      ],
      code: ['', [
        Validators.required,
        Validators.minLength(1),
      ]
      ],


    })
  }


  ngOnInit() {
    this.qrcode=this.localStoreService.getScanImage();
    this.createForm();


  }

  

   

   
   
  handleVerifiacation(){
    this.loading=true
      if(this.authenticationForm.valid){
        const value = this.authenticationForm.value;
        this.authService.verification(value).subscribe({
          next:(resp) =>{
          if (resp.status === 1) {
          this.localStoreService.storeAccessToken(resp.data.accessToken);
          this.localStoreService.storeRefreshToken(resp.data.refreshToken);
          sessionStorage.setItem('isConnected','true');
           this.router.navigateByUrl('/compte/home')
           Swal.fire({
            icon: "success",
            text: resp.message,
            showConfirmButton: false,
            timer: 1500
          });
          }

        },
        error:(err)=>{
            this.loading=false
            Swal.fire({
              text: err.error.message,
              icon: "error"
            });}
          
        }
      
      )
      }
    }
   
}






