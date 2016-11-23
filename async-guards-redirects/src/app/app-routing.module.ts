import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictedComponent } from './restricted/restricted.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'unrestricted',
    children: []
  },
  {
    path: 'restricted',
    component: RestrictedComponent,
    canActivate: [AuthGuard],
    data: {
      authGuardRedirect: '/unrestricted'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
