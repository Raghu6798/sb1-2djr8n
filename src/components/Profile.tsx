import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Music, Clock, Heart } from 'lucide-react';

export default function Profile() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-32 h-32 rounded-full border-4 border-purple-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">{user?.name}</h2>
            <p className="text-gray-400 mb-4">{user?.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-full flex items-center space-x-2">
                <Music className="h-5 w-5 text-purple-400" />
                <span className="text-white">Premium Member</span>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-full flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-400" />
                <span className="text-white">Joined 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Heart className="h-5 w-5 text-purple-400 mr-2" />
            Your Top Genres
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Pop', 'Rock', 'Hip Hop', 'Electronic'].map((genre) => (
              <div
                key={genre}
                className="bg-white/5 rounded-lg p-4 text-center hover:bg-purple-500/20 transition-colors"
              >
                <span className="text-white font-medium">{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}