// // Initialize Feather icons
// feather.replace();

// // Sample data for reels
// const reels = [
//   { thumbnail: 'https://picsum.photos/seed/11/300/533', views: '1.2M' },
//   { thumbnail: 'https://picsum.photos/seed/12/300/533', views: '856K' },
//   { thumbnail: 'https://picsum.photos/seed/13/300/533', views: '2.1M' },
//   { thumbnail: 'https://picsum.photos/seed/14/300/533', views: '943K' },
//   { thumbnail: 'https://picsum.photos/seed/15/300/533', views: '1.5M' },
//   { thumbnail: 'https://picsum.photos/seed/16/300/533', views: '768K' },
// ];

// // Sample data for suggestions
// const suggestions = [
//   {
//     username: 'user7751',
//     fullName: 'Followed by user_21',
//     image: 'https://picsum.photos/seed/21/40/40',
//   },
//   {
//     username: 'user__323',
//     fullName: 'Followed by user_21 + 1 more',
//     image: 'https://picsum.photos/seed/22/40/40',
//   },
//   {
//     username: 'user_privvvvv',
//     fullName: 'Followed by user_21',
//     image: 'https://picsum.photos/seed/23/40/40',
//   },
//   {
//     username: 'user_21',
//     fullName: 'Suggested for you',
//     image: 'https://picsum.photos/seed/24/40/40',
//   },
//   {
//     username: 'user_21324',
//     fullName: 'Followed by user_21454',
//     image: 'https://picsum.photos/seed/25/40/40',
//   },
// ];

// // Render reels
// const reelsContainer = document.getElementById('reels');
// reels.forEach((reel) => {
//   const reelElement = document.createElement('div');
//   reelElement.className = 'relative group cursor-pointer';
//   reelElement.innerHTML = `
//     <div class = "w-full" >
//       <img src="${reel.thumbnail}" alt="Reel" class="w-full h-full object-cover">
//       <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//         <div class="flex items-center text-white">
//           <i data-feather="play" class="w-4 h-4 mr-1"></i>
//           <span>${reel.views}</span>
//         </div>
//       </div>
//     </div>
//   `;
//   reelsContainer.appendChild(reelElement);
//   feather.replace();
// });


// // Render suggestions
// const suggestionsContainer = document.getElementById('suggestions');
// suggestions.forEach((suggestion) => {
//   const suggestionElement = document.createElement('div');
//   suggestionElement.className = 'flex items-center mb-3';
//   suggestionElement.innerHTML = `
//     <img src="${suggestion.image}" alt="${suggestion.username}" class="rounded-full w-8 h-8 mr-3">
//     <div class="flex-1">
//       <div class="font-semibold text-sm">${suggestion.username}</div>
//       <div class="text-gray-500 text-xs">${suggestion.fullName}</div>
//     </div>
//     <button class="text-blue-500 text-xs font-semibold hover:text-blue-400 transition-colors">Follow</button>
//   `;
//   suggestionsContainer.appendChild(suggestionElement);
// });


// Sample data for posts
const posts = [
  {
      avatar: "https://picsum.photos/seed/user1/40/40",
      username: "john_doe",
      time: "2h",
      image: "https://picsum.photos/seed/post1/600/400",
      caption: "Beautiful sunset at the beach! 🌅",
  },
  {
      avatar: "https://picsum.photos/seed/user2/40/40",
      username: "jane_smith",
      time: "5h",
      image: "https://picsum.photos/seed/post2/600/400",
      caption: "Exploring the mountains! ⛰️",
  },
  {
      avatar: "https://picsum.photos/seed/user3/40/40",
      username: "alex_99",
      time: "8h",
      image: "https://picsum.photos/seed/post3/600/400",
      caption: "Coffee time ☕",
  }
];

// Sample comment data
const sampleComments = [
    {
        username: "ahmed_23",
        text: "MashaAllah, beautiful post!",
        time: "8h ago",
        avatar: "https://picsum.photos/seed/post3/600/400"
    },
    {
        username: "sara_khan",
        text: "SubhanAllah ❤️",
        time: "5h ago",
        avatar: "https://picsum.photos/seed/post4/600/400"
    },
    {
        username: "usman_dev",
        text: "Amazing view 🌄",
        time: "2h ago",
        avatar: "https://picsum.photos/seed/post5/600/400"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    loadPosts();
    setTimeout(loadComments, 100); // slight delay to ensure posts are loaded
});

// Function to populate posts
function loadPosts() {
    const mainContent = document.querySelector(".main-content");
  
    // Clear previous content
    mainContent.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        // comment section id should be unique for each post must handle later
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="User Avatar" class="avatar">
                <span class="username">${post.username}</span>
                <span class="time">${post.time}</span>
            </div>
            <div class="post-content">
                <img src="${post.image}" alt="Post Image">
                <p class="caption">${post.caption}</p>
            </div>
            <div class="post-actions">
                <button class="action-btn like-btn"><i class="far fa-heart"></i></button>
                <button class="action-btn comment-btn"><i class="far fa-comment"></i></button>
            </div>
            <div class="like-count">147 likes</div>
            <div class="comments-section" id="comments-section-1">
                <div class="comment-form">
                     <input type="text" class="comment-input" placeholder="Add a comment...">
                     <button class="post-btn" disabled>Post</button>
                </div>
            </div>
        `;
        mainContent.appendChild(postElement);
    });
  
    // Add event listeners for dynamically loaded posts
    addPostEventListeners();
}

// Function to load comments
function loadComments() {
    const commentsSection = document.getElementById("comments-section-1");

    // Remove existing comments (except form)
    const form = commentsSection.querySelector(".comment-form");
    commentsSection.innerHTML = "";
    
    // Load comments
    sampleComments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        
        commentDiv.innerHTML = `
            <img src="${comment.avatar}" alt="User Avatar" class="comment-avatar">
            <div class="comment-content">
                <span class="comment-username">${comment.username}</span>
                <span class="comment-text">${comment.text}</span>
                <div class="comment-time">${comment.time}</div>
            </div>
        `;
        
        commentsSection.appendChild(commentDiv);
    });

    // Append the form back
    commentsSection.appendChild(form);
}

// Function to add event listeners for like, comment, and post buttons
function addPostEventListeners() {
    const mainContent = document.querySelector(".main-content");

    mainContent.addEventListener('click', function (e) {
        // Like button functionality
        if (e.target.closest('.like-btn')) {
            const button = e.target.closest('.like-btn');
            const heartIcon = button.querySelector('i');
            const likeCountElement = button.closest('.post').querySelector('.like-count');
            let likeCount = parseInt(likeCountElement.textContent.split(' ')[0]);

            button.classList.add('like-animation');

            if (heartIcon.classList.contains('far')) {
                // Like the post
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas');
                button.classList.add('liked');
                likeCount++;
            } else {
                // Unlike the post
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');
                button.classList.remove('liked');
                likeCount--;
            }

            likeCountElement.textContent = `${likeCount} likes`;

            // Remove animation class after animation completes
            setTimeout(() => {
                button.classList.remove('like-animation');
            }, 300);
        }

        // Comment button functionality
        if (e.target.closest('.comment-btn')) {
            const button = e.target.closest('.comment-btn');
            const post = button.closest('.post');
            const commentsSection = post.querySelector('.comments-section');
            commentsSection.classList.toggle('active');

            // Focus on comment input when opened
            if (commentsSection.classList.contains('active')) {
                const commentInput = commentsSection.querySelector('.comment-input');
                commentInput.focus();
            }
        }

        // Post button functionality
        if (e.target.closest('.post-btn')) {
            const inputElement = e.target.closest('.comment-form').querySelector('.comment-input');
            addComment(inputElement);
        }
    });

    // Enable/disable post button based on comment input
    const commentInputs = document.querySelectorAll('.comment-input');
    commentInputs.forEach(input => {
        const postButton = input.nextElementSibling;

        input.addEventListener('input', function () {
            // Enable/disable post button based on input content
            if (this.value.trim() !== '') {
                postButton.disabled = false;
            } else {
                postButton.disabled = true;
            }
        });

        input.addEventListener('keypress', function (e) {
            // Post comment on Enter key
            if (e.key === 'Enter' && this.value.trim() !== '') {
                addComment(this);
            }
        });
    });
}

// Function to add a new comment
function addComment(inputElement) {
    const commentsSection = inputElement.closest('.comments-section');
    const commentForm = inputElement.closest('.comment-form');
    const commentText = inputElement.value.trim();

    if (commentText !== '') {
        // Create new comment element
        const newComment = document.createElement('div');
        newComment.className = 'comment';

        // Get current user avatar (using placeholder for demo)
        const userAvatar = 'https://via.placeholder.com/32';

        // Get current username (for demo purposes)
        const currentUsername = 'your_username';

        // Create comment HTML
        newComment.innerHTML = `
            <img src="${userAvatar}" alt="User Avatar" class="comment-avatar">
            <div class="comment-content">
                <span class="comment-username">${currentUsername}</span>
                <span class="comment-text">${commentText}</span>
                <div class="comment-time">just now</div>
            </div>
        `;

        // Insert new comment before the comment form
        commentsSection.insertBefore(newComment, commentForm);

        // Clear input field
        inputElement.value = '';
        inputElement.nextElementSibling.disabled = true;
    }
}

