
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DetailsComponent } from './details.component';
export default {
  title: 'Details',
  component: DetailsComponent,
  argTypes: {
    props: {
      details: [ {
                    text: 'BUILDKNOWLEDGE',
                    details: 'All work and no play makes Jack a dull boy',
                    id: 1,
                    url: 'https://i.ibb.co/mFHq21Y/header.jpg'
                }]
    }
  },
} as Meta;

const Template: Story<DetailsComponent> = (args: DetailsComponent) => ({
  component: DetailsComponent,
  props: args,
});

export const details1 = Template.bind({});
details1.args = {
  details: [ {
    text: 'BUILDKNOWLEDGE',
    details: 'All work and no play makes Jack a dull boy',
    id: 1,
    url: 'https://i.ibb.co/mFHq21Y/header.jpg'
}]
};

export const details2 = Template.bind({});
details2.args = {
     details: [ {
        text: 'ASAH',
        details: 'All work and no play makes Jack a dull boy',
        id: 1,
        url: 'https://i.ibb.co/mFHq21Y/header.jpg'
    }]
};
