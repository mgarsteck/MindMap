import express from 'express'
import {pool, getNote, getNotes, createNote } from './db.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/todos', async (req, res) => {
    const todos = await getNotes()
    res.send(todos)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Error on server')
})

app.listen(8181, () => {
    console.log('Server running on port 8181')
})