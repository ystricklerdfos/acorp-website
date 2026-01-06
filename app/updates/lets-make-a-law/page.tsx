import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';

export default function LetsMakeALaw() {
  return (
    <BlogPostLayout
      title="Let's Make a Law"
      author="Yancey Strickler"
      date="August 14, 2025"
      category="Artist Corporations Update: 001"
    >
      <div className="not-prose">
            <p className="lead text-xl">
              Since this project became public in June, we've been working hard behind the scenes to establish connections and follow the process to make Artist Corporations a reality.
            </p>

            <p>
              The Artist Corporations project is progressing toward legal establishment, with efforts focused on passing laws in a U.S. state. The initiative has garnered significant community support, with nearly 3,000 artists signing up in eight weeks.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">Key Developments</h2>

            <p>
              The project team is pursuing two main objectives: securing political backing for A-Corps legislation and gathering community feedback. Over 1,000 people have submitted personal testimonies explaining their motivations.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">Community Voices</h2>

            <p>
              Three representative messages illustrate participant concerns:
            </p>

            <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-xl">
              "Commerce self-propagates while art struggles to take root. A legal corporate framework could enhance sustainability."
            </blockquote>

            <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-xl">
              "Artists should not discount their labor nor should society constantly undermine artists' value through suboptimal wages."
            </blockquote>

            <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-xl">
              "We need new models for creative co-authorship that legally empower collaborators beyond traditional single-author structures."
            </blockquote>

            <h2 className="font-serif text-3xl mt-12 mb-6">What You Can Do</h2>

            <p>
              We invite community members to:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Complete our ten-question survey detailing current legal and economic structures</li>
              <li>Share your story for featured social media content</li>
              <li>Submit questions for upcoming updates</li>
              <li>Sign the pledge to show your support</li>
            </ul>

            <p className="text-xl font-medium mt-8">
              We promise weekly progress reports moving forward. The momentum is building, and together we're making this happen.
            </p>
          </div>

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
