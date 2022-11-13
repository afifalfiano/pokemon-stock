import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('navbar component', () => {
  it('should render title stok pokemon beside icon back', () => {
    render(<Navbar/>);
    const linkElement = screen.getByText(/Stok Pokemon/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render image to go to back home', () => {
    render(<Navbar />);
    const linkElement = screen.getByAltText(/Back to/i);
    expect(linkElement).toBeInTheDocument();
  });
})

