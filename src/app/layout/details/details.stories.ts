import { DetailsComponent } from './details.component';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Details',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [DetailsComponent],
      imports: [CommonModule],
    }),
  ],
};


export const DetailsList1 = () => ({
  component: DetailsComponent,
  template: `
  <app-details [details]="details"></app-details>
`,
  props: {
    details: [ {
        text: 'ASAH',
        details: 'All work and no play makes Jack a dull boy',
        id: 1,
        url: 'https://i.ibb.co/mFHq21Y/header.jpg'
    }]
  },
});

export const DetailsList2 = () => ({
    component: DetailsComponent,
    template: `
    <app-details [details]="details"></app-details>
  `,
    props: {
      details: [ {
            text: 'BUILDKNOWLEDGE',
            details: 'All work and no play makes Jack a dull boy',
            id: 1,
            url: 'https://i.ibb.co/mFHq21Y/header.jpg'
        }]
    },
  });
