# Netlify Deployment Troubleshooting Guide

If your Next.js portfolio isn't working after deployment to Netlify, follow these steps to fix the issues:

## 1. Update Configuration Files

### Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Update netlify.toml
```toml
[build]
  command = "npm run netlify-build"
  publish = ".next/standalone"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Update package.json scripts
Add this to your scripts in package.json:
```json
"netlify-build": "next build"
```

## 2. Create Netlify Functions Directory
Create a file at `netlify/functions/dummy.js`:
```javascript
// This is a dummy function to ensure the netlify/functions directory exists
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify Functions are working!" })
  };
};
```

## 3. Rebuild and Redeploy

```bash
# Rebuild your project
npm run build

# Redeploy to Netlify
netlify deploy --prod
```

## 4. Check for Common Issues

### API Routes Not Working
If your API routes (like the contact form endpoint) aren't working:
1. Make sure the Netlify Functions directory exists
2. Check that your API routes are properly configured
3. Verify that the Next.js plugin is installed

### Missing Environment Variables
If features depending on environment variables aren't working:
1. Go to Netlify dashboard > Site settings > Build & deploy > Environment
2. Add your environment variables:
   - NEXT_PUBLIC_EMAILJS_SERVICE_ID
   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   - NEXT_PUBLIC_EMAILJS_USER_ID
3. Trigger a new deployment

### Static Assets Not Loading
If images or other static assets aren't loading:
1. Make sure your public folder was included in the deployment
2. Check that paths to assets are correct
3. Verify that the Next.js image configuration is set to `unoptimized: true`

## 5. Advanced Troubleshooting

### Check Netlify Logs
1. Go to Netlify dashboard > Your site > Deploys
2. Click on the most recent deployment
3. Check the build logs for errors

### Try Local Netlify Development
Install the Netlify CLI and test locally:
```bash
npm install -g netlify-cli
netlify dev
```

### Contact Netlify Support
If all else fails, Netlify has excellent support:
1. Go to [Netlify Support](https://www.netlify.com/support/)
2. Describe your issue in detail
3. Include your site name and deployment logs

## 6. Alternative Deployment Options

If Netlify continues to cause issues, consider these alternatives:
1. **Vercel**: Excellent for Next.js deployments (created by the same team)
2. **GitHub Pages**: Good for static sites
3. **Cloudflare Pages**: Fast and reliable static site hosting
