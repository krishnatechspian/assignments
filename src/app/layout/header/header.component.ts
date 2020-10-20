import { ThemeService } from './../../theme/theme.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderLayoutComponent implements OnInit{
    @Input() headerDetails: any;
    toggleButtonName = 'Dark Theme';

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.toggleTheme();
    }

    toggleTheme(): void {
        if (this.themeService.isDarkTheme()) {
            this.toggleButtonName = 'Dark Theme';
            this.themeService.setLightTheme();
        } else {
            this.toggleButtonName = 'Light Theme';
            this.themeService.setDarkTheme();
        }
    }
}
