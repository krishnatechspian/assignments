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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FollowLinkComponent } from './follow-link/follow-link.component';
import { LinkComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { Details1Component } from './details-1/details-1.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
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
         ShowcaseComponent,
         FollowLinkComponent,
         LinkComponent,
         FooterComponent,
         Details1Component,
         HeaderLayout2Component],
    exports: [HeaderLayoutComponent,
         TableComponent,
          TablesValuesPipe,
          ServicesComponent,
          DetailsComponent,
          ImageComponent,
          MainDetailsComponent,
          ShowcaseComponent,
          LinkComponent,
          FooterComponent,
          FollowLinkComponent,
          Details1Component,
          HeaderLayout2Component]
})
export class LayoutModule { }
