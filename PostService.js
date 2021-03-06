import Post from './Post.js';
import FileService from './FileService.js';

class PostService {
    async create(post, picture) { 
        const fileName = FileService.saveFile(picture);
        return await Post.create({...post, picture: fileName});
    }
    async getAll() {
        return await Post.find();
    }
    async getOne(postId) {
        if (!postId) {
            throw new Error('Id не указан!');
        }
        return await Post.findById(postId);
    }      
    async update(post) {

        if(!post._id) {
            throw new Error('Id не указан!');
        }
        return await Post.findByIdAndUpdate(post._id, post, {new:true});
      
    }
    async delete(postId) {
        if (!postId) {
            throw new Error('Id не указан!');
        }
        return await Post.findByIdAndDelete(postId);
    }
}

export default new PostService();