// This is a dummy function to ensure the netlify/functions directory exists
// Netlify will use this directory for serverless functions

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify Functions are working!" })
  };
};
