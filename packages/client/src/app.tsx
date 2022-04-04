import React from 'react';
import User from './user';
import Room from './room';

import './index.scss';

export default function App() {
  return (
    <div className="min-h-screen bg-sky-200 py-4 flex relative overflow-hidden">
      <div className="relative overflow-hidden px-6 py-8 bg-white shadow-xl ring-1 ring-gray-900/5 max-w-sm md:max-w-2xl lg:max-w-4xl w-full mx-auto rounded-lg">
        <User />
        <Room />
      </div>
    </div>
  );
}
