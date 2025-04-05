# Deploying to Netlify via Drag and Drop

Since you want to deploy without using GitHub and are encountering issues with the CLI, the simplest method is to use Netlify's drag and drop interface. Here's a step-by-step guide:

## Step 1: Create a Production Build

First, you need to create a production build of your Next.js application. Since you encountered permission issues with the standard build command, let's try a different approach:

1. Open a command prompt or terminal with administrator privileges
2. Navigate to your project directory
3. Run the build command:
   ```
   npx next build
   ```

## Step 2: Prepare Your Files for Upload

For a Next.js application, you'll need to include:

1. The `.next` folder (contains your built application)
2. The `public` folder (contains static assets)
3. The `package.json` file
4. The `netlify.toml` file (contains deployment configuration)

## Step 3: Create a ZIP File (Optional)

If you prefer, you can create a ZIP file containing all the necessary files:

1. Select all the files and folders mentioned above
2. Right-click and select "Send to" > "Compressed (zipped) folder"
3. Name the ZIP file something like "portfolio-deploy.zip"

## Step 4: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/) and sign up or log in
2. Once logged in, you'll see your Netlify dashboard
3. Click on the "Sites" tab
4. Look for the upload area (it usually says "Drag and drop your site folder here")
5. Drag and drop your entire project folder (or the ZIP file) onto this area

## Step 5: Configure Your Site

After uploading, Netlify will process your files and deploy your site. Once deployed:

1. Click on "Site settings" for your newly deployed site
2. Go to "Build & deploy" > "Environment"
3. Add your environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_USER_ID`
4. Save your changes

## Step 6: Trigger a New Deploy

After adding environment variables:

1. Go to the "Deploys" tab
2. Click on "Trigger deploy" > "Deploy site"
3. This will redeploy your site with the new environment variables

## Step 7: Access Your Site

Once deployment is complete:

1. Netlify will provide you with a URL for your site (e.g., `https://your-site-name.netlify.app`)
2. Click on this URL to view your deployed portfolio

## Troubleshooting Common Issues

If your site doesn't deploy correctly:

1. **Build Errors**: Check the deploy logs for any build errors
2. **Missing Files**: Make sure you included all necessary files in your upload
3. **Environment Variables**: Verify that all environment variables are correctly set
4. **Next.js Version**: Ensure Netlify supports your version of Next.js

## Setting Up a Custom Domain (Optional)

To use your own domain name:

1. Go to "Site settings" > "Domain management"
2. Click on "Add custom domain"
3. Follow the instructions to configure your domain

## Updating Your Site

To update your site in the future:

1. Make changes to your local project
2. Create a new build
3. Go to your site on Netlify
4. Click "Deploys" > "Drag and drop" to upload your updated files
