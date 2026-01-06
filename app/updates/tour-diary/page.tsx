import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';

export default function TourDiary() {
  return (
    <BlogPostLayout
      title="A-Corp Tour Diary"
      author="Yancey Strickler"
      date="September 25, 2025"
      category="Artist Corporations Update: 006"
    >
      <div className="not-prose">
            <p className="lead text-xl">
              The past week I've been on the road, giving talks and speaking with artists, creators, and community and political leaders across the US about Artist Corporations.
            </p>

            <p>
              Throughout these travels, I've emphasized representing "a wide, diverse community of creative people" rather than acting as an individual, using "we" language to highlight the collective nature of this initiative.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">Colorado Events</h2>

            <h3 className="font-serif text-2xl mt-8 mb-4">Colorado Startup Week</h3>

            <p>
              I spoke with Dr. Brianna Figuero, CEO of CreativeStartups.org, which assists artists in developing business skills. The conversation generated audience questions about how arts venues and districts could leverage A-Corps, with several attendees expressing interest in supporting the initiative locally.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">National Volunteer Lawyers for the Arts Conference</h3>

            <p>
              Speaking to expert arts lawyers, I presented the draft legislation and fielded sophisticated questions about implementation. Key inquiries included:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Conversion procedures from existing business structures</li>
              <li>Investor protections</li>
              <li>Whether certain aspects resembled credentials rather than pure legal frameworks</li>
            </ul>

            <p>
              This audience would likely be among the primary users if A-Corps became law. Their engagement and thoughtful questions showed the real-world applicability of what we're building.
            </p>

            <h3 className="font-serif text-2xl mt-8 mb-4">Private Denver Briefing</h3>

            <p>
              Cultural and civic leaders from over a dozen Colorado organizations attended a confidential briefing. Participants focused on ensuring A-Corps' long-term success through adequate resources and training, while legal and policy experts offered suggestions regarding tax status and legislative provisions.
            </p>

            <h2 className="font-serif text-3xl mt-12 mb-6">Washington, D.C. Symposium</h2>

            <p>
              At the Doris Duke Foundation's "Creative Labor, Creative Conditions" event, I joined a panel titled "Artist Workers in the Economy" alongside leaders from The Apollo Theater, Center for Cultural Innovation, Art.Coop, and The Knight Foundation.
            </p>

            <h3 className="font-semibold text-xl mt-6 mb-3">Key Points Discussed:</h3>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Creative work now represents a mainstream practice for 48% of Americans</li>
              <li>The creator economy is projected to reach $900 billion by decade's end</li>
              <li>Artists remain excluded from equity participation despite driving capitalist sectors</li>
              <li>Creative work benefits both practitioners and audiences meaningfully</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="text-lg italic">
                <strong>Notable Moment:</strong> Musician Kokayi unexpectedly performed freestyle lyrics about A-Corps during the symposium.
              </p>
            </div>

            <h2 className="font-serif text-3xl mt-12 mb-6">The Momentum is Building</h2>

            <p className="text-xl">
              The A-Corp message is spreading. More and more people are joining our ranks. What started as a conversation is becoming a movement.
            </p>

            <p className="text-xl font-medium">
              Together, we're making this happen.
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
