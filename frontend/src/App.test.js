import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Country Flags title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country Flags/i);
  expect(linkElement).toBeInTheDocument();
});
