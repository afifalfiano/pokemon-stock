import { render, screen } from '@testing-library/react';
import ButtonStock from './ButtonStock';

test('renders component button stock', () => {
  render(<ButtonStock />);
  const linkElement = screen.getByText(/Update Stock/i);
  expect(linkElement).toBeInTheDocument();
});
