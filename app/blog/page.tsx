import Link from 'next/link';
import { Card } from '@/components/shared/Card';

const blogPosts = [
  {
    slug: '2025-annual-letter',
    title: '2025 Annual Letter',
    excerpt:
      'Over the past 18 months, what started as an idea slowly and methodically transformed into the first steps of reality.',
    date: 'December 2025',
    author: 'Yancey Strickler',
    featured: true,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">Blog</h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} hover>
              {post.featured && (
                <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded mb-4">
                  Featured
                </span>
              )}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 hover:text-accent transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center text-secondary text-sm space-x-3 mb-4">
                <span>{post.author}</span>
                <span>•</span>
                <time>{post.date}</time>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-medium">
                Read more →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
