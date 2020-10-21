
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
    @Input() details: any = [];

    ngOnInit(): void {
        console.log(this.details);
    }
}
