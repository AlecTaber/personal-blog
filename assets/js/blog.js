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

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
