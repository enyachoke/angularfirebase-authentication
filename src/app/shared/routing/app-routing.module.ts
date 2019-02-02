import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from '../../shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../../shared/guard/secure-inner-pages.guard';

import { AddLecturerCheckinComponent } from '../../components/add-lecturer-checkin/add-lecturer-checkin.component';
import { EditLecturerCheckinComponent } from '../../components/edit-lecturer-checkin/edit-lecturer-checkin.component';
import { LecturerCheckinListComponent } from '../../components/lecturer-checkin-list/lecturer-checkin-list.component';
import { LecturerCheckinViewComponent } from 'src/app/components/lecturer-checkin-view/lecturer-checkin-view.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'add-lecturer-checkin', component: AddLecturerCheckinComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'edit-lecturer-checkin/:id', component: EditLecturerCheckinComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'view-lecturer-checkin/:id', component: LecturerCheckinViewComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'view-lecturer-checkins', component: LecturerCheckinListComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
