# Hildor Júnior - Portfolio Website

A modern, responsive portfolio website built with Next.js 13, showcasing my work as a Full-Stack Software Engineer.

## Features

- **Responsive Design** - Optimized for all devices using Bulma CSS framework
- **Custom Mouse Cursor** - Interactive custom cursor effect for enhanced UX
- **GitHub Integration** - Dynamically displays recent GitHub repositories
- **Blog Integration** - Shows latest blog posts from [blog.hildor.dev](https://blog.hildor.dev)
- **Optimized Performance** - Built with Next.js 13 App Router and optimized images with Sharp
- **Modern Styling** - Custom SCSS with Bulma for a clean, professional look

## Tech Stack

- **Framework:** Next.js 13.4
- **Language:** TypeScript
- **Styling:** SCSS + Bulma CSS
- **Date Handling:** Day.js
- **Image Optimization:** Sharp
- **Deployment Ready:** Vercel-optimized

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about-me.tsx       # About section with bio
│   │   ├── footer.tsx         # Footer component
│   │   ├── github-repos.tsx   # GitHub repositories display
│   │   ├── header.tsx         # Hero section with profile
│   │   ├── last-blog-posts.tsx # Blog posts integration
│   │   ├── mouse-trailer.tsx  # Custom cursor effect
│   │   └── shape-divider.tsx  # SVG shape dividers
│   ├── fonts.ts               # Font configuration
│   ├── globals.scss           # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hildorjr/hildor-next)

## Connect

- **Website:** [hildor.dev](https://hildor.dev)
- **Blog:** [blog.hildor.dev](https://blog.hildor.dev)
- **YouTube:** [@hildordev](https://youtube.com/@hildordev)
- **LinkedIn:** [linkedin.com/in/hildor](https://www.linkedin.com/in/hildor)
- **GitHub:** [github.com/hildorjr](https://github.com/hildorjr)

## License

This project is private and proprietary.
