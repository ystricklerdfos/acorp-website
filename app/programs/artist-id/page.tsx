import Link from 'next/link';
import { Button } from '@/components/shared/Button';

export default function ArtistIDPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gray-900">
            Artist ID makes creative workers visible
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A unified certification system to help cities identify and support their creative communities
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            53,000
          </div>
          <p className="text-xl md:text-2xl text-gray-700">
            artists applied for 89 affordable units in East Harlem
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            The Problem
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            NYC's creative economy generates $110B annually and employs 274,000 workers, yet the city has no unified way to identify or support them.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Artists must re-prove their eligibility for every program—from housing and workspace to grants—each with different criteria and paperwork. The demand is real: when El Barrio Artspace opened 89 affordable units, 53,000 artists applied.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The infrastructure to serve them is not.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            The Solution
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Create a single Artist ID recognized across city agencies. Certify once, unlock benefits everywhere—modeled on the city's MWBE certification system.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            DCLA would set the criteria and make certification decisions (as they know the artist community). SBS provides the infrastructure like the portal, registry, interagency data-sharing (as they know how to run certification at scale).
          </p>
        </div>
      </section>

      {/* Who Qualifies Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Who Qualifies
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>12+ months active artistic practice</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>Self-identified art form (no institutional gatekeeping)</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>Artistic practice as core part of vocation or life's work (even if not primary income source)</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>Connection to cultural workforce: earns from practice, works in arts/culture sector, or contributes substantially through unpaid or community-based work</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>Peer attestations from other artists or cultural workers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Immediate Benefits
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Housing & Workspace</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Eligibility/preference in selected affordable housing lotteries</li>
                <li>• Landlord incentives for leasing studios to certified artists</li>
                <li>• Priority access to city-owned studios</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Economic Support</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Reduced city fees for artist enterprises</li>
                <li>• Common eligibility for stabilization grants</li>
                <li>• Targeted tax relief and fee waivers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">City Contracts & Employment</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Preference for city cultural contracts and employment</li>
                <li>• Public art, commissions, teaching artist roles</li>
                <li>• Agency creative work opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Implementation
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Phase 1 (Year 1)</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Executive order, interagency MOUs, pilot with 2–3 programs. Focus on AREA employment, affordable housing lotteries, and city-owned studio access.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Phase 2 (Year 2)</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Council legislation to codify definitions and authorize programs. Tax relief and broader benefit rollout.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Phase 3 (Years 3–4)</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Full rollout, online portal, agency integration across all city programs.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700">
                <span className="font-bold">Cost:</span> $3–5M over three years (comparable to running fragmented eligibility systems)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MWBE Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Built on Proven Infrastructure
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            The Artist ID follows the same cost and registry logic as NYC's successful MWBE certification: one robust vetting process, then a centralized database that all agencies can draw from instead of recreating eligibility checks for every program.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-4 px-4 text-lg font-bold text-gray-900">Aspect</th>
                  <th className="py-4 px-4 text-lg font-bold text-gray-900">MWBE (Existing)</th>
                  <th className="py-4 px-4 text-lg font-bold text-gray-900">Artist ID (Proposed)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium">Who issues</td>
                  <td className="py-4 px-4">NYC SBS, Mayor's Office of M/WBEs</td>
                  <td className="py-4 px-4">NYC DCLA, with interagency MOUs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium">One-time vetting</td>
                  <td className="py-4 px-4">51% ownership + 1-year operation</td>
                  <td className="py-4 px-4">12+ months practice + vocation claim</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium">Central registry</td>
                  <td className="py-4 px-4">SBS-run registry agencies rely on</td>
                  <td className="py-4 px-4">City-run registry HPD, NYCEDC, DOF use</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 font-medium">Portability</td>
                  <td className="py-4 px-4">Across city contracts, procurement</td>
                  <td className="py-4 px-4">Across housing, workspace, tax, grants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Artist Enterprise Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Certified Artist Enterprises
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Beyond individual certification, the Artist ID system includes entity-level certification for artist-run businesses and organizations.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Eligibility</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• At least 50% ownership and voting control by Certified Artists</li>
                <li>• Primary activity is creation, production, or presentation of artistic/cultural work</li>
                <li>• Includes studios, collectives, galleries, labels, presses, creative production companies</li>
                <li>• Any legal form: sole proprietorship, LLC, partnership, corporation, cooperative, nonprofit, or future Artist Corporation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Benefits</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Certified Artist Enterprises gain priority access to subsidized studios, city contracts, tax relief programs, and stabilization grants—treating artist-run businesses as the cultural workers they are, not hobbyists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equity Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Equity and Access
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            A certification system only works if it reaches the artists who need it most. The outreach strategy actively counters barriers for vulnerable creative workers—immigrants, disabled artists, BIPOC practitioners, and those working in informal settings.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Key Commitments</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Partner with cultural organizations, mutual aid networks, and immigrant-serving groups for outreach</li>
                <li>• Mobile-friendly portal available in at least 5 languages with in-person assistance options</li>
                <li>• Collect and publish anonymized demographic data to monitor equity outcomes</li>
                <li>• Community advisory group with artists from underrepresented communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A-Corp Alignment Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Future Alignment with Artist Corporations
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The Artist ID lays groundwork for potential Artist Corporation (A-Corp) adoption. If New York pursues an A-Corp statute, the ID provides a clear, scalable way to identify which artists and artist-run entities qualify.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            A future A-Corp statute could simply state that Artist Corporations may be formed by Certified Artists or groups where the majority are Certified Artists—avoiding the need to redefine "who is an artist" in statute.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            With the ID system in place, when A-Corp legislation passes, the City would already have a scalable identification system, a portfolio of benefits, and outcome data to inform statewide policy.
          </p>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Why Now
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            This delivers on housing and cultural worker commitments with existing tools—no new bureaucracy, just coordination.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            It can reach 1,000+ artists in Year 1 and produce measurable outcomes within a single term:
          </p>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• Units leased and rent stability tracked</li>
            <li>• Studio occupancy and business survival rates measured</li>
            <li>• Tax relief impact quantified</li>
            <li>• Grant distribution and city retention monitored</li>
            <li>• Cultural contract awards and teaching artist placements counted</li>
          </ul>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Learn More About Artist ID
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            This program is being developed for cities interested in building infrastructure to support their creative communities.
          </p>
          <a href="mailto:lena@artistcorporations.com">
            <Button size="lg" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Support Creative Workers
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Join the movement to build economic and political power for artists and cultural workers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pledge">
              <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                Sign the Pledge
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                Create Your Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
