import { IonCard, IonContent, IonDatetime, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent><IonText><h1>Home Page</h1></IonText></IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
