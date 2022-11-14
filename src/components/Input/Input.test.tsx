import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('renders component input', () => {
  it('should have input number with role number', () => {
    const inputLusinHandler = () => {};
    render(<Input type="number" onChange={inputLusinHandler} role="number" />);
    const linkElement = screen.getByRole('number');
    expect(linkElement).toBeInTheDocument();
  })

});
