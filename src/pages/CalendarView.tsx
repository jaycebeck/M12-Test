import { IonButton, IonContent, IonDatetime, IonItem, IonPage } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import AddToDoButton from '../components/AddToDo';
import { useState } from 'react';
import './CalendarView.css'

const CalendarView: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleDateChange = (event: CustomEvent) => {
        setSelectedDate(event.detail.value);
    };
    const handleSubmit = () => {
        // Handle form submission here
        console.log('Selected Date:', selectedDate);
    };
    return (
        <IonPage>
            <Header />
            <IonItem className='calendar-container'><IonDatetime /></IonItem>
            <AddToDoButton />
            <Footer />
        </IonPage>
    );
};

export default CalendarView;
