import { Hero } from '@/components/Hero';
import { FeaturedPosts } from '@/components/FeaturedPosts';
import { RecentPosts } from '@/components/RecentPosts';
import { Newsletter } from '@/components/Newsletter';
import { getAllCategories, getCategoryPostCount } from '@/lib/blog';
import Link from 'next/link';

export default function Home() {
  const categories = getAllCategories();

  return (
    <>
      <Hero />
      <FeaturedPosts />
      <RecentPosts />
      
      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {category}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getCategoryPostCount(category)} posts
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
