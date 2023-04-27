import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './index'

describe('LoginForm', () => {
  test('renders username and password inputs', () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('shows login popup on incorrect credentials', async () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByElement(/login/i);

    fireEvent.change(usernameInput, { target: { value: 'wrong_username' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong_password' } });
    fireEvent.click(loginButton);

    const loginPopup = await waitFor(() => screen.getByText(/login failed/i));
    expect(loginPopup).toBeInTheDocument();
  });

  test('logs in with correct credentials', async () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByText(/login-btn/i);
  
    fireEvent.change(usernameInput, { target: { value: 'Chris' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });
    fireEvent.click(loginButton);
  
    expect(loginButton).toHaveBeenClicked();
    const navbar = await waitFor(() => screen.getByRole('navigation'));
    expect(navbar).toBeInTheDocument();
  });
  
});
