import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';

export default function FiscalAssessment() {
  return (
    <BlogPostLayout
      title="Economic and Fiscal Impact Assessment"
      author="Artist Corporations Foundation"
      date="2025"
      category="Fiscal Analysis"
    >
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        Summary of economic and fiscal impact findings of the Artist Corporation proposal
      </p>

      <h2>Fiscal Impact</h2>
      <p>
        The fiscal impact of the Artist Corporation (A-Corp) proposal will be minimal. The most
        relevant impact will likely mimic House Bill 13-1388, which created Public Benefit
        Corporations.
      </p>
      <p>
        With this proposal, the new expenses will likely be related to programming costs for the
        impact on tax forms. New revenue will be related to the filing fees established in the bill. If
        the fees are like existing fees at the Colorado Secretary of State, the impact on revenue will
        be small.
      </p>
      <p>
        Over time, there are strategies available to minimize expenditure and revenue impacts on
        the General Fund.
      </p>

      <h2>Economic Impact</h2>
      <p>
        The exact economic impact on the bill is not easy to quantify. This is because of the lack of
        precision around estimating the activity that would not occur but for the bill.
      </p>

      <h3>Qualitative Economic Benefits</h3>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-gray-900 pl-6">
          <h4 className="text-xl font-bold mb-3">Creative Industries in Colorado</h4>
          <p className="text-gray-700">
            Creative industries are significant in Colorado. From the Colorado OEDIT annual
            report: "In 2022, the U.S. Bureau of Economic Analysis (BEA) reported that arts and
            cultural production accounted for <strong>$18 billion and 3.7% of the Colorado economy</strong>,
            contributing <strong>104,163 jobs and $10.1 billion in compensation</strong>."
          </p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6">
          <h4 className="text-xl font-bold mb-3">Increased Collaboration</h4>
          <p className="text-gray-700">
            To the extent the new structure allows more collaboration among creative workers
            or business interests, this could distinguish Colorado further in creative economic
            activity.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6">
          <h4 className="text-xl font-bold mb-3">Enhanced Purchasing Power for Gig Workers</h4>
          <p className="text-gray-700">
            Many creative workers are "gig" workers and with this structure they could achieve
            more purchasing power for important services, notably health care insurance and
            business insurance.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6">
          <h4 className="text-xl font-bold mb-3">Administrative Efficiency</h4>
          <p className="text-gray-700">
            The A-Corp designation allows for all the benefits of existing legal structures to be
            accessed with the same administrative efficiency.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6">
          <h4 className="text-xl font-bold mb-3">Increased Liquidity</h4>
          <p className="text-gray-700">
            The A-Corp structure allows for increased liquidity of ownership shares. By
            increasing liquidity, some academic research indicates that this could raise the
            market value of a given asset.
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gray-50 rounded-lg not-prose">
        <h3 className="text-2xl font-bold mb-4">Key Findings Summary</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Fiscal Impact</h4>
            <p className="text-gray-700">
              Minimal impact on state budget, similar to Public Benefit Corporation legislation
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Economic Contribution</h4>
            <p className="text-gray-700">
              $18B annual impact from creative industries in Colorado
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Job Creation</h4>
            <p className="text-gray-700">
              104,163 jobs supported by arts and cultural production
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Worker Compensation</h4>
            <p className="text-gray-700">
              $10.1B in compensation to creative workers annually
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 border border-gray-200 rounded-lg not-prose">
        <h3 className="text-xl font-bold mb-3">Learn More</h3>
        <div className="space-y-3">
          <div>
            <Link href="/programs/law" className="text-gray-900 hover:underline font-medium">
              Read about the A-Corp Law
            </Link>
            <p className="text-sm text-gray-600">
              Detailed overview of the Colorado Artist Corporation Act
            </p>
          </div>
          <div>
            <Link href="/programs/law/draft" className="text-gray-900 hover:underline font-medium">
              View the full draft legislation
            </Link>
            <p className="text-sm text-gray-600">
              Complete text of the proposed Colorado Revised Statutes
            </p>
          </div>
          <div>
            <Link href="/updates" className="text-gray-900 hover:underline font-medium">
              Back to all updates
            </Link>
            <p className="text-sm text-gray-600">
              Latest news and progress reports
            </p>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
