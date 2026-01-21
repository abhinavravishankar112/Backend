const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: The Homepage
app.get('/', (req, res) => {
  res.send('This is the homepage of Blogify!');
});

// Route 2: An "About" page
app.get('/about', (req, res) => {
  res.send('Blogify is a platform for sharing ideas.');
});

// Route 3: An API endpoint for posts
app.get('/api/v1/posts', (req, res) => {
  // For now, we'll send back some mock data.
  const posts = [
    { id: 1, title: 'Welcome to the Blog' },
    { id: 2, title: 'My Second Post' }
  ];
  res.json(posts); // res.json() is perfect for sending API data
});

// Route 4: Handling a POST request
app.post('/api/v1/posts', (req, res) => {
  // We'll learn how to get the request body later.
  // For now, we just send a confirmation message.
  res.send('A new post has been created!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
