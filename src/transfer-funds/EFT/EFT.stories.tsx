import { ComponentStory, ComponentMeta } from '@storybook/react';
import EFT from './EFT';

export default {
  title: 'transfer-funds/EFT',
  component: EFT,
} as ComponentMeta<typeof EFT>;

const Template: ComponentStory<typeof EFT> = () => <EFT />;
export const Default = Template.bind({});
Default.args = {};
