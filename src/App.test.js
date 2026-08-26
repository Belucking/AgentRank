// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgentRank title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AgentRank/i);
    expect(titleElement).toBeInTheDocument();
});
