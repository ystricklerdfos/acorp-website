'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-serif font-bold">
            Artist Corporations
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/programs" className="text-gray-700 hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="/updates" className="text-gray-700 hover:text-primary transition-colors">
              Updates
            </Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-primary transition-colors">
              Get Involved
            </Link>
            {session ? (
              <>
                <Link href="/dashboard" className="text-primary font-medium hover:underline">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-primary transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" className="text-primary font-medium hover:underline">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/programs"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/community"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/updates"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Updates
            </Link>
            <Link
              href="/get-involved"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="block py-2 text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: '/' });
                  }}
                  className="block py-2 text-gray-700 hover:text-primary w-full text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block py-2 text-gray-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
