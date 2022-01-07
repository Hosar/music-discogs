import { Form, Formik, FormikProps } from 'formik';
import { SearchInputField } from '../SearchInputField';
import { SearchArtistSchema } from './validationSchema'

interface Values {
    artistField: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export function SearchInputForm({ onSubmit }: Props) {
    return (
        <Formik
            initialValues={{
                artistField: '',
            }}
            onSubmit={(values, actions) => {
                onSubmit(values);
            }}
            validationSchema={SearchArtistSchema}
        >
            {(props: FormikProps<Values>) => (
                <Form>
                    <SearchInputField name='artistField' />
                    <button type="submit">Search</button>
                </Form>
            )}
        </Formik>
    )
}
