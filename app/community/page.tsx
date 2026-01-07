'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';

// Sample data - would come from database in production
const SAMPLE_PROFILES = [
  {
    username: 'janedoe',
    name: 'Jane Doe',
    location: 'Brooklyn, NY',
    genre: 'Multimedia / Interdisciplinary',
    bio: 'Interdisciplinary artist working at the intersection of sound, sculpture, and social practice.',
    projectName: 'Resonance Collective',
  },
  {
    username: 'marcuschen',
    name: 'Marcus Chen',
    location: 'Los Angeles, CA',
    genre: 'Music',
    bio: 'Electronic musician and sound designer creating immersive sonic experiences.',
    projectName: 'Frequency Lab',
  },
  {
    username: 'sarahkim',
    name: 'Sarah Kim',
    location: 'Brooklyn, NY',
    genre: 'Visual Art',
    bio: 'Painter and installation artist exploring themes of memory and displacement.',
    projectName: 'Memory Works Studio',
  },
  {
    username: 'davidpark',
    name: 'David Park',
    location: 'Portland, OR',
    genre: 'Film & Video',
    bio: 'Documentary filmmaker focused on community stories and social justice.',
    projectName: 'Collective Lens',
  },
  {
    username: 'lisawang',
    name: 'Lisa Wang',
    location: 'San Francisco, CA',
    genre: 'Design',
    bio: 'Graphic designer and creative director building tools for artists.',
    projectName: 'Studio Flux',
  },
  {
    username: 'alejandrogarcia',
    name: 'Alejandro Garcia',
    location: 'Austin, TX',
    genre: 'Performance & Theater',
    bio: 'Theater artist creating experimental works about border politics.',
    projectName: 'Borderlands Ensemble',
  },
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const filteredProfiles = SAMPLE_PROFILES.filter(profile => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.projectName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenre = genreFilter === 'all' || profile.genre === genreFilter;

    const matchesLocation = locationFilter === 'all' || profile.location.includes(locationFilter);

    return matchesSearch && matchesGenre && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-center">
            Discover the Community
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Connect with artists, creators, and cultural workers building the future of creative enterprise
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <input
                type="search"
                placeholder="Search artists, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Genre Filter */}
            <div>
              <select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Genres</option>
                <option value="Visual Art">Visual Art</option>
                <option value="Music">Music</option>
                <option value="Film & Video">Film & Video</option>
                <option value="Writing & Publishing">Writing & Publishing</option>
                <option value="Performance & Theater">Performance & Theater</option>
                <option value="Design">Design</option>
                <option value="Craft">Craft</option>
                <option value="Digital & New Media">Digital & New Media</option>
                <option value="Photography">Photography</option>
                <option value="Dance">Dance</option>
                <option value="Multimedia / Interdisciplinary">Multimedia / Interdisciplinary</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Brooklyn">Brooklyn, NY</option>
                <option value="Los Angeles">Los Angeles, CA</option>
                <option value="San Francisco">San Francisco, CA</option>
                <option value="Portland">Portland, OR</option>
                <option value="Austin">Austin, TX</option>
                <option value="Chicago">Chicago, IL</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProfiles.length} of {SAMPLE_PROFILES.length} profiles
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProfiles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No profiles found</p>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile) => (
                <Link
                  key={profile.username}
                  href={`/profile/${profile.username}`}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {profile.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profile.location}
                    </div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                      {profile.genre}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {profile.bio}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600">Project</div>
                    <div className="font-medium text-gray-900">{profile.projectName}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Create your profile to connect with other creative professionals and showcase your work
          </p>
          <Link href="/signup">
            <Button size="lg">Create Your Profile</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
