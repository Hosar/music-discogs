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
                <Form className='w-[80%] mr-8 ml-8'>
                    <SearchInputField name='artistField' />
                    <button className='mr-8 ml-8 bg-amber-400 w-full rounded-full' 
                        type="submit">Search</button>
                </Form>
            )}
        </Formik>
    )
}
