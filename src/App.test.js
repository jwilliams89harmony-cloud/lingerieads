import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lingerie ads text', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /Lingerie Ads/i });
  expect(headerElement).toBeInTheDocument();
});
