import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@assignments/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { NxModule } from '@nrwl/angular';
import { initialState as authInitialState } from './+state/auth.reducer';
export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NxModule.forRoot(),
    StoreModule.forFeature('auth', fromAuth.authReducer,
     { initialState: authInitialState }), 
     EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
