import { ThemeService } from './../../theme/theme.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderButtons } from 'src/app/auth/data-models';
import { HeadersButtonState } from 'src/app/pages/products/+state/headers-button/headers-button.reducer';
import { select, Store } from '@ngrx/store';
import { LoadHeadersButtons } from 'src/app/pages/products/+state/headers-button/headers-button.actions';
import { getHeaderButtons } from 'src/app/pages/products/+state/headers-button';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderLayoutComponent implements OnInit{
    headerButtons$: Observable<HeaderButtons[]>;
    isAuthenticated = false;
    constructor( private storeHeaderButton: Store<HeadersButtonState>,
                 private authService: AuthService) { }

    ngOnInit(): void {
        this.storeHeaderButton.dispatch(new LoadHeadersButtons());
        this.headerButtons$ = this.storeHeaderButton.pipe(select(getHeaderButtons));
        this.isAuthenticated = this.authService.checkAuthentication();
     }

    // toggleTheme(): void {
    //     if (this.themeService.isDarkTheme()) {
    //         this.toggleButtonName = 'Dark Theme';
    //         this.themeService.setLightTheme();
    //     } else {
    //         this.toggleButtonName = 'Light Theme';
    //         this.themeService.setDarkTheme();
    //     }
    // }
}
