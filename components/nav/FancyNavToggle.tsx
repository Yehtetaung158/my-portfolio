'use client';

import { useState } from 'react';

export default function FancyNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      aria-label="Toggle Menu"
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
    >
      <div className="relative w-8 h-8">
        <span
          className={`absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out 
            ${open ? 'rotate-45 top-3.5' : 'top-2 group-hover:scale-x-110'}`}
        />
        <span
          className={`absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out 
            ${open ? 'opacity-0' : 'top-4 group-hover:scale-x-90'}`}
        />
        <span
          className={`absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out 
            ${open ? '-rotate-45 top-3.5' : 'top-6 group-hover:scale-x-110'}`}
        />
      </div>
    </button>
  );
}
