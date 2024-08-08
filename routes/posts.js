import express from 'express'
import {getPosts,getPost,createPost,updatePost,deletePost} from '../controllers/postsController.js'

const router = express.Router()



// get All posts
router.get('/',getPosts)

// get a single post by id
router.get('/:id',getPost)

// Post a post
router.post('/',createPost)
export default router

// update post
router.put('/:id',updatePost)

// delete post
router.delete('/:id',deletePost)