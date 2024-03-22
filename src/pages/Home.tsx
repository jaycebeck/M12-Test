import { IonCard, IonContent, IonDatetime, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import { CapacitorCookies } from '@capacitor/core';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
        <IonText><h1>Home Page</h1></IonText>
      <Calendar />
    </IonPage>
  );
};

export default Home;
