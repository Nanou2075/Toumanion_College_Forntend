import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Utils } from '../../utils/utils';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  loading: boolean = false;
  loadingTextShow: boolean = true;
  loadingText = Utils.loadingText;
  forgetForm!: FormGroup;
  password: boolean = false;

  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)

  createForm() {
    this.forgetForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.minLength(1),
      ]
      ],

    })
  }

  ngOnInit() {
    this.createForm();
  }


  forgetCode() {
    console.log("les valeurs sont",this.forgetForm.value)

    this.loading = true
    if (this.forgetForm.valid) {
      const value = this.forgetForm.value;
      this.authService.forgetPassword(value).subscribe({
        next: (data) => {
          if (data.status === 1) {  
            Swal.fire({
              text: data.message,
              icon: "success"
            });
            this.loading = false
            this.router.navigateByUrl('/login');  
          }
        },
        error: (err) => {
            this.loading = false
            Swal.fire({
              icon: "error",
              text: err.error.message,      
            });
            
          }
        }  
      )
    }
  }
}



