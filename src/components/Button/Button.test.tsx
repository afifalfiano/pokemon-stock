import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('renders component button', () => {
  it('should have variant save', () => {
    const onSubmitHandler= () => {};
    render(<Button title="Simpan" onSubmitHandler={onSubmitHandler}/>);
    const linkElement = screen.getByText(/simpan/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('should have varian cancel', () => {
    const onClose= () => {};
    render(<Button title="Batal" onClose={onClose}/>);
    const linkElement = screen.getByText(/batal/i);
    expect(linkElement).toBeInTheDocument();
  })
});
