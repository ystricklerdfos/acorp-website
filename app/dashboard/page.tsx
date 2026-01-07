'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  name: string;
  description: string;
  entityType: string;
  genre: string[];
  status: string;
  catalogueData?: any;
  financialModel?: { valuation?: number };
  documents?: any[];
  members?: any[];
  ownership?: any[];
}

interface UserProfile {
  bio?: string;
  location?: string;
  website?: string;
}

export default function DashboardOverview() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [stats, setStats] = useState({
    projectCount: 0,
    documentCount: 0,
    totalValuation: 0,
    teamMembers: 0,
  });

  useEffect(() => {
    fetchProjects();
    fetchUserProfile();

    // Check if user just signed up (show welcome modal)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('welcome') === 'true') {
      setShowWelcome(true);
      // Remove the query param
      window.history.replaceState({}, '', '/dashboard');
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);

        // Calculate stats
        const projectCount = data.length;
        const documentCount = data.reduce((acc: number, p: Project) => acc + (p.documents?.length || 0), 0);
        const totalValuation = data.reduce((acc: number, p: Project) => acc + (p.financialModel?.valuation || 0), 0);
        const teamMembers = data.reduce((acc: number, p: Project) => acc + (p.members?.length || 0), 0);

        setStats({
          projectCount,
          documentCount,
          totalValuation,
          teamMembers,
        });
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/user/profile');
      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: 'default' | 'success' | 'warning' | 'danger' | 'info' } = {
      DRAFT: 'warning',
      REGISTERED: 'info',
      ACTIVE: 'success',
      ARCHIVED: 'default',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Modal */}
      {showWelcome && projects.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome to Your Dashboard!
              </h2>
              <p className="text-secondary text-lg">
                Your account has been created successfully
              </p>
            </div>

            {projects[0] && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Your Project: {projects[0].name}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-secondary">Entity Type:</span>
                    <div className="font-medium">{projects[0].entityType}</div>
                  </div>
                  <div>
                    <span className="text-secondary">Genre:</span>
                    <div className="font-medium">{projects[0].genre.join(', ') || 'Not specified'}</div>
                  </div>
                  <div>
                    <span className="text-secondary">Team Members:</span>
                    <div className="font-medium">{projects[0].members?.length || 0}</div>
                  </div>
                  <div>
                    <span className="text-secondary">Status:</span>
                    <div className="font-medium">{projects[0].status}</div>
                  </div>
                </div>
                {projects[0].description && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-secondary text-sm">Description:</span>
                    <p className="text-sm mt-1">{projects[0].description}</p>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-secondary">Next Steps:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Explore your dashboard and project details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Connect external accounts (Spotify, Stripe, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Run the fiscal assessment tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Generate legal documents for your entity</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowWelcome(false)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/profile" className="text-sm text-secondary hover:text-foreground">
              Profile
            </Link>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              {session?.user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}
          </h2>
          <p className="text-secondary">
            Here's what's happening with your artist corporation
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Projects</div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm">📁</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{stats.projectCount}</div>
            <div className="text-xs text-secondary">
              {projects.filter(p => p.status === 'ACTIVE').length} active,{' '}
              {projects.filter(p => p.status === 'DRAFT').length} draft
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Documents</div>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">📄</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{stats.documentCount}</div>
            <div className="text-xs text-secondary">Across all projects</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Total Valuation</div>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm">💰</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">
              ${(stats.totalValuation / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-secondary">Combined projects</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-secondary font-medium">Team Members</div>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-sm">👥</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{stats.teamMembers}</div>
            <div className="text-xs text-secondary">Across all projects</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Projects List */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Your Projects</h3>
                <Link href="/dashboard/projects/new" className="text-sm font-medium text-accent hover:underline">
                  + New Project
                </Link>
              </div>

              {projects.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">📁</div>
                  <h3 className="font-semibold text-foreground mb-2">No projects yet</h3>
                  <p className="text-sm text-secondary mb-4">
                    Create your first artist corporation project
                  </p>
                  <Link href="/dashboard/projects/new">
                    <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-medium text-sm">
                      Create Project
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      href={`/dashboard/projects/${project.id}`}
                      className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-gray-100 cursor-pointer transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{project.name}</div>
                        <div className="text-sm text-secondary">{project.entityType}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">
                          ${((project.financialModel?.valuation || 0) / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-secondary">Valuation</div>
                      </div>
                      {getStatusBadge(project.status)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/dashboard/projects/new">
                  <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm">
                    Register New Project
                  </button>
                </Link>
                <Link href="/dashboard/financial">
                  <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                    Calculate Finances
                  </button>
                </Link>
                <Link href="/dashboard/documents">
                  <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                    Generate Document
                  </button>
                </Link>
                <Link href="/dashboard/profile">
                  <button className="w-full py-2 px-4 bg-white border border-gray-300 text-foreground rounded-lg hover:bg-muted transition font-medium text-sm">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Getting Started Guide
                  </div>
                  <div className="text-xs text-secondary">
                    Learn how to set up your first A-Corp
                  </div>
                </a>
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Legal Templates
                  </div>
                  <div className="text-xs text-secondary">
                    Browse available documents
                  </div>
                </a>
                <a href="/community" className="block p-3 bg-muted rounded-lg hover:bg-gray-100 transition">
                  <div className="font-semibold text-sm text-foreground mb-1">
                    Community Forum
                  </div>
                  <div className="text-xs text-secondary">
                    Connect with other artists
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
