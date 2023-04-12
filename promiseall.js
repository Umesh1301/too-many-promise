// Function to simulate creating a post (returns a promise)
function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Post created");
      }, 1000);
    });
  }
  
  // Function to simulate updating last user activity time (returns a promise)
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Last activity time updated");
      }, 1000);
    });
  }
  
  // Function to simulate deleting a post (returns a promise)
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Post deleted");
      }, 1000);
    });
  }
  
  // Function to handle the entire process
  async function handlePostCreation() {
    try {
      // Create a post
      await createPost("New post");
  
      // Update last user activity time
      await updateLastUserActivityTime("user123");
  
      // Log the posts created and last activity time
      console.log(`Posts created`);
      console.log(`Last activity time updated`);
  
      // Delete the last post
      await deletePost("post123");
  
      // Log the new set of posts
      console.log("New set of posts:");
      // ... (code to fetch and log the new set of posts)
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the handlePostCreation function to start the process
  handlePostCreation();
  