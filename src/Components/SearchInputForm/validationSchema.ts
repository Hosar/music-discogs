import * as Yup from 'yup';

export const SearchArtistSchema = Yup.object().shape({
    artistField: Yup.string()
    .matches(/^[0-9A-Za-z\s\-]+$/)
    .max(50)
    .required('Required')});
  