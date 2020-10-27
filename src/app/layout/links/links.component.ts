
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-link',
    templateUrl: './links.component.html'
})
export class LinkComponent implements OnChanges{
    @Input()follow: any = [];


    ngOnChanges(): void {
        console.log(this.follow);
    }
}
