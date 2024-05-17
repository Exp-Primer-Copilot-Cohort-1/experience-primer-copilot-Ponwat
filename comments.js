// Create web server
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import fs from 'fs';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    const newComment = req.body; // Get the comment data from the request body
    comments.push(newComment); // Add the new comment to the comments array
    res.sendStatus(200); // Send a success status code
});
