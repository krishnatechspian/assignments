
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnChanges{
    @Input()service: any = [];

    ngOnChanges(): void {
        console.log(this.service);
    }
}
