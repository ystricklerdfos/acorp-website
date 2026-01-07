'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/shared/Button';

type FormData = {
  // Account info
  email: string;
  password: string;
  confirmPassword: string;

  // Personal info
  name: string;
  bio: string;
  location: string;

  // Project info
  projectName: string;
  projectDescription: string;
  entityType: string;
  genre: string;

  // Team info
  members: Array<{
    name: string;
    role: string;
    ownership: number;
  }>;

  // Catalogue
  catalogue: Array<{
    title: string;
    type: string;
    year: string;
    url: string;
  }>;
};

const INITIAL_FORM_DATA: FormData = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  bio: '',
  location: '',
  projectName: '',
  projectDescription: '',
  entityType: '',
  genre: '',
  members: [{ name: '', role: '', ownership: 0 }],
  catalogue: [{ title: '', type: '', year: '', url: '' }],
};

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const totalSteps = 5;

  const updateFormData = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Call signup API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          bio: formData.bio,
          location: formData.location,
          projectName: formData.projectName,
          projectDescription: formData.projectDescription,
          entityType: formData.entityType,
          genre: formData.genre,
          members: formData.members,
          catalogue: formData.catalogue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Failed to create account');
        return;
      }

      // Success - auto-login the user
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.ok) {
        // Redirect to dashboard with welcome parameter
        window.location.href = '/dashboard?welcome=true';
      } else {
        // If auto-login fails, redirect to login page
        window.location.href = '/login?registered=true';
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            A-Corp
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-900">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((step / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-900 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Account Creation */}
        {step === 1 && (
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Create Your Account
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join the Artist Corporations community to connect with other creatives and pre-register your project
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="At least 8 characters"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Re-enter your password"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <div />
              <Button onClick={nextStep} size="lg">
                Continue →
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-gray-900 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Tell Us About Yourself
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This information will be visible on your public profile
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Jane Doe"
                />
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
                <label htmlFor="bio" className="block text-sm font-medium text-gray-900 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => updateFormData('bio', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Tell us about your creative practice, background, and what you're working on..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.bio.length} / 500 characters
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button onClick={prevStep} variant="secondary">
                ← Back
              </Button>
              <Button onClick={nextStep} size="lg">
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Project Information */}
        {step === 3 && (
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Pre-Register Your Project
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tell us about the creative project or enterprise you're building
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  value={formData.projectName}
                  onChange={(e) => updateFormData('projectName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Your project or company name"
                />
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) => updateFormData('projectDescription', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Describe what your project does, creates, or achieves..."
                />
              </div>

              <div>
                <label htmlFor="entityType" className="block text-sm font-medium text-gray-900 mb-2">
                  Entity Type
                </label>
                <select
                  id="entityType"
                  value={formData.entityType}
                  onChange={(e) => updateFormData('entityType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select entity type</option>
                  <option value="INDIVIDUAL">Individual / Sole Proprietor</option>
                  <option value="LLC">LLC</option>
                  <option value="S_CORP">S-Corp</option>
                  <option value="C_CORP">C-Corp</option>
                  <option value="NONPROFIT">Nonprofit</option>
                  <option value="COOPERATIVE">Cooperative</option>
                  <option value="A_CORP">Artist Corporation (A-Corp)</option>
                  <option value="NOT_FORMED">Not Yet Formed</option>
                </select>
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-900 mb-2">
                  Genre / Category
                </label>
                <select
                  id="genre"
                  value={formData.genre}
                  onChange={(e) => updateFormData('genre', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">Select primary genre</option>
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

            <div className="flex justify-between mt-8">
              <Button onClick={prevStep} variant="secondary">
                ← Back
              </Button>
              <Button onClick={nextStep} size="lg">
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Team & Ownership */}
        {step === 4 && (
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Team & Ownership
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Add team members and define ownership structure (optional)
            </p>

            <div className="space-y-6">
              {formData.members.map((member, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Member {index + 1}
                    </h3>
                    {formData.members.length > 1 && (
                      <button
                        onClick={() => {
                          const newMembers = formData.members.filter((_, i) => i !== index);
                          updateFormData('members', newMembers);
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => {
                          const newMembers = [...formData.members];
                          newMembers[index].name = e.target.value;
                          updateFormData('members', newMembers);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="Team member name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => {
                          const newMembers = [...formData.members];
                          newMembers[index].role = e.target.value;
                          updateFormData('members', newMembers);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="e.g., Artist, Producer, Manager"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Ownership %
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={member.ownership}
                        onChange={(e) => {
                          const newMembers = [...formData.members];
                          newMembers[index].ownership = parseFloat(e.target.value);
                          updateFormData('members', newMembers);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={() => {
                  updateFormData('members', [
                    ...formData.members,
                    { name: '', role: '', ownership: 0 }
                  ]);
                }}
                variant="secondary"
                className="w-full"
              >
                + Add Team Member
              </Button>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  Total Ownership:{' '}
                  {formData.members.reduce((sum, m) => sum + (m.ownership || 0), 0)}%
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button onClick={prevStep} variant="secondary">
                ← Back
              </Button>
              <Button onClick={nextStep} size="lg">
                Continue →
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Catalogue */}
        {step === 5 && (
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Your Catalogue
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Add your work, releases, exhibitions, or projects (optional)
            </p>

            <div className="space-y-6">
              {formData.catalogue.map((item, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Work {index + 1}
                    </h3>
                    {formData.catalogue.length > 1 && (
                      <button
                        onClick={() => {
                          const newCatalogue = formData.catalogue.filter((_, i) => i !== index);
                          updateFormData('catalogue', newCatalogue);
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const newCatalogue = [...formData.catalogue];
                          newCatalogue[index].title = e.target.value;
                          updateFormData('catalogue', newCatalogue);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="Work title"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Type
                        </label>
                        <select
                          value={item.type}
                          onChange={(e) => {
                            const newCatalogue = [...formData.catalogue];
                            newCatalogue[index].type = e.target.value;
                            updateFormData('catalogue', newCatalogue);
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="album">Album</option>
                          <option value="single">Single</option>
                          <option value="exhibition">Exhibition</option>
                          <option value="film">Film</option>
                          <option value="book">Book</option>
                          <option value="performance">Performance</option>
                          <option value="installation">Installation</option>
                          <option value="collection">Collection</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Year
                        </label>
                        <input
                          type="text"
                          value={item.year}
                          onChange={(e) => {
                            const newCatalogue = [...formData.catalogue];
                            newCatalogue[index].year = e.target.value;
                            updateFormData('catalogue', newCatalogue);
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="2024"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Link (optional)
                      </label>
                      <input
                        type="url"
                        value={item.url}
                        onChange={(e) => {
                          const newCatalogue = [...formData.catalogue];
                          newCatalogue[index].url = e.target.value;
                          updateFormData('catalogue', newCatalogue);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={() => {
                  updateFormData('catalogue', [
                    ...formData.catalogue,
                    { title: '', type: '', year: '', url: '' }
                  ]);
                }}
                variant="secondary"
                className="w-full"
              >
                + Add Work
              </Button>
            </div>

            <div className="flex justify-between mt-8">
              <Button onClick={prevStep} variant="secondary">
                ← Back
              </Button>
              <Button onClick={handleSubmit} size="lg">
                Create Profile →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
