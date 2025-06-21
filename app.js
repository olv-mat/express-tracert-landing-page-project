const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Tracert - Software House')
})

app.listen(port, () => {
    console.log(`App runnig on port ${port}`)
})
