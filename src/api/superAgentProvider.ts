import * as request from "superagent";
import { env } from '../Common/constants';

export const superAgentProvider = request
.get('https://api.discogs.com/database/search?token=FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta')
// .query({token:'FFScUljnRjxkVXRMbNyXmIFjNDzttPFDLrejBLta'});