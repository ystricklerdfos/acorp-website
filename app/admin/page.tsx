'use client';

import dynamic from 'next/dynamic';

const TinaCMS = dynamic(() => import('../../components/TinaCMS'), { ssr: false });

export default function AdminPage() {
  return <TinaCMS />;
}
