/*
INDEX DEL CHATBOT PREPAS UAZ

Indice de la aplicación del chatbot de prepas uaz donde se establece
la conexión con el webhook, la dirección a donde se van a enviar los 
intents a los que ingreso el usuario y asi com los metos POST Y GET 
de estos.
*/

/* Creación del webhook del chatbot */
const express = require('express');
const app = express();
const {WebhookClient} = require('dialogflow-fulfillment');
console.log('Webhook creado ...');

/* Creación de la conexión con la base de datos, llamando la
   función conectarbd delm archivo databse.js*/
const bd = require("./database");
bd.conectarBD();
console.log('Conexión con la base de datos establecida ...');

/*Modelos mongoDB */
const planteles = require('../modelos/plantel');
planteles.find({},(err,res)=>{
  console.log(res);
});



/* Método GET del chatbot*/
app.get('/', function (req, res) {
  res.send('CHATBOT PREPAS UAZ')
});


/* Método POST del chatbot, por el que se recibirán los mensajes 
enviados por el usuario
*/
app.post('/webhook', express.json(),function (req, res) {
  const agent = new WebhookClient({ request:req, response:res });
  //console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  //console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
  console.log('Mensaje: ' + JSON.stringify(req.body.queryText));


  function respuestaPlanteles(agent) {
    agent.add(`Listo!!!  Tu mensaje ya fue enviado al mentor que seleccionaste, 
               él se pondrá en contacto contigo para definir una cita con el. 
               Gracias por esperar`);
  }

  function respuestaSemestres(agent) {
    agent.add(`Listo!!!  Tu mensaje ya fue enviado al mentor que seleccionaste, él se pondrá en contacto contigo para definir una cita con el. Gracias por esperar`);
  }
  function respuestaMaterias(agent) {
    agent.add(`Listo!!!  Tu mensaje ya fue enviado al mentor que seleccionaste, 
               él se pondrá en contacto contigo para definir una cita con el. 
               Gracias por esperar`);
  }

  function respuestaMentores(agent) {
    agent.add(`Listo!!!  Tu mensaje ya fue enviado al mentor que seleccionaste, 
               él se pondrá en contacto contigo para definir una cita con el. 
               Gracias por esperar`);
  }

  function respuestaFinalMentores(agent) {
    agent.add(`Listo!!!  Tu mensaje ya fue enviado al mentor que seleccionaste, él se pondrá en contacto contigo para definir una cita con el. Gracias por esperar`);
  }

  let intentMap = new Map();

  //intentMap.set('Mentores', respuestaPlanteles);
  //intentMap.set('Eleccion de plantel', respuestaSemestres);
  //intentMap.set('Primer Semestre', respuestaMaterias);
  //intentMap.set('Segundo Semestre', respuestaMentores);
  //intentMap.set('Tercer Semestre', respuestaMentores);
  //intentMap.set('Cuarto Semestre', respuestaMentores);

  //QUINTO SEMESTRE
  //intentMap.set('Quinto Semestre Biologicas', respuestaMentores);
  //intentMap.set('Quinto Semestre Economico', respuestaMentores);
  //intentMap.set('Quinto Semestre Fisico', respuestaMentores);
  //intentMap.set('Quinto Semestre Sociales', respuestaMentores);

  //SEXTO SEMESTRE
  //intentMap.set('Sexto Semestre Biologicas', respuestaMentores);
  //intentMap.set('Sexto Semestre Economico', respuestaMentores);
  //intentMap.set('Sexto Semestre Fisico', respuestaMentores);
  //intentMap.set('Sexto Semestre Sociales', respuestaMentores);


  intentMap.set('Respuesta Final Mentores', respuestaFinalMentores);
  agent.handleRequest(intentMap);


});


/* Ejecución del webhook en el puerto 3000 */
app.listen(3000,()=>{
    console.log("Estamos ejecutando el servidor en el puerto " + 3000);   
});

