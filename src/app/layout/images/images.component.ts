
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-images',
    templateUrl: './images.component.html'
})
export class ImageComponent {
    @Input() images: any = [];
}
