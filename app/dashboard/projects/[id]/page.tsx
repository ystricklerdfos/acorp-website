'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  name: string;
  description: string;
  entityType: string;
  genre: string[];
  location?: string;
  status: string;
  catalogueData?: any[];
  createdAt: string;
  updatedAt: string;
  members?: ProjectMember[];
  ownership?: OwnershipBreakdown[];
  financialModel?: FinancialModel;
  documents?: Document[];
}

interface ProjectMember {
  id: string;
  name: string;
  email?: string;
  role: string;
}

interface OwnershipBreakdown {
  id: string;
  memberName: string;
  percentage: number;
  notes?: string;
}

interface FinancialModel {
  annualIncome: number;
  equity: number;
  annualPayroll: number;
  valuation?: number;
}

interface Document {
  id: string;
  type: string;
  title: string;
  status: string;
  createdAt: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/projects/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-secondary">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: 'default' | 'success' | 'warning' | 'danger' | 'info' } = {
      DRAFT: 'warning',
      REGISTERED: 'info',
      ACTIVE: 'success',
      ARCHIVED: 'default',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/dashboard" className="text-sm text-secondary hover:text-foreground mb-2 inline-block">
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
              <p className="text-secondary mt-1">{project.entityType}</p>
            </div>
            <div className="flex items-center gap-4">
              {getStatusBadge(project.status)}
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                Edit Project
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary hover:text-foreground'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'team'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary hover:text-foreground'
              }`}
            >
              Team & Ownership
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'financials'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary hover:text-foreground'
              }`}
            >
              Financials
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'documents'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary hover:text-foreground'
              }`}
            >
              Documents
            </button>
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Project Description</h2>
                <p className="text-secondary">{project.description}</p>
              </div>

              {project.catalogueData && project.catalogueData.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Catalogue</h2>
                  <div className="space-y-4">
                    {project.catalogueData.map((item: any, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                        <div className="w-12 h-12 rounded bg-gradient-to-br from-purple-500 to-pink-600 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-secondary">
                            {item.type} • {item.year}
                          </p>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline mt-1 inline-block"
                            >
                              View →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-foreground mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-secondary">Entity Type</div>
                    <div className="font-medium">{project.entityType}</div>
                  </div>
                  <div>
                    <div className="text-secondary">Genre</div>
                    <div className="font-medium">{project.genre.join(', ') || 'Not specified'}</div>
                  </div>
                  {project.location && (
                    <div>
                      <div className="text-secondary">Location</div>
                      <div className="font-medium">{project.location}</div>
                    </div>
                  )}
                  <div>
                    <div className="text-secondary">Created</div>
                    <div className="font-medium">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Team Members</h2>
                <button className="text-sm text-primary hover:underline">+ Add Member</button>
              </div>
              {project.members && project.members.length > 0 ? (
                <div className="space-y-3">
                  {project.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{member.name}</div>
                        <div className="text-sm text-secondary">{member.role}</div>
                        {member.email && (
                          <div className="text-xs text-secondary">{member.email}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary text-center py-8">No team members yet</p>
              )}
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Ownership Breakdown</h2>
              </div>
              {project.ownership && project.ownership.length > 0 ? (
                <div className="space-y-3">
                  {project.ownership.map((owner) => (
                    <div key={owner.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-semibold text-foreground">{owner.memberName}</div>
                        {owner.notes && <div className="text-sm text-secondary">{owner.notes}</div>}
                      </div>
                      <div className="text-2xl font-bold text-primary">{owner.percentage}%</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-secondary text-center py-8">No ownership breakdown defined</p>
              )}
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.financialModel ? (
              <>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="text-sm text-secondary mb-2">Annual Income</div>
                  <div className="text-3xl font-bold text-foreground">
                    ${project.financialModel.annualIncome.toLocaleString()}
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="text-sm text-secondary mb-2">Equity</div>
                  <div className="text-3xl font-bold text-foreground">
                    ${project.financialModel.equity.toLocaleString()}
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="text-sm text-secondary mb-2">Annual Payroll</div>
                  <div className="text-3xl font-bold text-foreground">
                    ${project.financialModel.annualPayroll.toLocaleString()}
                  </div>
                </div>
                {project.financialModel.valuation && (
                  <div className="lg:col-span-3 bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-sm text-secondary mb-2">Estimated Valuation</div>
                    <div className="text-4xl font-bold text-primary">
                      ${project.financialModel.valuation.toLocaleString()}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="lg:col-span-3 bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-secondary mb-4">No financial data yet</p>
                <Link href="/dashboard/financial">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                    Run Financial Assessment
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Documents</h2>
              <Link href="/dashboard/documents">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm">
                  + Generate Document
                </button>
              </Link>
            </div>
            {project.documents && project.documents.length > 0 ? (
              <div className="space-y-3">
                {project.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">📄</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{doc.title}</div>
                        <div className="text-sm text-secondary">
                          {doc.type} • {new Date(doc.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <Badge variant={doc.status === 'GENERATED' ? 'success' : 'warning'}>
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary text-center py-8">No documents generated yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
