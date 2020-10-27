
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnChanges{
    @Input()showcase: any = [];


    ngOnChanges(): void {
        console.log(this.showcase);
    }
}
