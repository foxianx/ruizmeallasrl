const { initializeApp } = require('firebase/app'); // Asegúrate de esta importación
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


// Configuración de Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


// Inicializar Firebase
const appFirebase = initializeApp(firebaseConfig); // Esto inicializa Firebase
const db = getFirestore(appFirebase); // Esto inicializa Firestore

// Configuración de Express
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el formulario de contacto
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await addDoc(collection(db, 'mensajes'), {
            name,
            email,
            message,
            timestamp: new Date()
        });
        res.status(200).send({ success: true, message: 'Mensaje enviado con éxito' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).send({ success: false, message: 'Hubo un error al enviar tu mensaje' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
