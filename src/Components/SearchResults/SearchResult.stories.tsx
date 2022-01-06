import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResults, ArtistRecord } from './SearchResults';
import { fakeMusicResults } from './fakeMusicResults';

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchResults>;

const firstResult: ArtistRecord = fakeMusicResults.results[0];

const Template: ComponentStory<typeof SearchResults> = (args) => <SearchResults {...args} />;

export const NoRecordsFound = Template.bind({});
NoRecordsFound.args = {
    artistRecordsFound: []
};

export const OneRecordFound = Template.bind({});
OneRecordFound.args = {
    artistRecordsFound: [firstResult]
};

export const SeveralRecords = Template.bind({});
SeveralRecords.args = {
    artistRecordsFound: fakeMusicResults.results
};


