import { useField } from 'formik';

interface Props {
    name: string;
}

export function SearchInputField({ name, ...props }: Props) {
            const [field, meta] = useField(name);
            const fieldStyle = (meta.touched && meta.error) ? 
                    styles.searchInputError : styles.searchInputDefault;

            return (
                <>
                    <label htmlFor='artistInput'>
                        Search
                        <input id='artistInput' type='text'
                               className={fieldStyle} {...field} {...props} />
                    </label>
                </>
            );
}

const inputStandardStyle = `form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 
                                focus:bg-white 
                                focus:outline-none`

const styles = {
    searchInputDefault: inputStandardStyle + ' focus:border-blue-600',
    searchInputError: inputStandardStyle + ' border-red-600',
                        
}
