import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';

export default function DoArtistsGetPaid() {
  return (
    <BlogPostLayout
      title="Do Artists Get Paid for Making Art?"
      author="Yancey Strickler"
      date="October 9, 2025"
      category="Artist Corporations Update: 008"
    >
      <p className="lead text-xl">
              Artist Corporations are important not just as a legal structure, but as a concept that redefines creative output as real work that's valuable and deserving of compensation.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">The Problem</h2>

            <p>
              There's a persistent cultural bias treating artistic output as secondary to "real" work. This assumption runs deep through our culture and economy, affecting how creative people are valued and compensated.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">A Historical Example</h2>

            <p>
              To illustrate this problem, consider filmmaker Hollis Frampton's 1973 experience when the Museum of Modern Art offered him a retrospective with "no money included," expecting him to accept the honor without payment.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">Frampton's Response</h3>

            <p>
              Frampton's letter powerfully addressed this inequity. He noted that while manufacturers, labs, and technicians involved in filmmaking received payment, the artist creating the work was expected to labor for "love and honor."
            </p>

            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-xl">
              "The artist is not to be paid. And in fact it seems that there is no way to pay an artist for his work as an artist."
            </blockquote>

            <p>
              This quote captures the fundamental problem: the assumption that artistic labor exists in a different category from "real" work, and therefore doesn't deserve the same economic recognition.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">The Current Impact</h2>

            <p>
              This assumption persists today through offers of "exposure" instead of wages. We see it everywhere:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Musicians asked to play for free at venues for "exposure"</li>
              <li>Visual artists expected to donate work to fundraisers</li>
              <li>Writers offered "opportunities" instead of payment</li>
              <li>Designers asked to work on spec for portfolio pieces</li>
            </ul>

            <div className="bg-muted p-8 rounded-lg my-8">
              <p className="text-lg font-medium mb-4">The Data Tells the Story:</p>
              <ul className="space-y-2">
                <li>• Creative professionals earn less than similarly educated peers</li>
                <li>• Artists are three times more likely to work as gig workers</li>
                <li>• Only 13% of artists earn a full-time living from their work</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl mt-12 mb-6">The Solution</h2>

            <p>
              Artist Corporations can gradually shift this dynamic by establishing legal recognition that gives artists organizational power and legitimate economic interests.
            </p>

            <p>
              When creative people have a recognized business structure designed for their work, it signals something important: creative work is real work. It generates real value. And it deserves real payment alongside recognition.
            </p>

            <p className="text-xl font-medium mt-8">
              The question "Do artists get paid for making art?" should have a simple answer: Yes. Always.
            </p>

            <p className="text-xl mt-6">
              Artist Corporations are one step toward making that answer a reality.
            </p>

      <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center not-prose">
        <h3 className="text-2xl font-normal mb-4">Join the Movement</h3>
        <p className="text-gray-700 mb-6">
          Be part of building economic and political power for creative people
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition-all">
            Create Your Profile
          </Link>
          <Link href="/pledge" className="inline-block px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all">
            Sign the Pledge
          </Link>
        </div>
      </div>
    </BlogPostLayout>
  );
}
