import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Artist Corporations Foundation 2026 Annual Letter',
  description: 'There\'s a significant gap between how much creative work and culture are valued, and how much economic power the people who make it have in society today.',
};

export default function AnnualLetter2026() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <article className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 md:py-24">
        <Link
          href="/updates"
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
          <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl font-normal leading-[1.2] mb-8 text-gray-900 font-sans" style={{ letterSpacing: '-0.02em' }}>
            The Artist Corporations Foundation 2026 Annual Letter
          </h1>
          <div className="flex items-center text-gray-500 text-sm font-sans">
            <span className="font-normal">Yancey Strickler</span>
            <span className="mx-2">·</span>
            <time>January 5, 2026</time>
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
          <p className="text-xl text-gray-700 leading-[1.8] mb-8">
            There&apos;s a significant gap between how much creative work and culture are valued, and how much economic power the people who make it have in society today.
          </p>

          <p>
            That gap is the reason this project exists. We don&apos;t believe that gap is natural or fated. We believe it&apos;s the result of structural limitations that are imminently changeable over time.
          </p>

          <p>
            The infrastructure of business and ownership we have today wasn&apos;t designed for creative enterprises. The LLC, the C-Corp, and the S-Corp are structures built for traditional businesses with traditional assumptions about what value creation looks like.
          </p>

          <p>
            Creative practices don&apos;t fit neatly into these boxes. They have employees and investors. We have ourselves, collaborators, and patrons. They have shared resources like health care. We can&apos;t get those things on our own. They have capital markets and sky-high valuations. We struggle to explain ourselves to our accountants, much less the economic system we reside within.
          </p>

          <p>
            What artists and creative people need is a strong economic and ownership foundation that&apos;s accessible, affordable, and the norm. What we have instead is a worker class that operates informally or squeezes into ill-fitting legal structures that don&apos;t serve their needs.
          </p>

          <h4 className="text-xl font-semibold mt-10 mb-4">What we did in 2025</h4>

          <p>
            In April 2024 we shared the idea for Artist Corporations at TED. The concept was publicly born.
          </p>

          <p>The A-Corp creates:</p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>A new legal form designed specifically for creative people and artistic purposes</li>
            <li>An understandable structure that reflects how creative people operate</li>
            <li>Access to multiple forms of revenue and income sources</li>
            <li>Powerful tools of collective ownership including shares and sophisticated tools for owning and valuing intellectual property</li>
            <li>A path to better health care for creative people</li>
          </ul>

          <p>
            To make this form a reality means working through the political process to make new laws. Since sharing this idea at TED, that&apos;s exactly what we&apos;ve worked on, and have made a stunning amount of progress. We:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Drafted the Artist Corporation Act establishing a new legal entity: the A-Corp</li>
            <li>Made four trips to Colorado to meet with arts, culture, and political leaders</li>
            <li>Found a bill sponsor: Senator Jeff Bridges (no, not that one), Chair of the Joint Budget Committee in the Colorado Senate</li>
            <li>Completed a fiscal and economic analysis of the bill</li>
            <li>Built working relationships with the Governor&apos;s office and key stakeholders</li>
          </ul>

          <p>
            The result of all of this is that in 2026, we expect the first Artist Corporation law to be introduced as legislation.
          </p>

          <h4 className="text-xl font-semibold mt-10 mb-4">What&apos;s happening in 2026</h4>

          <p>
            Passing this law will be our primary, but not sole, focus in 2026.
          </p>

          <p>
            <strong>The A-Corp law</strong>. We expect to introduce legislation in Colorado in 2026. With the first Public Benefit Corporation law in Colorado, it took multiple attempts to pass. We&apos;re optimistic but want to respect the process and pass legislation that actually works.
          </p>

          <p>
            Other states and nations have reached out. Other bills based on the Colorado legislation are beginning to go into motion. There is organic interest among policymakers in creating more systematic economic support for their creative communities.
          </p>

          <p>
            <strong>Administrative foundations</strong>. We&apos;re also circulating the idea of an Artist ID — an artist-specific EIN number that would allow policymakers to craft programs specifically for the creative community. Things like:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>Affordable housing policies through tax credits</li>
            <li>Tax breaks on creative materials</li>
            <li>Pre-qualification for A-Corps</li>
            <li>Better measurement of artistic work on local economies</li>
          </ul>

          <p>
            Conversations about the Artist ID are underway with significant local and state governments here in the US.
          </p>

          <p>
            <strong>Financial, legal, and operational tools</strong>. The gap creative people face isn&apos;t just legal, it&apos;s operational and educational. This year the Artist Corporations website will evolve into a toolkit helping any creative person see, touch, and adjust the operational and financial structure of their project.
          </p>

          <p>
            We&apos;ll integrate shared economic tools including treasuries, payment splits, and transparent financial ledgers. We&apos;ll create standard legal documents including templates for new business formation, accepting investment, collective ownership, and collaborative work.
          </p>

          <h4 className="text-xl font-semibold mt-10 mb-4">Long-term vision</h4>

          <p>
            When we look past the next five years and imagine a world where A-Corps have taken hold and creative people have graduated in how we operate, we see transformational change.
          </p>

          <p>
            Today we associate capitalism with the C-Corp economy. This is the corporate focus on shareholder maximization and companies deprioritizing employees, the public, and anything else that will increase profits.
          </p>

          <p>
            The A-Corp economy is something altogether different. There&apos;s a Virgil Abloh quote from the end of his life: &quot;I have realized one thing at the end: it&apos;s all worth nothing compared to the freedom to express the next idea.&quot;
          </p>

          <p>
            This is what we as artists and creative people are about. Making another one. Doing it without going broke. Doing it while paying the people we work with. Getting the chance to express and explore once more.
          </p>

          <p>
            This is the primary goal of the A-Corp economy: the chance to make the next idea.
          </p>

          <p>
            The C-Corp economy maximizes shareholder value over all else. The A-Corp economy will maximize making more work, not maximizing the amount of money you make from it.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <p className="text-xl text-center mb-4">The mantra of the C-Corp economy: <strong>make more profit.</strong></p>
            <p className="text-xl text-center">The mantra of the A-Corp economy: <strong>make another one.</strong></p>
          </div>

          <p>
            Over time, the A-Corp economy will start to compete with the C-Corp economy. Consumers will face a choice between the kind of world they want to see: one of value extraction, or one of creative production.
          </p>

          <p>
            This deep underlying difference will open the door for the A-Corp economy to outcompete the C-Corp economy in the eyes of the public. A frontier in which creative people, creative motivations, and creative visions will have real advantages.
          </p>

          <h4 className="text-xl font-semibold mt-10 mb-4">We are all doing this</h4>

          <p>
            Late in 2025, we formalized this vision by starting the Artist Corporations Foundation — a nonprofit dedicated to building economic and political power for creative people. This work is supported by the Rainin Foundation and other arts philanthropic organizations.
          </p>

          <p>
            The initial Executive Director is Yancey Strickler, the cofounder of Kickstarter, The Creative Independent, and Metalabel, and the initial Managing Director is Lena Imamura, a working artist. The board includes Jennifer Arceneaux and Mikael Moore, CEO of Wondaland and manager of Janelle Monae.
          </p>

          <p>
            More than 4,000 artists and creators have signed up to become an A-Corp. Thousands more have watched the TED talk and are following this journey.
          </p>

          <p>
            The original TED talk closed with a line that no longer feels hopeful — it feels increasingly real.
          </p>

          <p className="text-xl font-medium mt-8">
            Artists don&apos;t need pity. Artists need power. And together, we&apos;re going to build it.
          </p>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
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
      </article>
    </div>
  );
}
