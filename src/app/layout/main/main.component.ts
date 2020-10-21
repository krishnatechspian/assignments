
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainDetailsComponent {
    @Input() main: any = [];
}
