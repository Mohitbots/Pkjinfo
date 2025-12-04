# Next.js 14 Blog Template

A production-ready, SEO-optimized personal blog website built with Next.js 14 (App Router), Tailwind CSS, and Velite.js for markdown processing.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- 🚀 **Next.js 14 with App Router** - Latest features and performance optimizations
- 📝 **Markdown/MDX Support** - Write content in markdown with Velite.js
- 🎨 **Tailwind CSS** - Beautiful, responsive design with dark mode
- 🔍 **SEO Optimized** - Dynamic metadata, Open Graph, and Twitter Cards
- 🌙 **Dark Mode** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- ⚡ **Performance** - Optimized images, fonts, and code splitting
- 🎯 **TypeScript** - Type-safe code throughout
- 🔎 **Search & Filter** - Real-time search and category filtering
- 📊 **Reading Progress** - Visual progress bar while reading
- 🏷️ **Tags & Categories** - Organize posts efficiently
- 📄 **Table of Contents** - Auto-generated from headings
- 🔗 **Share Buttons** - Social media sharing (Twitter, LinkedIn, Facebook)
- 💌 **Newsletter** - Email subscription form
- 📧 **Contact Form** - Get in touch page with validation
- ♿ **Accessible** - WCAG AA compliant

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Velite](https://github.com/zce/velite) (MDX processing)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Syntax Highlighting**: [rehype-pretty-code](https://rehype-pretty-code.netlify.app/)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nextjs-blog-template.git
cd nextjs-blog-template
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── categories/        # Category pages
│   └── api/               # API routes
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── BlogCard.tsx       # Blog post card
│   └── ...                # Other components
├── content/               # Blog content (MDX files)
│   └── blog/              # Blog posts
├── config/                # Configuration files
│   ├── site.ts            # Site metadata
│   └── navigation.ts      # Navigation config
├── lib/                   # Utility functions
│   ├── utils.ts           # Helper functions
│   ├── blog.ts            # Blog utilities
│   └── constants.ts       # Constants
├── styles/                # Additional styles
│   └── mdx.css            # MDX-specific styles
├── public/                # Static files
│   └── images/            # Images
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── velite.config.ts       # Velite configuration
└── tsconfig.json          # TypeScript configuration
```

## ✍️ Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2024-12-05"
author: "Your Name"
image: "/images/blog/your-image.jpg"
tags: ["tag1", "tag2"]
category: "Category"
featured: true
draft: false
---

Your content here...
```

3. Run `npm run build` to process the content
4. Your post will automatically appear on the blog!

## 🎨 Customization

### Site Metadata

Edit `config/site.ts`:

```typescript
export const siteMetadata = {
  title: "Your Blog Name",
  author: "Your Name",
  description: "Your blog description",
  siteUrl: "https://yourdomain.com",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

### Navigation

Edit `config/navigation.ts`:

```typescript
export const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
```

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and more:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
    },
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This project can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any Node.js hosting platform

Build command: `npm run build`
Output directory: `.next`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (optional):

```env
# Site URL for production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Velite Configuration

Edit `velite.config.ts` to customize markdown processing:

```typescript
export default defineConfig({
  root: 'content',
  collections: { posts },
  // Add custom MDX plugins here
});
```

## 📊 Performance

This template is optimized for performance:

- ✅ Static generation for fast loading
- ✅ Image optimization with next/image
- ✅ Code splitting
- ✅ Font optimization
- ✅ Minimal bundle size (~10-20KB CSS)
- ✅ Lighthouse score: 90+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast (WCAG AA)
- Alt text for images
- Skip to content link

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Velite](https://github.com/zce/velite) for markdown processing
- All the amazing open-source contributors

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
