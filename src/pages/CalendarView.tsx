import { IonDatetime, IonItem, IonList, IonPage, IonText } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CalendarView.css'
import { useState, useEffect } from 'react';
import { firestore, auth } from '../firebaseConfig';

const CalendarView: React.FC = () => {

    const [totalDates, setTotalDates] = useState<{ date_to_do: string, due_date: string }[]>([]);

    useEffect(() => {
        const fetchDates = async () => {
            const datesRef = firestore.collection('Users').doc(auth.currentUser?.uid).collection('posts');
            const snapshot = await datesRef.get();
            const datesData = snapshot.docs.map(doc => ({
                date_to_do: doc.data().date_to_do,
                due_date: doc.data().due_date
            }));
            setTotalDates(datesData);
        };

        fetchDates();
    }, []);

    const fixDateFormat = (date: string) => {
        const dateObj = new Date(date);
        return dateObj.toISOString().split('T')[0];
    };

    const formatData = (dates_: { date_to_do: string, due_date: string }[]) => {
        const formattedDates: { date: string, textColor: string, backgroundColor: string }[] = [];
        dates_.forEach(date => {
            formattedDates.push({
                date: fixDateFormat(date.date_to_do),
                textColor: '#800080',
                backgroundColor: '#ffb640'
            });
            formattedDates.push({
                date: fixDateFormat(date.due_date),
                textColor: '#800080',
                backgroundColor: '#f24c36'
            });
        });
        return formattedDates;
    };

    const formattedDates1 = formatData(totalDates);
    console.log(formattedDates1);

    return (
        <IonPage>
            <Header />
            <IonList>
                <IonDatetime highlightedDates={formattedDates1} className="center" presentation='date' color={'primary'} readonly={true} />
                <IonText class='ion-text-center' color={'warning'}><h3>Todo Dates</h3></IonText>
                <IonText class='ion-text-center' color={'danger'}><h3>Due Dates</h3></IonText></IonList>
            <Footer />
        </IonPage >
    );
};

export default CalendarView;
