import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
    res.send('server working')
})

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})