# Deploying to Netlify with GitHub Integration

This guide will walk you through deploying your Next.js portfolio to Netlify using GitHub for continuous deployment.

## Prerequisites
- Your portfolio code pushed to a GitHub repository
- A Netlify account

## Step 1: Connect Netlify to GitHub

1. Go to [Netlify](https://app.netlify.com/) and log in
2. From your Netlify dashboard, click "Add new site" > "Import an existing project"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub repositories if prompted
5. Select your portfolio repository from the list

## Step 2: Configure Build Settings

Configure the following build settings:

- **Branch to deploy**: `main` (or your default branch)
- **Base directory**: (leave blank)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Advanced build settings**: Click to expand and add the following environment variables:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
  - `NEXT_PUBLIC_EMAILJS_USER_ID`: Your EmailJS user ID

## Step 3: Deploy Your Site

1. Click "Deploy site"
2. Netlify will start building and deploying your site
3. Once complete, Netlify will provide you with a URL for your site (e.g., `https://your-site-name.netlify.app`)

## Step 4: Set Up Custom Domain (Optional)

1. From your site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name and follow the instructions to configure DNS settings

## Step 5: Verify Continuous Deployment

1. Make a small change to your code locally
2. Commit and push the change to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Netlify will automatically detect the change and start a new deployment
4. Once the deployment is complete, your site will be updated

## Troubleshooting

If your deployment fails:

1. Check the deployment logs in Netlify
2. Verify that your build settings are correct
3. Make sure your environment variables are set correctly
4. Check that your Next.js configuration is compatible with Netlify

## Benefits of GitHub Integration

- **Continuous Deployment**: Any changes pushed to your GitHub repository will automatically trigger a new deployment
- **Branch Previews**: Netlify can create preview deployments for pull requests
- **Rollbacks**: You can easily roll back to previous versions of your site
- **Collaboration**: Multiple people can contribute to your site through GitHub
