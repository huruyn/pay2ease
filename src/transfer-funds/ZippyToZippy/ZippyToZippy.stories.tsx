import { ComponentStory, ComponentMeta } from '@storybook/react';
import ZippyToZippy from './ZippyToZippy';

export default {
  title: 'transfer-funds/ZippyToZippy',
  component: ZippyToZippy,
} as ComponentMeta<typeof ZippyToZippy>;

const Template: ComponentStory<typeof ZippyToZippy> = () => <ZippyToZippy />;
export const Default = Template.bind({});
Default.args = {};
