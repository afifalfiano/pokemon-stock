import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('renders component textarea', () => {
  it('should have textarea with role notes', () => {
    const handleNotes = () => {};
    render(<Textarea cols={10} rows={3} placeholder='Contoh: stock awal' onChange={handleNotes} role="notes" />);
    const linkElement = screen.getByRole('notes');
    expect(linkElement).toBeInTheDocument();
  })

});
