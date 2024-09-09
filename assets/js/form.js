// TODO: Create a variable that selects the form element
const blogForm = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

function handleFormSubmission(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const errorElement = document.getElementById('error');
  if (!username || !title || !content) {
    errorElement.style.display = 'block';
    return;
  }
  errorElement.style.display = 'none';
  const blogPost = { username, title, content };
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  posts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
blogForm.addEventListener('submit', handleFormSubmission);
