import React from 'react';
import { Video, Camera, Headphones, Play } from 'lucide-react';
import { Link } from 'react-router';
import { VIDEO_CONTENT, PHOTO_GALLERIES, PODCASTS } from '../../data/multimedia';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const MultimediaSection = () => {
  // Limit items for homepage display
  const videos = VIDEO_CONTENT.slice(0, 3);
  const galleries = PHOTO_GALLERIES.slice(0, 3);
  const podcasts = PODCASTS.slice(0, 3);

  return (
    <section className="alignwide my-6">
      <div className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
        <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-brand-red">
          <Video className="text-brand-red" size={32} />
          <h2 className="text-brand-navy dark:text-foreground">
            Video & Multimedia
          </h2>
          <Link
            to="/multimedia"
            className="ml-auto text-brand-red font-bold text-sm hover:underline flex items-center gap-1 shrink-0"
          >
            Alle multimedia <span className="text-lg">&rsaquo;</span>
          </Link>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <h3 className="text-brand-navy dark:text-foreground mb-4 flex items-center gap-2">
            <Play size={20} className="text-brand-red" />
            Video's
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Link
                to={`/multimedia/${video.slug}`}
                key={video.id}
                className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)] hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={video.imageUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play fill="white" className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-brand-red text-xs font-bold uppercase mb-2 block">
                    {video.category}
                  </span>
                  <h4 className="text-brand-navy dark:text-foreground mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{video.views?.toLocaleString() ?? '0'} kykke • {video.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Photo Galleries */}
          <div>
            <h3 className="text-brand-navy dark:text-foreground mb-4 flex items-center gap-2">
              <Camera size={20} className="text-brand-red" />
              Fotogalerye
            </h3>
            <div className="space-y-4">
              {galleries.map((gallery) => (
                <Link
                  to={`/multimedia/${gallery.slug}`}
                  key={gallery.id}
                  className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)] hover:shadow-lg transition-shadow flex"
                >
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={gallery.imageUrl}
                      alt={gallery.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
                      {gallery.photoCount} foto's
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <span className="text-brand-red text-xs font-bold uppercase mb-2 block">
                      {gallery.category}
                    </span>
                    <h4 className="text-brand-navy dark:text-foreground mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
                      {gallery.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{gallery.time}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Podcasts */}
          <div>
            <h3 className="text-brand-navy dark:text-foreground mb-4 flex items-center gap-2">
              <Headphones size={20} className="text-brand-red" />
              Podcasts
            </h3>
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <Link
                  to={`/multimedia/${podcast.slug}`}
                  key={podcast.id}
                  className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)] hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={podcast.imageUrl}
                        alt={podcast.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-navy dark:text-foreground mb-1 group-hover:text-brand-red transition-colors">
                        {podcast.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{podcast.episode}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">{podcast.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-bold">{podcast.duration}</span>
                        <span>•</span>
                        <span>{podcast.time}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};