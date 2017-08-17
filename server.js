const express = require('express');
const app = express();

app.use(express.static('./views'));

app.get('/', (req, res, next) =>{
  
});

app.listen(process.env.PORT | 3000, () =>{
  console.log('Listening on port ' + process.env.PORT | "Listening on port: " + 3000);
});