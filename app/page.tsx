import Link from 'next/link';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { Accordion } from '@/components/shared/Accordion';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-serif font-bold mb-6">A</div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Artist Corporations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Building economic and political power for creative people
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/pledge">
              <Button variant="secondary" size="lg">
                Sign the Pledge
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured: Annual Letter */}
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <span className="text-sm uppercase tracking-wider text-secondary">Featured</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
                2025 Annual Letter
              </h2>
              <p className="text-lg text-gray-600 italic">
                "Artists don't need pity. Artists need power. And together, we're going to build it."
              </p>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the past 18 months, what started as an idea slowly and methodically transformed
                into the first steps of reality. The concept of a new economic baseline for creative
                people moved from hope to practicality as the work brought artists and creators, legal
                and corporate experts, and political and community leaders together around an ambitious
                new project.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                More than a year after its inception, this project has already gone farther than we
                thought possible. We've spent the past year embedded in this opportunity and challenge.
                Today we wanted to close the year by regrounding this project in the core reasons why
                it exists; in what it hopes to achieve; and the vision that compels us and many others
                to work on it.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog/2025-annual-letter">
                <Button variant="secondary">Read the Full Letter</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="text-center">
              <h3 className="font-serif font-bold text-xl mb-3">A-Corp Law</h3>
              <p className="text-gray-600 mb-4">
                Creating new legal structures designed specifically for creative enterprises
              </p>
              <Link href="/programs/law" className="text-accent hover:underline">
                Learn more →
              </Link>
            </Card>
            <Card hover className="text-center">
              <h3 className="font-serif font-bold text-xl mb-3">Artist ID (AIN)</h3>
              <p className="text-gray-600 mb-4">
                Administrative tools to help policymakers support creative communities
              </p>
              <Link href="/programs/artist-id" className="text-accent hover:underline">
                Learn more →
              </Link>
            </Card>
            <Card hover className="text-center">
              <h3 className="font-serif font-bold text-xl mb-3">Tools</h3>
              <p className="text-gray-600 mb-4">
                Financial, legal, and operational resources for creative people
              </p>
              <Link href="/programs/tools" className="text-accent hover:underline">
                Learn more →
              </Link>
            </Card>
            <Card hover className="text-center">
              <h3 className="font-serif font-bold text-xl mb-3">Stories</h3>
              <p className="text-gray-600 mb-4">
                Celebrating achievements from creative people around the world
              </p>
              <Link href="/programs/stories" className="text-accent hover:underline">
                Learn more →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Watch the TED Talk
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iLhFAWKCE0M?start=2"
              title="Artist Corporations TED Talk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Learn about the vision behind Artist Corporations
          </p>
        </div>
      </section>

      {/* Where We Are Now */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Where We Are Now
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="font-serif font-bold text-lg mb-2">Annual Letter</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our latest update on progress and vision
              </p>
              <Link href="/blog/2025-annual-letter" className="text-accent hover:underline text-sm">
                Read now →
              </Link>
            </Card>
            <Card hover>
              <h3 className="font-serif font-bold text-lg mb-2">Fiscal Assessment</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Economic analysis and impact reports
              </p>
              <Link href="/updates/fiscal-assessment" className="text-accent hover:underline text-sm">
                View reports →
              </Link>
            </Card>
            <Card hover>
              <h3 className="font-serif font-bold text-lg mb-2">Blog</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Updates, insights, and announcements
              </p>
              <Link href="/blog" className="text-accent hover:underline text-sm">
                Read blog →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div>
            {/* Origins & Purpose */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Origins & Purpose</h3>
            </div>

            <Accordion title="Where did the idea for A-Corps come from?">
              <p className="mb-4">
                The idea came from personal frustration while trying to design a legal entity for a
                writer collective project I'm part of. It was expensive just to have a structure we
                understood and that reflected some fundamental basics of how we wanted to work together.
                I knew many others who had similar experiences. Why not make a new structure anyone
                could easily and affordably use, creating better economic outcomes, shared resources,
                and a stronger ownership foundation for all?
              </p>
              <p>
                As the son of a musician who never quite made it, I've known the gap between cultural
                value and economic power since childhood. I've dedicated my professional life to
                bettering it, from cofounding and leading Kickstarter to cofounding The Creative
                Independent.
              </p>
            </Accordion>

            <Accordion title="How big is the creative workforce today?">
              <ul className="list-disc list-inside space-y-2">
                <li>48% of Americans report a personal creative practice, like writing, painting, or music</li>
                <li>40% of Millennials and Gen Z are "very interested" in a full-time career as a content creator</li>
                <li>75% of them view it as a "viable career"</li>
                <li>Just 13% of artists earn a full-time living from their work</li>
                <li>Creative people are three times more likely than others to be gig workers and have multiple jobs</li>
              </ul>
            </Accordion>

            <Accordion title="What's the gap you're trying to address?">
              <p>
                There's a gap between time spent by audiences and the economic reality for the people
                making that work. People spend enormous amounts of time watching, scrolling, and being
                inspired by creative and cultural work. Some artists and content creators become wealthy,
                but the overwhelming majority do not. The love on-stage and on-screen does not result in
                economic or professional stability for creative people.
              </p>
            </Accordion>

            {/* The Journey */}
            <div className="mb-8 mt-12">
              <h3 className="text-2xl font-serif font-bold mb-4">The Journey</h3>
            </div>

            <Accordion title="How long has this been in development?">
              <p>
                Over the past 18 months, what started as an idea has slowly transformed into the first
                steps of reality. That creative and emotional journey has brought us into close contact
                with fellow artists and creators, creative workers and leaders, legal and corporate
                experts, and political and community conveners.
              </p>
            </Accordion>

            <Accordion title="Why Colorado?">
              <p className="mb-4">
                After the TED talk in April 2024, we began to hear from people interested in learning
                more. Quite a few were located in Colorado — a state with:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>A history of embracing new corporate forms (PBCs and co-ops)</li>
                <li>One of the highest numbers of artists per capita of any state in America</li>
                <li>The incoming Sundance Film Festival, as part of a project to make Colorado "the creative state"</li>
              </ul>
              <p>
                We found an exceptional, welcoming community open to showing us the ropes and engaging
                in deep conversations about how to work together.
              </p>
            </Accordion>

            <Accordion title="Do you have experience with legislation?">
              <p>
                This work is new to us. Before this, I had no experience in laws or lobbying beyond
                what I've read in books and seen in movies. But I've been surprised to find I enjoy
                this work. It's meaningful to engage in the democratic process, especially on behalf
                of our creative community.
              </p>
            </Accordion>

            {/* Current Status */}
            <div className="mb-8 mt-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Current Status</h3>
            </div>

            <Accordion title="Where are you in the legislative process?">
              <p className="mb-4">
                Thanks to the support of many lawyers, political leaders, and arts and culture leaders
                we collaborated with, we now have:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>The first draft of a law completed, which will be publicly shared soon</li>
                <li>A sponsor for our bill: Senator Jeff Bridges, Chair of the Joint Budget Committee in the Colorado Senate</li>
                <li>A plan to introduce that bill as legislation in the 2026 Colorado Legislative Session</li>
                <li>A fiscal and economic analysis completed by a former budget director</li>
                <li>Working relationships with the Governor's office and other key stakeholders</li>
              </ul>
            </Accordion>

            <Accordion title="Is Colorado the only state involved?">
              <p>
                While Colorado has been our primary focus, other states, nations, government agencies,
                and universities have also reached out. Other bills based on the Colorado legislation
                are beginning to go into motion in other US states. There is organic interest among
                policymakers in creating more systematic and economic support for their creative
                communities.
              </p>
            </Accordion>

            {/* The Bigger Picture */}
            <div className="mb-8 mt-12">
              <h3 className="text-2xl font-serif font-bold mb-4">The Bigger Picture</h3>
            </div>

            <Accordion title="Will passing a law solve everything?">
              <p className="mb-4">
                No. Passing legislation is the initial change we've focused on, but legislation alone
                won't solve the challenges creative people face.
              </p>
              <p className="mb-4">
                A law can make a better structure, but it doesn't help creative people become more
                economically successful or educated, nor does it make them more powerful and capable
                on their own.
              </p>
              <p>
                This is why we've expanded our focus to include administrative infrastructure and
                practical tools beyond just the legal structure itself.
              </p>
            </Accordion>

            <Accordion title="What should we expect in the next 3-5 years?">
              <p className="mb-4">
                Even if every one of our 2026 initiatives is successful, we do not expect to see
                instant change. This work will take time.
              </p>
              <p className="mb-4">
                The immediate outcomes will be about increasing efficiency and understanding more than
                creating a totally new economic reality for creative people. Instead, we first must
                create new baselines to build on and educate ourselves from, and establish ourselves
                more clearly as a constituency whose needs must be considered locally, regionally,
                nationally, and internationally.
              </p>
              <p>
                In the next three to five years we hope to see a rising tide of education, understanding,
                and resources shifting into the creative sphere, matched with increasing care and
                appreciation for the importance of creative people to our economies and communities at
                large. As creative people become more comfortable financially (in both senses of the
                word), we'll see an increase in support flowing to us from investors, government
                agencies, and the public at large.
              </p>
            </Accordion>

            {/* Organization & Leadership */}
            <div className="mb-8 mt-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Organization & Leadership</h3>
            </div>

            <Accordion title="Who leads the Artist Corporations Foundation?">
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Yancey Strickler, Executive Director</p>
                  <p className="text-gray-600">Cofounder of Kickstarter, The Creative Independent, and Metalabel</p>
                </div>
                <div>
                  <p className="font-bold">Lena Imamura, Managing Director</p>
                  <p className="text-gray-600">Working artist and entrepreneur</p>
                </div>
                <div>
                  <p className="font-bold">Jennifer Arceneaux, Board Member</p>
                  <p className="text-gray-600">Veteran of arts nonprofits with background at the Sundance Institute</p>
                </div>
                <div>
                  <p className="font-bold">Mikael Moore, Board Member</p>
                  <p className="text-gray-600">CEO of Wondaland and manager of Janelle Monae</p>
                </div>
                <p className="mt-4">
                  Mikael and Jennifer have both been close collaborators on this project from the
                  beginning, bringing their practical experiences managing interdisciplinary artist
                  careers (in the case of Mikael) and working directly with artists and filmmakers
                  (in the case of Jennifer) to support this work.
                </p>
              </div>
            </Accordion>

            <Accordion title="Who funds this work?">
              <p>
                The Artist Corporations Foundation is supported by multiple arts philanthropic
                organizations, including the Rainin Foundation and unnamed donors. We'll announce
                more funders and support in the new year.
              </p>
            </Accordion>

            <Accordion title="How many people are interested in A-Corps?">
              <p>
                More than 4,000 artists and creators have signed up to become an A-Corp, and thousands
                more have watched the TED talk, are following our journey, and will join this movement
                as our impact grows. This feels less like building something from scratch and more like
                giving form to something that already wants to exist.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            More than 4,000 artists and creators are building economic and political power together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Create Your Profile
              </Button>
            </Link>
            <Link href="/projects/new">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Register a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
