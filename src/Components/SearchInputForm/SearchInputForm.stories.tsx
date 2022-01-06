import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInputForm } from './SearchInputForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SearchInputForm',
  component: SearchInputForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchInputForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchInputForm> = (args) => <SearchInputForm {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  onSubmit: (values: any) => console.log(values),
};
