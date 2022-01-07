import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { SearchInputForm } from './SearchInputForm';

test('given search input is required, should no submit the form', async () => {
    const onSubmit = jest.fn();
    render(<SearchInputForm onSubmit={onSubmit} />);
    fireEvent.click(screen.getByRole(/button/i));
    await waitFor(() => {
        expect(onSubmit).not.toHaveBeenCalled();
    })
})

test(`given search input does not allow special characters,
        should no submit the form`, async () => {
    const artist = '%^@#$@#$@';
    const onSubmit = jest.fn();
    render(<SearchInputForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByPlaceholderText(/Search artist/i), artist);
    fireEvent.click(screen.getByRole(/button/i));
    await waitFor(() => {
        expect(onSubmit).not.toHaveBeenCalled();
    })
})

test(`given an artist name, should execute the submit`, async () => {
    const artist = 'Vicente Fernandez';
    const onSubmit = jest.fn();
    render(<SearchInputForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByPlaceholderText(/Search artist/i), artist);

    fireEvent.click((await screen.findByRole(/button/i)));
    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled();
    })
})
