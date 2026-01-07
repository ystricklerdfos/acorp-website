import Link from 'next/link';

export default function ToolsPage() {
  const tools = [
    {
      name: 'Metalabel',
      description: 'Shared releasing and economic tool',
      details: 'Platform for collaborative releases and revenue sharing among creative groups.',
      link: 'https://metalabel.com',
      external: true,
    },
    {
      name: 'DFOS',
      description: 'Shared community spaces for creative groups',
      details: 'Digital and physical spaces designed for creative communities to gather, collaborate, and build together.',
      link: '/dfos',
      external: false,
    },
    {
      name: 'Splits and Treasuries',
      description: 'Shared economic structure',
      details: 'Tools for managing revenue splits, shared treasuries, and economic coordination among creative collaborators.',
      link: '#splits',
      external: false,
    },
    {
      name: 'Legal Documents',
      description: 'Standard docs you can use',
      details: 'Templates and resources for forming entities, managing IP, and structuring creative enterprises.',
      link: '#legal',
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gray-900">
            Tools for creative people
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Resources and platforms to help you build, release, and sustain your creative practice
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {tool.name}
                </h2>
                <p className="text-lg text-gray-600 mb-4 font-medium">
                  {tool.description}
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {tool.details}
                </p>
                {tool.external ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 font-medium hover:underline"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link href={tool.link} className="text-gray-900 font-medium hover:underline">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Tools Coming */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            More tools coming soon
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're building resources to help creative people form entities, manage finances,
            protect their work, and collaborate effectively. Sign up to get notified when new tools launch.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Create Your Profile
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building the future of creative work
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Explore our other programs working to empower artists and creators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/law"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              A-Corp Law
            </Link>
            <Link
              href="/programs/artist-id"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Artist ID
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
