const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  post: { 
        title: String,
        content: String,
        data: String
    }
})

postSchema.virtual('url').get(function() {
    return '/posts/' + this._id;
});

module.exports = mongoose.model('post', postSchema)