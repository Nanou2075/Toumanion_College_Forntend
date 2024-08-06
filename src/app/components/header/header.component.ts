import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { LocalStoreService } from '../../services/local-store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 private router = inject(Router)
  private authService = inject(AuthService)
  private localStoreService = inject(LocalStoreService)

  
  signout() {
    Swal.fire({
      title: "Déconnexion",
      text: "Voulez-vous vraiment vous déconnectez ?",
      showCancelButton: true,
      cancelButtonText: 'Non',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui"
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleDeconnexion()
      }
    });
  }


  handleDeconnexion(){
    sessionStorage.setItem('isConnected', 'false');
    this.authService.signout().subscribe({
      next: (data) => {
        if(data.status===1){
          Swal.fire({
            icon: "success",
            text:data.message,
            showConfirmButton: false,
            timer: 1000
          });
         this.router.navigateByUrl('/login')
         sessionStorage.setItem('isConnected', 'false');
         localStorage.clear();
        }
      },
      error: (err) => {
        sessionStorage.setItem('isConnected', 'false');

      }
    })
  }


}
