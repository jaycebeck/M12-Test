/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
//  https://firebase.google.com/docs/functions/typescript

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

exports.dailyFirestoreUpdate = functions.pubsub.schedule('every 24 hours').onRun(async () => {
    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/',
      params: {random: 'true'},
      headers: {
        'X-RapidAPI-Key': 'a39db15bb4msh16d62022bc1f74ap1c9dc6jsn153cd06696a6',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    try {
        // Make API request
        const response = await axios.request(options);

        // Process the response
        const data = response.data;

        const firestore = admin.firestore();
        const collectionRef = firestore.collection('WOD');

        collectionRef.add(data);

        console.log('Data updated in Firestore.');
        console.log('Data:', JSON.stringify(data));
        return null;
    } catch (error: string | any) {
        console.error('Error:', error.message);
        return null;
    }
});
