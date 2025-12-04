'use client';

import { getAllCategories, getCategoryPostCount } from '@/lib/blog';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const categories = getAllCategories();

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category} ({getCategoryPostCount(category)})
        </button>
      ))}
    </div>
  );
}
