/**
 * MOCKUP: Documents Section
 *
 * Document library and generation interface showing all legal
 * documents for a project with status tracking and generation wizard.
 */

import React from 'react';

export default function DocumentsSection() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Documents</h1>
            <p className="text-sm text-secondary mt-1">Vibecode Records</p>
          </div>
          <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium">
            + Generate New Document
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Filters and Search */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">🔍</span>
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
            <option>All Types</option>
            <option>Formation Documents</option>
            <option>Investment Terms</option>
            <option>Agreements</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
            <option>All Status</option>
            <option>Draft</option>
            <option>Generated</option>
            <option>Signed</option>
            <option>Archived</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Document List - 3 columns */}
          <div className="lg:col-span-3">
            {/* Document Categories */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">Formation Documents</h2>
              <div className="space-y-3">
                {/* Document 1 - Signed */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-accent transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Articles of Organization
                          </h3>
                          <p className="text-sm text-secondary">
                            Legal formation document for LLC structure
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Signed
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary">
                        <span>Generated Dec 15, 2025</span>
                        <span>•</span>
                        <span>Signed Dec 18, 2025</span>
                        <span>•</span>
                        <span>8 pages</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <button className="px-3 py-1.5 text-sm bg-muted hover:bg-gray-200 rounded font-medium text-foreground transition">
                          View PDF
                        </button>
                        <button className="px-3 py-1.5 text-sm text-accent hover:underline">
                          Download
                        </button>
                        <button className="px-3 py-1.5 text-sm text-secondary hover:text-foreground">
                          History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document 2 - Signed */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-accent transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Operating Agreement
                          </h3>
                          <p className="text-sm text-secondary">
                            Internal governance and ownership structure
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Signed
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary">
                        <span>Generated Dec 15, 2025</span>
                        <span>•</span>
                        <span>Signed Dec 20, 2025</span>
                        <span>•</span>
                        <span>24 pages</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <button className="px-3 py-1.5 text-sm bg-muted hover:bg-gray-200 rounded font-medium text-foreground transition">
                          View PDF
                        </button>
                        <button className="px-3 py-1.5 text-sm text-accent hover:underline">
                          Download
                        </button>
                        <button className="px-3 py-1.5 text-sm text-secondary hover:text-foreground">
                          History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document 3 - Generated */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-accent transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Bylaws
                          </h3>
                          <p className="text-sm text-secondary">
                            Corporate governance rules and procedures
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Generated
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary">
                        <span>Generated Jan 2, 2026</span>
                        <span>•</span>
                        <span>Ready for review</span>
                        <span>•</span>
                        <span>16 pages</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <button className="px-3 py-1.5 text-sm bg-accent text-white hover:bg-accent/90 rounded font-medium transition">
                          Review & Sign
                        </button>
                        <button className="px-3 py-1.5 text-sm text-accent hover:underline">
                          Download
                        </button>
                        <button className="px-3 py-1.5 text-sm text-secondary hover:text-foreground">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Documents */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">Investment Documents</h2>
              <div className="space-y-3">
                {/* Document 4 - Draft */}
                <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-accent transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Term Sheet - Series Seed
                          </h3>
                          <p className="text-sm text-secondary">
                            Investment terms for seed round funding
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                          Draft
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-secondary">
                        <span>Last edited Jan 4, 2026</span>
                        <span>•</span>
                        <span>In progress</span>
                        <span>•</span>
                        <span>4 pages</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <button className="px-3 py-1.5 text-sm bg-accent text-white hover:bg-accent/90 rounded font-medium transition">
                          Continue Editing
                        </button>
                        <button className="px-3 py-1.5 text-sm text-secondary hover:text-foreground">
                          Delete Draft
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Create New Investment Doc */}
                <button className="w-full p-5 border-2 border-dashed border-gray-300 rounded-lg text-secondary hover:border-accent hover:text-accent transition font-medium text-sm">
                  + Generate Investment Document
                </button>
              </div>
            </div>

            {/* Other Agreements */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-4">Agreements</h2>
              <div className="space-y-3">
                {/* Empty State */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                  <div className="text-4xl mb-3">📁</div>
                  <h3 className="font-semibold text-foreground mb-2">No agreements yet</h3>
                  <p className="text-sm text-secondary mb-4">
                    Generate custom agreements like NDAs, collaboration agreements, and more
                  </p>
                  <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                    Generate Agreement
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Document Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-4">Document Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Total Documents</span>
                  <span className="text-sm font-bold text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-secondary">Signed</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-secondary">Generated</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-secondary">Draft</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">2</span>
                </div>
              </div>
            </div>

            {/* Quick Generate */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-4">Quick Generate</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 bg-muted hover:bg-gray-200 rounded transition text-sm font-medium text-foreground">
                  Articles of Organization
                </button>
                <button className="w-full text-left px-3 py-2 bg-muted hover:bg-gray-200 rounded transition text-sm font-medium text-foreground">
                  Operating Agreement
                </button>
                <button className="w-full text-left px-3 py-2 bg-muted hover:bg-gray-200 rounded transition text-sm font-medium text-foreground">
                  Term Sheet
                </button>
                <button className="w-full text-left px-3 py-2 bg-muted hover:bg-gray-200 rounded transition text-sm font-medium text-foreground">
                  Subscription Agreement
                </button>
                <button className="w-full text-left px-3 py-2 bg-muted hover:bg-gray-200 rounded transition text-sm font-medium text-foreground">
                  NDA
                </button>
                <button className="w-full text-left px-3 py-2 text-accent hover:underline text-sm font-medium">
                  View All Templates →
                </button>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <div className="text-yellow-600 text-xl">⚠️</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-2">
                    Legal Disclaimer
                  </h3>
                  <p className="text-xs text-secondary mb-3">
                    These documents are templates and may require customization for your specific situation.
                  </p>
                  <p className="text-xs text-secondary mb-3">
                    We strongly recommend consulting with a licensed attorney before signing any legal documents.
                  </p>
                  <a href="#" className="text-xs font-medium text-accent hover:underline">
                    Find an A-Corp Attorney →
                  </a>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground mb-3">Need Help?</h3>
              <p className="text-sm text-secondary mb-4">
                Our team can guide you through the document generation process
              </p>
              <button className="w-full py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Document Generation Modal Overlay (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Generate Document</h2>
              <button className="text-secondary hover:text-foreground">✕</button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Select Document Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-accent transition text-left">
                <div className="font-semibold text-foreground mb-1">Articles of Organization</div>
                <div className="text-xs text-secondary">Formation document</div>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-accent transition text-left">
                <div className="font-semibold text-foreground mb-1">Operating Agreement</div>
                <div className="text-xs text-secondary">Governance rules</div>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-accent transition text-left">
                <div className="font-semibold text-foreground mb-1">Term Sheet</div>
                <div className="text-xs text-secondary">Investment terms</div>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-accent transition text-left">
                <div className="font-semibold text-foreground mb-1">Subscription Agreement</div>
                <div className="text-xs text-secondary">Investor agreement</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
