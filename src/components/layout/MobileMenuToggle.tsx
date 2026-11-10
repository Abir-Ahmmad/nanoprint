"use client"

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import MobileMenu from './MobileMenu';

export default function MobileMenuToggle() {

    const [open, setOpen] = useState(false);


  return (
    <div>
        <button 
        type='button'
        aria-label='Open menu'
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        >
            {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
