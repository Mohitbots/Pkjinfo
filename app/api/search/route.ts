import { NextResponse } from 'next/server';
import { searchPosts } from '@/lib/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const results = searchPosts(query);

  return NextResponse.json({
    query,
    count: results.length,
    results: results.map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      category: post.category,
      date: post.date,
      readingTime: post.readingTime,
    })),
  });
}
