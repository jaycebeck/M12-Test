import React, { useState } from 'react';
import { IonContent, IonPage, IonDatetime, IonInput, IonTextarea, IonButton } from '@ionic/react';
import Header from '../components/Header';

const MyForm: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleDateChange = (event: CustomEvent) => {
        setSelectedDate(event.detail.value);
    };

    const handleTitleChange = (event: CustomEvent) => {
        setTitle(event.detail.value);
    };

    const handleDescriptionChange = (event: CustomEvent) => {
        setDescription(event.detail.value);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Selected Date:', selectedDate);
        console.log('Title:', title);
        console.log('Description:', description);
    };

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonInput
                    placeholder="Title"
                    value={title}
                    onIonChange={handleTitleChange}
                />
                <IonTextarea
                    placeholder="Description"
                    value={description}
                    onIonChange={handleDescriptionChange}
                />
                <IonDatetime
                    value={selectedDate}
                    onIonChange={handleDateChange}
                />
                <IonButton fill='clear' onClick={handleSubmit}>
                    Submit
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default MyForm;