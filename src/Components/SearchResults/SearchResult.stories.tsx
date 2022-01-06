import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { SearchResults, ArtistRecord } from './SearchResults';
// import { fakeMusicResults } from './fakeMusicResults';
// import { WithSuspenseContract } from '../Common/WithSuspenseContract'

// function fetchArtists() {
//     console.log("fetch artist...");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("fetched artist");
//         resolve(fakeMusicResults.results);
//       }, 10000);
//     });
//   }

// const artistsPromise = fetchArtists();
// export default {
//   title: 'Components/SearchResults',
//   component: SearchResults,
// } as ComponentMeta<typeof SearchResults>;

// const firstResult: ArtistRecord = fakeMusicResults.results[0];

// const Template: ComponentStory<typeof SearchResults> = (args) => <SearchResults {...args} />;

// export const NoRecordsFound = Template.bind({});
// NoRecordsFound.args = {
//     artistRecordsFound: WithSuspenseContract(artistsPromise)
// };

// export const OneRecordFound = Template.bind({});
// OneRecordFound.args = {
//     artistRecordsFound: [firstResult]
// };

// export const SeveralRecords = Template.bind({});
// SeveralRecords.args = {
//     artistRecordsFound: fakeMusicResults.results
// };


