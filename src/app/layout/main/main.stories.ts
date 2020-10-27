
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MainDetailsComponent } from './main.component';

const data = [
  {
      text: '',
      id: 1,
      url: 'https://i.ibb.co/mFHq21Y/header.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus? Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.'
  }
];
export default {
    title: 'MainDetailsComponent',
    component: MainDetailsComponent,
    argTypes: {
        props: {
          main: data
        }
    },
} as Meta;

const Template: Story<MainDetailsComponent> = (args: MainDetailsComponent) => ({
    component: MainDetailsComponent,
    props: args,
});

export const main1 = Template.bind({});
main1.args = {
  main: data
};

export const main2 = Template.bind({});
main2.args = {
  main: data
};

