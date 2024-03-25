import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonText } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { firestore } from '../firebaseConfig';

const Home: React.FC = () => {
    const [joke, updateJoke] = useState<{ setup: string, punchline: string }>({ setup: '', punchline: '' });

    useEffect(() => {
        const unsubscribe = firestore.collection('Joke').doc('4wD5zXUlcfMYPjNP0G5h').onSnapshot((doc: any) => {
            updateJoke({
                setup: doc.data().body[0].setup,
                punchline: doc.data().body[0].punchline
            });
        });

        return () => {
            unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
        };
    }, []);

    console.log(joke);

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonText>
                    <h1 className='ion-margin'>Welcome to the Homepage!</h1>
                    <h3 className='ion-margin'>Here's a complimentary dad joke:</h3>

                </IonText>
                <IonText color={'warning'}>
                    <p className='ion-margin'>{joke.setup}</p>
                    <p className='ion-text-center'>{joke.punchline}</p></IonText>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Home;