import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Artist Corporations</h3>
            <p className="text-sm text-gray-600">
              Building economic and political power for creative people.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/law" className="text-gray-600 hover:text-primary">
                  A-Corp Law
                </Link>
              </li>
              <li>
                <Link href="/programs/artist-id" className="text-gray-600 hover:text-primary">
                  Artist ID
                </Link>
              </li>
              <li>
                <Link href="/programs/tools" className="text-gray-600 hover:text-primary">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/programs/stories" className="text-gray-600 hover:text-primary">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pledge" className="text-gray-600 hover:text-primary">
                  Sign the Pledge
                </Link>
              </li>
              <li>
                <Link href="/dfos" className="text-gray-600 hover:text-primary">
                  Join DFOS
                </Link>
              </li>
              <li>
                <Link href="/share-story" className="text-gray-600 hover:text-primary">
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@artistcorporations.com"
                  className="text-gray-600 hover:text-primary"
                >
                  hello@artistcorporations.com
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Artist Corporations Foundation. All rights reserved.</p>
        </div>
      </div>

      {/* Giant A Section */}
      <div className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Artist Corporations
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            A new system of our own.
          </p>

          <div className="flex items-center justify-center mb-12">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Giant A letter */}
              <path
                d="M200 50 L350 350 L280 350 L260 300 L140 300 L120 350 L50 350 Z M170 240 L230 240 L200 150 Z"
                fill="currentColor"
                className="text-gray-900"
              />
            </svg>
          </div>

          <p className="text-lg text-gray-700">
            For alliances, support, and everything else,{' '}
            <a
              href="mailto:hello@artistcorporations.com?subject=Artist%20Corporations%20inquiry"
              className="text-gray-900 underline hover:text-gray-600 transition-colors"
            >
              get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
