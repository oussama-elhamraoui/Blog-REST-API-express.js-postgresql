import pool from "../db/db.js"
import {getRows,getRowById,insertRow,updateRow,removeRow} from './dbModel.js'

export const findAllPosts = ()=>{
    return new Promise((resolve,reject)=>{
        getRows().then(rows=>resolve(rows)).catch(err=>reject(err))
    })
}

export const findPostById=(post_id)=>{
    return new Promise((resolve,reject)=>{
        getRowById(post_id).then(row=>resolve(row)).catch(err=>reject(err))
    })
}

export const create = (newPost)=>{
    return new Promise((resolve,reject)=>{
        insertRow(newPost).then(row=>resolve(row)).catch(err=>reject(err))
    })
}

export const update = (updPost,post_id)=>{
    return new Promise((resolve,reject)=>{
        updateRow(updPost,post_id).then(row=>resolve(row)).catch(err=>reject(err))
    })
}

export const remove = (post_id)=>{
    return new Promise((resolve,reject)=>{
        removeRow(post_id).then(row=>resolve(row)).catch(err=>reject(err))
    })
}
