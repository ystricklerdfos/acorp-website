/**
 * MOCKUP: Dashboard Overview
 *
 * This is the landing page when users log into their dashboard.
 * Shows quick stats, recent activity, and action items.
 */

import React from 'react';

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="text-sm text-secondary hover:text-foreground">
              Help
            </button>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              YS
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Yancey
          </h2>
          <p className="text-secondary">
            Here's what's happening with your artist corporation
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Projects</div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm">📁</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">3</div>
            <div className="text-xs text-secondary">2 active, 1 draft</div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Documents</div>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">📄</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">12</div>
            <div className="text-xs text-secondary">8 signed, 4 draft</div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Total Valuation</div>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">💰</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">$485K</div>
            <div className="text-xs text-green-600">+12% from last quarter</div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Team Members</div>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-sm">👥</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">8</div>
            <div className="text-xs text-secondary">Across all projects</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Items */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Action Items
              </h3>
              <div className="space-y-3">
                {/* Action Item 1 */}
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex-shrink-0 mt-0.5"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground mb-1">
                      Complete Project Registration
                    </div>
                    <div className="text-sm text-secondary mb-2">
                      Your "Vibecode Records" project needs ownership breakdown and catalogue information
                    </div>
                    <button className="text-sm font-medium text-accent hover:underline">
                      Continue Registration →
                    </button>
                  </div>
                </div>

                {/* Action Item 2 */}
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-5 h-5 rounded-full bg-blue-400 flex-shrink-0 mt-0.5"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground mb-1">
                      Review Financial Model
                    </div>
                    <div className="text-sm text-secondary mb-2">
                      New health insurance data available - recalculate your projections
                    </div>
                    <button className="text-sm font-medium text-accent hover:underline">
                      View Calculator →
                    </button>
                  </div>
                </div>

                {/* Action Item 3 */}
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex-shrink-0 mt-0.5"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground mb-1">
                      Sign Operating Agreement
                    </div>
                    <div className="text-sm text-secondary mb-2">
                      Your Operating Agreement for "Studio Collective" is ready for signature
                    </div>
                    <button className="text-sm font-medium text-accent hover:underline">
                      Review Document →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Your Projects</h3>
                <button className="text-sm font-medium text-accent hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {/* Project 1 */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-gray-100 cursor-pointer transition">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Vibecode Records</div>
                    <div className="text-sm text-secondary">Music Label • A-Corp</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">$285K</div>
                    <div className="text-xs text-secondary">Valuation</div>
                  </div>
                  <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                    Draft
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-gray-100 cursor-pointer transition">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Studio Collective</div>
                    <div className="text-sm text-secondary">Recording Studio • LLC</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">$150K</div>
                    <div className="text-xs text-secondary">Valuation</div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    Active
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-gray-100 cursor-pointer transition">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">The Sound Archive</div>
                    <div className="text-sm text-secondary">Publishing • A-Corp</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">$50K</div>
                    <div className="text-xs text-secondary">Valuation</div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    Active
                  </div>
                </div>
              </div>

              {/* Create New Project Button */}
              <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-secondary hover:border-accent hover:text-accent transition font-medium">
                + Create New Project
              </button>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm">
                  Register New Project
                </button>
                <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                  Calculate Finances
                </button>
                <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                  Generate Document
                </button>
                <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Getting Started Guide
                  </div>
                  <div className="text-xs text-secondary">
                    Learn how to set up your first A-Corp
                  </div>
                </a>
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Legal Templates
                  </div>
                  <div className="text-xs text-secondary">
                    Browse available documents
                  </div>
                </a>
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Community Forum
                  </div>
                  <div className="text-xs text-secondary">
                    Connect with other artists
                  </div>
                </a>
              </div>
            </div>

            {/* Help */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-sm mb-4 text-blue-50">
                Our team is here to guide you through the A-Corp process
              </p>
              <button className="w-full py-2 px-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
