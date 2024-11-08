import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Play, Heart, Plus } from 'lucide-react';

export default function Recommendations() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  // Mock data - in a real app, this would come from your backend
  const recommendations = [
    {
      id: 1,
      title: "Midnight Rain",
      artist: "Taylor Swift",
      album: "Midnights",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      genre: "Pop"
    },
    {
      id: 2,
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Pop"
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      genre: "R&B"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Your Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((track) => (
          <div
            key={track.id}
            className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500 transition-all group"
          >
            <div className="relative">
              <img
                src={track.imageUrl}
                alt={track.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1">{track.title}</h3>
              <p className="text-gray-400 mb-2">{track.artist}</p>
              <p className="text-sm text-gray-500 mb-4">{track.album}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                  {track.genre}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}