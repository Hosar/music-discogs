import { Form, Formik, FormikProps } from 'formik';
import { SearchInputField } from '../SearchInputField';
import { SearchArtistSchema } from './validationSchema'

interface Values {
    artistField: string;
}

export function SearchInputForm() {
    return (
        <Formik
            initialValues={{
                artistField: '',
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
            validationSchema={SearchArtistSchema}
        >
            {(props: FormikProps<Values>) => (
                <Form>
                    <SearchInputField name='artistField' />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
