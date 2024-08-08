import {findAllPosts,findPostById,create,update,remove} from '../models/postsModel.js'

// get All Posts
export const getPosts= async (req,res,next)=>{
    try{
        const posts = await findAllPosts()
        if(!posts){
            res.status(404).json({msg:"Not Found"})
        }else{
            res.status(200).json(posts)
        }
    }catch(err){
        res.status(500).json({msg:'Server Error'})
    }
}

// get a single post
export const getPost= async (req,res,next)=>{
    try{
        const post_id = req.params.id
        const post = await findPostById(post_id)
        if(!post){
            res.status(404).json({msg:`The post with the id ${post_id} was Not Found`})
        }else{
            res.status(200).json(post)
        }
    }catch(err){
        res.status(500).json({msg:'Server Error'})
    }
}

// Create a post
export const createPost = async(req,res,next)=>{
    try{
        const post = req.body
        const newPost = await create(post)
        if(!newPost){
            res.status(400).json({msg:"Error while creating the post"})
        }else{
            res.status(201).json({msg:"Post created sucessfully"})
        }
    }catch(err){
        res.status(500).json({msg:"Server Error"})
    }
}

// update a post
export const updatePost = async(req,res,next)=>{
    try{
        const post_id = req.params.id
        const post = await findPostById(post_id)
        if(!post){
            res.status(404).json({msg:`The post with the id ${post_id} was not found`})
        }else{
            const {title,content,author} = post
            const body= req.body
            const postData = {
                title:title || body.title,
                content:content||body.content,
                author:author||body.author
            }
            const updPost = await update(postData,post_id)
            if(!updPost){
                res.status(404).json({msg:'Error while updating post'})
            }else{
                res.status(200).json({msg:`the post with the id ${post_id} was updated successfuly`})
            }
        }
    }catch(err){
        res.status(500).json({msg:'Server Error'})
    }
}

// Delete a post
export const deletePost = async(req,res,next)=>{
    try{
        const post_id = req.params.id
        const post = await findPostById(post_id)
        if(!post){
            res.status(404).json({msg:`The post with the id ${post_id} was not found`})
        }else{
            const updPost = await remove(post_id)
            if(!updPost){
                res.status(404).json({msg:'Error while removing post'})
            }else{
                res.status(200).json({msg:`the post with the id ${post_id} was removed successfuly`})
            }
        }
    }catch(err){
        res.status(500).json({msg:'Server Error'})
    }
}