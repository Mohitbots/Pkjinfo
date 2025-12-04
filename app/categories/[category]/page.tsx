import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/BlogCard';
import { getAllCategories, getPostsByCategory } from '@/lib/blog';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category);
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0) {
    return {};
  }

  return {
    title: `${category} Posts`,
    description: `Browse all posts in the ${category} category`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
          {category}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
