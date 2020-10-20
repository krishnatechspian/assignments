import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { initialState as authInitialState } from './+state/auth.reducer';
const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', fromAuth.authReducer,
        { initialState: authInitialState }),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [LoginComponent],
})
export class AuthModule { }
