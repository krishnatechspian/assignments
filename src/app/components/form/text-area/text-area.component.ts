import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LABEL_LIST } from '../../shared/constants/reactive-form-labels-list';
@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html'
})
export class TextAreaComponent  implements OnInit{
    @Input() fieldId: string | null = null;
    @Input() control: AbstractControl | null = null;

    label: string = null;
    validationErrors: object = null;

    ngOnInit(): void {
        this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
      }

      // tslint:disable-next-line: use-lifecycle-interface
      ngDoCheck(): void {
        this.validationErrors = this.control.touched && this.control.invalid ? this.control.errors : null;
      }

}
