import { IonDatetime, IonPage } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CalendarView.css'
import { useState, useEffect } from 'react';
import { firestore, auth } from '../firebaseConfig';

const CalendarView: React.FC = () => {

    const [dates, setDates] = useState<{ date_to_do: string, due_date: string }[]>([]);

    useEffect(() => {
        const fetchDates = async () => {
            const datesRef = firestore.collection('Users').doc(auth.currentUser?.uid).collection('posts'); // Change 'dates' to your collection name
            const snapshot = await datesRef.get();
            const datesData = snapshot.docs.map(doc => ({
                date_to_do: doc.data().date_to_do,
                due_date: doc.data().due_date
            }));
            setDates(datesData);
        };

        fetchDates();
    }, []);

    const fixDateFormat = (date: string) => {
        const dateObj = new Date(date);
        const month = dateObj.getMonth().toString();
        const day = dateObj.getDate().toString();
        const year = dateObj.getFullYear().toString();
        const full = year + '-' + month + '-' + day;
        return full;
    }

    const formatData = (dates: { date_to_do: string, due_date: string }[]) => {
        const formattedDates: { date: string, textColor: string, backgroundColor: string }[] = [];
        dates.forEach(date => {
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

    const formattedDates1 = formatData(dates);
    console.log(formattedDates1);

    return (
        <IonPage>
            <Header />
            <IonDatetime highlightedDates={formatData(dates)} className='ion-margin' presentation='date' color={'primary'} readonly={true} />
            <Footer />
        </IonPage>
    );
};

export default CalendarView;
