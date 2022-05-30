import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VersionPure } from './Version';
import './i18n/config';
import './styles/index.scss';

export default {
  title: 'Version',
  component: VersionPure,
} as ComponentMeta<typeof VersionPure>;

const Template: ComponentStory<typeof VersionPure> = ({
  appVersion,
  apiVersion,
}) => (
  <VersionPure
    appVersion={appVersion}
    apiVersion={apiVersion}
  />
);

export const Loading = Template.bind({});
Loading.args = {
  appVersion: '1.2.3',
};

export const Loaded = Template.bind({});
Loaded.args = {
  ...Loading.args,
  apiVersion: '4.5.6',
};
