import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      await login(email, password);
      navigate('/');
    } catch {
      setError('Failed to log in. Please check your credentials.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A0B2E] to-[#3D2C6F]">
      <div className="max-w-md w-full space-y-8 p-8 bg-gradient-to-br from-[#2C1B47] to-[#422B75] rounded-xl shadow-2xl">
        <h2 className="text-center text-3xl font-extrabold text-[#FFD700] tracking-wide">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-gray-300">
          Please log in to continue.
        </p>
        {error && (
          <p className="text-red-400 text-center bg-red-100 p-2 rounded-md">
            {error}
          </p>
        )}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 bg-[#3D2C6F] text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 bg-[#3D2C6F] text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 text-sm font-medium text-[#1A0B2E] bg-[#FFD700] hover:bg-yellow-400 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700]"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-300">
          <p>
            Don’t have an account?{' '}
            <a
              href="/signup"
              className="text-[#FFD700] hover:underline transition duration-200"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
