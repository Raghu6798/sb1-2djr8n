import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Music, User, LogOut, LogIn } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-xl">MusicAI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <>
                <Link
                  to="/recommendations"
                  className={`text-sm px-4 py-2 rounded-full transition-all ${
                    isActive('/recommendations')
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Recommendations
                </Link>
                <Link
                  to="/profile"
                  className={`text-sm px-4 py-2 rounded-full transition-all ${
                    isActive('/profile')
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => logout()}
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            )}
            {!isAuthenticated && (
              <button
                onClick={() => loginWithRedirect()}
                className="flex items-center space-x-2 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}