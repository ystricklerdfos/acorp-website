import Link from 'next/link';
import { notFound } from 'next/navigation';

// In a real app, this would fetch from database
// For now, we'll use static content
const blogPosts: Record<string, {
  title: string;
  date: string;
  author: string;
  content: React.ReactNode;
}> = {
  '2025-annual-letter': {
    title: '2025 Annual Letter',
    date: 'December 2025',
    author: 'Yancey Strickler',
    content: (
      <article className="prose prose-lg max-w-none">
        <blockquote className="text-2xl italic font-serif text-center my-8 border-none">
          "I used to be an anarchist and a hippie; now I'm an entrepreneur with fifteen employees." — Mike Kelley
        </blockquote>

        <p className="lead text-xl">
          Over the past 18 months, what started as an idea slowly and methodically transformed into the first steps of reality. The concept of a new economic baseline for creative people moved from hope to practicality as the work brought artists and creators, legal and corporate experts, and political and community leaders together around an ambitious new project.
        </p>

        <p>
          More than a year after its inception, this project has already gone farther than we thought possible. We're also learning how much farther this project has to go to answer the real gaps that exist in our creative communities.
        </p>

        <p>
          We've spent the past year embedded in this opportunity and challenge. Today we wanted to close the year by regrounding this project in the core reasons why it exists; in what it hopes to achieve; and the vision that compels us and many others to work on it.
        </p>

        <h2 className="font-serif text-3xl mt-12 mb-6">Why this project exists</h2>

        <p className="text-lg">
          The Artist Corporation exists for a simple reason: to make a strong economic and ownership foundation accessible, affordable, and the norm for every creative person.
        </p>

        <p>
          The infrastructure of business and ownership we have today wasn't designed for creative enterprises. The LLC, the C-Corp, and the S-Corp are structures built for traditional businesses with traditional assumptions about what value creation looks like. Creative practices don't fit neatly into these boxes. The result is that most artists, musicians, writers, and creators either operate informally (leaving themselves exposed) or squeeze into ill-fitting legal structures that don't serve their needs and aren't easy to understand.
        </p>

        <p>
          When creative people represented a small fraction of the population, this was excusable. But this is no longer the case. Today 48% of Americans report a personal creative practice, like writing, painting, or music; 40% of Millennials and Gen Z are "very interested" in a full-time career as a content creator; and 75% of them view it as a "viable career." The impact of creative and cultural output is growing across society. We see the growth of art and creative culture most powerfully in how people spend their time: increasingly watching, scrolling, and being inspired by creative and cultural work by friends, family, and professional artists and creators they love.
        </p>

        <p>
          But there's a gap between time spent by audiences and the economic reality for the people making that work. Some artists and content creators do become wealthy, but the overwhelming majority do not. Creative people are three times more likely than others to be gig workers and have multiple jobs. Just 13% of artists earn a full-time living from their work. Despite their flowers on-stage and on-screen, economic and professional precarity are real issues for creative people. Closing this gap at a systemic and structural level is why this work exists.
        </p>

        <h2 className="font-serif text-3xl mt-12 mb-6">What this project is doing</h2>

        <p>
          In the TED talk that first introduced Artist Corporations, we spoke specifically about a new legal form we sought to create to address this gap. Doing that work has been our primary focus for the past year, and we've made amazing progress. But we've also learned that the needs and opportunities to support creative people are bigger than an individual law. These are challenges that can and should be addressed at multiple levels that we will be contributing to in the coming years.
        </p>

        <h3 className="font-serif text-2xl mt-8 mb-4">The A-Corp law</h3>

        <p>
          Our primary focus has been drafting legislation, meeting with political leaders and allies, and doing the leg work that it takes to create law in America. This work was entirely new to us, but something we enjoyed throwing ourselves into with the support of leading legal authorities that could translate the goals of this project into actionable statutes.
        </p>

        <p>
          Initially this work was focused on research with artists and creators, and with an exceptional legal team. This led to a clear set of needs and opportunities for how the corporate code could be evolved to support creative businesses.
        </p>

        <p>
          The TED Talk we gave this past April reflected this first leg of our work. It mapped where some of the key gaps exist today for creative people, and outlined how a new corporate structure could address them. In particular, the A-Corp creates:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-6">
          <li>A new legal form designed specifically for creative people and artistic purposes</li>
          <li>An understandable structure that reflects how creative people operate</li>
          <li>Access to multiple forms of revenue and income sources</li>
          <li>Powerful tools of collective ownership like the creation of shares, and more sophisticated tools for owning and valuing intellectual property</li>
          <li>A path to better health care for creative people</li>
        </ul>

        <p>
          After giving the TED talk we spoke with many people who were inspired by the A-Corp idea and were interested in collaborating with us. Quite a few of those people, coincidentally, were located in Colorado — a place we had long considered as one of the first A-Corp states. Colorado has a history of embracing new corporate forms (PBCs and co-ops) and, we learned, it also has one of the highest number of artists per capita of any state in America, and employs more than 160,000 people in full-time creative and cultural jobs.
        </p>

        <p>
          In 2025, we made four trips to the state to meet with arts, culture, and political leaders. We found an exceptional, welcoming community open to showing us the ropes. Thanks to the support of the many lawyers, political leaders, and arts and culture leaders we collaborated with, we now have:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-6">
          <li>The first draft of a law completed, which we will publicly share soon</li>
          <li>A fiscal and economic analysis of the bill completed by a former budget director</li>
          <li>A sponsor for our bill: Senator Jeff Bridges (no, not that one) of Colorado's 4th District, and Chair of the Joint Budget Committee in the Colorado Senate</li>
          <li>Working relationships with the Governor's office and other key stakeholders and agencies who are reviewing our work</li>
        </ul>

        <p>
          Each of these on their own was a major milestone. To have reached all four in our first year felt like a validation of this work and its importance to the creative community.
        </p>

        <p>
          In the new year we will take the next step with the A-Corp legislation. Initially by sharing it publicly for feedback to make it better, and then likely introducing it in the 2026 legislative session in Colorado. We look forward to seeing what all the process reveals, while also maintaining a long-term outlook on this work. With the first Public Benefit Corporation law in Colorado, for example, it took multiple attempts for the legislation to pass. We're optimistic about the A-Corp legislation, but also appreciate how important it is to get multiple constituencies on-board with the work, and want to respect, not shortcut, the process.
        </p>

        <p>
          Colorado is our primary focus, but other states, nations, and government agencies have also reached out. Other bills based on the potential Colorado legislation are beginning to go into motion. We've been pleasantly surprised to discover that A-Corps are finding genuine interest among policymakers in creating more systematic and economic support for their creative communities.
        </p>

        <h3 className="font-serif text-2xl mt-8 mb-4">The power and limits of law</h3>

        <p>
          Passing legislation is the initial change we've been focused on. However we do not believe legislation alone can solve the challenges creative people face. A law can make a better structure, but it doesn't help creative people become more economically successful or educated, nor does it make them more powerful and capable on their own. This year we identified two other key areas we believe the Artist Corporations project should help address.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Administrative foundations for creative people</h4>

        <p>
          We've heard from policymakers a strong desire to create policies that would serve their creative communities, and especially protect them in the face of rapidly rising costs of living, but are unsure how or where to start.
        </p>

        <p>
          One idea we've been circulating that's started to gain traction: to create something like an Artist ID, or an artist-specific EIN number, that would allow policymakers to craft programs that are specifically geared towards the creative community. The Artist EIN could support:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-6">
          <li>Affordable housing policies for creative people by giving tax credits to landlords who rent affordable spaces to artists and tax credits to artists and their studios in creative districts</li>
          <li>Tax breaks on creative materials for artists and creative people if you show your Artist ID</li>
          <li>Pre-qualify who could start an A-Corp using the Artist ID as the foundational layer</li>
          <li>Better measurement and tracking of artistic and creative work on local economies and communities</li>
        </ul>

        <p>
          The Artist EIN is one example of an administrative tool that could help creative people gain clearer standing in the systems that govern economic life, and another example of a potential change the A-Corp work can help create.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">Financial, legal, and operational tools for creative people</h4>

        <p>
          The gap creative people face isn't just legal, it's operational and educational. Creative people tend to carry an anxiety around money and managing the practicalities of our work. An anxiety that does not serve us well.
        </p>

        <p>
          This is something we also wish to practically address. Next year the Artist Corporations website will evolve into a toolkit that will help any creative person see, touch, and adjust the operational and financial structure of their project, and to connect with peers and collaborators who can do the same.
        </p>

        <p>
          We'll be reusing and integrating many of the shared economic tools we've created for Metalabel, including shared treasuries, payment splits, and transparent financial ledgers that collaborators can see and use together. These tools will be the foundation for a wider suite of services and tools to help creative people level up their practices.
        </p>

        <p>
          To cite one example, we'll be working with legal authorities to create shared legal templates for new business formation, accepting investment, collective ownership, and collaborative work that any creative person can use.
        </p>

        <h4 className="font-semibold text-xl mt-6 mb-3">A growing creative community</h4>

        <p>
          These three layers of work — the A-Corp law, administrative changes, and financial and legal tools for creative people — will also help bring together a vibrant community of creative people from around the world whose stories and achievements we plan to celebrate and share using our megaphone in the coming year.
        </p>

        <p>
          All of this work together helps set the stage for the larger changes creative people need.
        </p>

        <h2 className="font-serif text-3xl mt-12 mb-6">What happens near term</h2>

        <p>
          For all our enthusiasm, we also have to be realistic: this work is not overnight. Even if every one of our 2026 initiatives was successful, we would not expect to see instant change. This work will take time.
        </p>

        <p>
          The immediate outcomes will be about increasing efficiency and understanding more than creating a totally new economic reality for creative people. Instead, we first must create new baselines to build on and educate ourselves from, and establish ourselves more clearly as a constituency whose needs must be considered locally, regionally, nationally, and internationally.
        </p>

        <p>
          But we see huge benefits even in just this first phase of the work.
        </p>

        <p>
          As creative people become more comfortable financially (in both senses of the word), we'll see an increase in support flowing to us from investors, government agencies, and the public at large. Already the public and our political leaders show how much they value creative work through their time and attention. An increasing financial and operational sophistication will increase the ability of creative people to make the most of it.
        </p>

        <p>
          In the next three to five years we hope to see a rising tide of education, understanding, and resources shifting into the creative sphere, matched with increasing care and appreciation for the importance of creative people to our economies and communities at large.
        </p>

        <h2 className="font-serif text-3xl mt-12 mb-6">What happens long term</h2>

        <p>
          When we look past the next five years and imagine a world where A-Corps have taken hold and creative people have graduated in how we operate and what we're capable of, we see real transformational change. A change so big we think it will evolve capitalism itself.
        </p>

        <p>
          Today we associate capitalism with the C-Corp economy that we know well. This is the current corporate focus on shareholder maximization and companies deprioritizing employees, the public, and anything else that will increase the profits that they make. This is what the C-Corp economy is about.
        </p>

        <p>
          The A-Corp economy is something altogether different. There's a Virgil Abloh quote from the very end of his life that tells us exactly what the A-Corp economy will be. He wrote: "I have realized one thing at the end: it's all worth nothing compared to the freedom to express the next idea."
        </p>

        <p className="text-xl font-medium my-8">
          This is the primary goal of the A-Corp economy: the chance to express and make the next idea.
        </p>

        <p>
          The C-Corp economy maximizes shareholder value over all else, producing the world we know now. The A-Corp economy will maximize making more work, not maximizing the amount of money you make from it.
        </p>

        <div className="bg-muted p-8 rounded-lg my-8">
          <p className="text-xl font-serif text-center mb-4">The mantra of the C-Corp economy: <strong>make more profit.</strong></p>
          <p className="text-xl font-serif text-center">The mantra of the A-Corp economy: <strong>make another one.</strong></p>
        </div>

        <p>
          It's a small but significant change. Because over time, the A-Corp economy will start to compete with the C-Corp economy. Consumers will face a choice between the kind of world they want to see: one of value extraction, which C-Corps continue to perfect, or one of creative production, which A-Corps exist to manifest.
        </p>

        <p>
          This is already showing up in the data. Younger consumers report trusting creator-led brands more than traditional ones. Creator-led brands greatly dwarf the online followings of traditional ones. The rise of the A-Corp economy will help a new type of capitalism and economic behavior to emerge.
        </p>

        <p>
          Ultimately, this deep underlying difference will open the door for the A-Corp economy to outcompete the C-Corp economy in the eyes of the public. We will see competition between mindsets and senses of value. A frontier in which creative people, creative motivations, and creative visions will have real advantages over our financially obsessed counterparts in the eyes of the public.
        </p>

        <h2 className="font-serif text-3xl mt-12 mb-6">We are all doing this</h2>

        <p>
          This is a bold and ambitious vision that started with a simple idea and has already grown into much more.
        </p>

        <p>
          Late in 2025, we took the next steps towards formalizing this vision by starting the Artist Corporations Foundation: a nonprofit dedicated to building economic and political power for creative people. This work is supported by multiple arts philanthropic organizations, including the Rainin Foundation and unnamed donors. We'll announce more funders and support in the new year.
        </p>

        <p>
          The initial Executive Director of the Artist Corporation Foundation is Yancey Strickler. The organization's board of directors includes Jennifer Arceneaux (a veteran of arts nonprofits) and Mikael Moore (CEO, Wondaland, and manager of Janelle Monae). Mikael and Jennifer have both been close collaborators on this project from the beginning, bringing their practical experiences managing artistic interdisciplinary artist careers (in the case of Mikael) and working directly with artists and filmmakers (in the case of Jennifer and her background at the Sundance Institute, where we first met) to support this work.
        </p>

        <p>
          Ultimately we're here to represent a much wider community of support. More than 4,000 artists and creators have signed up to become an A-Corp, and thousands more have watched the TED talk, are following our journey, and will join this movement as our impact grows.
        </p>

        <p className="text-xl font-medium my-8">
          The original TED talk closed with a line that no longer feels hopeful — it feels earned. We think about it again today:
        </p>

        <blockquote className="text-2xl italic font-serif text-center my-8 border-none">
          Artists don't need pity. Artists need power. And together, we're going to build it.
        </blockquote>

        <p className="text-xl mt-12">
          Thank you for a great year. Here's to many more to come.
        </p>

        <p className="text-xl font-medium mt-8">
          Yancey
        </p>
      </article>
    ),
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-accent hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-secondary space-x-4">
            <span>{post.author}</span>
            <span>•</span>
            <time>{post.date}</time>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {post.content}
        </div>

        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Join the Movement</h3>
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
