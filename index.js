'use strict';
//doc  Servir des fichiers statiques dans Express: http://expressjs.com/fr/starter/static-files.html

//Hello word.
var express = require('express');
var app = express();

// REGLE ATTENTION : Le premier l'emporte (app).

app.listen(3000, function () {
  console.log("L'application ecoute le port 3000.");
});

//servir un le fichier index.html dans le dossier public.
//app.use(express.static('public'));

// utilise dans l'abrescence du dossier public. || http://localhost:3000/tata/plouc/
app.use("/tata/plouc/", express.static('public'));

//Récupère l'argument de la function envoyer.
// app.get('/', function (req, res) {
//   res.send('Salut tout le monde!');
// });

//Renvoyer un Code erreur.

// doc Comment puis-je gérer des réponses 404 ?: http://expressjs.com/fr/starter/faq.html

app.use(function(req, res, next) {
  res.status(404).send('Erreur page 404');
  console.log(res.status);
});