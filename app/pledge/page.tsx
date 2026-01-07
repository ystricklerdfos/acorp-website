'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PledgePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    agreeToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setSubmitting(false);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-bl from-green-500 to-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Thank You for Signing the Pledge!
              </h1>
              <p className="text-lg text-secondary mb-8">
                Welcome to the movement, {formData.name}. Together we're building a better future for creative workers.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-foreground mb-3">What happens next?</h2>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">1.</span>
                  <span>You'll receive a confirmation email with resources and next steps</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">2.</span>
                  <span>Join our community forum to connect with other pledge signers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">3.</span>
                  <span>Stay updated on A-Corp legislation and advocacy efforts</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                Join the Community
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-500 via-red-500 to-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[size:100%_4px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-sm text-cyan-400 hover:text-cyan-300 mb-4 inline-block font-mono">
            ← Back to A-Corp
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Sign the Pledge
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Join creative workers around the world in building economic and political power for artists
          </p>
          <div className="mt-4 inline-block px-4 py-1 bg-pink-500/20 border border-pink-500 rounded-full">
            <span className="text-pink-400 text-sm font-mono">1,247 artists have signed</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* The Pledge */}
          <div className="bg-black/40 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full"></div>

            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 relative z-10">
              The A-Corp Pledge
            </h2>
            <div className="space-y-6 relative z-10">
              <p className="text-xl leading-relaxed text-white font-light border-l-4 border-pink-500 pl-4 italic">
                "I believe that creative workers deserve economic security, political representation, and ownership of their work."
              </p>

              <p className="text-gray-300 font-semibold">By signing this pledge, I commit to:</p>

              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3 group">
                  <span className="text-cyan-400 mt-1 text-xl group-hover:scale-110 transition-transform">→</span>
                  <span className="text-gray-200">Supporting the creation of Artist Corporation (A-Corp) legal structures</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-pink-400 mt-1 text-xl group-hover:scale-110 transition-transform">→</span>
                  <span className="text-gray-200">Advocating for policies that protect creative workers' rights</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-yellow-400 mt-1 text-xl group-hover:scale-110 transition-transform">→</span>
                  <span className="text-gray-200">Building community and sharing resources with fellow artists</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-green-400 mt-1 text-xl group-hover:scale-110 transition-transform">→</span>
                  <span className="text-gray-200">Promoting ownership and equity over exploitation</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-lg relative z-10">
              <p className="text-sm text-cyan-400 font-mono">
                <strong className="text-white">The future is ours:</strong> Artists worldwide are reclaiming power
              </p>
            </div>
          </div>

          {/* Sign Form */}
          <div className="bg-black/40 backdrop-blur-xl border-2 border-pink-500/50 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full"></div>

            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-6 relative z-10">
              Add Your Name
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-cyan-400 mb-2 font-mono">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-cyan-500/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-500 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-pink-400 mb-2 font-mono">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-pink-500/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-bold text-yellow-400 mb-2 font-mono">
                  Organization / Project (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => updateField('organization', e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-yellow-500/50 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-500 transition-all"
                  placeholder="Your band, company, or collective"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-bold text-green-400 mb-2 font-mono">
                  Role / Discipline *
                </label>
                <select
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-green-500/50 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="musician">Musician</option>
                  <option value="visual-artist">Visual Artist</option>
                  <option value="writer">Writer</option>
                  <option value="filmmaker">Filmmaker</option>
                  <option value="designer">Designer</option>
                  <option value="performer">Performer</option>
                  <option value="photographer">Photographer</option>
                  <option value="producer">Producer</option>
                  <option value="educator">Educator</option>
                  <option value="advocate">Advocate / Organizer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) => updateField('agreeToTerms', e.target.checked)}
                  className="mt-1 w-5 h-5 text-cyan-500 bg-black/50 border-2 border-cyan-500/50 rounded focus:ring-2 focus:ring-cyan-500"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                  I agree to receive updates about the A-Corp movement and understand that my name may be displayed publicly as a pledge signer *
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 text-black rounded-lg hover:scale-105 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                {submitting ? 'SIGNING PLEDGE...' : 'SIGN THE PLEDGE →'}
              </button>

              <p className="text-xs text-gray-400 text-center font-mono">
                JOIN THE RESISTANCE // RECLAIM YOUR POWER
              </p>
            </form>
          </div>
        </div>

        {/* Why Sign Section */}
        <div className="bg-black/40 backdrop-blur-xl border-2 border-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 relative z-10">
            Why Sign the Pledge?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-shadow">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="font-bold text-cyan-400 mb-2 text-lg">Build Community</h3>
              <p className="text-sm text-gray-300">
                Connect with thousands of creative workers who share your values and goals
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(236,72,153,0.4)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-shadow">
                <span className="text-4xl">🔊</span>
              </div>
              <h3 className="font-bold text-pink-400 mb-2 text-lg">Amplify Your Voice</h3>
              <p className="text-sm text-gray-300">
                Show legislators and industry leaders that creative workers demand change
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-shadow">
                <span className="text-4xl">✊</span>
              </div>
              <h3 className="font-bold text-yellow-400 mb-2 text-lg">Drive Real Change</h3>
              <p className="text-sm text-gray-300">
                Help make A-Corp legislation a reality and transform how artists do business
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2 font-mono">NEED MORE INFO?</p>
          <Link href="/get-involved" className="text-cyan-400 hover:text-pink-400 font-bold transition-colors">
            Learn more about getting involved →
          </Link>
        </div>
      </div>
    </div>
  );
}
