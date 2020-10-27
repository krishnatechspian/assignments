
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageComponent } from './images.component';

const data = [{
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
];
export default {
    title: 'ImageComponents',
    component: ImageComponent,
    argTypes: {
        props: {
            images: data
        }
    },
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
    component: ImageComponent,
    props: args,
});

export const image1 = Template.bind({});
image1.args = {
    images: data
};

export const image2 = Template.bind({});
image2.args = {
    images: data
};

