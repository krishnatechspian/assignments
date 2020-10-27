
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnChanges{
    @Input()service: any = [];
    @Input()page: string ;


    ngOnChanges(): void {
        console.log(this.service);
        console.log(this.page);
    }
}
