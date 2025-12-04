'use client';

import { useState, useMemo } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { getAllPosts, getPostsByCategory, searchPosts } from '@/lib/blog';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredPosts = useMemo(() => {
    let posts = getAllPosts();
    
    if (searchQuery) {
      posts = searchPosts(searchQuery);
    }
    
    if (selectedCategory) {
      posts = posts.filter((post) => post.category === selectedCategory);
    }
    
    return posts;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our latest articles on web development, programming, and technology.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="flex justify-center">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className="flex justify-center">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No posts found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
