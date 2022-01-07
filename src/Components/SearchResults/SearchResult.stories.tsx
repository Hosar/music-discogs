import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResults } from './SearchResults';
import { getArtistNoRecords, 
    getArtistOneRecord, 
    getArtist50Record,
    paginationInfo,
    handleNextPage } from '../../Common/testFunctionUtils';

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => <SearchResults {...args} />;

export const NoRecordsFound = Template.bind({});
NoRecordsFound.args = {
    isLoading: false,
    artistRecordsFound: getArtistNoRecords(),
    paginationInfo: paginationInfo,
    handleNextPage: handleNextPage,
};

export const OneRecordFound = Template.bind({});
OneRecordFound.args = {
    isLoading: false,
    artistRecordsFound: getArtistOneRecord(),
    paginationInfo: paginationInfo,
    handleNextPage: handleNextPage,
};

export const SeveralRecords = Template.bind({});
SeveralRecords.args = {
    isLoading: false,
    artistRecordsFound: getArtist50Record(),
    paginationInfo: paginationInfo,
    handleNextPage: handleNextPage,
};

export const WhenLoading = Template.bind({});
WhenLoading.args = {
    isLoading: true,
    artistRecordsFound: getArtistNoRecords(),
    paginationInfo: paginationInfo,
    handleNextPage: handleNextPage,
};
