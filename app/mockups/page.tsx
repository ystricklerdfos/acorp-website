'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MockupsIndex() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Dashboard Mockups
        </h1>
        <p className="text-secondary mb-8">
          Click any mockup below to view the rendered design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mockup 1 */}
          <Link href="/mockups/1-dashboard-overview">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">📊</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                1. Dashboard Overview
              </h2>
              <p className="text-sm text-secondary">
                Main landing page with stats, action items, and project list
              </p>
            </div>
          </Link>

          {/* Mockup 2 */}
          <Link href="/mockups/2-project-registration">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">📝</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                2. Project Registration
              </h2>
              <p className="text-sm text-secondary">
                Multi-step form for registering a new artist corporation
              </p>
            </div>
          </Link>

          {/* Mockup 3 */}
          <Link href="/mockups/3-financial-calculator">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">💰</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                3. Financial Calculator
              </h2>
              <p className="text-sm text-secondary">
                Interactive calculator with valuation and comparison analysis
              </p>
            </div>
          </Link>

          {/* Mockup 4 */}
          <Link href="/mockups/4-documents">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">📄</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                4. Documents Section
              </h2>
              <p className="text-sm text-secondary">
                Document library with generation and management features
              </p>
            </div>
          </Link>

          {/* Mockup 5 */}
          <Link href="/mockups/5-profile">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">👤</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                5. Profile Management
              </h2>
              <p className="text-sm text-secondary">
                User settings and public profile configuration
              </p>
            </div>
          </Link>

          {/* Mockup 6 */}
          <Link href="/mockups/6-connected-accounts">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-accent transition cursor-pointer">
              <div className="text-4xl mb-3">🔗</div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                6. Connected Accounts
              </h2>
              <p className="text-sm text-secondary">
                Platform integrations including Metalabel, DFOS, and more
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-foreground mb-2">Note</h3>
          <p className="text-sm text-secondary">
            These are visual mockups showing UI/UX design. They include styling and layout
            but do not have functional interactivity or data persistence.
          </p>
        </div>
      </div>
    </div>
  );
}
