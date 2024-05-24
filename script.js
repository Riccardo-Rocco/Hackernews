//setup based
document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const postContainer = document.getElementById('posts-container');


    //function for creating post element

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.className = 'col-md-6 mb-3';

        const postCard = document.createElement('div');
        postCard.className = 'card';

        const postCardBody = document.createElement('div');
        postCardBody.className = 'card-body';

        const postLink = document.createElement('a');
        postLink.href = post.url;
        postLink.target = '_blank';
        postLink.textContent = post.title;
        postLink.className = 'card-title h5';

        postCardBody.appendChild(postLink);
        postCard.appendChild(postCardBody);
        postElement.appendChild(postCard);
        
        return postElement;
    }

})