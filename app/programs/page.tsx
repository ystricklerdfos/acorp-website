import Link from 'next/link';
import { Card } from '@/components/shared/Card';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Programs</h1>
        <p className="text-xl text-gray-700 mb-12">
          We're building economic and political power for creative people through three interconnected initiatives
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">A-Corp Law</h2>
            <p className="text-gray-700 mb-4">
              We're creating new legal structures designed specifically for creative enterprises, starting with Colorado.
            </p>
            <Link href="/programs/law" className="text-accent hover:underline">
              Learn more →
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">Artist ID (AIN)</h2>
            <p className="text-gray-700 mb-4">
              Administrative tools to help policymakers create targeted support programs for creative communities.
            </p>
            <Link href="/programs/artist-id" className="text-accent hover:underline">
              Learn more →
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">Tools</h2>
            <p className="text-gray-700 mb-4">
              Financial, legal, and operational resources that any creative person can use today.
            </p>
            <Link href="/programs/tools" className="text-accent hover:underline">
              Learn more →
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">A-Corp Stories</h2>
            <p className="text-gray-700 mb-4">
              Celebrating achievements from creative people around the world.
            </p>
            <Link href="/programs/stories" className="text-accent hover:underline">
              Learn more →
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">A-Corp Dashboard</h2>
            <p className="text-gray-700 mb-4">
              Manage your creative projects, track financials, and organize your team in one place.
            </p>
            <Link href="/dashboard" className="text-accent hover:underline">
              Try the dashboard →
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-4">Project Calculator</h2>
            <p className="text-gray-700 mb-4">
              Calculate your project's valuation, forecast growth, and model financial scenarios in real-time.
            </p>
            <Link href="/demo/calculator" className="text-accent hover:underline">
              Try the calculator →
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
