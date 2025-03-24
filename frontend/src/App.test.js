import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import
import App from './App';

test('renders Country Flags title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country Flags/i);
  expect(linkElement).toBeInTheDocument();
});