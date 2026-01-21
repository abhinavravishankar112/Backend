const express = require('express');
const app = express();
const PORT = 3000;

const users = []
app.post('/user', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({message: 'User created successfully', user});
});

app.get('/input', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});