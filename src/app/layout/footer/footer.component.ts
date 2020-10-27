
import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnChanges{
    @Input()footer: any = [];


    ngOnChanges(): void {
        console.log(this.footer);
    }
}
