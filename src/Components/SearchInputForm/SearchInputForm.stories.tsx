import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInputForm } from './SearchInputForm';
import { useFormikContext } from 'formik';


export default {
  title: 'Components/SearchInputForm',
  component: SearchInputForm,
} as ComponentMeta<typeof SearchInputForm>;

const Template: ComponentStory<typeof SearchInputForm> = (args) => <SearchInputForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onSubmit: (values: any) => console.log(values),
};