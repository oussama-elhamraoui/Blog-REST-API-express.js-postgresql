import pool from '../db/db.js'

export async function  getRows(){
    const result = await pool.query("SELECT * FROM blog_posts")
    return result.rows
}

export async function getRowById(post_id){
    const result = await pool.query(`SELECT * FROM blog_posts WHERE id = ${post_id}`)
    return result.rows
}

export async function insertRow(post){
    const { title, content, author } = post;
    const queryText = `
      INSERT INTO blog_posts (title, content, author)
      VALUES ($1, $2, $3)
      RETURNING *;`; // Return the inserted row
    const values = [title, content, author];
    try {
        const result = await pool.query(queryText, values);
        console.log( result.rows[0])
        return result.rows[0]; // Ensure this is an object, not undefined
      } catch (error) {
        throw new Error('Database Insertion Error: ' + error.message);
      }
}

export async function updateRow(updPost,post_id){
    const { title, content, author } = updPost;
    const queryText = `
      UPDATE blog_posts SET title=$1,content=$2,author=$3 WHERE id=${post_id}
      RETURNING *;`; // Return the inserted row
    const values = [title, content, author];
    try {
        const result = await pool.query(queryText, values);
        console.log( result.rows[0])
        return result.rows[0]; // Ensure this is an object, not undefined
      } catch (error) {
        throw new Error('Database Insertion Error: ' + error.message);
      }
}

export async function removeRow(post_id){
    const queryText = `
      DELETE FROM blog_posts WHERE id=${post_id}
      RETURNING *;`; // Return the inserted row
    try {
        const result = await pool.query(queryText);
        console.log( result.rows[0])
        return result.rows[0]; // Ensure this is an object, not undefined
      } catch (error) {
        throw new Error('Database Insertion Error: ' + error.message);
      }
}