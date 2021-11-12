/*
BASE DE DATOS DEL CHATBOT PREPAS UAZ

La base de datos de la aplicación del chatbot de prepas uaz donde se establece
la conexión con la base de datos Mongo DB para el registro de las solicitudes
de mentorías por partes de los alumnos de las preparatorías de la UAZ.
*/

/* Creación del la conexión con la base de datos */
function conectarBD(){
  const { MongoClient } = require('mongodb');

  //uri para la conexión donde esocifica el usuario y la contraseña
  const uri = "mongodb+srv://admin-chatbot-uaz_115:<chatbotpassdatabase117>@chatbotdb.k0mzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  client.connect(err => {
    //const collection = client.db("test").collection("devices");
    // perform actions on the collection object
  client.close();
  });
}

/* Exportación de la función conectarBD*/
module.exports = {
  "conectarBD": conectarBD
}

