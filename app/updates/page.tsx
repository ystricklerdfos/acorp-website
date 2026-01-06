import Link from 'next/link';
import { Card } from '@/components/shared/Card';

const updates = [
  {
    slug: '2025-annual-letter',
    title: '2025 Annual Letter',
    date: 'December 2025',
    excerpt: 'Over the past 18 months, what started as an idea slowly and methodically transformed into the first steps of reality.',
    category: 'Annual Update',
    featured: true,
    link: '/blog/2025-annual-letter',
  },
  {
    slug: 'do-artists-get-paid',
    title: 'Do Artists Get Paid for Making Art?',
    date: 'October 9, 2025',
    excerpt: 'Artist Corporations are important not just as a legal structure, but as a concept that redefines creative output as real work that\'s valuable and deserving of compensation.',
    category: 'Update 008',
    link: '/updates/do-artists-get-paid',
  },
  {
    slug: 'tour-diary',
    title: 'A-Corp Tour Diary',
    date: 'September 25, 2025',
    excerpt: 'The past week I\'ve been on the road, giving talks and speaking with artists, creators, and community and political leaders across the US about Artist Corporations.',
    category: 'Update 006',
    link: '/updates/tour-diary',
  },
  {
    slug: 'lets-make-a-law',
    title: 'Let\'s Make a Law',
    date: 'August 14, 2025',
    excerpt: 'Since this project became public in June, we\'ve been working hard behind the scenes to establish connections and follow the process to make Artist Corporations a reality.',
    category: 'Update 001',
    link: '/updates/lets-make-a-law',
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Where We Are Now</h1>
          <p className="text-xl text-gray-700">
            Updates on our progress building economic and political power for creative people
          </p>
        </div>

        {/* Featured Update */}
        <div className="mb-12">
          <Card className="border-2 border-accent">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded">
                Featured
              </span>
              <span className="text-sm text-secondary">{updates[0].category}</span>
            </div>
            <Link href={updates[0].link}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 hover:text-accent transition-colors">
                {updates[0].title}
              </h2>
            </Link>
            <div className="text-secondary text-sm mb-4">
              <time>{updates[0].date}</time>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              {updates[0].excerpt}
            </p>
            <Link href={updates[0].link} className="text-accent hover:underline font-medium">
              Read full update →
            </Link>
          </Card>
        </div>

        {/* All Updates */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Recent Updates</h2>
          <div className="space-y-6">
            {updates.slice(1).map((update) => (
              <Card key={update.slug} hover>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-secondary">{update.category}</span>
                  <span className="text-secondary">•</span>
                  <time className="text-sm text-secondary">{update.date}</time>
                </div>
                <Link href={update.link}>
                  <h3 className="text-2xl font-serif font-bold mb-3 hover:text-accent transition-colors">
                    {update.title}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4 leading-relaxed">{update.excerpt}</p>
                <Link href={update.link} className="text-accent hover:underline font-medium">
                  Read more →
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card>
            <h3 className="text-xl font-serif font-bold mb-3">Fiscal Assessment</h3>
            <p className="text-gray-600 mb-4">
              Economic analysis and impact reports on Artist Corporations
            </p>
            <Link href="/updates/fiscal-assessment" className="text-accent hover:underline">
              View reports →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-serif font-bold mb-3">Subscribe to Updates</h3>
            <p className="text-gray-600 mb-4">
              Get the latest news delivered to your inbox
            </p>
            <a
              href="https://artistcorps.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Subscribe on Substack →
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
