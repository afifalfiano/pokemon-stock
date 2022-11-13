import { render, screen } from '@testing-library/react';
import NavbarMobile from './NavbarMobile';

jest.mock('react-navigation-hooks');
describe('navbarmobile component', () => {
  it('should render title stok pokemon beside icon back', () => {
    render(<NavbarMobile/>);
    const linkElement = screen.getByText(/Stok Pokemon/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render image to go to back home', () => {
    render(<NavbarMobile />);
    const linkElement = screen.getByAltText(/Back to/i);
    expect(linkElement).toBeInTheDocument();
  });
})

