import { RouterModule } from '@angular/router';
import { MainDetailsComponent } from './main/main.component';
import { ImageComponent } from './images/images.component';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';
import { HeaderLayout2Component } from './header-layout-2/header-layout-2.component';
import { TablesValuesPipe } from './table/table-value.pipe';
import { TableComponent } from './table/table.component';
import { HeaderLayoutComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [HeaderLayoutComponent,
         TableComponent,
         TablesValuesPipe,
         ServicesComponent,
         DetailsComponent,
         ImageComponent,
         MainDetailsComponent,
         HeaderLayout2Component],
    exports: [HeaderLayoutComponent,
         TableComponent,
          TablesValuesPipe,
          ServicesComponent,
          DetailsComponent,
          ImageComponent,
          MainDetailsComponent,
          HeaderLayout2Component]
})
export class LayoutModule { }
