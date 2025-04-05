# Contact Form Setup Instructions

The contact form in this portfolio website uses EmailJS to send emails directly from the client-side JavaScript. Follow these steps to set up your EmailJS account and configure the contact form:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address.

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" and click "Add New Service".
2. Choose your email provider (Gmail, Outlook, etc.) and follow the instructions to connect your email account.
3. Give your service a name and save it.
4. Note down the **Service ID** for later use.

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates" and click "Create New Template".
2. Design your email template. Make sure to include the following variables:
   - `{{from_name}}` - The name of the person sending the message
   - `{{reply_to}}` - The email address of the person sending the message
   - `{{message}}` - The content of the message
3. Save your template.
4. Note down the **Template ID** for later use.

## Step 4: Configure Environment Variables

1. In your project, locate the `.env.local` file.
2. Update the following variables with your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   ```
   - Replace `your_service_id` with the Service ID from Step 2.
   - Replace `your_template_id` with the Template ID from Step 3.
   - Replace `your_user_id` with your EmailJS Public Key (found in Account > API Keys).

## Step 5: Test the Contact Form

1. Start your development server.
2. Navigate to the contact form section of your portfolio.
3. Fill out the form and submit it.
4. Check your email to verify that you received the message.

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages.
2. Verify that your EmailJS credentials are correct.
3. Make sure your email template contains the correct variables.
4. Check if your email service is properly connected in EmailJS.

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
