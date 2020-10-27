
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/theme/theme.service';


@Component({
    selector: 'app-header-layout-2',
    templateUrl: './header-layout-2.component.html',
    styleUrls: ['./header-layout-2.component.scss']
})
export class HeaderLayout2Component implements OnInit {
    @Input() headerButtons: any = [];
    @Input() isAuthenticated: boolean;
    isChecked = false;
    constructor(private router: Router,
                private themeService: ThemeService) {

    }

    ngOnInit(): void {
        this.themeService.getActiveTheme();
    }

    logout(text): void {
        if (text === 'Logout') {
            localStorage.clear();
            this.router.navigate(['/']);
        }
    }

    checkValue(event: any): void {
        console.log(event);
    }

    toggleTheme(event: any): void {
        console.log(this.themeService.isDarkTheme());
        if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
        } else {
            this.themeService.setDarkTheme();
        }
    }
}
