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

// Function to populate posts
function loadPosts() {
  const mainContent = document.querySelector(".main-content");
  
  // Clear previous content
  mainContent.innerHTML = "";

  posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
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
      `;
      mainContent.appendChild(postElement);
  });
}

// Load posts on page load
document.addEventListener("DOMContentLoaded", loadPosts);
