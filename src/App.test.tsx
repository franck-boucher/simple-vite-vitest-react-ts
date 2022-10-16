import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders title', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Vite + React'
    );
  });

  it('increments count', async () => {
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});
