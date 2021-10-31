const express = require('express')
const router = express.Router()
const fb = require('firebase');




//-------------------------------------FIREBASE-----------------------------------
const initial = fb.initializeApp({
    apiKey: "AIzaSyCMQbFfM0ie6qYci6ZsHvgjqMPCi4W2cow",
    authDomain: "we-are-perpared.firebaseapp.com",
    databaseURL: "https://we-are-perpared-default-rtdb.firebaseio.com",
    projectId: "we-are-perpared",
    storageBucket: "we-are-perpared.appspot.com",
    messagingSenderId: "751226503797",
    appId: "1:751226503797:web:db9487957407fad5f02e3c"
});

var firebaseDB = fb.database();

var firebase_ref = firebaseDB.ref('/');
//------------------------------------------------------------------------------




//----------------------------------HTTP GET------------------------------------
router.get('/http_get', (req, res) => {
    res.send(req.query)
    firebase_ref.child('FloodMonitoringDevice').set(req.query);
})
//------------------------------------------------------------------------------



//---------------------------------HTTP POST------------------------------------
router.post('/insert', (req, res) => {
    console.log(req.body)

})
//------------------------------------------------------------------------------

module.exports = router