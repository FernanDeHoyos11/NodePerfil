const express = require('express')
const ruta = express.Router();

ruta.get('/', function(req, res){ 
    res.render('main.ejs', {title: 'Mi WebSite'})

  });
 
  ruta.get('/perfil.ejs', function(req, res){ 
    res.render('perfil.ejs', {title: 'Mi WebSite'})

  });

  ruta.get('/semestre.ejs', function(req, res){ 
    res.render('semestre.ejs', {title: 'Mi WebSite'})

  });
 

module.exports = ruta;