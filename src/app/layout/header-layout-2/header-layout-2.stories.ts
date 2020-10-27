// import { HeaderLayout2Component } from './header-layout-2.component';


// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule } from '@angular/common';

// export default {
//     title: 'HeadersButton',
//     excludeStories: /.*Data$/,
//     decorators: [
//         moduleMetadata({
//             // imports both components to allow component composition with storybook
//             declarations: [HeaderLayout2Component],
//             imports: [CommonModule],
//         }),
//     ],
// };


// export const HeaderLayout1 = () => ({
//     component: HeaderLayout2Component,
//     template: `
//   <app-header-layout-2 [headerButtons]="headersButton"></app-header-layout-2>
// `,
//     props: {
//         headersButton: [{
//             text: 'Home',
//             id: 1
//         },
//         {
//             text: 'About',
//             id: 1
//         },
//         {
//             text: 'Details',
//             id: 1
//         },
//         {
//             text: 'Contact',
//             id: 1
//         }
//         ]

//     },
// });

// export const HeaderLayout2 = () => ({
//     component: HeaderLayout2Component,
//     template: `
//     <app-header-layout-2 [headerButtons]="headersButton"></app-header-layout-2>
//   `,
//     props: {
//         headersButton: [{
//             text: 'First',
//             id: 1
//         },
//         {
//             text: 'Second',
//             id: 1
//         },
//         {
//             text: 'Third',
//             id: 1
//         },
//         {
//             text: 'Fourth',
//             id: 1
//         }
//         ]
//     },
// });



import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderLayout2Component } from './header-layout-2.component';

const data =  [
    {
        text: 'Home',
        id: 1,
        url: '/',
        access : 'Admin'
    },
    {
        text: 'Home',
        id: 5,
        url: '/',
        access : 'Login'
    },
    {
        text: 'Admin',
        id: 2,
        url: '/product/list',
        access : 'Admin'
    },
    {
        text: 'Logout',
        id: 4,
        access : 'Admin'
    },
    {
        text: 'Login',
        id: 3,
        url: '/user/login',
        access : 'Login'
    }
  ];
export default {
  title: 'HeaderLayout',
  component: HeaderLayout2Component,
  argTypes: {
    props: {
      // tslint:disable-next-line: no-trailing-whitespace
      headerButtons : data,
      isAuthenticated : true
    }
  },
} as Meta;

const Template: Story<HeaderLayout2Component> = (args: HeaderLayout2Component) => ({
  component: HeaderLayout2Component,
  props: args,
});

export const headerButtons1 = Template.bind({});
headerButtons1.args = {
    headerButtons : data,
    isAuthenticated : true
};

export const headerButtons2 = Template.bind({});
headerButtons2.args = {
    headerButtons : data,
    isAuthenticated : false
};
