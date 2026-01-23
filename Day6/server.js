const express = require('express')
const app = express()
const postRoutes=require('./routes/post.routes')
const PORT = 3000
app.use('/posts',postRoutes)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});