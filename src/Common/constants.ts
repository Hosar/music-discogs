import { load } from 'ts-dotenv';

export const env = load({
    DISCOGS_BASE_URL: String,
    DISCOGS_TOKEN: String,
    NODE_ENV: [
        'production' as const,
        'test' as const,
    ],
});