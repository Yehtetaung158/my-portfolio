"use client";

import { useStore } from '@/store/store';
import React from 'react'
import StarSun from './StarSun';
import DaySky from './DaySky';

const Theme = () => {
    const isDark = useStore((state) => state.isDark);
  return (
    <>
        {
            isDark ? <StarSun/> : <DaySky/>
        }
    </>
  )
}

export default Theme