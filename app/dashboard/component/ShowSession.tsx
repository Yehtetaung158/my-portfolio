'use client';
import { useStore } from '@/store/store';
import React from 'react';

const ShowSession = () => {
  const session = useStore(s => s.sessionData);

  if (!session?.user) {
    return null;
  }

  return (
    <h2 className="text-4xl max-sm:text-2xl text-slate-800 dark:text-sky-200">
      {session.user.name} <span>({session.user.role})</span>
    </h2>
  );
};

export default ShowSession;
