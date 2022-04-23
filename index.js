const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})
const users = [
    { id: 1, name: 'salma', email: 'salma@gmail.com', phone: '04957549798' },
    { id: 2, name: 'rimu', email: 'rimu@gmail.com', phone: '04957549798' },
    { id: 3, name: 'fatema', email: 'fatema@gmail.com', phone: '04957549798' },
    { id: 4, name: 'priyanka', email: 'priyanka@gmail.com', phone: '04957549798' },
    { id: 5, name: 'laboni', email: 'laboni@gmail.com', phone: '04957549798' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)

})
app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})