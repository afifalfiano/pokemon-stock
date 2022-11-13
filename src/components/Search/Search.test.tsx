import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('search component', () => {
  it('should show placeholder find pokemon', () => {
    render(<Search placeholder="Cari pokemon" type="search"/>);
    const linkElement = screen.getByPlaceholderText(/Cari pokemon/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should have role input search', () => {
    render(<Search placeholder="Cari pokemon" type="search"/>);
    const linkElement = screen.getByRole('search');
    expect(linkElement).toBeTruthy();
  })
})

