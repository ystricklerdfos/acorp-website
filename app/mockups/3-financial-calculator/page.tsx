/**
 * MOCKUP: Financial Model Calculator (Mortgage Calculator)
 *
 * Interactive calculator showing inputs on the left and real-time
 * calculations/visualizations on the right.
 */

import React from 'react';

export default function FinancialCalculator() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Financial Model</h1>
            <p className="text-sm text-secondary mt-1">Vibecode Records</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 text-foreground rounded-lg hover:bg-muted transition text-sm font-medium">
              Save Scenario
            </button>
            <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition text-sm font-medium">
              Export PDF
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)]">
        {/* LEFT PANEL - INPUTS */}
        <div className="bg-white border-r border-gray-200 p-8 overflow-y-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Input Data</h2>

            {/* Income Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Income</h3>
                <button className="text-sm text-accent hover:underline">Collapse</button>
              </div>

              <div className="space-y-4 p-4 bg-muted rounded-lg">
                {/* Annual Revenue */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Annual Revenue *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">$</span>
                    <input
                      type="text"
                      value="285,000"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Revenue Sources Breakdown */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Revenue Sources
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Source (e.g., Streaming)"
                        value="Streaming"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <div className="relative w-32">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="125,000"
                          className="w-full pl-6 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <button className="text-red-500 hover:text-red-700">✕</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value="Live Performance"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <div className="relative w-32">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="95,000"
                          className="w-full pl-6 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <button className="text-red-500 hover:text-red-700">✕</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value="Merchandise"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <div className="relative w-32">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="45,000"
                          className="w-full pl-6 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <button className="text-red-500 hover:text-red-700">✕</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value="Licensing"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <div className="relative w-32">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="20,000"
                          className="w-full pl-6 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <button className="text-red-500 hover:text-red-700">✕</button>
                    </div>
                  </div>
                  <button className="text-sm text-accent hover:underline mt-2">
                    + Add Revenue Source
                  </button>
                </div>

                {/* Growth Rate */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Annual Growth Rate
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="15"
                      className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary">%</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Historical or projected growth rate</p>
                </div>
              </div>
            </div>

            {/* Payroll Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Payroll</h3>
                <button className="text-sm text-accent hover:underline">Collapse</button>
              </div>

              <div className="space-y-4 p-4 bg-muted rounded-lg">
                {/* Team Member Salary 1 */}
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-foreground">Yancey Strickler</div>
                      <div className="text-sm text-secondary">Artist / Co-Founder</div>
                    </div>
                    <button className="text-secondary hover:text-foreground">⋮</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Annual Salary
                      </label>
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="85,000"
                          className="w-full pl-6 pr-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Benefits
                      </label>
                      <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        <option>Full Package</option>
                        <option>Basic</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Team Member Salary 2 */}
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-foreground">Alex Johnson</div>
                      <div className="text-sm text-secondary">Manager</div>
                    </div>
                    <button className="text-secondary hover:text-foreground">⋮</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Annual Salary
                      </label>
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="65,000"
                          className="w-full pl-6 pr-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Benefits
                      </label>
                      <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        <option>Full Package</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Team Member Salary 3 */}
                <div className="p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-foreground">Sam Rivera</div>
                      <div className="text-sm text-secondary">Producer</div>
                    </div>
                    <button className="text-secondary hover:text-foreground">⋮</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Annual Salary
                      </label>
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-sm">$</span>
                        <input
                          type="text"
                          value="55,000"
                          className="w-full pl-6 pr-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-secondary mb-1">
                        Benefits
                      </label>
                      <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        <option>Basic</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="text-sm text-accent hover:underline">
                  + Add Team Member
                </button>
              </div>
            </div>

            {/* IP Valuation Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">IP & Catalogue</h3>
                <button className="text-sm text-accent hover:underline">Collapse</button>
              </div>

              <div className="space-y-4 p-4 bg-muted rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Total Catalogue Valuation
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">$</span>
                    <input
                      type="text"
                      value="125,000"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-secondary mt-1">Value of all masters, copyrights, and IP</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Works
                  </label>
                  <input
                    type="text"
                    value="12"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <button className="text-sm text-accent hover:underline">
                  View Detailed Catalogue →
                </button>
              </div>
            </div>

            {/* Calculate Button */}
            <button className="w-full py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-semibold">
              Recalculate Model
            </button>

            <p className="text-xs text-secondary text-center mt-3">
              Changes are calculated in real-time
            </p>
          </div>
        </div>

        {/* RIGHT PANEL - OUTPUTS */}
        <div className="bg-background p-8 overflow-y-auto">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Results & Analysis</h2>

            {/* Valuation Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Current Valuation</h3>

              <div className="text-5xl font-bold text-foreground mb-2">$485,000</div>
              <div className="text-sm text-green-600 font-medium mb-6">
                +12% from last calculation
              </div>

              {/* Valuation Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">Revenue Multiple</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">$285,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">IP Catalogue Value</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">$125,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">Brand Value</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">$75,000</span>
                </div>
              </div>

              {/* Projected Valuation */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm font-semibold text-foreground mb-3">
                  Projected Valuation (15% growth)
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-xs text-secondary mb-1">1 Year</div>
                    <div className="font-bold text-foreground">$558K</div>
                  </div>
                  <div>
                    <div className="text-xs text-secondary mb-1">3 Years</div>
                    <div className="font-bold text-foreground">$737K</div>
                  </div>
                  <div>
                    <div className="text-xs text-secondary mb-1">5 Years</div>
                    <div className="font-bold text-foreground">$974K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ownership Splits Visualization */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ownership Distribution</h3>

              {/* Pie Chart Placeholder */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-64 h-64">
                  {/* SVG Pie Chart would go here - using colored circles as placeholder */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#3B82F6" />
                    <path d="M 50 50 L 50 10 A 40 40 0 0 1 86.6 70 Z" fill="#8B5CF6" />
                    <path d="M 50 50 L 86.6 70 A 40 40 0 0 1 13.4 70 Z" fill="#10B981" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white">Equity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">Yancey Strickler</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">55%</span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">Alex Johnson</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm font-medium text-foreground">Sam Rivera</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">15%</span>
                </div>
              </div>
            </div>

            {/* Health Insurance Analysis */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Health Insurance Costs</h3>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">
                  Via Mellon Foundation
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-secondary mb-1">Annual Cost (Full Package)</div>
                  <div className="text-2xl font-bold text-foreground">$21,600</div>
                  <div className="text-xs text-secondary mt-1">$1,800/person/month</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm text-secondary mb-1">% of Revenue</div>
                  <div className="text-2xl font-bold text-foreground">7.6%</div>
                  <div className="text-xs text-green-600 mt-1">Sustainable range</div>
                </div>
              </div>

              {/* Savings vs Individual */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-xl">💰</div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">
                      Group Rate Savings
                    </div>
                    <div className="text-sm text-secondary">
                      Save <span className="font-bold text-green-600">$8,400/year</span> compared to individual plans
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison: Traditional vs A-Corp */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Traditional Model vs A-Corp Model
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-semibold text-foreground">Metric</th>
                      <th className="text-right py-3 font-semibold text-red-600">Traditional</th>
                      <th className="text-right py-3 font-semibold text-green-600">A-Corp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 text-secondary">Artist Annual Comp</td>
                      <td className="py-3 text-right font-medium text-foreground">$42,000</td>
                      <td className="py-3 text-right font-medium text-foreground">$85,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-secondary">Equity Ownership</td>
                      <td className="py-3 text-right font-medium text-foreground">0%</td>
                      <td className="py-3 text-right font-medium text-foreground">55%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-secondary">Health Insurance</td>
                      <td className="py-3 text-right font-medium text-foreground">None</td>
                      <td className="py-3 text-right font-medium text-foreground">Full Coverage</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-secondary">IP Ownership</td>
                      <td className="py-3 text-right font-medium text-foreground">Label</td>
                      <td className="py-3 text-right font-medium text-foreground">Artist</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-secondary">10-Year Wealth</td>
                      <td className="py-3 text-right font-medium text-foreground">$420K</td>
                      <td className="py-3 text-right font-medium text-foreground">$1.2M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 text-xl">📊</div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">
                      Total Compensation Difference
                    </div>
                    <div className="text-sm text-secondary">
                      Over 10 years, the A-Corp model provides <span className="font-bold text-green-600">3x more wealth</span> to artists through equity ownership and fair compensation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
