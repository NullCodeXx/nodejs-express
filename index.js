'use strict';
//doc  Servir des fichiers statiques dans Express: http://expressjs.com/fr/starter/static-files.html

//Hello word.
//Va chercher l'object.
var express = require('express');
//Utilise || instancy l'object.
var app = express();

// REGLE ATTENTION : Le premier l'emporte (app).
//Fait ecouter le port 3000.
app.listen(3000, function () {
  console.log("L'application ecoute le port 3000.");
});

//Servir le fichier index.html dans le dossier public.
//App.use(express.static('public'));

//Utilise dans l'abrescence du dossier public. || http://localhost:3000/tata/plouc/
app.use("/tata/plouc/", express.static('public'));

//Récupère l'argument de la function envoyer.
// app.get('/', function (req, res) {
//   res.send('Salut tout le monde!');
// });

//Renvoyer un Code erreur.

// doc Comment puis-je gérer des réponses 404 ?: http://expressjs.com/fr/starter/faq.html

app.use(function(req, res) { 
  res.status(404);
  res.sendFile(__dirname + "/public/404.html"); //__dirname est remplacer par /home/solo/...mondossiercourant.
});