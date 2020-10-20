import { HeaderLayoutComponent } from './header.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Header',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [HeaderLayoutComponent],
      imports: [CommonModule],
    }),
  ],
};


export const ProductList = () => ({
  component: HeaderLayoutComponent,
  template: `
  <app-header [headerDetails]="headerDetails"></app-header>
`,
  props: {
    headerDetails: {
        page: 'Product List'
    }
  },
});

export const ProductEdit = () => ({
    component: HeaderLayoutComponent,
    template: `
    <app-header [headerDetails]="headerDetails"></app-header>
  `,
    props: {
      headerDetails: {
          page: 'Product Edit'
      }
    },
  });
