import { TablesValuesPipe } from './table/table-value.pipe';
import { TableComponent } from './table/table.component';
import { HeaderLayoutComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HeaderLayoutComponent, TableComponent, TablesValuesPipe],
    exports: [HeaderLayoutComponent, TableComponent, TablesValuesPipe]
})
export class LayoutModule { }
