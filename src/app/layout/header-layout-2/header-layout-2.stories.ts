import { HeaderLayout2Component } from './header-layout-2.component';


import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
    title: 'HeadersButton',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            declarations: [HeaderLayout2Component],
            imports: [CommonModule],
        }),
    ],
};


export const HeaderLayout1 = () => ({
    component: HeaderLayout2Component,
    template: `
  <app-header-layout-2 [headerButtons]="headersButton"></app-header-layout-2>
`,
    props: {
        headersButton: [{
            text: 'Home',
            id: 1
        },
        {
            text: 'About',
            id: 1
        },
        {
            text: 'Details',
            id: 1
        },
        {
            text: 'Contact',
            id: 1
        }
        ]

    },
});

export const HeaderLayout2 = () => ({
    component: HeaderLayout2Component,
    template: `
    <app-header-layout-2 [headerButtons]="headersButton"></app-header-layout-2>
  `,
    props: {
        headersButton: [{
            text: 'First',
            id: 1
        },
        {
            text: 'Second',
            id: 1
        },
        {
            text: 'Third',
            id: 1
        },
        {
            text: 'Fourth',
            id: 1
        }
        ]
    },
});
