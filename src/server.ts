import app from './app';
import { initializeApp } from 'firebase/app';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const firebaseConfig = {
  apiKey: 'AIzaSyARpLDnCMPNCe1ASQXDf4H2keWodSUh7dA',
  authDomain: 'desafio-ivipcoin.firebaseapp.com',
  projectId: 'desafio-ivipcoin',
  storageBucket: 'desafio-ivipcoin.appspot.com',
  messagingSenderId: '909245436472',
  appId: '1:909245436472:web:71b4205031e63a3c2e8ccd',
  measurementId: 'G-941FE86V84',
};

export const firebaseApp = initializeApp(firebaseConfig);

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
