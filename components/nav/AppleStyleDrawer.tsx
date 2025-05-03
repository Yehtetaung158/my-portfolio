'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

export default function AppleTopNavWithButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-white text-black flex items-center justify-between px-6 z-50 shadow-md">
        <span className="text-xl font-semibold"></span>

        {/* Custom Apple-style Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative w-8 h-8 flex items-center justify-center group z-50"
        >
          <span
            className={clsx(
              'absolute w-6 h-0.5 bg-black transform transition-all duration-300',
              open ? 'rotate-45 translate-y-0' : '-translate-y-2'
            )}
          />
          <span
            className={clsx(
              'absolute w-6 h-0.5 bg-black transition-all duration-300',
              open ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={clsx(
              'absolute w-6 h-0.5 bg-black transform transition-all duration-300',
              open ? '-rotate-45 translate-y-0' : 'translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Top-down Drawer Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed top-0 left-0 w-full h-full bg-white text-black z-40"
          >
            <div className="flex flex-col items-center justify-center h-full text-2xl font-light space-y-6">
              <a href="#" onClick={() => setOpen(false)}>Home</a>
              <a href="#" onClick={() => setOpen(false)}>projects</a>
              <a href="#" onClick={() => setOpen(false)}>About</a>
              <a href="#" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


