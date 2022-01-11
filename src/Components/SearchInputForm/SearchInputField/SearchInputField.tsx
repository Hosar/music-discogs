import { useField } from 'formik';

interface Props {
    name: string;
}

export function SearchInputField({ name, ...props }: Props) {
            const [field, meta] = useField(name);
            const fieldStyle = (meta.touched && meta.error) ? 
                    styles.searchInputError : styles.searchInputDefault;

            return (
                <div>
                    <h1 className={styles.h1} aria-label={"Find an artist"}>
                        Find Artist:
                    </h1>
                    <input className={fieldStyle}
                           aria-label={"input artist name"}  aria-required="true"
                           id='artistInput' type='text' placeholder='Search artist'
                           {...field} {...props} />
                </div>
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
    h1: 'text-2xl font-bold text-yellow-400',
                        
}
