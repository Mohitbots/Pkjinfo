'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const headingElements = article.querySelectorAll('h2, h3');
    const headingData: Heading[] = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1)),
    }));

    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 p-3 bg-primary-600 text-white rounded-full shadow-lg z-50"
        aria-label="Toggle table of contents"
      >
        <List className="h-6 w-6" />
      </button>

      {/* Table of Contents */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        } fixed lg:sticky top-24 right-0 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto bg-white dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent p-6 lg:p-0 rounded-l-lg lg:rounded-none shadow-xl lg:shadow-none transition-transform duration-300 z-40 w-64`}
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Table of Contents
        </h3>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`${heading.level === 3 ? 'pl-4' : ''}`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                    setIsOpen(false);
                  }}
                  className={`block py-1 text-sm transition-colors ${
                    activeId === heading.id
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
