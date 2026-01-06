'use client';

import { TinaCMS as Tina } from 'tinacms';
import config from '../tina/config';

export default function TinaCMS() {
  return (
    <div className="min-h-screen">
      <Tina config={config}>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Content Management</h1>
          <p className="text-gray-600">
            Loading Tina CMS... If this is your first time, you'll need to sign in with GitHub
            and configure your Tina Cloud account.
          </p>
        </div>
      </Tina>
    </div>
  );
}
