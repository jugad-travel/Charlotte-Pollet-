'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20 px-2 sm:px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group -ml-1 sm:ml-0">
            <div className="flex flex-col">
              <div className="text-lg sm:text-xl md:text-2xl font-serif text-primary leading-tight group-hover:opacity-80 transition">
                Charlotte Pollet
              </div>
              <div className="text-xs text-gray-500 hidden sm:block font-light">
                Thérapie de couple Imago
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 ml-4">
            <Link 
              href="/" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              href="/a-qui-sadresse" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              À qui s'adresse la thérapie ?
            </Link>
            <Link 
              href="/pourquoi-faire-une-therapie" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Pourquoi faire une thérapie ?
            </Link>
            <Link 
              href="/temoignages" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Témoignages
            </Link>
            <Link 
              href="/qui-suis-je" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Qui suis-je
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contactez-moi
            </Link>
            <a 
              href="https://planify.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all text-sm font-medium shadow-sm hover:shadow-md ml-2"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/a-qui-sadresse" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À qui s'adresse la thérapie ?
              </Link>
              <Link 
                href="/pourquoi-faire-une-therapie" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi faire une thérapie ?
              </Link>
              <Link 
                href="/temoignages" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </Link>
              <Link 
                href="/qui-suis-je" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui suis-je
              </Link>
              <Link 
                href="/contact" 
                className="text-primary py-3 px-2 hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactez-moi
              </Link>
              <a 
                href="https://planify.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-full text-center font-medium mt-2 hover:bg-primary-dark transition shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

