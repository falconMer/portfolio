# Deploying Your Portfolio to Netlify

This guide will walk you through the process of deploying your Next.js portfolio website to Netlify.

## Prerequisites

- A GitHub account
- Your portfolio project pushed to a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub

If you haven't already, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 2. Sign Up for Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign up for an account
2. You can sign up using your GitHub account for easier integration

### 3. Create a New Site from Git

1. Once logged in to Netlify, click on the "Add new site" button
2. Select "Import an existing project"
3. Choose GitHub as your Git provider
4. Authorize Netlify to access your GitHub repositories
5. Select the repository containing your portfolio project

### 4. Configure Build Settings

Netlify should automatically detect that you're using Next.js and configure the build settings, but verify the following:

- Build command: `npm run build`
- Publish directory: `.next`

### 5. Configure Environment Variables

1. In the Netlify dashboard, go to Site settings > Build & deploy > Environment
2. Add the following environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `NEXT_PUBLIC_EMAILJS_USER_ID`: Your EmailJS user ID

### 6. Deploy Your Site

1. Click on the "Deploy site" button
2. Netlify will start building and deploying your site
3. Once the deployment is complete, Netlify will provide you with a URL for your site (e.g., `https://your-site-name.netlify.app`)

### 7. Set Up a Custom Domain (Optional)

1. In the Netlify dashboard, go to Site settings > Domain management
2. Click on "Add custom domain"
3. Enter your domain name and follow the instructions to configure DNS settings

## Continuous Deployment

Netlify automatically sets up continuous deployment. Whenever you push changes to your GitHub repository, Netlify will automatically rebuild and redeploy your site.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the deployment logs in the Netlify dashboard
2. Ensure all environment variables are correctly set
3. Verify that your project builds successfully locally with `npm run build`
4. Check that the `netlify.toml` file is correctly configured

## Additional Resources

- [Netlify Docs for Next.js](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) for local testing
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for an alternative to EmailJS
