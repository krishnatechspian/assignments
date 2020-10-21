import { LayoutModule } from './../layout/layout.module';
import { HeaderButtonsEffects } from './../pages/products/+state/headers-button/headers-button.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { initialState as authInitialState } from './+state/auth.reducer';
import { headerButtonsReducer, initialState as headerButtonsInitialState  } from '../pages/products/+state/headers-button/headers-button.reducer';
const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        StoreModule.forFeature('auth', fromAuth.authReducer,
        { initialState: authInitialState }),
        StoreModule.forFeature('headers-button', headerButtonsReducer, { initialState: headerButtonsInitialState }),
        EffectsModule.forFeature([AuthEffects, HeaderButtonsEffects])
    ],
    declarations: [LoginComponent],
})
export class AuthModule { }
