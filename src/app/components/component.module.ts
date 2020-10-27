import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './form/validations/validations.component';
import { InputComponent } from './form/input/input.component';
import { TextAreaComponent } from './form/text-area/text-area.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [ValidationComponent,
        InputComponent,
        TextAreaComponent],
    exports: [ValidationComponent,
        InputComponent,
        TextAreaComponent]
})
export class SharedModule { }
