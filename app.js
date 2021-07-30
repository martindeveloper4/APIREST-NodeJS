const express = require('express');
const app = express();
const port = 4000;

// servir contenido estatico {Middlewares}
/*
app.use( express.static('public'));
*/

app.get('/',function(req,res){
    res.send('Home Page');
});


app.get('/hola-mundo',function(req,res){
    res.send('Hola mundo en su respectiva ruta');
});

app.get('*',function(req,res){
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});