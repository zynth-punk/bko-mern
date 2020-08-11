const express = require ('express');
const router = express.Router();

const Post = require('../models/postsModel');

/*
router.get('/posts', (req, res, next) => {
    Post.find({}, 'post')
        .then(res => res.json(Post))
        .catch(next)
});
*/
router.get('/posts/:id', (req, res, next) => {
    Post.find({"_id": req.params.id})
        .then(res => res.json(Post))
        .catch(next)
});

router.post('/posts', (req, res, next) => {
    if(req.body){
        const post = new Post(req.body);
        res.json(post);
        //Post.create(req.body).then((req) => req.json(Post)).catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/posts/:id', (req, res, next) => {
    Post.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})


module.exports = router;