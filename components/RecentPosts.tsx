import { getRecentPosts } from '@/lib/blog';
import { BlogCard } from './BlogCard';

export function RecentPosts() {
  const recentPosts = getRecentPosts();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
