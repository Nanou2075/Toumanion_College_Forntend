import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Utils } from '../../utils/utils';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './activation.component.html',
  styleUrl: './activation.component.css'
})
export class ActivationComponent {
  loading: boolean = false;
  loadingTextShow: boolean = true;
  loadingText = Utils.loadingText;
  activationForm!: FormGroup;
  password: boolean = false;

  private router = inject(Router)
  private authService = inject(AuthService)
  private fb =inject (FormBuilder)

  createForm() {
    this.activationForm = this.fb.group({
      code: ['', [
        Validators.required,
        Validators.minLength(1),
      ]
      ],

    })
  }

  ngOnInit() {
    this.createForm();
  }


  activedCode() {
    this.loading = true
    if (this.activationForm.valid) {
      const value = this.activationForm.value;
      this.authService.activationCompte(value).subscribe({
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
