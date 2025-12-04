import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllPosts, getPostBySlug, getRelatedPosts, getAdjacentPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { siteMetadata } from '@/config/site';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ShareButtons } from '@/components/ShareButtons';
import { TableOfContents } from '@/components/TableOfContents';
import { BlogCard } from '@/components/BlogCard';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(params.slug);
  const postUrl = `${siteMetadata.siteUrl}/blog/${params.slug}`;

  return (
    <>
      <ScrollProgress />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          {post.category && (
            <Link
              href={`/categories/${post.category.toLowerCase()}`}
              className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full mb-4 hover:bg-primary-700 transition-colors"
            >
              {post.category}
            </Link>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {post.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readingTime}
              </span>
            )}
            <span>By {post.author}</span>
          </div>

          <ShareButtons title={post.title} url={postUrl} />

          {post.image && (
            <div className="relative w-full h-96 mt-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Content with TOC */}
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
            {/* Article Content */}
            <div className="prose prose-lg dark:prose-dark max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>

            {/* Table of Contents */}
            <div className="hidden lg:block">
              <TableOfContents />
            </div>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Card */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            About the Author
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>{post.author}</strong> is a passionate writer and developer sharing
            insights about web development and technology.
          </p>
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev && (
            <Link
              href={`/blog/${prev.slug}`}
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Post
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {prev.title}
              </h4>
            </Link>
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all md:text-right"
            >
              <div className="flex items-center justify-end text-primary-600 dark:text-primary-400 mb-2">
                Next Post
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {next.title}
              </h4>
            </Link>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <TableOfContents />
      </div>
    </>
  );
}
