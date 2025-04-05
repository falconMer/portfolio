# Deploying Next.js to Netlify as a Static Export

This guide explains how to deploy your Next.js portfolio to Netlify as a static export using GitHub integration.

## Why Static Export?

The `@netlify/plugin-nextjs` plugin sometimes has compatibility issues with newer versions of Next.js. Using a static export is a more reliable approach that:

1. Generates plain HTML, CSS, and JavaScript files
2. Works consistently across all hosting platforms
3. Avoids server-side rendering complexities
4. Loads faster and is more reliable

## Configuration Changes

The following changes have been made to your project to enable static export:

### 1. Updated next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable static exports for Netlify deployment
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes in URLs
  trailingSlash: false,
};

module.exports = nextConfig;
```

### 2. Updated netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"
  NODE_VERSION = "18"

# Removed the Next.js plugin to avoid errors

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 3. Updated package.json scripts

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

**Note**: The `next export` command has been removed in Next.js 13.3.0 and later. Instead, we use the `output: 'export'` option in next.config.js, which automatically generates the static export during the build process.

## Deployment Steps

### 1. Push Your Code to GitHub

1. Create a repository on GitHub
2. Push your code to the repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### 2. Connect Netlify to GitHub

1. Go to [Netlify](https://app.netlify.com/) and log in
2. Click "Add new site" > "Import an existing project"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub repositories if prompted
5. Select your portfolio repository from the list

### 3. Configure Build Settings

Configure the following build settings:

- **Branch to deploy**: `main` (or your default branch)
- **Base directory**: (leave blank)
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Advanced build settings**: Click to expand and add the following environment variables:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
  - `NEXT_PUBLIC_EMAILJS_USER_ID`: Your EmailJS user ID

### 4. Deploy Your Site

1. Click "Deploy site"
2. Netlify will start building and deploying your site
3. Once complete, Netlify will provide you with a URL for your site

## Limitations of Static Export

When using a static export, be aware of these limitations:

1. **No Server-Side API Routes**: API routes won't work in a static export. Your contact form is already configured to use EmailJS directly from the client side, which works with static exports.

2. **No Server-Side Rendering**: All pages are pre-rendered at build time.

3. **No Incremental Static Regeneration**: Content updates require a full rebuild.

## Troubleshooting

If you encounter issues:

1. **Build Failures**: Check the Netlify build logs for specific errors
2. **Missing Environment Variables**: Verify that all environment variables are set correctly
3. **404 Errors**: Make sure your routes are compatible with static exports
4. **Contact Form Issues**: Ensure EmailJS is properly configured

## Future Updates

To update your site in the future:

1. Make changes to your code locally
2. Commit and push to GitHub
3. Netlify will automatically detect the changes and deploy your site
