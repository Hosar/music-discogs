import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInputForm } from './SearchInputForm';

export default {
  title: 'Components/SearchInputForm',
  component: SearchInputForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchInputForm>;

const Template: ComponentStory<typeof SearchInputForm> = (args) => <SearchInputForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onSubmit: (values: any) => console.log(values),
};
