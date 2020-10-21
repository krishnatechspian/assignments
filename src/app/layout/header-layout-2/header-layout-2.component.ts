
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-header-layout-2',
    templateUrl: './header-layout-2.component.html',
    styleUrls: ['./header-layout-2.component.scss']
})
export class HeaderLayout2Component {
    @Input() headerButtons: any = [];
    @Input() isAuthenticated: boolean;
    goToLogin(): void{
        console.log('here');
    }
}
