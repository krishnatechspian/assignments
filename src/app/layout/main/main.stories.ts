import { MainDetailsComponent } from './main.component';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Main',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [MainDetailsComponent],
      imports: [CommonModule],
    }),
  ],
};


export const MainDetailsList1 = () => ({
  component: MainDetailsComponent,
  template: `
  <app-main [main]="mainDetails"></app-main>
`,
  props: {
    mainDetails: [{
        text: 'This is just a test',
        id: 1,
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus? Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.',
        url: 'https://i.ibb.co/mFHq21Y/header.jpg'
    }]
  },
});

export const MainDetailsList2 = () => ({
    component: MainDetailsComponent,
    template: `
    <app-main [main]="mainDetails"></app-main>
  `,
    props: {
        mainDetails: [{
            text: 'All work and no play makes Jack a dull boy',
            id: 1,
            details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus? Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.',
            url: 'https://i.ibb.co/mFHq21Y/header.jpg'
        }]
    },
  });
