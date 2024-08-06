import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/view/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { ActivationComponent } from './security/activation/activation.component';
import { AuthenticationComponent } from './security/authentication/authentication.component';
import { ForgetComponent } from './security/forget/forget.component';
import { AuthGaurd } from './services/auth.gaurd';
import { OfferComponent } from './pages/view/offer/offer.component';
import { UserComponent } from './pages/view/user/user.component';
import { AccountingComponent } from './pages/view/accounting/accounting.component';
import { EmployerComponent } from './pages/view/employer/employer.component';
import { TeacherComponent } from './pages/view/teacher/teacher.component';
import { StudentComponent } from './pages/view/student/student.component';
import { AddStudentComponent } from './pages/registration/add-student/add-student.component';
import { AddTeacherComponent } from './pages/registration/add-teacher/add-teacher.component';
import { AddEmployerComponent } from './pages/registration/add-employer/add-employer.component';
import { AddUserComponent } from './pages/registration/add-user/add-user.component';
import { AddOfferComponent } from './pages/registration/add-offer/add-offer.component';
import { EditStudentComponent } from './pages/modification/edit-student/edit-student.component';
import { EditTeacherComponent } from './pages/modification/edit-teacher/edit-teacher.component';
import { EditEmployerComponent } from './pages/modification/edit-employer/edit-employer.component';
import { EditUserComponent } from './pages/modification/edit-user/edit-user.component';
import { EditOfferComponent } from './pages/modification/edit-offer/edit-offer.component';
import { DetailStudentComponent } from './pages/details/detail-student/detail-student.component';
import { DetailTeacherComponent } from './pages/details/detail-teacher/detail-teacher.component';
import { DetailEmployerComponent } from './pages/details/detail-employer/detail-employer.component';
import { DetailUserComponent } from './pages/details/detail-user/detail-user.component';
import { DetailOfferComponent } from './pages/details/detail-offer/detail-offer.component';

export const routes: Routes = [

     {
        
    path: '',
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

          {
            path: 'student',
            component: StudentComponent,
          },
          {
            path: 'teacher',
            component: TeacherComponent,
          },

          {
            path: 'employer',
            component: EmployerComponent,
          },
          {
            path: 'offer',
            component: OfferComponent,
          },
          {
            path: 'user',
            component: UserComponent,
          },
          {
            path: 'accounting',
            component: AccountingComponent,
          },




          {
            path: 'add-student',
            component: AddStudentComponent,
          },
          {
            path: 'add-teacher',
            component: AddTeacherComponent,
          },

          {
            path: 'add-employer',
            component: AddEmployerComponent,
          },
          {
            path: 'add-user',
            component: AddUserComponent,
          },
          {
            path: 'add-offer',
            component: AddOfferComponent,
          },




          {
            path: 'edit-student',
            component: EditStudentComponent,
          },
          {
            path: 'edit-teacher',
            component: EditTeacherComponent,
          },

          {
            path: 'edit-employer',
            component: EditEmployerComponent,
          },
          {
            path: 'edit-user',
            component: EditUserComponent,
          },
          {
            path: 'edit-offer',
            component: EditOfferComponent,
          },

          


          {
            path: 'detail-student',
            component: DetailStudentComponent,
          },
          {
            path: 'detail-teacher',
            component: DetailTeacherComponent,
          },

          {
            path: 'detail-employer',
            component: DetailEmployerComponent,
          },
          {
            path: 'detail-user',
            component: DetailUserComponent,
          },
          {
            path: 'detail-offer',
            component: DetailOfferComponent,
          },
         
      ],
      
      
      }, 
];

