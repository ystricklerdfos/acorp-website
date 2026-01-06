/**
 * MOCKUP: Project Registration
 *
 * Multi-step form for registering a new artist corporation project.
 * This shows Step 3 of 6 (Entity & Classification) as an example.
 */

import React from 'react';

export default function ProjectRegistration() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <header className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Register Your Project</h1>
            <button className="text-sm text-secondary hover:text-foreground">
              Save & Exit
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {/* Step 1 - Complete */}
            <div className="flex-1">
              <div className="h-2 bg-accent rounded-full"></div>
              <div className="text-xs text-accent font-medium mt-1">Basic Info</div>
            </div>
            {/* Step 2 - Complete */}
            <div className="flex-1">
              <div className="h-2 bg-accent rounded-full"></div>
              <div className="text-xs text-accent font-medium mt-1">Location</div>
            </div>
            {/* Step 3 - Current */}
            <div className="flex-1">
              <div className="h-2 bg-accent rounded-full"></div>
              <div className="text-xs text-accent font-medium mt-1">Entity Type</div>
            </div>
            {/* Step 4 - Incomplete */}
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full"></div>
              <div className="text-xs text-secondary mt-1">Team</div>
            </div>
            {/* Step 5 - Incomplete */}
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full"></div>
              <div className="text-xs text-secondary mt-1">Ownership</div>
            </div>
            {/* Step 6 - Incomplete */}
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full"></div>
              <div className="text-xs text-secondary mt-1">Catalogue</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Step Title */}
        <div className="mb-8">
          <div className="text-sm text-accent font-semibold mb-2">Step 3 of 6</div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Entity Type & Classification
          </h2>
          <p className="text-secondary">
            Choose the legal structure for your artist corporation and classify your creative work
          </p>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          {/* Entity Type Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Entity Type *
            </label>
            <p className="text-sm text-secondary mb-4">
              Select the legal structure for your organization. Not sure? We recommend starting with an A-Corp.
            </p>

            <div className="space-y-3">
              {/* A-Corp Option - Recommended */}
              <div className="relative">
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-accent text-white text-xs font-bold rounded z-10">
                  RECOMMENDED
                </div>
                <label className="flex items-start gap-4 p-4 border-2 border-accent bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                  <input
                    type="radio"
                    name="entityType"
                    value="A_CORP"
                    checked
                    className="mt-1 w-5 h-5 text-accent"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground mb-1">
                      Artist Corporation (A-Corp)
                    </div>
                    <div className="text-sm text-secondary">
                      A new model designed specifically for creative organizations. Combines the benefits of
                      traditional structures with artist-friendly governance and equity distribution.
                    </div>
                  </div>
                </label>
              </div>

              {/* LLC Option */}
              <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="radio"
                  name="entityType"
                  value="LLC"
                  className="mt-1 w-5 h-5 text-accent"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    Limited Liability Company (LLC)
                  </div>
                  <div className="text-sm text-secondary">
                    Flexible structure with pass-through taxation and liability protection. Common for
                    small to medium creative businesses.
                  </div>
                </div>
              </label>

              {/* S-Corp Option */}
              <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="radio"
                  name="entityType"
                  value="S_CORP"
                  className="mt-1 w-5 h-5 text-accent"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    S Corporation
                  </div>
                  <div className="text-sm text-secondary">
                    Corporate structure with pass-through taxation. Good for businesses with shareholders
                    who are also employees.
                  </div>
                </div>
              </label>

              {/* C-Corp Option */}
              <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="radio"
                  name="entityType"
                  value="C_CORP"
                  className="mt-1 w-5 h-5 text-accent"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    C Corporation
                  </div>
                  <div className="text-sm text-secondary">
                    Traditional corporate structure. Best for organizations seeking venture capital
                    or planning to go public.
                  </div>
                </div>
              </label>

              {/* Cooperative Option */}
              <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="radio"
                  name="entityType"
                  value="COOPERATIVE"
                  className="mt-1 w-5 h-5 text-accent"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground mb-1">
                    Cooperative
                  </div>
                  <div className="text-sm text-secondary">
                    Member-owned organization with democratic control. Each member has equal voting rights
                    regardless of investment.
                  </div>
                </div>
              </label>

              {/* Show More Button */}
              <button className="w-full py-2 text-sm font-medium text-accent hover:underline">
                Show More Options (Partnership, Sole Proprietorship, Other)
              </button>
            </div>

            {/* Help Box */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 text-xl">💡</div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Need help choosing?
                  </div>
                  <div className="text-sm text-secondary mb-2">
                    Your entity type affects taxation, liability, and ownership structure.
                  </div>
                  <a href="#" className="text-sm font-medium text-accent hover:underline">
                    Read our guide: Choosing the Right Entity Type →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Genre Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-3">
              Primary Genre(s) *
            </label>
            <p className="text-sm text-secondary mb-4">
              Select all that apply. This helps us provide relevant resources and connect you with similar artists.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Music - Selected */}
              <label className="flex items-center gap-3 p-3 border-2 border-accent bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                <input
                  type="checkbox"
                  value="music"
                  checked
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Music</span>
              </label>

              {/* Visual Arts */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="visual-arts"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Visual Arts</span>
              </label>

              {/* Film */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="film"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Film</span>
              </label>

              {/* Theater */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="theater"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Theater</span>
              </label>

              {/* Dance */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="dance"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Dance</span>
              </label>

              {/* Writing */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="writing"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Writing</span>
              </label>

              {/* Digital Arts - Selected */}
              <label className="flex items-center gap-3 p-3 border-2 border-accent bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                <input
                  type="checkbox"
                  value="digital-arts"
                  checked
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Digital Arts</span>
              </label>

              {/* Photography */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="photography"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Photography</span>
              </label>

              {/* Multidisciplinary */}
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-muted transition">
                <input
                  type="checkbox"
                  value="multidisciplinary"
                  className="w-5 h-5 text-accent rounded"
                />
                <span className="font-medium text-foreground">Multidisciplinary</span>
              </label>
            </div>

            {/* Custom Genre Input */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add custom genre (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>

          {/* Auto-save indicator */}
          <div className="flex items-center gap-2 text-sm text-secondary">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Changes saved automatically</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button className="px-6 py-3 border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium">
            ← Back
          </button>

          <div className="flex items-center gap-3">
            <button className="px-6 py-3 border border-gray-300 text-secondary rounded-lg hover:bg-muted transition font-medium">
              Save as Draft
            </button>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
              Continue →
            </button>
          </div>
        </div>

        {/* Exit Warning */}
        <div className="mt-6 text-center">
          <p className="text-sm text-secondary">
            You can save and come back anytime. Your progress is saved automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
