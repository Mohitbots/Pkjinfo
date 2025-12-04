import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate, truncate } from '@/lib/utils';
import type { Post } from '@/lib/blog';

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? 'group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
    : 'group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1';

  return (
    <article className={cardClasses}>
      <Link href={`/blog/${post.slug}`}>
        {/* Image */}
        {post.image && (
          <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            {post.category && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`p-${featured ? '8' : '6'}`}>
          {/* Meta */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`${
              featured ? 'text-2xl' : 'text-xl'
            } font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors`}
          >
            {post.title}
          </h3>

          {/* Description */}
          {post.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {truncate(post.description, featured ? 150 : 100)}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Link>
    </article>
  );
}
