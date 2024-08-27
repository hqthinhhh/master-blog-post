const express = require('express');
const dbConnect = require('./db/dbConnect')
const PostRouter = require('./routes/PostRouter')

dbConnect();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const BlogPosts = require('./BlogPosts');

app.use("/api", PostRouter);

app.get('/', function(red, res){
    res.send("Server is working!");
})
app.get('/posts', function (req, res){
    res.send(JSON.stringify(BlogPosts.BlogPosts));
})

app.listen(8080, function(){
    console.log("Server is running on 8080!");
});