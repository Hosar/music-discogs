import { Form, Formik, FormikProps } from 'formik';
import { SearchInputField } from './SearchInputField';
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
                    <div className='mt-4 md:ml-[150px] md:w-[80%]'>
                        <SearchInputField name='artistField' />
                        <button className='mt-4 bg-amber-400 w-full rounded-full' 
                            type="submit">Search</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
