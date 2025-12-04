import { Metadata } from 'next';
import { Code, Palette, Zap, Database, Globe, Heart } from 'lucide-react';
import { siteMetadata } from '@/config/site';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteMetadata.author} and ${siteMetadata.title}`,
};

const skills = [
  { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript' },
  { name: 'UI/UX Design', icon: Palette, description: 'Tailwind CSS, Figma' },
  { name: 'Performance', icon: Zap, description: 'Optimization, Web Vitals' },
  { name: 'Backend', icon: Database, description: 'Node.js, APIs, Databases' },
  { name: 'Web Standards', icon: Globe, description: 'HTML, CSS, JavaScript' },
  { name: 'Open Source', icon: Heart, description: 'Contributing to community' },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Developer',
    description: 'Leading development of modern web applications',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    description: 'Building scalable applications with React and Node.js',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    description: 'Creating beautiful and responsive user interfaces',
  },
  {
    year: '2018',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h1>
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-4xl font-bold">
          {siteMetadata.author.charAt(0)}
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Hi! I'm {siteMetadata.author}, a passionate developer and tech enthusiast.
        </p>
      </section>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          My Story
        </h2>
        <div className="prose prose-lg dark:prose-dark max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a software developer with a passion for creating beautiful, functional,
            and user-friendly web applications. With several years of experience in the
            industry, I've had the opportunity to work on diverse projects and collaborate
            with talented teams.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My journey in tech began with a curiosity about how websites work, which quickly
            evolved into a deep love for coding. I enjoy staying up-to-date with the latest
            technologies and best practices, and I'm always eager to learn and grow.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When I'm not coding, you can find me writing technical articles, contributing to
            open-source projects, or exploring new technologies. I believe in the power of
            sharing knowledge and helping others in their development journey.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Through this blog, I share my experiences, tutorials, and insights about web
            development, hoping to help others learn and grow in their tech careers.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Experience & Education
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.year.slice(-2)}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-300 dark:bg-gray-700 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Feel free to reach out on any of these platforms
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
