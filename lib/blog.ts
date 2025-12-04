import { posts } from '#site/content';

export type Post = (typeof posts)[0];

export function getAllPosts(): Post[] {
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, 3);
}

export function getRecentPosts(limit: number = 9): Post[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) =>
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const categories = posts
    .map((post) => post.category)
    .filter((category): category is string => !!category);
  return Array.from(new Set(categories));
}

export function getAllTags(): string[] {
  const tags = posts.flatMap((post) => post.tags || []);
  return Array.from(new Set(tags));
}

export function getCategoryPostCount(category: string): number {
  return getPostsByCategory(category).length;
}

export function searchPosts(query: string): Post[] {
  const lowerQuery = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description?.toLowerCase().includes(lowerQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      post.body.toLowerCase().includes(lowerQuery)
  );
}

export function getRelatedPosts(post: Post, limit: number = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags?.some((tag) => post.tags?.includes(tag))
    )
    .slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  prev: Post | null;
  next: Post | null;
} {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}
