import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogPostLayoutProps {
  title: string;
  author: string;
  date: string;
  category?: string;
  children: ReactNode;
  backLink?: string;
}

export function BlogPostLayout({
  title,
  author,
  date,
  category,
  children,
  backLink = '/updates',
}: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <article className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 md:py-24">
        <Link
          href={backLink}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-12 transition-colors font-sans"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        <header className="mb-16">
          {category && (
            <div className="mb-8">
              <span className="text-xs font-medium text-gray-500 tracking-wider uppercase font-sans">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl font-normal leading-[1.2] mb-8 text-gray-900 font-sans" style={{ letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm font-sans">
            <span className="font-normal">{author}</span>
            <span className="mx-2">·</span>
            <time>{date}</time>
          </div>
        </header>

        <div className="prose max-w-none font-sans
          prose-headings:font-normal prose-headings:text-gray-900 prose-headings:font-sans
          prose-h2:text-[2rem] prose-h2:mt-12 prose-h2:mb-5 prose-h2:leading-[1.3]
          prose-h3:text-[1.5rem] prose-h3:mt-10 prose-h3:mb-4 prose-h3:leading-[1.4]
          prose-h4:text-[1.25rem] prose-h4:mt-8 prose-h4:mb-3
          prose-p:text-base prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-5 prose-p:font-sans
          prose-a:text-gray-900 prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-gray-900 prose-a:underline-offset-2 prose-a:transition-colors prose-a:font-sans
          prose-blockquote:border-l-4 prose-blockquote:border-gray-200
          prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-gray-600 prose-blockquote:font-sans
          prose-strong:text-gray-900 prose-strong:font-medium prose-strong:font-sans
          prose-ul:my-5 prose-ol:my-5 prose-ul:space-y-1 prose-ol:space-y-1
          prose-li:text-gray-700 prose-li:text-base prose-li:leading-[1.8] prose-li:font-sans
          prose-img:rounded-lg prose-img:my-8
          prose-hr:border-gray-200 prose-hr:my-10
        ">
          {children}
        </div>
      </article>
    </div>
  );
}
