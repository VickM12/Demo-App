const express = require('express');

const path= require('path');

const app = express();


app.use(express.static(__dirname + '/dist/Tour-of-Heroes'));

app.get('/*', function(req,res){
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);

});

app.listen(process.env.PORT || 8080)