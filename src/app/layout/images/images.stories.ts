import { ImageComponent } from './images.component';


import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
    title: 'Images',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            declarations: [ImageComponent],
            imports: [CommonModule],
        }),
    ],
};


export const Image1 = () => ({
    component: ImageComponent,
    template: `
    <app-images [images]="imageDetails"></app-images>
`,
    props: {
        imageDetails: [
            {
                url: 'https://i.ibb.co/mFHq21Y/header.jpg',
                id: 8
            },
            {
                url: 'https://i.ibb.co/WHhMG3f/i-Phone-app.png',
                id: 9
            },
            {
                url: 'https://i.ibb.co/M7t8szf/baseball.jpg',
                id: 10
            },
            {
                url: 'https://i.ibb.co/PtP2y3C/rogers.jpg',
                id: 11
            },
            {
                url: 'https://i.ibb.co/bm9Wg7v/ronaldo.jpg',
                id: 12
            }, {
                url: 'https://i.ibb.co/PQqrsVk/Sports-Stores-01.jpg',
                id: 13
            }
        ]

    },
});

export const Image2 = () => ({
    component: ImageComponent,
    template: `
    <app-images [images]="imageDetails"></app-images>
  `,
    props: {
        imageDetails: [{
            url: 'https://i.ibb.co/c12j7xf/sushil.jpg',
            id: 1
        },
        {
            url: 'https://i.ibb.co/7k0cJXs/ab.jpg',
            id: 2
        },
        {
            url: 'https://i.ibb.co/J31P1q5/app-image.png',
            id: 3
        },
        {
            url: 'https://i.ibb.co/dbMDwbV/app-image2.png',
            id: 4
        },
        {
            url: 'https://i.ibb.co/qMWScsW/cta-bg.jpg',
            id: 5
        },
        {
            url: 'https://i.ibb.co/gPq6b5v/gym.jpg',
            id: 6
        },
        {
            url: 'https://i.ibb.co/2Y5LgrF/gym1.jpg',
            id: 7
        },
        {
            url: 'https://i.ibb.co/mFHq21Y/header.jpg',
            id: 8
        }
        ]
    },
});
