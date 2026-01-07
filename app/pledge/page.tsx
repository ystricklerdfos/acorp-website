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
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Bauhaus geometric shapes background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-10 rounded-full"></div>
          <div className="absolute top-20 right-10 w-40 h-40 bg-blue-600 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-15 rotate-45"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-64 bg-black opacity-5 -rotate-12"></div>
        </div>
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Bauhaus geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large red circle */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600 rounded-full opacity-15"></div>
        {/* Blue square */}
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-600 opacity-20 rotate-12"></div>
        {/* Yellow triangle (approximated with rotated square) */}
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-yellow-400 opacity-15 rotate-45"></div>
        {/* Small black circle */}
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-black rounded-full opacity-10"></div>
        {/* Red rectangle */}
        <div className="absolute bottom-1/4 right-1/4 w-56 h-32 bg-red-600 opacity-10 -rotate-6"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-block mb-8 text-sm font-bold text-black hover:text-red-600 transition-colors uppercase tracking-wider">
            ← Back
          </Link>

          {/* Bauhaus-style asymmetric header */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-2 h-full bg-red-600"></div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none uppercase tracking-tight">
              <span className="block">Sign</span>
              <span className="block text-red-600">the</span>
              <span className="block">Pledge</span>
            </h1>
          </div>

          <div className="flex items-start gap-6 mt-8">
            <div className="w-20 h-20 bg-blue-600 flex-shrink-0"></div>
            <div>
              <p className="text-xl font-light max-w-2xl">
                Join creative workers around the world in building economic and political power for artists
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-yellow-400 px-4 py-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="font-bold text-sm uppercase">1,247 artists have signed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* The Pledge */}
          <div className="bg-white border-8 border-black p-10 relative">
            {/* Bauhaus accent shapes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400"></div>

            <div className="relative">
              <div className="mb-8">
                <div className="w-20 h-1 bg-red-600 mb-4"></div>
                <h2 className="text-4xl font-black uppercase leading-tight">
                  The A-Corp Pledge
                </h2>
              </div>

              <div className="space-y-6">
                <blockquote className="text-2xl font-light leading-relaxed border-l-6 border-blue-600 pl-6 italic">
                  "I believe that creative workers deserve economic security, political representation, and ownership of their work."
                </blockquote>

                <p className="font-bold uppercase text-sm tracking-wider">By signing this pledge, I commit to:</p>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-red-600 flex-shrink-0 mt-1"></div>
                    <span className="text-lg">Supporting the creation of Artist Corporation (A-Corp) legal structures</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 flex-shrink-0 mt-1 rounded-full"></div>
                    <span className="text-lg">Advocating for policies that protect creative workers' rights</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-yellow-400 flex-shrink-0 mt-1 rotate-45"></div>
                    <span className="text-lg">Building community and sharing resources with fellow artists</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-black flex-shrink-0 mt-1"></div>
                    <span className="text-lg">Promoting ownership and equity over exploitation</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-yellow-400">
                <p className="text-sm font-bold uppercase">
                  The future is ours: Artists worldwide are reclaiming power
                </p>
              </div>
            </div>
          </div>

          {/* Sign Form */}
          <div className="bg-white border-8 border-blue-600 p-10 relative">
            {/* Bauhaus accent shapes */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-red-600 rounded-full"></div>

            <div className="relative">
              <div className="mb-8">
                <div className="w-20 h-1 bg-blue-600 mb-4"></div>
                <h2 className="text-4xl font-black uppercase leading-tight">
                  Add Your Name
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full px-4 py-4 border-4 border-black focus:border-red-600 focus:outline-none transition-colors text-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-4 border-4 border-black focus:border-blue-600 focus:outline-none transition-colors text-lg"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider mb-3">
                    Organization / Project (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => updateField('organization', e.target.value)}
                    className="w-full px-4 py-4 border-4 border-black focus:border-yellow-400 focus:outline-none transition-colors text-lg"
                    placeholder="Your band, company, or collective"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider mb-3">
                    Role / Discipline *
                  </label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => updateField('role', e.target.value)}
                    className="w-full px-4 py-4 border-4 border-black focus:border-red-600 focus:outline-none transition-colors text-lg"
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

                <div className="flex items-start gap-4 pt-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateField('agreeToTerms', e.target.checked)}
                    className="mt-1 w-6 h-6 border-4 border-black"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm font-light">
                    I agree to receive updates about the A-Corp movement and understand that my name may be displayed publicly as a pledge signer *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 px-8 bg-red-600 text-white hover:bg-black transition-colors font-black text-xl uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Signing...' : 'Sign the Pledge'}
                </button>

                <div className="text-center pt-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400"></div>
                    <p className="text-xs font-bold uppercase tracking-wider">
                      Join the Movement
                    </p>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
            </form>
          </div>
        </div>

        {/* Why Sign Section */}
        <div className="bg-black text-white p-12 mb-12 relative">
          {/* Bauhaus accent shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 rounded-full opacity-50"></div>

          <div className="relative">
            <div className="mb-12">
              <div className="w-32 h-2 bg-yellow-400 mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
                Why Sign<br />the Pledge?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="w-20 h-20 bg-red-600 mb-6"></div>
                <h3 className="font-black uppercase text-xl mb-4">Build Community</h3>
                <p className="font-light text-gray-300">
                  Connect with thousands of creative workers who share your values and goals
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-blue-600 rounded-full mb-6"></div>
                <h3 className="font-black uppercase text-xl mb-4">Amplify Your Voice</h3>
                <p className="font-light text-gray-300">
                  Show legislators and industry leaders that creative workers demand change
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-yellow-400 rotate-45 mb-6"></div>
                <h3 className="font-black uppercase text-xl mb-4">Drive Real Change</h3>
                <p className="font-light text-gray-300">
                  Help make A-Corp legislation a reality and transform how artists do business
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-4 bg-white border-4 border-black px-8 py-4">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Need More Info?</p>
              <Link href="/get-involved" className="font-black text-lg hover:text-red-600 transition-colors">
                Get Involved →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
