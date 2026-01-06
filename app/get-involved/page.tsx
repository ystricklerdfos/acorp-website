import Link from 'next/link';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get Involved</h1>
        <p className="text-xl text-gray-700 mb-12">
          Join over 4,000 artists and creators building economic and political power together
        </p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-serif font-bold mb-3">Sign the Pledge</h2>
            <p className="text-gray-700 mb-4">
              Show your support for Artist Corporations and be counted among creative people who are building a new economic foundation.
            </p>
            <Link href="/pledge">
              <Button>Sign the Pledge</Button>
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-3">Join DFOS</h2>
            <p className="text-gray-700 mb-4">
              Details First, Opinions Second - stay informed about our progress and be part of the conversation.
            </p>
            <Link href="/dfos">
              <Button>Join DFOS</Button>
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-3">Share Your Story</h2>
            <p className="text-gray-700 mb-4">
              Tell us why Artist Corporations matter to you and your creative practice.
            </p>
            <Link href="/share-story">
              <Button>Share Your Story</Button>
            </Link>
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold mb-3">Create a Profile</h2>
            <p className="text-gray-700 mb-4">
              Register your creative project and access tools to help structure your work.
            </p>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
