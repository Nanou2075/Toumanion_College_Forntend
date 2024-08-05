import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/view/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { ActivationComponent } from './security/activation/activation.component';
import { AuthenticationComponent } from './security/authentication/authentication.component';
import { ForgetComponent } from './security/forget/forget.component';
import { AuthGaurd } from './services/auth.gaurd';

export const routes: Routes = [

 {path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        
      },
      
      
      {
        path: 'forget',
        component: ForgetComponent,
      },
      {
        path: 'activation',
        component: ActivationComponent,
      },
      {
        path: 'authentication',
        component: AuthenticationComponent,
      },

      {
        path: 'compte',
        canActivate :[AuthGaurd],
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },

        //   {
        //     path: 'student',
        //     component: StudentComponent,
        //   },
        //   {
        //     path: 'teacher',
        //     component: TeacherComponent,
        //   },

        //   {
        //     path: 'employer',
        //     component: AddEmployerComponent,
        //   },
        //   {
        //     path: 'offer',
        //     component: OfferComponent,
        //   },
        //   {
        //     path: 'user',
        //     component: UserComponent,
        //   },
        //   {
        //     path: 'accounting',
        //     component: AccountingComponent,
        //   },




        //   {
        //     path: 'add-student',
        //     component: AddStudentComponent,
        //   },
        //   {
        //     path: 'add-teacher',
        //     component: AddTeacherComponent,
        //   },

        //   {
        //     path: 'add-employer',
        //     component: AddEmployerComponent,
        //   },
        //   {
        //     path: 'add-user',
        //     component: AddUserComponent,
        //   },
        //   {
        //     path: 'add-offer',
        //     component: AddOfferComponent,
        //   },




        //   {
        //     path: 'edit-student',
        //     component: EditStudentComponent,
        //   },
        //   {
        //     path: 'edit-teacher',
        //     component: EditStudentComponent,
        //   },

        //   {
        //     path: 'edit-employer',
        //     component: EditEmployerComponent,
        //   },
        //   {
        //     path: 'edit-user',
        //     component: EditUserComponent,
        //   },
        //   {
        //     path: 'edit-offer',
        //     component: EditOfferComponent,
        //   },

          


        //   {
        //     path: 'detail-student',
        //     component: DetailStudentComponent,
        //   },
        //   {
        //     path: 'detail-teacher',
        //     component: DetailTeacherComponent,
        //   },

        //   {
        //     path: 'detail-employer',
        //     component: DetailEmployerComponent,
        //   },
        //   {
        //     path: 'detail-user',
        //     component: DetailUserComponent,
        //   },
        //   {
        //     path: 'detail-offer',
        //     component: DetailOfferComponent,
        //   },
         
      ],
      
      
      }, 
];

