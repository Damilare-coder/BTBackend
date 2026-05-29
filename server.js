require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to User API')
});

app.post('/register', (req, res) =>{
  const { name, email } = req.body;
  if ( !name || !email ) return res.status(400).json({ error: 'Missing fields' });
  // simulate DB save
  res.status(201).json({ message: 'Registered: ${name} ${email}'})
});

app.get('/user/:id', (req, res) =>{
  res.json({ id: req.params.id, name: 'Sample User'})
})

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`)
})

// app.use((req, res, next) => { //logs every request
//   console.log((`${req.method} ${req.url} - ${new Date()} `));
//   next(); //Pass to next handler (required)
// })

// app.post('/echo', (req, res) =>{
//   res.json({ echoed: req.body }) // req.body now available
// })

// app.get('/protected', (req, res) =>{
//   res.send('This was logged!');
// })

// app.get('/user/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   res.send(id)
// })

// app.get('/search', (req, res) => {
//   const search = req.query.search;
//   console.log(search);
//   res.send(search)
// })
