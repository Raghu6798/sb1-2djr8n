import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Music, Sparkles, Heart } from 'lucide-react';

export default function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Music className="h-20 w-20 text-purple-400" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Discover Your Next Favorite Song
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Get personalized music recommendations powered by AI. Connect with your Spotify
          account and let us find the perfect tracks for you.
        </p>

        {!isAuthenticated && (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Get Started
          </button>
        )}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-400">
              Advanced algorithms analyze your music taste to find perfect matches
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Music className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Spotify Integration</h3>
            <p className="text-gray-400">
              Seamlessly connect with your Spotify account for personalized recommendations
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <Heart className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Weekly Updates</h3>
            <p className="text-gray-400">
              Get fresh recommendations every week based on your listening habits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}