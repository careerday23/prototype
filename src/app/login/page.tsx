'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', form);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800 py-16 px-6 md:px-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center tracking-tight"
        >
          Welcome <span className="text-[#6d6bd3]">Back</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-center text-slate-600 text-base"
        >
          Log in to continue exploring your career journey.
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-[#6d6bd3] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-[#6d6bd3] focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-between text-sm text-slate-500">
            <a href="/forgot-password" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#6d6bd3] text-white rounded-xl py-3 font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            Log In
          </motion.button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{' '}
          <a
            href="/signup"
            className="text-[#6d6bd3] font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </main>
  );
}
