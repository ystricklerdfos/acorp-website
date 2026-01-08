'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';

type StoryFormData = {
  name: string;
  email: string;
  location: string;
  genre: string;
  storyType: string;
  title: string;
  story: string;
  publiclyShare: boolean;
  contactMe: boolean;
};

const INITIAL_FORM_DATA: StoryFormData = {
  name: '',
  email: '',
  location: '',
  genre: '',
  storyType: '',
  title: '',
  story: '',
  publiclyShare: true,
  contactMe: false,
};

export default function ShareStoryPage() {
  const [formData, setFormData] = useState<StoryFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Story submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting story:', error);
      alert('There was an error submitting your story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Thank You for Sharing Your Story
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your voice matters. Stories like yours help us understand the real challenges and opportunities
              facing creative people, and they inspire others in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">Return Home</Button>
              </Link>
              <Link href="/community">
                <Button variant="secondary" size="lg">
                  Explore Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
            Artist Corporations
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Share Your Story
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Your experiences matter. Whether you're celebrating a success, navigating a challenge,
            or have insights about creative work and economic sustainability, we want to hear from you.
          </p>
          <p className="text-lg text-gray-600">
            These stories help us understand the real needs of creative people and demonstrate
            why Artist Corporations can make a difference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* About You */}
          <div className="pb-8 border-b border-gray-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              About You
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="your@email.com"
                />
                <p className="text-sm text-gray-500 mt-2">
                  We'll only use this to contact you about your story if needed
                </p>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Brooklyn, NY"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Creative Practice
                </label>
                <select
                  id="genre"
                  value={formData.genre}
                  onChange={(e) => updateFormData('genre', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select your primary practice</option>
                  <option value="VISUAL_ART">Visual Art</option>
                  <option value="MUSIC">Music</option>
                  <option value="FILM_VIDEO">Film & Video</option>
                  <option value="WRITING">Writing & Publishing</option>
                  <option value="PERFORMANCE">Performance & Theater</option>
                  <option value="DESIGN">Design</option>
                  <option value="CRAFT">Craft</option>
                  <option value="DIGITAL">Digital & New Media</option>
                  <option value="PHOTOGRAPHY">Photography</option>
                  <option value="DANCE">Dance</option>
                  <option value="MULTIMEDIA">Multimedia / Interdisciplinary</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Your Story */}
          <div className="pb-8 border-b border-gray-200">
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Your Story
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="storyType" className="block text-sm font-medium text-gray-900 mb-2">
                  What kind of story are you sharing? <span className="text-red-600">*</span>
                </label>
                <select
                  id="storyType"
                  required
                  value={formData.storyType}
                  onChange={(e) => updateFormData('storyType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select story type</option>
                  <option value="SUCCESS">A Success Story</option>
                  <option value="CHALLENGE">A Challenge I'm Facing</option>
                  <option value="INSIGHT">An Insight or Observation</option>
                  <option value="WHY_MATTERS">Why Artist Corporations Matter to Me</option>
                  <option value="LEGAL_STRUGGLE">Legal or Structural Struggles</option>
                  <option value="FINANCIAL">Financial Reality of Creative Work</option>
                  <option value="COMMUNITY">Building Community and Collaboration</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-2">
                  Story Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Give your story a short, descriptive title"
                />
              </div>

              <div>
                <label htmlFor="story" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell Us Your Story <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="story"
                  required
                  value={formData.story}
                  onChange={(e) => updateFormData('story', e.target.value)}
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Share your story here. Be as detailed or brief as you like. What happened? What did you learn? How does it relate to being a creative person trying to build economic stability?"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.story.length} characters
                </p>
              </div>

              {/* Story Prompts */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Need inspiration? Consider these questions:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• What's the biggest challenge you've faced as a creative professional?</li>
                  <li>• Have you struggled with legal structures, contracts, or business setup?</li>
                  <li>• What would economic stability mean for your creative practice?</li>
                  <li>• Have you had to make difficult choices between art and income?</li>
                  <li>• What systemic changes would help creative people thrive?</li>
                  <li>• How has collaboration or community supported your work?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy & Permissions */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Privacy & Sharing
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="publiclyShare"
                  checked={formData.publiclyShare}
                  onChange={(e) => updateFormData('publiclyShare', e.target.checked)}
                  className="mt-1 h-5 w-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <label htmlFor="publiclyShare" className="ml-3">
                  <span className="block text-sm font-medium text-gray-900">
                    I give permission to share my story publicly
                  </span>
                  <span className="block text-sm text-gray-600 mt-1">
                    We may feature your story on our website, in blog posts, or in presentations.
                    You can choose to be identified by name or remain anonymous.
                  </span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="contactMe"
                  checked={formData.contactMe}
                  onChange={(e) => updateFormData('contactMe', e.target.checked)}
                  className="mt-1 h-5 w-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <label htmlFor="contactMe" className="ml-3">
                  <span className="block text-sm font-medium text-gray-900">
                    You can contact me for follow-up or to feature my story
                  </span>
                  <span className="block text-sm text-gray-600 mt-1">
                    We may reach out to learn more about your experience or ask if we can
                    highlight your story in our advocacy work.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link href="/get-involved" className="text-gray-600 hover:text-gray-900">
                ← Back to Get Involved
              </Link>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Share Your Story →'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
