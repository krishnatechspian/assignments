
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-follow-link',
    templateUrl: './follow-link.component.html'
})
export class FollowLinkComponent implements OnChanges{
    @Input()follow: any = [];


    ngOnChanges(): void {
        console.log(this.follow);
    }
}
