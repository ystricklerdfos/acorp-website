'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/shared/Button';
import { useToast } from '@/components/ui/toast';

const profileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(3, 'Username must be at least 3 characters').optional(),
  bio: z.string().max(280, 'Bio must be 280 characters or less').optional(),
  location: z.string().optional(),
  website: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type ProfileFormData = z.infer<typeof profileSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

export default function ProfileManagementPage() {
  const { data: session } = useSession();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPublic, setShowPublic] = useState(true);
  const [showAsCorp, setShowAsCorp] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/users/me');
      if (response.ok) {
        const data = await response.json();
        reset({
          name: data.name || '',
          username: data.profile?.username || '',
          bio: data.profile?.bio || '',
          location: data.profile?.location || '',
          website: data.profile?.website || '',
        });
        setShowAsCorp(data.profile?.showABusiness || false);
      }
    } catch (error) {
      addToast('Failed to load profile', 'error');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    setSaving(true);
    try {
      const response = await fetch('/api/users/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          profile: {
            username: data.username,
            bio: data.bio,
            location: data.location,
            website: data.website,
            showABusiness: showAsCorp,
          },
        }),
      });

      if (response.ok) {
        addToast('Profile updated successfully', 'success');
      } else {
        addToast('Failed to update profile', 'error');
      }
    } catch (error) {
      addToast('An error occurred', 'error');
    } finally {
      setSaving(false);
    }
  };

  const onPasswordSubmit = async (data: PasswordFormData) => {
    try {
      const response = await fetch('/api/users/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });

      if (response.ok) {
        addToast('Password updated successfully', 'success');
        resetPassword();
      } else {
        const error = await response.json();
        addToast(error.error || 'Failed to update password', 'error');
      }
    } catch (error) {
      addToast('An error occurred', 'error');
    }
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
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Profile Settings</h1>
            <p className="text-sm text-secondary mt-1">Manage your account and public profile</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-2 sticky top-8">
              <nav className="space-y-1">
                <button className="w-full text-left px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-sm">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Account
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Privacy
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-lg text-foreground font-medium text-sm">
                  Notifications
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Basic Information</h2>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  {...register('name')}
                  error={errors.name?.message}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-sm">
                      acorp.org/
                    </span>
                    <input
                      {...register('username')}
                      className="w-full pl-24 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                  )}
                  <p className="text-xs text-secondary mt-1">This will be your public profile URL</p>
                </div>

                <Textarea
                  label="Bio"
                  {...register('bio')}
                  error={errors.bio?.message}
                  rows={4}
                  helperText="Brief description for your public profile. Max 280 characters."
                />

                <Input
                  label="Location"
                  {...register('location')}
                  error={errors.location?.message}
                  placeholder="City, State/Country"
                />

                <Input
                  label="Website"
                  type="url"
                  {...register('website')}
                  error={errors.website?.message}
                  placeholder="https://yourwebsite.com"
                />

                <div className="pt-4">
                  <Button type="submit" variant="primary" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </div>
            </form>

            {/* Privacy Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Privacy Settings</h2>
              <div className="space-y-4">
                <Toggle
                  label="Public Profile"
                  description="Make your profile visible to anyone on the internet"
                  checked={showPublic}
                  onCheckedChange={setShowPublic}
                />
                <Toggle
                  label="Show as A-Corp Business"
                  description="Display your profile in the A-Corp directory"
                  checked={showAsCorp}
                  onCheckedChange={setShowAsCorp}
                />
                <Toggle
                  label="Show Projects Publicly"
                  description="Display your projects on your public profile"
                  checked={showProjects}
                  onCheckedChange={setShowProjects}
                />
              </div>
            </div>

            {/* Password Change */}
            <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Password</h2>
              <div className="space-y-4">
                <Input
                  type="password"
                  label="Current Password"
                  {...registerPassword('currentPassword')}
                  error={passwordErrors.currentPassword?.message}
                  autoComplete="current-password"
                />

                <Input
                  type="password"
                  label="New Password"
                  {...registerPassword('newPassword')}
                  error={passwordErrors.newPassword?.message}
                  autoComplete="new-password"
                />

                <Input
                  type="password"
                  label="Confirm New Password"
                  {...registerPassword('confirmPassword')}
                  error={passwordErrors.confirmPassword?.message}
                  autoComplete="new-password"
                />

                <Button type="submit" variant="primary">
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
