import * as admin from 'firebase-admin'


export class AuthFirestore{
    public getDB(): any{
        const serviceAccount = require("./appservices-3940f-firebase-adminsdk-qu9us-30ec9bb31f.json");

        if (admin.apps.length === 0) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
          }
        
        const db = admin.firestore()
        return db.collection('servicos')
        ;
    }
}