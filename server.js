import express from 'express'
import posts from './routes/posts.js'

const port = 8000

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/posts',posts)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})