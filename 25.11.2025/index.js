const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.json( [
    { id: 1, name: 'Alice' , age: 30 },
    { id: 2, name: 'hani' , age: 25 },  
    { id: 3, name: 'abdu' , age: 23 },    
])}) ;


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});