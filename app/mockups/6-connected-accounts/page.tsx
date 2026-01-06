/**
 * MOCKUP: Connected Accounts
 *
 * Platform integration page where users can connect external services
 * to import data, sync information, and integrate with existing tools.
 */

import React from 'react';

export default function ConnectedAccounts() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Connected Accounts</h1>
            <p className="text-sm text-secondary mt-1">
              Connect your platforms to import data and sync information
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Info Banner */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="text-blue-600 text-xl">💡</div>
            <div>
              <div className="font-semibold text-sm text-foreground mb-1">
                Why Connect Accounts?
              </div>
              <div className="text-sm text-secondary">
                Connecting your accounts allows us to automatically import your catalogue, revenue data,
                and team information, making it easier to set up your artist corporation and calculate
                accurate financial models.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Artist Networks & Communities */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                Artist Networks & Communities
              </h2>
              <div className="space-y-3">
                {/* Metalabel - Connected */}
                <div className="bg-white rounded-lg border-2 border-accent p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">M</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                            Metalabel
                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded font-medium">
                              PARTNER
                            </span>
                          </h3>
                          <p className="text-sm text-secondary">
                            Sync your Metalabel releases, collaborations, and community data
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Connected
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                        <span>Connected Dec 15, 2025</span>
                        <span>•</span>
                        <span>Last sync: 30 minutes ago</span>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg mb-3 border border-purple-200">
                        <div className="text-xs font-medium text-foreground mb-1">
                          Data Imported:
                        </div>
                        <div className="text-xs text-secondary">
                          • 8 releases • 12 collaborators • Community insights
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm bg-accent text-white hover:bg-accent/90 rounded font-medium transition">
                          Sync Now
                        </button>
                        <button className="px-3 py-1.5 text-sm bg-muted hover:bg-gray-200 rounded font-medium text-foreground transition">
                          Settings
                        </button>
                        <button className="px-3 py-1.5 text-sm text-red-600 hover:underline">
                          Disconnect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DFOS - Not Connected */}
                <div className="bg-white rounded-lg border-2 border-accent p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">DFOS</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                            DFOS (Decentralized Future of Songwriting)
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">
                              PARTNER
                            </span>
                          </h3>
                          <p className="text-sm text-secondary">
                            Join the DFOS community and sync your songwriter data, splits, and collaborations
                          </p>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg mb-3 border border-blue-200">
                        <div className="text-xs font-medium text-foreground mb-1">
                          What gets synced:
                        </div>
                        <div className="text-xs text-secondary">
                          • Songwriter credits • Split sheets • Co-writer network • DFOS membership status
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect to DFOS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Distribution & Streaming */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                Music Distribution & Streaming
              </h2>
              <div className="space-y-3">
                {/* Spotify for Artists */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Spotify for Artists
                          </h3>
                          <p className="text-sm text-secondary">
                            Import streaming data, track performance, and sync your catalogue
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Connected
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                        <span>Connected Dec 10, 2025</span>
                        <span>•</span>
                        <span>Last sync: 2 hours ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm bg-muted hover:bg-gray-200 rounded font-medium text-foreground transition">
                          Sync Now
                        </button>
                        <button className="px-3 py-1.5 text-sm text-red-600 hover:underline">
                          Disconnect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DistroKid - Not Connected */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">D</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            DistroKid
                          </h3>
                          <p className="text-sm text-secondary">
                            Sync releases, revenue data, and distribution information
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-xs text-secondary">
                          Auto-import revenue, catalogue, and team splits
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect DistroKid
                      </button>
                    </div>
                  </div>
                </div>

                {/* TuneCore - Not Connected */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">T</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            TuneCore
                          </h3>
                          <p className="text-sm text-secondary">
                            Import distribution data and revenue reports
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-xs text-secondary">
                          Sync catalogue, sales data, and royalty information
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect TuneCore
                      </button>
                    </div>
                  </div>
                </div>

                {/* CD Baby */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">CD</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            CD Baby
                          </h3>
                          <p className="text-sm text-secondary">
                            Connect to sync your releases and royalty data
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect CD Baby
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Royalty Collection */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                Royalty Collection
              </h2>
              <div className="space-y-3">
                {/* SoundExchange - Connected */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">SX</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            SoundExchange
                          </h3>
                          <p className="text-sm text-secondary">
                            Digital performance royalty collection and reporting
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Connected
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                        <span>Connected Jan 2, 2026</span>
                        <span>•</span>
                        <span>Last sync: 1 day ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm bg-muted hover:bg-gray-200 rounded font-medium text-foreground transition">
                          Sync Now
                        </button>
                        <button className="px-3 py-1.5 text-sm text-red-600 hover:underline">
                          Disconnect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ASCAP */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">ASCAP</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            ASCAP
                          </h3>
                          <p className="text-sm text-secondary">
                            Performance rights royalty collection
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect ASCAP
                      </button>
                    </div>
                  </div>
                </div>

                {/* BMI */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">BMI</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            BMI
                          </h3>
                          <p className="text-sm text-secondary">
                            Performance rights organization for songwriters
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect BMI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial & Accounting */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                Financial & Accounting
              </h2>
              <div className="space-y-3">
                {/* QuickBooks */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">QB</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            QuickBooks
                          </h3>
                          <p className="text-sm text-secondary">
                            Sync financial data, expenses, and revenue tracking
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect QuickBooks
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stripe */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">$</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Stripe
                          </h3>
                          <p className="text-sm text-secondary">
                            Payment processing and revenue tracking
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect Stripe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce & Merch */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                E-commerce & Merchandise
              </h2>
              <div className="space-y-3">
                {/* Shopify */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Shopify
                          </h3>
                          <p className="text-sm text-secondary">
                            Import merchandise sales and inventory data
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect Shopify
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bandcamp */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">BC</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Bandcamp
                          </h3>
                          <p className="text-sm text-secondary">
                            Sync sales, releases, and fan data
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect Bandcamp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Marketing */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">
                Social & Marketing
              </h2>
              <div className="space-y-3">
                {/* Instagram */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">IG</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Instagram
                          </h3>
                          <p className="text-sm text-secondary">
                            Display your audience size and engagement metrics
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect Instagram
                      </button>
                    </div>
                  </div>
                </div>

                {/* YouTube */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">YT</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            YouTube
                          </h3>
                          <p className="text-sm text-secondary">
                            Sync video content and monetization data
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                        Connect YouTube
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connection Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-4">Your Connections</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Connected</span>
                  <span className="text-2xl font-bold text-foreground">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Available</span>
                  <span className="text-sm font-bold text-secondary">15</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-secondary mb-2">Last sync</div>
                <div className="text-sm font-medium text-foreground">2 hours ago</div>
              </div>
            </div>

            {/* Sync Schedule */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-4">Auto-Sync</h3>
              <p className="text-sm text-secondary mb-4">
                Automatically sync your connected accounts to keep data up to date
              </p>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer">
                  <span className="text-sm font-medium text-foreground">Enable Auto-Sync</span>
                  <input type="checkbox" checked className="w-5 h-5 text-accent rounded" />
                </label>
                <div className="p-3 bg-muted rounded-lg">
                  <label className="block text-xs font-medium text-secondary mb-2">
                    Sync Frequency
                  </label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Every hour</option>
                    <option selected>Every 6 hours</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 text-xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-2">
                    Your Data is Secure
                  </h3>
                  <p className="text-xs text-secondary mb-3">
                    We use industry-standard encryption and never store your platform passwords.
                    You can disconnect at any time.
                  </p>
                  <a href="#" className="text-xs font-medium text-accent hover:underline">
                    Privacy Policy →
                  </a>
                </div>
              </div>
            </div>

            {/* Request Integration */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-3">
                Don't see your platform?
              </h3>
              <p className="text-sm text-secondary mb-4">
                Request a new integration and we'll prioritize it
              </p>
              <button className="w-full py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                Request Integration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
