import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'common/StepComponent',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = () => (
  <Breadcrumbs crumbs={undefined} />
);

export const Default = Template.bind({});
Default.args = {};
