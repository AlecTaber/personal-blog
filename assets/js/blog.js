// TODO: Create a variable that selects the main element
const mainElement = document.querySelector("main");
const postsList = document.getElementById("posts");

// TODO: Create a function that builds an element and appends it to the DOM
function createElement(tag, attributes ={}, parent, content ='') {
    const element = document.createElement(tag);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    } if (content) {
        element.textContent = content;
    } if (parent) {
        parent.appendChild(element);
    }
    return element;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoPosts() {
    const noPostsMessage = createElement('p', { class: 'no-posts' }, postsList, 'No blog posts available.');
  }

// TODO: Create a function that reads from local storage and returns the data
function getBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return posts;
  }

// TODO: Call the function to render the list of blog posts
function renderPosts() {
  const posts = getBlogPosts();
  if (posts.length === 0) {
    handleNoPosts();
  } else {
    posts.forEach(post => {
      const article = createElement('article', { class: 'card' }, postsList);
      createElement('h2', {}, article, post.title);
      createElement('blockquote', {}, article, post.content);
      createElement('p', {}, article, `Written by: ${post.username}`);
    });
  }
}

document.getElementById('back').addEventListener('click', () => {
    window.history.back();
});

document.addEventListener('DOMContentLoaded', renderPosts);