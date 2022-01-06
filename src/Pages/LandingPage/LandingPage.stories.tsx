import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LandingPage } from './LandingPage';
import { fakeMusicResults } from '../../Components/SearchResults/fakeMusicResults';
import { WithSuspenseContract } from '../../Components/Common/WithSuspenseContract'

function fetchArtists() {
    console.log("fetch artist...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fetched artist");
            resolve(fakeMusicResults.results);
        }, 2000);
    });
}

const artistsPromise = fetchArtists();

export default {
    title: 'Pages/LandingPage',
    component: LandingPage,

} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    artistRecordsFound: WithSuspenseContract(artistsPromise),
};
