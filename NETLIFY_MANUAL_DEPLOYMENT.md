# Manual Deployment to Netlify

Since you want to deploy without using GitHub, you can use the direct upload method on Netlify. Here's how to do it:

## Step 1: Create a Netlify Account

1. Go to [Netlify](https://www.netlify.com/) and sign up for an account
2. You can sign up using your email address

## Step 2: Prepare Your Site for Deployment

1. Build your Next.js project locally:
   ```bash
   npm run build
   ```
   
   If you encounter permission issues, try running the command with administrator privileges or try:
   ```bash
   npx next build
   ```

2. Once the build is complete, you'll have a `.next` folder in your project directory

## Step 3: Deploy to Netlify via Direct Upload

1. Log in to your Netlify account
2. Click on the "Sites" tab
3. Drag and drop your entire project folder onto the designated area on the Netlify dashboard
   - Make sure to include the `.next` folder, `public` folder, and all configuration files
   - Alternatively, you can click on the "Deploy manually" option and select your project folder

4. Netlify will process your upload and deploy your site
5. Once deployment is complete, Netlify will provide you with a URL for your site

## Step 4: Configure Environment Variables

1. After deployment, go to Site settings > Build & deploy > Environment
2. Add your EmailJS environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `NEXT_PUBLIC_EMAILJS_USER_ID`: Your EmailJS user ID
3. Click "Save" and trigger a new deployment for the changes to take effect

## Step 5: Set Up a Custom Domain (Optional)

1. In the Netlify dashboard, go to Site settings > Domain management
2. Click on "Add custom domain"
3. Enter your domain name and follow the instructions to configure DNS settings

## Alternative: Using Netlify CLI

If you prefer using the command line, you can use the Netlify CLI:

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:
   ```bash
   netlify login
   ```

3. Initialize a new Netlify site:
   ```bash
   netlify init
   ```

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

5. Follow the prompts to complete the deployment

## Troubleshooting

If you encounter issues during manual deployment:

1. Make sure your build was successful and the `.next` folder was created
2. Check that you're uploading the entire project directory, not just the build output
3. Verify that all environment variables are correctly set in the Netlify dashboard
4. If you get errors about missing dependencies, make sure your `package.json` file is included in the upload
