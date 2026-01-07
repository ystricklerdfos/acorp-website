import Link from 'next/link';
import { Button } from '@/components/shared/Button';

// This would come from a database in production
const SAMPLE_PROFILE = {
  username: 'janedoe',
  name: 'Jane Doe',
  location: 'Brooklyn, NY',
  bio: 'Interdisciplinary artist working at the intersection of sound, sculpture, and social practice. Building collaborative structures for creative autonomy.',
  joinedDate: 'January 2026',
  project: {
    name: 'Resonance Collective',
    description: 'A cooperative studio and performance space dedicated to experimental sound art and community-based installations.',
    entityType: 'Cooperative',
    genre: 'Multimedia / Interdisciplinary',
    members: [
      { name: 'Jane Doe', role: 'Artist & Co-founder', ownership: 40 },
      { name: 'Marcus Chen', role: 'Sound Designer', ownership: 40 },
      { name: 'Sarah Kim', role: 'Operations', ownership: 20 },
    ],
    catalogue: [
      {
        title: 'Echoes in the Archive',
        type: 'installation',
        year: '2025',
        url: 'https://example.com',
      },
      {
        title: 'Collective Frequencies',
        type: 'album',
        year: '2024',
        url: 'https://example.com',
      },
      {
        title: 'Public Listening Sessions',
        type: 'performance',
        year: '2024',
        url: '',
      },
    ],
  },
};

export default function ProfilePage() {
  // In production, use: const { username } = params to fetch profile
  const profile = SAMPLE_PROFILE;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link href="/community" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Community
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {profile.name}
              </h1>
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {profile.location}
                </span>
                <span className="text-gray-400">•</span>
                <span>Joined {profile.joinedDate}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="primary">Connect</Button>
              <Button variant="secondary">Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project</h2>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{profile.project.name}</h3>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
                  {profile.project.entityType}
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-700">
                  {profile.project.genre}
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {profile.project.description}
            </p>
          </div>

          {/* Team Members */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Team & Ownership</h3>
            <div className="grid gap-4">
              {profile.project.members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{member.ownership}%</div>
                    <div className="text-sm text-gray-600">ownership</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Catalogue</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {profile.project.catalogue.map((work, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{work.title}</h4>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <span className="capitalize">{work.type}</span>
                    <span>•</span>
                    <span>{work.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Artist Corporations Community
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Create your profile to connect with other creative professionals and pre-register your project
          </p>
          <Link href="/signup">
            <Button size="lg">Create Your Profile</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
