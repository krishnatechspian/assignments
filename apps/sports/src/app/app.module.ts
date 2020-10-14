import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { authRoutes, AuthModule } from '@assignments/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
// import { MaterialModule } from '@assignments/material';
// import { LayoutModule } from '@assignments/layout';
import { AuthGuard } from '@assignments/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'main' },
        { path: 'auth', children: authRoutes },
        {
          path: 'main',
          loadChildren: () =>
            import('@assignments/products').then(
              (module) => module.ProductsModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule,
    // LayoutModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    // MaterialModule   // added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
