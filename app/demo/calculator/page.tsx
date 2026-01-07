'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CalculatorDemo() {
  // Input state
  const [annualRevenue, setAnnualRevenue] = useState(285000);
  const [growthRate, setGrowthRate] = useState(15);
  const [catalogueValue, setCatalogueValue] = useState(50000);
  const [numberOfWorks, setNumberOfWorks] = useState(5);
  const [teamSize, setTeamSize] = useState(3);
  const [avgSalary, setAvgSalary] = useState(60000);

  // Calculated outputs
  const [results, setResults] = useState({
    totalValuation: 0,
    revenueMultiple: 0,
    ipValue: 0,
    brandValue: 0,
    projections: {
      year1: 0,
      year3: 0,
      year5: 0,
    },
    totalPayroll: 0,
  });

  // Calculation functions
  const calculateRevenueMultiple = (revenue: number) => revenue * 4;
  const calculateBrandValue = (revenue: number) => revenue * 0.2;
  const calculateCatalogueValue = (value: number, works: number) => {
    if (value > 0) return value;
    return works * 10000;
  };
  const calculateProjection = (currentVal: number, rate: number, years: number) => {
    return currentVal * Math.pow(1 + rate / 100, years);
  };

  // Recalculate when inputs change
  useEffect(() => {
    const revenueMultiple = calculateRevenueMultiple(annualRevenue);
    const ipValue = calculateCatalogueValue(catalogueValue, numberOfWorks);
    const brandValue = calculateBrandValue(annualRevenue);
    const totalValuation = revenueMultiple + ipValue + brandValue;
    const totalPayroll = teamSize * avgSalary;

    setResults({
      totalValuation,
      revenueMultiple,
      ipValue,
      brandValue,
      projections: {
        year1: calculateProjection(totalValuation, growthRate, 1),
        year3: calculateProjection(totalValuation, growthRate, 3),
        year5: calculateProjection(totalValuation, growthRate, 5),
      },
      totalPayroll,
    });
  }, [annualRevenue, growthRate, catalogueValue, numberOfWorks, teamSize, avgSalary]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sm text-secondary hover:text-foreground mb-2 inline-block">
                ← Back to A-Corp
              </Link>
              <h1 className="text-3xl font-bold text-foreground">Project Calculator Demo</h1>
              <p className="text-secondary mt-1">Calculate your project's valuation in real-time</p>
            </div>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Sign Up for Full Access
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Inputs */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Revenue</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Annual Revenue
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-secondary">$</span>
                    <input
                      type="number"
                      value={annualRevenue}
                      onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-secondary mt-1">Total annual revenue from all sources</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Annual Growth Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={growthRate}
                      onChange={(e) => setGrowthRate(Number(e.target.value))}
                      className="w-full pr-8 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <span className="absolute right-3 top-3 text-secondary">%</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Expected year-over-year growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">IP & Catalogue</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Catalogue Valuation
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-secondary">$</span>
                    <input
                      type="number"
                      value={catalogueValue}
                      onChange={(e) => setCatalogueValue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-secondary mt-1">Estimated value of your creative works</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Number of Works
                  </label>
                  <input
                    type="number"
                    value={numberOfWorks}
                    onChange={(e) => setNumberOfWorks(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-xs text-secondary mt-1">Total albums, singles, exhibitions, etc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Team & Payroll</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Team Size
                  </label>
                  <input
                    type="number"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-xs text-secondary mt-1">Number of team members</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Average Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-secondary">$</span>
                    <input
                      type="number"
                      value={avgSalary}
                      onChange={(e) => setAvgSalary(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-secondary mt-1">Average annual salary per team member</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary">Total Annual Payroll</span>
                    <span className="text-lg font-bold text-foreground">
                      {formatCurrency(results.totalPayroll)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {/* Current Valuation Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-8 text-white">
              <div className="text-sm font-medium mb-2 opacity-90">Current Valuation</div>
              <div className="text-5xl font-bold mb-6">
                {formatCurrency(results.totalValuation)}
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Revenue Multiple (4x)</span>
                  <span className="font-semibold">{formatCurrency(results.revenueMultiple)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">IP Catalogue Value</span>
                  <span className="font-semibold">{formatCurrency(results.ipValue)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Brand Value (20%)</span>
                  <span className="font-semibold">{formatCurrency(results.brandValue)}</span>
                </div>
              </div>
            </div>

            {/* Projected Valuations */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Projected Valuations</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">1 Year</div>
                    <div className="text-xs text-secondary">At {growthRate}% growth</div>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(results.projections.year1)}
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">3 Years</div>
                    <div className="text-xs text-secondary">At {growthRate}% growth</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {formatCurrency(results.projections.year3)}
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">5 Years</div>
                    <div className="text-xs text-secondary">At {growthRate}% growth</div>
                  </div>
                  <div className="text-2xl font-bold text-pink-600">
                    {formatCurrency(results.projections.year5)}
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Health Metrics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Financial Health</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Payroll as % of Revenue</span>
                  <span className="font-semibold text-foreground">
                    {((results.totalPayroll / annualRevenue) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Revenue per Team Member</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(annualRevenue / teamSize)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Valuation Multiple</span>
                  <span className="font-semibold text-foreground">
                    {(results.totalValuation / annualRevenue).toFixed(1)}x
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
              <h3 className="font-bold text-foreground mb-2">Want more features?</h3>
              <p className="text-sm text-secondary mb-4">
                Save scenarios, add custom revenue sources, track ownership splits, and generate reports
              </p>
              <Link
                href="/signup"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
