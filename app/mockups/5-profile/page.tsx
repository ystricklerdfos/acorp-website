/**
 * MOCKUP: Profile Management
 *
 * User profile settings and public profile preview.
 * Includes editing capabilities for personal info, privacy settings,
 * and account preferences.
 */

import React from 'react';

export default function ProfileManagement() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
            <p className="text-sm text-secondary mt-1">Manage your account and public profile</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 text-foreground rounded-lg hover:bg-muted transition text-sm font-medium">
              Discard Changes
            </button>
            <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition text-sm font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-2 sticky top-8">
              <nav className="space-y-1">
                <button className="w-full text-left px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-sm">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Account
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Privacy
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Notifications
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Connected Accounts
                </button>
                <div className="border-t border-gray-200 my-2"></div>
                <button className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg text-red-600 font-medium text-sm">
                  Delete Account
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Picture */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Profile Picture</h2>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                  YS
                </div>
                <div>
                  <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm mb-2">
                    Upload New Photo
                  </button>
                  <p className="text-xs text-secondary">
                    JPG, PNG or GIF. Max 5MB. Recommended 400x400px.
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Basic Information</h2>
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value="Yancey Strickler"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Username *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                      acorp.org/
                    </span>
                    <input
                      type="text"
                      value="yancey"
                      className="w-full pl-28 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-secondary mt-1">
                    This will be your public profile URL
                  </p>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value="Co-founder of Kickstarter. Author of This Could Be Our Future. Currently exploring new models for creative organizations through artist corporations."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                  <p className="text-xs text-secondary mt-1">
                    Brief description for your public profile. Max 280 characters.
                  </p>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value="New York, NY"
                    placeholder="City, State/Country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value="https://yancey.com"
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Email</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value="yancey@vibecode.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">
                      Verified
                    </span>
                    <span className="text-xs text-secondary">
                      Verified on Dec 1, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Privacy Settings</h2>
              <div className="space-y-4">
                {/* Public Profile */}
                <div className="flex items-start justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1">
                      Public Profile
                    </div>
                    <div className="text-sm text-secondary">
                      Make your profile visible to anyone on the internet
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                {/* Show as A-Corp Business */}
                <div className="flex items-start justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1">
                      Show as A-Corp Business
                    </div>
                    <div className="text-sm text-secondary">
                      Display your profile in the A-Corp directory
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                {/* Show Projects Publicly */}
                <div className="flex items-start justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1">
                      Show Projects Publicly
                    </div>
                    <div className="text-sm text-secondary">
                      Display your projects on your public profile
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                  Update Password
                </button>
              </div>
            </div>

            {/* Public Profile Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Public Profile Preview</h2>
                <a
                  href="/profile/yancey"
                  target="_blank"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  View Live Profile →
                </a>
              </div>

              <div className="p-6 bg-muted rounded-lg border-2 border-dashed border-gray-300">
                {/* Preview Card */}
                <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                      YS
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        Yancey Strickler
                      </h3>
                      <p className="text-sm text-secondary">@yancey</p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground mb-4">
                    Co-founder of Kickstarter. Author of This Could Be Our Future. Currently exploring new models for creative organizations through artist corporations.
                  </p>

                  <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🔗</span>
                      <a href="https://yancey.com" className="text-accent hover:underline">
                        yancey.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm font-medium text-foreground mb-2">Projects</div>
                    <div className="text-sm text-secondary">
                      3 artist corporations
                    </div>
                  </div>
                </div>

                <p className="text-xs text-center text-secondary mt-4">
                  This is how your profile will appear to others
                </p>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 rounded-lg border border-red-200 p-6">
              <h2 className="text-lg font-semibold text-red-700 mb-2">Danger Zone</h2>
              <p className="text-sm text-secondary mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium text-sm">
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
