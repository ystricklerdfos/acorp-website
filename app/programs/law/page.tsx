import Link from 'next/link';
import { Button } from '@/components/shared/Button';

export default function ACorpLawPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gray-900">
            Artist Corporations make creative freedom real
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A new legal structure designed specifically for creative people and artistic enterprises
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            48%
          </div>
          <p className="text-xl md:text-2xl text-gray-700">
            of Americans report a personal creative practice
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Overview
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The Colorado Artist Corporation Act (CO-ACA) creates a new type of limited liability company specifically designed for artists and creative enterprises. This legislation addresses the unique needs of creative people that existing business structures fail to serve.
          </p>
        </div>
      </section>

      {/* Why We Need Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Why We Need A-Corps
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Today's business structures—LLCs, C-Corps, S-Corps—were built for traditional businesses with traditional assumptions about value creation. Creative practices don't fit neatly into these boxes.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The result is that most artists, musicians, writers, and creators either operate informally (leaving themselves exposed) or squeeze into ill-fitting legal structures that don't serve their needs and aren't easy to understand.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            When creative people represented a small fraction of the population, this was excusable. But this is no longer the case. Creative work is becoming an increasingly important part of our economy.
          </p>
        </div>
      </section>

      {/* What Makes Different Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            What Makes A-Corps Different
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Artistic Mission at the Core</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A-Corps are required to have a stated artistic mission. This mission can take priority over financial objectives, be equal to them, or have any other specified relationship to financial goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Artist Ownership and Control</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Artists must own at least 51% of voting control. This ensures creative people maintain decision-making power even as they accept investment or bring in other stakeholders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Ownership Structures</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A-Corps can structure ownership in ways that make sense for creative work:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Pro rata ownership based on number of members</li>
                <li>• Ownership based on capital contributions (including intellectual property)</li>
                <li>• Custom ownership percentages</li>
                <li>• Separation of economic rights from governance rights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Intellectual Property Protection</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The law includes sophisticated provisions for handling intellectual property:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• IP can be contributed as in-kind capital</li>
                <li>• Clear rules for IP created during membership</li>
                <li>• Reversionary rights upon dissolution (IP goes back to artists, not investors)</li>
                <li>• Flexible treatment of royalties and revenue participation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Simplified Governance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A-Corps don't require the formal governance structures of traditional corporations. The law explicitly states that informal practices—like not holding annual meetings or keeping detailed minutes—won't be held against A-Corps.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Multiple Forms of Capital</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A-Corps can accept investment in forms that make sense for creative work:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Grants and refundable grants</li>
                <li>• Revenue participation rights</li>
                <li>• Royalty participation</li>
                <li>• Traditional equity</li>
                <li>• Convertible instruments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Public Benefit Option</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A-Corps can elect to become "Public Benefit Artist Corporations," committing to creating public benefits beyond their artistic mission while maintaining tax advantages and legal protections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Current Status
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We're working to pass this legislation in Colorado, where we have:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-6">
            <li>• A completed first draft of the law</li>
            <li>• A fiscal and economic analysis by a former budget director</li>
            <li>• A bill sponsor: Senator Jeff Bridges of Colorado's 4th District</li>
            <li>• Working relationships with the Governor's office and key stakeholders</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            The bill will be introduced in the 2026 legislative session in Colorado. We're also working with other states and nations interested in adopting similar legislation.
          </p>
        </div>
      </section>

      {/* Read Draft CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Colorado Artist Corporation Act
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            The full text of the draft legislation is available for review. We welcome feedback from artists, legal experts, and anyone interested in supporting creative people.
          </p>
          <Link href="/programs/law/draft">
            <Button size="lg" className="text-lg px-8 py-6">
              Read the Full Draft →
            </Button>
          </Link>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Get Involved
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This legislation is being shaped by feedback from the creative community. Your input matters.
          </p>
          <div className="space-y-4 text-lg">
            <div>
              <Link href="/pledge" className="text-gray-900 hover:underline font-medium">
                Sign the pledge
              </Link>
              <span className="text-gray-700"> to show your support</span>
            </div>
            <div>
              <Link href="/dfos" className="text-gray-900 hover:underline font-medium">
                Join DFOS
              </Link>
              <span className="text-gray-700"> to stay informed about progress</span>
            </div>
            <div>
              <Link href="/share-story" className="text-gray-900 hover:underline font-medium">
                Share your story
              </Link>
              <span className="text-gray-700"> about why this matters to you</span>
            </div>
            <div>
              <Link href="/signup" className="text-gray-900 hover:underline font-medium">
                Create a profile
              </Link>
              <span className="text-gray-700"> to register your interest in forming an A-Corp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Help Make This Law a Reality
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Join over 4,000 artists and creators who are building economic and political power together
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
