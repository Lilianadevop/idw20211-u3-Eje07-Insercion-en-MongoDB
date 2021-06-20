var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.conect('mongodb://localhost:27017/eje07');

var Nota = mongoose.model('Nota', schema, 'nota');

let Nota = new Nota({
    title: "Mi primer nota",
    author: "Liliana Gonzalez",
    comments: [{
        body: "Hola esta es una nueva nota ",
        date: new Date()
    }],
    date: new Date(),
    hidden: true,
    meta: {
        votes: 25,
        favs: 16
    }
});

nota.save(function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log('Se ha creado con exito');
    process.exit(0);
});