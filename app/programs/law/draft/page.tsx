import Link from 'next/link';

export default function LawDraftPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <Link
          href="/programs/law"
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to A-Corp Law
        </Link>

        <div className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-sm font-medium text-yellow-800 mb-2">Draft Legislation</p>
            <p className="text-sm text-yellow-700">
              This is a working draft of the Colorado Artist Corporation Act. It is currently under review and will be refined based on feedback from legal experts, artists, and stakeholders before introduction in the 2026 legislative session.
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl font-normal mb-4 text-gray-900">
            Colorado Revised Statutes
          </h1>
          <div className="text-lg text-gray-600 space-y-1">
            <p>Title 7. Corporations and Associations</p>
            <p>Article 80. Limited Liability Companies</p>
            <p className="font-medium">Part 12. Colorado Artist Corporation Act</p>
          </div>
        </div>

        <article className="legal-document space-y-10">
          {/* Section 7-80-1201 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">7-80-1201. Short title</h2>
            <p className="text-gray-700 leading-relaxed">
              This part 12 may be cited as the "Colorado Artist Corporation Act" or "CO-ACA".
            </p>
          </section>

          {/* Section 7-80-1202 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">7-80-1202. Definitions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As used in this part 12, unless the context otherwise requires:
            </p>
            <div className="space-y-4 pl-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Artist"</strong> means the creator of any work of visual, graphic, or performing art of any media, including, but not limited to, painting, printing, drawing, sculpture, craft, photography, music, writing, film, or performance.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Artist corporation" or "A Corp"</strong> means a limited liability company organized under this part 12 that meets the requirements of section 7-80-1203.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Artistic mission"</strong> means a specific creative or artistic or educational purpose, including but not limited to the creation, development, production, distribution, exhibition, or performance of artistic or creative works, or operations conducted in furtherance of the arts and cultural contributions.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Artistic work"</strong> means the creative or artistic works, projects, or activities created, developed, produced, distributed, exhibited or performed pursuant to or in furtherance of the artistic mission.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Governing body"</strong> means the members, manager, or board of managers responsible for the management and governance of an artist corporation, as specified in the articles of organization or operating agreement.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Long-form articles"</strong> means the prescribed form of articles of organization for an artist corporation that includes provisions allowing incorporators to elect governance, ownership, and other structural terms through check-box and fill-in-the-blank features as provided in section 7-80-1205.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Operating agreement"</strong> has the same meaning as set forth in section 7-80-102(11).
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Public benefit"</strong> means a positive effect (or reduction of negative effects) on one or more categories of persons, entities, communities, or interests (other than members in their capacities as members) including, but not limited to, effects of an artistic, charitable, cultural, economic, educational, environmental, literary, medical, religious, scientific, or technological nature.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>"Public benefit artist corporation"</strong> means an artist corporation that has elected to be subject to the public benefit provisions set forth in sections 7-80-1213 through 7-80-1216.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7-80-1203 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">7-80-1203. Artist corporation - Requirements</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 leading-relaxed mb-2">(1) An artist corporation is a limited liability company that:</p>
                <ul className="list-none pl-6 space-y-2">
                  <li className="text-gray-700">(a) Is organized under this part 12;</li>
                  <li className="text-gray-700">(b) Has a stated artistic mission set forth in its articles of organization or operating agreement; and</li>
                  <li className="text-gray-700">(c) Is founded and owned by one or more artists who own more than fifty-one percent (51%) of all fully diluted voting securities.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  (2) An artist corporation may be organized for any lawful purpose permitted for limited liability companies under this article 80, provided that such purpose shall include or materially further the artistic mission.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  (3) An artist corporation may specify in its articles of organization or operating agreement that:
                </p>
                <ul className="list-none pl-6 space-y-2">
                  <li className="text-gray-700">(a) The artistic mission has primacy over financial objectives;</li>
                  <li className="text-gray-700">(b) The artistic mission and financial objectives are of equal priority; or</li>
                  <li className="text-gray-700">(c) Any other priority or balancing between artistic mission and financial objectives.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Remaining sections... */}
          <div className="bg-gray-50 p-8 rounded-lg my-12">
            <p className="text-center text-gray-700 mb-4">
              This page shows a preview of the legislation. The full draft includes 25 sections covering all aspects of A-Corps.
            </p>
            <p className="text-center text-sm text-gray-600">
              For the complete draft legislation, including all provisions on governance, intellectual property, taxation, and dissolution, please <Link href="/contact" className="text-accent hover:underline">contact us</Link> or <Link href="/dfos" className="text-accent hover:underline">join DFOS</Link> to receive updates.
            </p>
          </div>

          {/* Key Sections Summary */}
          <section className="border-t pt-10">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">Additional Sections</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>7-80-1204.</strong> Application of Article 80</p>
              <p><strong>7-80-1205.</strong> Long-form articles of organization</p>
              <p><strong>7-80-1206.</strong> Ownership of equity</p>
              <p><strong>7-80-1207.</strong> Governing body</p>
              <p><strong>7-80-1208.</strong> Governance principles</p>
              <p><strong>7-80-1209.</strong> Acceptance of capital</p>
              <p><strong>7-80-1210.</strong> Fiduciary duties</p>
              <p><strong>7-80-1211.</strong> Intellectual property - Contributions to artist corporation</p>
              <p><strong>7-80-1212.</strong> Intellectual property - Generated during membership</p>
              <p><strong>7-80-1213.</strong> Public benefit artist corporation - Election</p>
              <p><strong>7-80-1214.</strong> Public benefit artist corporation - Duties of members and managers</p>
              <p><strong>7-80-1215.</strong> Separation of economic rights from governance and control</p>
              <p><strong>7-80-1216.</strong> Public benefit artist corporation - Annual statements</p>
              <p><strong>7-80-1217.</strong> Member transition</p>
              <p><strong>7-80-1218.</strong> Tax treatment</p>
              <p><strong>7-80-1219.</strong> Reporting requirements</p>
              <p><strong>7-80-1220.</strong> Limitation on liability - No private right of action</p>
              <p><strong>7-80-1221.</strong> Dissolution and winding up</p>
              <p><strong>7-80-1222.</strong> Effect on other limited liability companies</p>
              <p><strong>7-80-1223.</strong> Formation and maintenance fees</p>
              <p><strong>7-80-1224.</strong> Jurisdiction - Foreign artists</p>
              <p><strong>7-80-1225.</strong> Effective date</p>
            </div>
          </section>

          {/* Drafting Notes */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Drafting Notes and Questions for Review</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>This legislation is under active development. Key areas being refined include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Intellectual property valuation mechanisms and reversionary rights</li>
                <li>Definition of "Artists" for appropriate scope</li>
                <li>Tax credit provisions (federal and state)</li>
                <li>Governance formality requirements for different organization sizes</li>
                <li>Member transition default rules</li>
                <li>Treatment of IP upon dissolution with liabilities</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-muted rounded-lg text-center">
          <h3 className="text-2xl font-normal mb-4">Help Shape This Legislation</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Your feedback matters. Sign the pledge, share your story, and join the community building this new legal structure for creative people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pledge" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition-all">
              Sign the Pledge
            </Link>
            <Link href="/share-story" className="inline-block px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all">
              Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
